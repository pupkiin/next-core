import { apiGetAuthSession } from "@/api/api-functions";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";


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
