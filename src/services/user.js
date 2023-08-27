const itemName = 'userData';

export function getUser() {
  return JSON.parse(localStorage.getItem(itemName));
}

export function setUser(data) {
  return localStorage.setItem(itemName, JSON.stringify(data));
}

export function clearUser() {
  localStorage.removeItem(itemName);
}

export function toggleMenu() {
  let subMenu = document.getElementById('subMenu');
  subMenu.classList.toggle("open-menu");
}
