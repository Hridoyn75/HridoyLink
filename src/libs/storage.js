'use client'
export function setLocal(key, value) {
  const item = {
    value: value,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocal(key) {
  const itemString = localStorage.getItem(key);
  if (!itemString) {
    return null;
  }

  const item = JSON.parse(itemString);

  return item.value;
}
