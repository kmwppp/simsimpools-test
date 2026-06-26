/**
 * fetch-culture.mjs
 * 문화체육관광부 문화예술공연(통합) API 에서 행사 데이터를 받아
 * src/data/culture/events.data.ts 를 갱신한다.
 *
 * - 환경변수 CULTURE_API_KEY 가 없으면: 기존 데이터를 그대로 두고 종료(빌드 정상 진행).
 * - 있으면: API 호출 → 진행 중·예정 행사만 정규화 → events.data.ts 덮어쓰기.
 * - API 오류가 나도 빌드를 깨뜨리지 않도록 기존 데이터를 유지하고 경고만 출력.
 *
 * API: 문화공공데이터광장 CNV_060 (문화체육관광부_문화예술공연 통합)
 *      https://api.kcisa.kr/openapi/CNV_060/request
 * 출처 표기: 문화체육관광부 · 문화공공데이터광장
 *
 * 실행: CULTURE_API_KEY=발급키 node scripts/fetch-culture.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'src/data/culture/events.data.ts');

const API_KEY = process.env.CULTURE_API_KEY;
const ENDPOINT = 'https://api.kcisa.kr/openapi/CNV_060/request';
const TOTAL = 600; // 받아올 최대 건수 (진행 중·예정만 추려서 저장)
const TODAY = new Date().toISOString().split('T')[0];

// "20260708 ~ 20260709" → ['2026-07-08','2026-07-09']
function parsePeriod(s) {
  if (!s) return [null, null];
  const parts = String(s).split('~').map((x) => x.replace(/[^0-9]/g, '').trim());
  const toIso = (d) => (d && d.length >= 8 ? `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}` : null);
  const start = toIso(parts[0]);
  const end = toIso(parts[1]) || start;
  return [start, end];
}

function clean(s) {
  return s == null ? '' : String(s).trim();
}

// 이미지가 http 면 https 로 (사이트가 https → mixed content 방지)
function https(u) {
  const v = clean(u);
  if (!v) return undefined;
  return v.replace(/^http:\/\//i, 'https://');
}

function idFromUrl(url, i) {
  const m = clean(url).match(/pSeq=(\d+)/);
  return m ? `mcst-${m[1]}` : `evt-${i}`;
}

function normalize(item, i) {
  const title = clean(item.title);
  const [startDate, endDate] = parsePeriod(item.eventPeriod || item.period);
  if (!title || !startDate) return null;
  if (endDate < TODAY) return null; // 이미 끝난 행사 제외

  const out = {
    id: idFromUrl(item.url, i),
    title,
    place: clean(item.eventSite) || '장소 미정',
    startDate,
    endDate,
  };
  const price = clean(item.charge);
  const url = clean(item.url);
  const thumb = https(item.imageObject);
  if (price) out.price = price;
  if (url) out.url = url;
  if (thumb) out.thumbnail = thumb;
  return out;
}

function writeData(events) {
  const banner = `/**
 * events.data.ts — 문화 행사 데이터 (자동 생성됨: scripts/fetch-culture.mjs)
 * 출처: 문화체육관광부 · 문화공공데이터광장 (문화예술공연 통합, CNV_060)
 * 생성 시각: ${new Date().toISOString()}
 */
import type { CultureEvent } from '../../types/culture';

export const cultureEvents: CultureEvent[] = ${JSON.stringify(events, null, 2)};
`;
  fs.writeFileSync(OUT, banner, 'utf8');
}

async function main() {
  if (!API_KEY) {
    console.log('ℹ︎ CULTURE_API_KEY 없음 → 기존 데이터 유지 (events.data.ts 변경 없음)');
    return;
  }

  try {
    const url = `${ENDPOINT}?serviceKey=${encodeURIComponent(API_KEY)}&numOfRows=${TOTAL}&pageNo=1`;
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    if (json?.response?.header?.resultCode !== '0000') {
      throw new Error(`API resultMsg: ${json?.response?.header?.resultMsg ?? 'unknown'}`);
    }

    let items = json?.response?.body?.items?.item ?? [];
    if (!Array.isArray(items)) items = [items];

    const events = items
      .map(normalize)
      .filter(Boolean)
      .sort((a, b) => a.startDate.localeCompare(b.startDate));

    if (events.length === 0) throw new Error('정규화 결과 0건 — 응답 구조 확인 필요');

    writeData(events);
    console.log(`✓ 문화 데이터 갱신: 진행 중·예정 ${events.length}건 → ${OUT}`);
  } catch (err) {
    console.warn(`⚠︎ 문화 데이터 갱신 실패 (${err.message}) → 기존 데이터 유지`);
  }
}

main();
