import type { CultureEvent, MonthGroup } from '../../types/culture';
import { cultureEvents } from './events.data';

export const CULTURE_EVENTS = cultureEvents;

/** 빌드 시점 기준 날짜 (사전 렌더링이므로 재빌드할 때마다 갱신됨) */
const NOW = new Date();
const TODAY = NOW.toISOString().split('T')[0];

function sortByStart(a: CultureEvent, b: CultureEvent): number {
  return a.startDate.localeCompare(b.startDate);
}

/** 아직 끝나지 않은(진행 중 + 예정) 행사만 */
function notEnded(e: CultureEvent): boolean {
  return e.endDate >= TODAY;
}

/** 진행 중 여부 (시작 <= 오늘 <= 종료) */
export function isOngoing(e: CultureEvent): boolean {
  return e.startDate <= TODAY && TODAY <= e.endDate;
}

/** 'YYYY-MM' → '2026년 7월' */
export function monthLabel(key: string): string {
  const [y, m] = key.split('-');
  return `${y}년 ${Number(m)}월`;
}

/** 'YYYY-MM' 형식 검증 */
export function isValidMonth(key: string): boolean {
  return /^\d{4}-\d{2}$/.test(key);
}

/** 어떤 행사가 해당 월(key)에 열리는지 — 기간이 그 달과 겹치면 포함 */
function inMonth(e: CultureEvent, key: string): boolean {
  const monthStart = `${key}-01`;
  const monthEnd = `${key}-31`;
  return e.startDate <= monthEnd && e.endDate >= monthStart;
}

/** 진행 중·예정 전체 (시작일 순) */
export function getUpcoming(): CultureEvent[] {
  return CULTURE_EVENTS.filter(notEnded).sort(sortByStart);
}

/** 해당 월에 열리는 진행 중·예정 행사 */
export function getEventsByMonth(key: string): CultureEvent[] {
  return CULTURE_EVENTS.filter((e) => notEnded(e) && inMonth(e, key)).sort(sortByStart);
}

/** 노출할 월 범위 (이번 달부터 N개월) — 장기 상영 행사로 먼 미래 달이 생기는 것 방지 */
const MONTH_HORIZON = 6;

function nextMonth(ym: string): string {
  let [y, m] = ym.split('-').map(Number);
  m += 1;
  if (m > 12) {
    y += 1;
    m = 1;
  }
  return `${y}-${String(m).padStart(2, '0')}`;
}

/** 노출 대상 월 키 목록 (이번 달 ~ +N개월) */
export function getMonthWindow(): string[] {
  const out: string[] = [];
  let k = TODAY.slice(0, 7);
  for (let i = 0; i < MONTH_HORIZON; i++) {
    out.push(k);
    k = nextMonth(k);
  }
  return out;
}

/** 행사가 있는 월 목록 (key/label/count) — 이번 달부터 6개월, 행사 있는 달만 */
export function getMonths(): MonthGroup[] {
  return getMonthWindow()
    .map((key) => ({ key, label: monthLabel(key), count: getEventsByMonth(key).length }))
    .filter((m) => m.count > 0);
}

/** 허브 상단 하이라이트 (진행 중·예정 중 시작일 빠른 순) */
export function getHighlights(limit = 6): CultureEvent[] {
  return getUpcoming().slice(0, limit);
}

/** 전체 진행 중·예정 행사 수 */
export function getActiveCount(): number {
  return CULTURE_EVENTS.filter(notEnded).length;
}

/** "2026.06.05 – 08.30" 형태로 기간 표기 (당일이면 날짜 하나) */
export function formatPeriod(start: string, end: string): string {
  const fmt = (d: string) => d.replace(/-/g, '.');
  if (start === end) return fmt(start);
  const shortEnd = end.slice(0, 4) === start.slice(0, 4) ? end.slice(5).replace(/-/g, '.') : fmt(end);
  return `${fmt(start)} – ${shortEnd}`;
}
