/** 문화체육관광부 문화예술공연(통합) — 정규화된 단일 행사 */
export interface CultureEvent {
  /** url/제목 기반 고유 id */
  id: string;
  title: string;
  /** 장소명 (eventSite) */
  place: string;
  /** 시작일 YYYY-MM-DD */
  startDate: string;
  /** 종료일 YYYY-MM-DD */
  endDate: string;
  /** 관람료 (charge) */
  price?: string;
  /** 공식 상세 페이지 링크 */
  url?: string;
  /** 썸네일 이미지 URL (https) */
  thumbnail?: string;
}

/** 월별 묶음 (key: 'YYYY-MM') */
export interface MonthGroup {
  key: string;
  label: string;
  count: number;
}
