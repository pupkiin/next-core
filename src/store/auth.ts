import { makeAutoObservable } from "mobx";

// используется для проверки доступа страниц, когда пользователь не авторизован в системе
class AuthStore {
  authorized: Boolean = false; // изначально не авторизован

  constructor() {
    makeAutoObservable(this);
  }

  setAuth() {
    this.authorized = true;
  }

  remAuth() {
    this.authorized = false;
  }

  toggle() {
    // меняем на противоположное
    this.authorized = !this.authorized;
  }
}

const authStore = new AuthStore;
export default authStore;
