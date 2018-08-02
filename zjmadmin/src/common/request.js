import {baseUrl} from "./config";
import Vue from 'vue'

export function _get(url) {
  url = baseUrl + url;
  return Vue.http.get(url);
}

export function _post(url,data) {
  url = baseUrl + url;
  return Vue.http.post(url,data)
}
