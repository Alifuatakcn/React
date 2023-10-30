import { COUNTER_DOWN, COUNTER_UP } from "../types";
// Reducer a gönderilecek action nesnelerini create eden fonksiyonlar
export const counterUp = (val) => ({ type: COUNTER_UP, payload: val });
export const counterDown = (val) => ({ type: COUNTER_DOWN, payload: val });
