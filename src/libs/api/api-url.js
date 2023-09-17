import { LS_HOMEWORK_API } from "../constatnts/localStorage";

export function getHomeworkApi() {
  return window.localStorage.getItem(LS_HOMEWORK_API);
}


export function setHomeworkApi(value) {
  window.localStorage.setItem(LS_HOMEWORK_API, value);
}