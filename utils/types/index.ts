export type isPathMatchType = {
  home: boolean;
  projects: boolean;
  work: boolean;
};

export interface EventTarget {
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
}