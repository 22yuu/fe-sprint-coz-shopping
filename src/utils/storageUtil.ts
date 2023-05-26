export function readBookmarkFromLocalStorage() {
  const list = localStorage.getItem('bookmarkList');
  return list ? JSON.parse(list) : {};
}

export function setBookmarkLocalStorage(
  key: string,
  value: object,
  callback: (props: object) => void
): void {
  localStorage.setItem(key, JSON.stringify(value));
  callback({ ...value });
}
