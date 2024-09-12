declare module "locomotive-scroll" {
  export interface ILenisScrollToOptions {
    behavior?: "auto" | "smooth";
    top?: number;
    left?: number;
  }

  export interface ILocomotiveScrollOptions {
    lenisOptions?: any;
    modularInstance?: any;
    triggerRootMargin?: string;
    rafRootMargin?: string;
    autoResize?: boolean;
    autoStart?: boolean;
    scrollCallback?: () => void;
    initCustomTicker?: () => void;
    destroyCustomTicker?: () => void;
  }

  export type lenisTargetScrollTo = any;

  export default class LocomotiveScroll {
    rafPlaying: boolean;
    private lenisInstance;
    private coreInstance;
    private lenisOptions;
    private modularInstance?;
    private triggerRootMargin?;
    private rafRootMargin?;
    private rafInstance?;
    private autoResize?;
    private autoStart?;
    private ROInstance?;
    private scrollCallback;
    private initCustomTicker?;
    private destroyCustomTicker?;
    private _onRenderBind;
    private _onResizeBind;
    private _onScrollToBind;
    constructor({
      lenisOptions,
      modularInstance,
      triggerRootMargin,
      rafRootMargin,
      autoResize,
      autoStart,
      scrollCallback,
      initCustomTicker,
      destroyCustomTicker,
    }?: ILocomotiveScrollOptions);

    private _init;
    destroy(): void;
    private _bindEvents;
    private _unbindEvents;
    private _bindScrollToEvents;
    private _unbindScrollToEvents;
    private _onResize;
    private _onRender;
    private _onScrollTo;
    start(): void;
    stop(): void;
    removeScrollElements($oldContainer: HTMLElement): void;
    addScrollElements($newContainer: HTMLElement): void;
    resize(): void;
    scrollTo(target: lenisTargetScrollTo, options?: ILenisScrollToOptions): void;
    private _raf;
  }
}
