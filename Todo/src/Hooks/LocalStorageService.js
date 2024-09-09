const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

const get = (key, defaultValue) => {
  return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
}

export const LocalStorageService = {
  set,
  get,
}