export function readBookmarkFromLocalStorage() {
  const list = localStorage.getItem('bookmarkList');
  return list ? JSON.parse(list) : {};
}

export function setBookmarkLocalStorage(key, value, callback) {
  localStorage.setItem(key, JSON.stringify(value));
  callback({ ...value });
}
