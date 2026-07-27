export type BlogInteractiveValues = Record<string, string | number | boolean>;

export interface BlogInteractiveStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

/** SSR과 hydration 첫 렌더에서 공통으로 사용하는 저장소 독립 초기값. */
export function createInitialBlogInteractiveValues(): BlogInteractiveValues {
  return {};
}

export function blogInteractiveStorageKey(postId: string): string {
  return `simsimpools:blog-interactive:${postId}`;
}

export function readBlogInteractiveValues(
  storage: BlogInteractiveStorage,
  postId: string,
): BlogInteractiveValues {
  try {
    const raw = storage.getItem(blogInteractiveStorageKey(postId));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function writeBlogInteractiveValues(
  storage: BlogInteractiveStorage,
  postId: string,
  values: BlogInteractiveValues,
): void {
  storage.setItem(blogInteractiveStorageKey(postId), JSON.stringify(values));
}

export function clearBlogInteractiveValues(
  storage: BlogInteractiveStorage,
  postId: string,
): void {
  storage.removeItem(blogInteractiveStorageKey(postId));
}
