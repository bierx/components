const observerConfig = {
  rootMargin: '20px',
  threshold: 0.01
};

export class ViewportObserver {
  constructor(config: IntersectionObserverInit = observerConfig) {
    this.config = config;

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      return;
    }

    this.observe = (target: Element, callback: (entry: any) => void) => {
      const entry = { target };
      callback(entry);
    };

    this.unobserve = () => null;
  }

  config: IntersectionObserverInit | undefined;
  observer: IntersectionObserver | null = null;
  callbacks: Map<Element, (entry: IntersectionObserverEntry) => void> | null = null;

  checkElementIntersection = (entry: IntersectionObserverEntry) => {
    if (!entry.intersectionRatio) {
      return;
    }

    const callback = this.callbacks!.get(entry.target);

    if (callback) {
      callback(entry);
    }
  };

  intersectionChecker = (entries: IntersectionObserverEntry[]) => entries.forEach(this.checkElementIntersection);

  ensureObserverExists = () => {
    if (!this.observer) {
      this.observer = new IntersectionObserver(this.intersectionChecker, this.config);
    }

    if (!this.callbacks) {
      this.callbacks = new Map();
    }
  };

  observe = (target: Element, callback: (element: IntersectionObserverEntry) => void) => {
    this.ensureObserverExists();

    this.callbacks!.set(target, callback);
    this.observer!.observe(target);
  };

  unobserve = (target: Element) => {
    this.observer!.unobserve(target);
    this.callbacks!.delete(target);
  };
}