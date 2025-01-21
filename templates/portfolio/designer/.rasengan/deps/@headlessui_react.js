import {
  autoUpdate,
  detectOverflow,
  evaluate,
  flip,
  floor,
  getComputedStyle as getComputedStyle2,
  isElement,
  max,
  min,
  offset,
  round,
  shift,
  size,
  useFloating
} from "./chunk-6IHSTRTX.js";
import {
  clsx_default
} from "./chunk-KDVGFZWC.js";
import {
  require_react_dom
} from "./chunk-BC63SET5.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react2 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f22 = ref.current;
    return f22 === null || f22 === void 0 ? void 0 : f22(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react4 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react4.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react4.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled2 = false) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react4.useRef)(null);
  if (ref.current === null && !isDisabled2) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react4.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react4.default).useId();
  let [didSSR] = (0, import_react4.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react4.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react4.default)["useSyncExternalStore"] === "function") return (0, import_react4.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react4.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdsA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdsA) {
    setIdsA.forEach((fn) => fn(idB));
    return idB;
  }
  let setIdsB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdsB) {
    setIdsB.forEach((fn) => fn(idA));
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i15 = 1; i15 < args.length; i15++) {
    let props = args[i15];
    for (let key in props) {
      let a20 = result[key];
      let b9 = props[key];
      if (typeof a20 === "function" && typeof b9 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a20, b9);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a20 === "string" && typeof b9 === "string") result[key] = (0, clsx_default)(a20, b9);
      else if (key === "id" && a20 && b9) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a20, b9);
      else result[key] = b9 !== void 0 ? b9 : a20;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re5) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re5.test(brand.brand))) || re5.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re5) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re5.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react6 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react6.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e8) => {
    if (!isTransitionEvent(e8) || !e8.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e8.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e8.target, transitions);
      e8.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e8.propertyName);
  };
  let onTransitionEnd = (e8) => {
    if (!isTransitionEvent(e8) || !e8.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e8.target);
    if (!properties) return;
    properties.delete(e8.propertyName);
    if (properties.size === 0) {
      e8.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e8.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react8 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react8.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react8.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react8.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react9 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (typeof forwardedRef === "function") forwardedRef(value);
      else if (forwardedRef) forwardedRef.current = value;
    }
  }), [
    forwardedRef
  ]);
}

// node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useUpdateLayoutEffect.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react12 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react13 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useLoadMore.mjs
var import_react18 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/animation.mjs
var import_react_dom = __toESM(require_react_dom(), 1);
var import_react19 = __toESM(require_react(), 1);

// node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react21 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react21.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get) return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set) descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react22 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react22.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent, state) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x10, y9 = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x10 = clientX - rect.left;
        y9 = clientY - rect.top;
      } else {
        x10 = rect.width / 2;
        y9 = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x10;
    this.y = y9;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled: isDisabled2,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _8,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react22.useState)(false);
  let ref = (0, import_react22.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2 || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled2) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    if (shouldCancelOnPointerExit) cancel(e8);
  });
  let pressProps = (0, import_react22.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e8) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e8.nativeEvent, e8.currentTarget) && e8.currentTarget.contains(e8.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e8.target, e8.key)) e8.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e8.repeat) {
            state.target = e8.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e8, "keyboard");
            let originalTarget = e8.currentTarget;
            let pressUp = (e9) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e9, originalTarget) && !e9.repeat && originalTarget.contains(e9.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e9), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e8.stopPropagation();
          if (e8.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e8.key, e8.nativeEvent);
        } else if (e8.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e8) {
        if (e8 && !e8.currentTarget.contains(e8.target)) return;
        if (e8 && e8.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled2) e8.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e8.nativeEvent))) {
            if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
            let stopPressStart = triggerPressStart(e8, "virtual");
            let stopPressUp = triggerPressUp(e8, "virtual");
            let stopPressEnd = triggerPressEnd(e8, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation) e8.stopPropagation();
        }
      }
    };
    let onKeyUp = (e8) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e8, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e8.target, e8.key)) e8.preventDefault();
        let target = e8.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e8.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e8[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e8[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e8, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e8.key);
      } else if (e8.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e8) => {
        if (e8.button !== 0 || !e8.currentTarget.contains(e8.target)) return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e8.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e8.currentTarget)) e8.preventDefault();
        state.pointerType = e8.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e8.pointerId;
          state.target = e8.currentTarget;
          if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e8, state.pointerType);
          let target = e8.target;
          if ("releasePointerCapture" in target) target.releasePointerCapture(e8.pointerId);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseDown = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (e8.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e8.currentTarget)) e8.preventDefault();
          e8.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e8) => {
        if (!e8.currentTarget.contains(e8.target) || state.pointerType === "virtual") return;
        if (e8.button === 0) triggerPressUp(e8, state.pointerType || e8.pointerType);
      };
      pressProps2.onPointerEnter = (e8) => {
        if (e8.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = true;
          triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType);
        }
      };
      pressProps2.onPointerLeave = (e8) => {
        if (e8.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
          cancelOnPointerExit(e8);
        }
      };
      let onPointerUp = (e8) => {
        if (e8.pointerId === state.activePointerId && state.isPressed && e8.button === 0 && state.target) {
          if (state.target.contains(e8.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
          if ("ontouchend" in state.target && e8.pointerType !== "mouse") addGlobalListener(state.target, "touchend", onTouchEnd, {
            once: true
          });
        }
      };
      let onTouchEnd = (e8) => {
        if ($f6c31cce2adf654f$var$shouldPreventDefaultUp(e8.currentTarget)) e8.preventDefault();
      };
      let onPointerCancel = (e8) => {
        cancel(e8);
      };
      pressProps2.onDragStart = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        cancel(e8);
      };
    } else {
      pressProps2.onMouseDown = (e8) => {
        if (e8.button !== 0 || !e8.currentTarget.contains(e8.target)) return;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultDown(e8.currentTarget)) e8.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e8.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e8.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e8.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
        let shouldStopPropagation = triggerPressStart(e8, state.pointerType);
        if (shouldStopPropagation) e8.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e8, state.pointerType);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseLeave = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e8, state.pointerType, false);
          cancelOnPointerExit(e8);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseUp = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (!state.ignoreEmulatedMouseEvents && e8.button === 0) triggerPressUp(e8, state.pointerType || "mouse");
      };
      let onMouseUp = (e8) => {
        if (e8.button !== 0) return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e8, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e8.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e8.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
        if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
        if (shouldStopPropagation) e8.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (!state.isPressed) {
          e8.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e8.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e8.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType, false);
          cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e8));
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onTouchEnd = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (!state.isPressed) {
          e8.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e8.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e8.currentTarget) && state.pointerType != null) {
          triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType, false);
        if (shouldStopPropagation) e8.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        e8.stopPropagation();
        if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e8));
      };
      let onScroll = (e8) => {
        if (state.isPressed && e8.target.contains(state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        cancel(e8);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled2,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0, import_react22.useEffect)(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i15 = 0; i15 < changedTouches.length; i15++) {
    const touch = changedTouches[i15];
    if (touch.identifier === pointerId) return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e8) {
  let clientX = 0;
  let clientY = 0;
  if (e8.targetTouches && e8.targetTouches.length === 1) {
    clientX = e8.targetTouches[0].clientX;
    clientY = e8.targetTouches[0].clientY;
  }
  return {
    currentTarget: target,
    shiftKey: e8.shiftKey,
    ctrlKey: e8.ctrlKey,
    metaKey: e8.metaKey,
    altKey: e8.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$createEvent(target, e8) {
  let clientX = e8.clientX;
  let clientY = e8.clientY;
  return {
    currentTarget: target,
    shiftKey: e8.shiftKey,
    ctrlKey: e8.ctrlKey,
    metaKey: e8.metaKey,
    altKey: e8.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0) offsetX = point.width / 2;
  else if (point.radiusX !== void 0) offsetX = point.radiusX;
  if (point.height !== void 0) offsetY = point.height / 2;
  else if (point.radiusY !== void 0) offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a20, b9) {
  if (a20.left > b9.right || b9.left > a20.right) return false;
  if (a20.top > b9.bottom || b9.top > a20.bottom) return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefaultDown(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultUp(target) {
  if (target instanceof HTMLInputElement) return false;
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  return $f6c31cce2adf654f$var$shouldPreventDefaultUp(target);
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/Pressable.mjs
var import_react23 = __toESM(require_react(), 1);
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = (0, import_react23.default).forwardRef(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    ...props,
    ref
  });
  let child = (0, import_react23.default).Children.only(children);
  return (0, import_react23.default).cloneElement(
    child,
    // @ts-ignore
    {
      ref,
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(child.props, pressProps)
    }
  );
});

// node_modules/@react-aria/interactions/dist/PressResponder.mjs
var import_react24 = __toESM(require_react(), 1);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = (0, import_react24.default).forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react24.useRef)(false);
  let prevContext = (0, import_react24.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
  let context = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(prevContext || {}, {
    ...props,
    ref,
    register() {
      isRegistered.current = true;
      if (prevContext) prevContext.register();
    }
  });
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(prevContext, ref);
  (0, import_react24.useEffect)(() => {
    if (!isRegistered.current) {
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
      isRegistered.current = true;
    }
  }, []);
  return (0, import_react24.default).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react25 = __toESM(require_react(), 1);
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react25.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e8);
  });
  return (0, import_react25.useCallback)((e8) => {
    if (e8.target instanceof HTMLButtonElement || e8.target instanceof HTMLInputElement || e8.target instanceof HTMLTextAreaElement || e8.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e8.target;
      let onBlurHandler = (e9) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e9));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react26 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled: isDisabled2, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react26.useCallback)((e8) => {
    if (e8.target === e8.currentTarget) {
      if (onBlurProp) onBlurProp(e8);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react26.useCallback)((e8) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
    if (e8.target === e8.currentTarget && ownerDocument.activeElement === e8.target) {
      if (onFocusProp) onFocusProp(e8);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e8);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled2 && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled2 && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react27 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e8) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e8);
}
function $507fabe10e71c6fb$var$isValidKey(e8) {
  return !(e8.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e8.altKey || e8.ctrlKey || e8.key === "Control" || e8.key === "Shift" || e8.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e8) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e8)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e8);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e8) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e8.type === "mousedown" || e8.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e8);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e8) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e8)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e8) {
  if (e8.target === window || e8.target === document) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e8);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e8) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e8 === null || e8 === void 0 ? void 0 : e8.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e8 === null || e8 === void 0 ? void 0 : (_e_target = e8.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e8 === null || e8 === void 0 ? void 0 : e8.target) instanceof IHTMLTextAreaElement || (e8 === null || e8 === void 0 ? void 0 : e8.target) instanceof IHTMLElement && (e8 === null || e8 === void 0 ? void 0 : e8.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e8 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e8.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react27.useEffect)(() => {
    let handler = (modality, e8) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e8)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react28 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled: isDisabled2, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react28.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react28.useCallback)((e8) => {
    if (state.current.isFocusWithin && !e8.currentTarget.contains(e8.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin) onBlurWithin(e8);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react28.useCallback)((e8) => {
    if (!state.current.isFocusWithin && document.activeElement === e8.target) {
      if (onFocusWithin) onFocusWithin(e8);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e8);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled2) return {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react29 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e8) {
  if (e8.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") return;
  if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled: isDisabled2 } = props;
  let [isHovered, setHovered] = (0, import_react29.useState)(false);
  let state = (0, import_react29.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react29.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = (0, import_react29.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled2 || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered) return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e8) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e8.pointerType === "mouse") return;
        triggerHoverStart(e8, e8.pointerType);
      };
      hoverProps2.onPointerLeave = (e8) => {
        if (!isDisabled2 && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, e8.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e8) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e8, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e8) => {
        if (!isDisabled2 && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled2,
    state
  ]);
  (0, import_react29.useEffect)(() => {
    if (isDisabled2) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled2
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useMove.mjs
var import_react31 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useScrollWheel.mjs
var import_react32 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react33 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/FocusScope.mjs
var import_react34 = __toESM(require_react(), 1);
var $9bf71ea28793e738$var$FocusContext = (0, import_react34.default).createContext(null);
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])'
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => node.contains(element));
}
var $9bf71ea28793e738$var$Tree = class _$9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode) return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    if (!node) return;
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new _$9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
};
var $9bf71ea28793e738$var$TreeNode = class {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react35 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react35.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react35.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react35.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react35.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react35.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@react-aria/focus/dist/FocusRing.mjs
var import_react36 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/useFocusable.mjs
var import_react37 = __toESM(require_react(), 1);
var $e6afbd83fe6ebbd2$var$FocusableContext = (0, import_react37.default).createContext(null);
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = (0, import_react37.default).forwardRef(function FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let objRef = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let context = {
    ...otherProps,
    ref: objRef
  };
  return (0, import_react37.default).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var import_react38 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/button/button.js
var import_react46 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t11, e8, n13) => e8 in t11 ? i(t11, e8, { enumerable: true, configurable: true, writable: true, value: n13 }) : t11[e8] = n13;
var r = (t11, e8, n13) => (d(t11, typeof e8 != "symbol" ? e8 + "" : e8, n13), n13);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e8) {
    this.current !== e8 && (this.handoffState = "pending", this.currentId = 0, this.current = e8);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function u(r17) {
  return s.isServer ? null : r17 instanceof Node ? r17.ownerDocument : r17 != null && r17.hasOwnProperty("current") && r17.current instanceof Node ? r17.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react39 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e8) {
  typeof queueMicrotask == "function" ? queueMicrotask(e8) : Promise.resolve().then(e8).catch((o17) => setTimeout(() => {
    throw o17;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n13 = [], r17 = { addEventListener(e8, t11, s13, a20) {
    return e8.addEventListener(t11, s13, a20), r17.add(() => e8.removeEventListener(t11, s13, a20));
  }, requestAnimationFrame(...e8) {
    let t11 = requestAnimationFrame(...e8);
    return r17.add(() => cancelAnimationFrame(t11));
  }, nextFrame(...e8) {
    return r17.requestAnimationFrame(() => r17.requestAnimationFrame(...e8));
  }, setTimeout(...e8) {
    let t11 = setTimeout(...e8);
    return r17.add(() => clearTimeout(t11));
  }, microTask(...e8) {
    let t11 = { current: true };
    return t(() => {
      t11.current && e8[0]();
    }), r17.add(() => {
      t11.current = false;
    });
  }, style(e8, t11, s13) {
    let a20 = e8.style.getPropertyValue(t11);
    return Object.assign(e8.style, { [t11]: s13 }), this.add(() => {
      Object.assign(e8.style, { [t11]: a20 });
    });
  }, group(e8) {
    let t11 = o2();
    return e8(t11), this.add(() => t11.dispose());
  }, add(e8) {
    return n13.includes(e8) || n13.push(e8), () => {
      let t11 = n13.indexOf(e8);
      if (t11 >= 0) for (let s13 of n13.splice(t11, 1)) s13();
    };
  }, dispose() {
    for (let e8 of n13.splice(0)) e8();
  } };
  return r17;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e8] = (0, import_react39.useState)(o2);
  return (0, import_react39.useEffect)(() => () => e8.dispose(), [e8]), e8;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react42 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react41 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react40 = __toESM(require_react(), 1);
var n = (e8, t11) => {
  s.isServer ? (0, import_react40.useEffect)(e8, t11) : (0, import_react40.useLayoutEffect)(e8, t11);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e8) {
  let r17 = (0, import_react41.useRef)(e8);
  return n(() => {
    r17.current = e8;
  }, [e8]), r17;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t11) {
  let e8 = s3(t11);
  return import_react42.default.useCallback((...r17) => e8.current(...r17), [e8]);
};

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e8) {
  let t11 = e8.width / 2, n13 = e8.height / 2;
  return { top: e8.clientY - n13, right: e8.clientX + t11, bottom: e8.clientY + n13, left: e8.clientX - t11 };
}
function P(e8, t11) {
  return !(!e8 || !t11 || e8.right < t11.left || e8.left > t11.right || e8.bottom < t11.top || e8.top > t11.bottom);
}
function w({ disabled: e8 = false } = {}) {
  let t11 = (0, import_react43.useRef)(null), [n13, l14] = (0, import_react43.useState)(false), r17 = p(), o17 = o4(() => {
    t11.current = null, l14(false), r17.dispose();
  }), f22 = o4((s13) => {
    if (r17.dispose(), t11.current === null) {
      t11.current = s13.currentTarget, l14(true);
      {
        let i15 = u(s13.currentTarget);
        r17.addEventListener(i15, "pointerup", o17, false), r17.addEventListener(i15, "pointermove", (c15) => {
          if (t11.current) {
            let p6 = E(c15);
            l14(P(p6, t11.current.getBoundingClientRect()));
          }
        }, false), r17.addEventListener(i15, "pointercancel", o17, false);
      }
    }
  });
  return { pressed: n13, pressProps: e8 ? {} : { onPointerDown: f22, onPointerUp: o17, onClick: o17 } };
}

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react44 = __toESM(require_react(), 1);
var e = (0, import_react44.createContext)(void 0);
function a3() {
  return (0, import_react44.useContext)(e);
}
function l({ value: t11, children: o17 }) {
  return import_react44.default.createElement(e.Provider, { value: t11 }, o17);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react45 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r17) {
  return Array.from(new Set(r17.flatMap((n13) => typeof n13 == "string" ? n13.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r17, n13, ...a20) {
  if (r17 in n13) {
    let e8 = n13[r17];
    return typeof e8 == "function" ? e8(...a20) : e8;
  }
  let t11 = new Error(`Tried to handle "${r17}" but there is no handler defined. Only defined handlers are: ${Object.keys(n13).map((e8) => `"${e8}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t11, u2), t11;
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((a20) => (a20[a20.None = 0] = "None", a20[a20.RenderStrategy = 1] = "RenderStrategy", a20[a20.Static = 2] = "Static", a20))(O || {});
var A = ((e8) => (e8[e8.Unmount = 0] = "Unmount", e8[e8.Hidden = 1] = "Hidden", e8))(A || {});
function L() {
  let n13 = U();
  return (0, import_react45.useCallback)((r17) => C({ mergeRefs: n13, ...r17 }), [n13]);
}
function C({ ourProps: n13, theirProps: r17, slot: e8, defaultTag: a20, features: s13, visible: t11 = true, name: l14, mergeRefs: i15 }) {
  i15 = i15 != null ? i15 : $;
  let o17 = P2(r17, n13);
  if (t11) return F(o17, e8, a20, l14, i15);
  let y9 = s13 != null ? s13 : 0;
  if (y9 & 2) {
    let { static: f22 = false, ...u17 } = o17;
    if (f22) return F(u17, e8, a20, l14, i15);
  }
  if (y9 & 1) {
    let { unmount: f22 = true, ...u17 } = o17;
    return u2(f22 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F({ ...u17, hidden: true, style: { display: "none" } }, e8, a20, l14, i15);
    } });
  }
  return F(o17, e8, a20, l14, i15);
}
function F(n13, r17 = {}, e8, a20, s13) {
  let { as: t11 = e8, children: l14, refName: i15 = "ref", ...o17 } = h(n13, ["unmount", "static"]), y9 = n13.ref !== void 0 ? { [i15]: n13.ref } : {}, f22 = typeof l14 == "function" ? l14(r17) : l14;
  "className" in o17 && o17.className && typeof o17.className == "function" && (o17.className = o17.className(r17)), o17["aria-labelledby"] && o17["aria-labelledby"] === o17.id && (o17["aria-labelledby"] = void 0);
  let u17 = {};
  if (r17) {
    let d13 = false, p6 = [];
    for (let [c15, T10] of Object.entries(r17)) typeof T10 == "boolean" && (d13 = true), T10 === true && p6.push(c15.replace(/([A-Z])/g, (g6) => `-${g6.toLowerCase()}`));
    if (d13) {
      u17["data-headlessui-state"] = p6.join(" ");
      for (let c15 of p6) u17[`data-${c15}`] = "";
    }
  }
  if (t11 === import_react45.Fragment && (Object.keys(m2(o17)).length > 0 || Object.keys(m2(u17)).length > 0)) if (!(0, import_react45.isValidElement)(f22) || Array.isArray(f22) && f22.length > 1) {
    if (Object.keys(m2(o17)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a20} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m2(o17)).concat(Object.keys(m2(u17))).map((d13) => `  - ${d13}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d13) => `  - ${d13}`).join(`
`)].join(`
`));
  } else {
    let d13 = f22.props, p6 = d13 == null ? void 0 : d13.className, c15 = typeof p6 == "function" ? (...R9) => t3(p6(...R9), o17.className) : t3(p6, o17.className), T10 = c15 ? { className: c15 } : {}, g6 = P2(f22.props, m2(h(o17, ["ref"])));
    for (let R9 in u17) R9 in g6 && delete u17[R9];
    return (0, import_react45.cloneElement)(f22, Object.assign({}, g6, u17, y9, { ref: s13(H(f22), y9.ref) }, T10));
  }
  return (0, import_react45.createElement)(t11, Object.assign({}, h(o17, ["ref"]), t11 !== import_react45.Fragment && y9, t11 !== import_react45.Fragment && u17), f22);
}
function U() {
  let n13 = (0, import_react45.useRef)([]), r17 = (0, import_react45.useCallback)((e8) => {
    for (let a20 of n13.current) a20 != null && (typeof a20 == "function" ? a20(e8) : a20.current = e8);
  }, []);
  return (...e8) => {
    if (!e8.every((a20) => a20 == null)) return n13.current = e8, r17;
  };
}
function $(...n13) {
  return n13.every((r17) => r17 == null) ? void 0 : (r17) => {
    for (let e8 of n13) e8 != null && (typeof e8 == "function" ? e8(r17) : e8.current = r17);
  };
}
function P2(...n13) {
  var a20;
  if (n13.length === 0) return {};
  if (n13.length === 1) return n13[0];
  let r17 = {}, e8 = {};
  for (let s13 of n13) for (let t11 in s13) t11.startsWith("on") && typeof s13[t11] == "function" ? ((a20 = e8[t11]) != null || (e8[t11] = []), e8[t11].push(s13[t11])) : r17[t11] = s13[t11];
  if (r17.disabled || r17["aria-disabled"]) for (let s13 in e8) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s13) && (e8[s13] = [(t11) => {
    var l14;
    return (l14 = t11 == null ? void 0 : t11.preventDefault) == null ? void 0 : l14.call(t11);
  }]);
  for (let s13 in e8) Object.assign(r17, { [s13](t11, ...l14) {
    let i15 = e8[s13];
    for (let o17 of i15) {
      if ((t11 instanceof Event || (t11 == null ? void 0 : t11.nativeEvent) instanceof Event) && t11.defaultPrevented) return;
      o17(t11, ...l14);
    }
  } });
  return r17;
}
function _(...n13) {
  var a20;
  if (n13.length === 0) return {};
  if (n13.length === 1) return n13[0];
  let r17 = {}, e8 = {};
  for (let s13 of n13) for (let t11 in s13) t11.startsWith("on") && typeof s13[t11] == "function" ? ((a20 = e8[t11]) != null || (e8[t11] = []), e8[t11].push(s13[t11])) : r17[t11] = s13[t11];
  for (let s13 in e8) Object.assign(r17, { [s13](...t11) {
    let l14 = e8[s13];
    for (let i15 of l14) i15 == null || i15(...t11);
  } });
  return r17;
}
function K(n13) {
  var r17;
  return Object.assign((0, import_react45.forwardRef)(n13), { displayName: (r17 = n13.displayName) != null ? r17 : n13.name });
}
function m2(n13) {
  let r17 = Object.assign({}, n13);
  for (let e8 in r17) r17[e8] === void 0 && delete r17[e8];
  return r17;
}
function h(n13, r17 = []) {
  let e8 = Object.assign({}, n13);
  for (let a20 of r17) a20 in e8 && delete e8[a20];
  return e8;
}
function H(n13) {
  return import_react45.default.version.split(".")[0] >= "19" ? n13.props.ref : n13.ref;
}

// node_modules/@headlessui/react/dist/components/button/button.js
var R = "button";
function v2(a20, u17) {
  var p6;
  let l14 = a3(), { disabled: e8 = l14 || false, autoFocus: t11 = false, ...o17 } = a20, { isFocusVisible: r17, focusProps: i15 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t11 }), { isHovered: s13, hoverProps: T10 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: n13, pressProps: d13 } = w({ disabled: e8 }), f22 = _({ ref: u17, type: (p6 = o17.type) != null ? p6 : "button", disabled: e8 || void 0, autoFocus: t11 }, i15, T10, d13), m10 = (0, import_react46.useMemo)(() => ({ disabled: e8, hover: s13, focus: r17, active: n13, autofocus: t11 }), [e8, s13, r17, n13, t11]);
  return L()({ ourProps: f22, theirProps: o17, slot: m10, defaultTag: R, name: "Button" });
}
var H2 = K(v2);

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var import_react55 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react47 = __toESM(require_react(), 1);
function T(l14, r17, c15) {
  let [i15, s13] = (0, import_react47.useState)(c15), e8 = l14 !== void 0, t11 = (0, import_react47.useRef)(e8), u17 = (0, import_react47.useRef)(false), d13 = (0, import_react47.useRef)(false);
  return e8 && !t11.current && !u17.current ? (u17.current = true, t11.current = e8, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e8 && t11.current && !d13.current && (d13.current = true, t11.current = e8, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e8 ? l14 : i15, o4((n13) => (e8 || s13(n13), r17 == null ? void 0 : r17(n13)))];
}

// node_modules/@headlessui/react/dist/hooks/use-default-value.js
var import_react48 = __toESM(require_react(), 1);
function l2(e8) {
  let [t11] = (0, import_react48.useState)(e8);
  return t11;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react49 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var import_react50 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/utils/form.js
function e2(i15 = {}, s13 = null, t11 = []) {
  for (let [r17, n13] of Object.entries(i15)) o6(t11, f3(s13, r17), n13);
  return t11;
}
function f3(i15, s13) {
  return i15 ? i15 + "[" + s13 + "]" : s13;
}
function o6(i15, s13, t11) {
  if (Array.isArray(t11)) for (let [r17, n13] of t11.entries()) o6(i15, f3(s13, r17.toString()), n13);
  else t11 instanceof Date ? i15.push([s13, t11.toISOString()]) : typeof t11 == "boolean" ? i15.push([s13, t11 ? "1" : "0"]) : typeof t11 == "string" ? i15.push([s13, t11]) : typeof t11 == "number" ? i15.push([s13, `${t11}`]) : t11 == null ? i15.push([s13, ""]) : e2(t11, s13, i15);
}
function p2(i15) {
  var t11, r17;
  let s13 = (t11 = i15 == null ? void 0 : i15.form) != null ? t11 : i15.closest("form");
  if (s13) {
    for (let n13 of s13.elements) if (n13 !== i15 && (n13.tagName === "INPUT" && n13.type === "submit" || n13.tagName === "BUTTON" && n13.type === "submit" || n13.nodeName === "INPUT" && n13.type === "image")) {
      n13.click();
      return;
    }
    (r17 = s13.requestSubmit) == null || r17.call(s13);
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "span";
var s4 = ((e8) => (e8[e8.None = 1] = "None", e8[e8.Focusable = 2] = "Focusable", e8[e8.Hidden = 4] = "Hidden", e8))(s4 || {});
function l3(t11, r17) {
  var n13;
  let { features: d13 = 1, ...e8 } = t11, o17 = { ref: r17, "aria-hidden": (d13 & 2) === 2 ? true : (n13 = e8["aria-hidden"]) != null ? n13 : void 0, hidden: (d13 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d13 & 4) === 4 && (d13 & 2) !== 2 && { display: "none" } } };
  return L()({ ourProps: o17, theirProps: e8, slot: {}, defaultTag: a4, name: "Hidden" });
}
var f4 = K(l3);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var f5 = (0, import_react50.createContext)(null);
function W(t11) {
  let [e8, r17] = (0, import_react50.useState)(null);
  return import_react50.default.createElement(f5.Provider, { value: { target: e8 } }, t11.children, import_react50.default.createElement(f4, { features: s4.Hidden, ref: r17 }));
}
function c2({ children: t11 }) {
  let e8 = (0, import_react50.useContext)(f5);
  if (!e8) return import_react50.default.createElement(import_react50.default.Fragment, null, t11);
  let { target: r17 } = e8;
  return r17 ? (0, import_react_dom2.createPortal)(import_react50.default.createElement(import_react50.default.Fragment, null, t11), r17) : null;
}
function j2({ data: t11, form: e8, disabled: r17, onReset: n13, overrides: F6 }) {
  let [i15, a20] = (0, import_react50.useState)(null), p6 = p();
  return (0, import_react50.useEffect)(() => {
    if (n13 && i15) return p6.addEventListener(i15, "reset", n13);
  }, [i15, e8, n13]), import_react50.default.createElement(c2, null, import_react50.default.createElement(C2, { setForm: a20, formId: e8 }), e2(t11).map(([s13, v4]) => import_react50.default.createElement(f4, { features: s4.Hidden, ...m2({ key: s13, as: "input", type: "hidden", hidden: true, readOnly: true, form: e8, disabled: r17, name: s13, value: v4, ...F6 }) })));
}
function C2({ setForm: t11, formId: e8 }) {
  return (0, import_react50.useEffect)(() => {
    if (e8) {
      let r17 = document.getElementById(e8);
      r17 && t11(r17);
    }
  }, [t11, e8]), e8 ? null : import_react50.default.createElement(f4, { features: s4.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r17) => {
    if (!r17) return;
    let n13 = r17.closest("form");
    n13 && t11(n13);
  } });
}

// node_modules/@headlessui/react/dist/internal/id.js
var import_react51 = __toESM(require_react(), 1);
var e3 = (0, import_react51.createContext)(void 0);
function u5() {
  return (0, import_react51.useContext)(e3);
}
function f6({ id: t11, children: r17 }) {
  return import_react51.default.createElement(e3.Provider, { value: t11 }, r17);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r4(n13) {
  let e8 = n13.parentElement, l14 = null;
  for (; e8 && !(e8 instanceof HTMLFieldSetElement); ) e8 instanceof HTMLLegendElement && (l14 = e8), e8 = e8.parentElement;
  let t11 = (e8 == null ? void 0 : e8.getAttribute("disabled")) === "";
  return t11 && i4(l14) ? false : t11;
}
function i4(n13) {
  if (!n13) return false;
  let e8 = n13.previousElementSibling;
  for (; e8 !== null; ) {
    if (e8 instanceof HTMLLegendElement) return false;
    e8 = e8.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react53 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react52 = __toESM(require_react(), 1);
var u6 = Symbol();
function T2(t11, n13 = true) {
  return Object.assign(t11, { [u6]: n13 });
}
function y(...t11) {
  let n13 = (0, import_react52.useRef)(t11);
  (0, import_react52.useEffect)(() => {
    n13.current = t11;
  }, [t11]);
  let c15 = o4((e8) => {
    for (let o17 of n13.current) o17 != null && (typeof o17 == "function" ? o17(e8) : o17.current = e8);
  });
  return t11.every((e8) => e8 == null || (e8 == null ? void 0 : e8[u6])) ? void 0 : c15;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a5 = (0, import_react53.createContext)(null);
a5.displayName = "DescriptionContext";
function f7() {
  let r17 = (0, import_react53.useContext)(a5);
  if (r17 === null) {
    let e8 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e8, f7), e8;
  }
  return r17;
}
function U2() {
  var r17, e8;
  return (e8 = (r17 = (0, import_react53.useContext)(a5)) == null ? void 0 : r17.value) != null ? e8 : void 0;
}
function w3() {
  let [r17, e8] = (0, import_react53.useState)([]);
  return [r17.length > 0 ? r17.join(" ") : void 0, (0, import_react53.useMemo)(() => function(t11) {
    let i15 = o4((n13) => (e8((s13) => [...s13, n13]), () => e8((s13) => {
      let o17 = s13.slice(), p6 = o17.indexOf(n13);
      return p6 !== -1 && o17.splice(p6, 1), o17;
    }))), l14 = (0, import_react53.useMemo)(() => ({ register: i15, slot: t11.slot, name: t11.name, props: t11.props, value: t11.value }), [i15, t11.slot, t11.name, t11.props, t11.value]);
    return import_react53.default.createElement(a5.Provider, { value: l14 }, t11.children);
  }, [e8])];
}
var S2 = "p";
function C3(r17, e8) {
  let d13 = (0, import_react49.useId)(), t11 = a3(), { id: i15 = `headlessui-description-${d13}`, ...l14 } = r17, n13 = f7(), s13 = y(e8);
  n(() => n13.register(i15), [i15, n13.register]);
  let o17 = t11 || false, p6 = (0, import_react53.useMemo)(() => ({ ...n13.slot, disabled: o17 }), [n13.slot, o17]), D6 = { ref: s13, ...n13.props, id: i15 };
  return L()({ ourProps: D6, theirProps: l14, slot: p6, defaultTag: S2, name: n13.name || "Description" });
}
var _2 = K(C3);
var H4 = Object.assign(_2, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r17) => (r17.Space = " ", r17.Enter = "Enter", r17.Escape = "Escape", r17.Backspace = "Backspace", r17.Delete = "Delete", r17.ArrowLeft = "ArrowLeft", r17.ArrowUp = "ArrowUp", r17.ArrowRight = "ArrowRight", r17.ArrowDown = "ArrowDown", r17.Home = "Home", r17.End = "End", r17.PageUp = "PageUp", r17.PageDown = "PageDown", r17.Tab = "Tab", r17))(o8 || {});

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react54 = __toESM(require_react(), 1);
var c4 = (0, import_react54.createContext)(null);
c4.displayName = "LabelContext";
function P5() {
  let r17 = (0, import_react54.useContext)(c4);
  if (r17 === null) {
    let l14 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l14, P5), l14;
  }
  return r17;
}
function I(r17) {
  var a20, e8, o17;
  let l14 = (e8 = (a20 = (0, import_react54.useContext)(c4)) == null ? void 0 : a20.value) != null ? e8 : void 0;
  return ((o17 = r17 == null ? void 0 : r17.length) != null ? o17 : 0) > 0 ? [l14, ...r17].filter(Boolean).join(" ") : l14;
}
function K2({ inherit: r17 = false } = {}) {
  let l14 = I(), [a20, e8] = (0, import_react54.useState)([]), o17 = r17 ? [l14, ...a20].filter(Boolean) : a20;
  return [o17.length > 0 ? o17.join(" ") : void 0, (0, import_react54.useMemo)(() => function(t11) {
    let s13 = o4((i15) => (e8((p6) => [...p6, i15]), () => e8((p6) => {
      let u17 = p6.slice(), d13 = u17.indexOf(i15);
      return d13 !== -1 && u17.splice(d13, 1), u17;
    }))), m10 = (0, import_react54.useMemo)(() => ({ register: s13, slot: t11.slot, name: t11.name, props: t11.props, value: t11.value }), [s13, t11.slot, t11.name, t11.props, t11.value]);
    return import_react54.default.createElement(c4.Provider, { value: m10 }, t11.children);
  }, [e8])];
}
var N = "label";
function G(r17, l14) {
  var y9;
  let a20 = (0, import_react49.useId)(), e8 = P5(), o17 = u5(), g6 = a3(), { id: t11 = `headlessui-label-${a20}`, htmlFor: s13 = o17 != null ? o17 : (y9 = e8.props) == null ? void 0 : y9.htmlFor, passive: m10 = false, ...i15 } = r17, p6 = y(l14);
  n(() => e8.register(t11), [t11, e8.register]);
  let u17 = o4((L6) => {
    let b9 = L6.currentTarget;
    if (b9 instanceof HTMLLabelElement && L6.preventDefault(), e8.props && "onClick" in e8.props && typeof e8.props.onClick == "function" && e8.props.onClick(L6), b9 instanceof HTMLLabelElement) {
      let n13 = document.getElementById(b9.htmlFor);
      if (n13) {
        let E12 = n13.getAttribute("disabled");
        if (E12 === "true" || E12 === "") return;
        let x10 = n13.getAttribute("aria-disabled");
        if (x10 === "true" || x10 === "") return;
        (n13 instanceof HTMLInputElement && (n13.type === "radio" || n13.type === "checkbox") || n13.role === "radio" || n13.role === "checkbox" || n13.role === "switch") && n13.click(), n13.focus({ preventScroll: true });
      }
    }
  }), d13 = g6 || false, C9 = (0, import_react54.useMemo)(() => ({ ...e8.slot, disabled: d13 }), [e8.slot, d13]), f22 = { ref: p6, ...e8.props, id: t11, htmlFor: s13, onClick: u17 };
  return m10 && ("onClick" in f22 && (delete f22.htmlFor, delete f22.onClick), "onClick" in i15 && delete i15.onClick), L()({ ourProps: f22, theirProps: i15, slot: C9, defaultTag: s13 ? N : "div", name: e8.name || "Label" });
}
var U3 = K(G);
var Q = Object.assign(U3, {});

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var ie = "span";
function de(T10, h7) {
  let C9 = (0, import_react49.useId)(), k5 = u5(), x10 = a3(), { id: g6 = k5 || `headlessui-checkbox-${C9}`, disabled: e8 = x10 || false, autoFocus: s13 = false, checked: E12, defaultChecked: v4, onChange: P7, name: d13, value: D6, form: R9, indeterminate: n13 = false, ...A7 } = T10, r17 = l2(v4), [a20, t11] = T(E12, P7, r17 != null ? r17 : false), F6 = I(), K4 = U2(), _8 = p(), [p6, c15] = (0, import_react55.useState)(false), u17 = o4(() => {
    c15(true), t11 == null || t11(!a20), _8.nextFrame(() => {
      c15(false);
    });
  }), H13 = o4((o17) => {
    if (r4(o17.currentTarget)) return o17.preventDefault();
    o17.preventDefault(), u17();
  }), B3 = o4((o17) => {
    o17.key === o8.Space ? (o17.preventDefault(), u17()) : o17.key === o8.Enter && p2(o17.currentTarget);
  }), L6 = o4((o17) => o17.preventDefault()), { isFocusVisible: m10, focusProps: I6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: s13 }), { isHovered: f22, hoverProps: M9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: b9, pressProps: U8 } = w({ disabled: e8 }), O7 = _({ ref: h7, id: g6, role: "checkbox", "aria-checked": n13 ? "mixed" : a20 ? "true" : "false", "aria-labelledby": F6, "aria-describedby": K4, "aria-disabled": e8 ? true : void 0, indeterminate: n13 ? "true" : void 0, tabIndex: e8 ? void 0 : 0, onKeyUp: e8 ? void 0 : B3, onKeyPress: e8 ? void 0 : L6, onClick: e8 ? void 0 : H13 }, I6, M9, U8), X4 = (0, import_react55.useMemo)(() => ({ checked: a20, disabled: e8, hover: f22, focus: m10, active: b9, indeterminate: n13, changing: p6, autofocus: s13 }), [a20, n13, e8, f22, m10, b9, p6, s13]), G7 = (0, import_react55.useCallback)(() => {
    if (r17 !== void 0) return t11 == null ? void 0 : t11(r17);
  }, [t11, r17]), S7 = L();
  return import_react55.default.createElement(import_react55.default.Fragment, null, d13 != null && import_react55.default.createElement(j2, { disabled: e8, data: { [d13]: D6 || "on" }, overrides: { type: "checkbox", checked: a20 }, form: R9, onReset: G7 }), S7({ ourProps: O7, theirProps: A7, slot: X4, defaultTag: ie, name: "Checkbox" }));
}
var Ae = K(de);

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
var import_react57 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react56 = __toESM(require_react(), 1);
var e4 = (0, import_react56.createContext)(() => {
});
function u8() {
  return (0, import_react56.useContext)(e4);
}
function C4({ value: t11, children: o17 }) {
  return import_react56.default.createElement(e4.Provider, { value: t11 }, o17);
}

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
function l5(t11, e8) {
  let o17 = u8();
  return import_react57.default.createElement(H2, { ref: e8, ..._({ onClick: o17 }, t11) });
}
var y2 = K(l5);

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react());
var import_react_dom3 = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index2) => deps[index2] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a20, b9) => Math.abs(a20 - b9) < 1;
var debounce = (targetWindow, fn, ms) => {
  let timeoutId2;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId2);
    timeoutId2 = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index2) => index2;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i15 = start; i15 <= end; i15++) {
    arr.push(i15);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset2 = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset2, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset2 = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset2, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size2 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size2;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset2, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset2 + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            this._measureElement(entry.target, entry);
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: true,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d13) => d13());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset2, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset2 ? "forward" : "backward" : null;
            this.scrollOffset = offset2;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index2) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m10 = index2 - 1; m10 >= 0; m10--) {
        const measurement = measurements[m10];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a20, b9) => {
        if (a20.end === b9.end) {
          return a20.index - b9.index;
        }
        return a20.end - b9.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count2, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i15 = min2; i15 < count2; i15++) {
          const key = getItemKey(i15);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i15 - 1] : this.getFurthestMeasurement(measurements, i15);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size2 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i15);
          const end = start + size2;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i15 % this.options.lanes;
          measurements[i15] = {
            index: i15,
            start,
            size: size2,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count2) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index2 = this.indexFromElement(node);
      const item = this.measurementsCache[index2];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index2, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index2, size2) => {
      const item = this.measurementsCache[index2];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size2 - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size2));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k5 = 0, len = indexes.length; k5 < len; k5++) {
          const i15 = indexes[k5];
          const measurement = measurements[i15];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset2) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index2) => notUndefined(measurements[index2]).start,
          offset2
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset >= scrollOffset + size2) {
          align = "end";
        }
      }
      if (align === "end") {
        toOffset -= size2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size2;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index2, align = "auto") => {
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      const item = this.measurementsCache[index2];
      if (!item) {
        return void 0;
      }
      const size2 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size2 - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const centerOffset = item.start - this.options.scrollPaddingStart + (item.size - size2) / 2;
      switch (align) {
        case "center":
          return [this.getOffsetForAlignment(centerOffset, align), align];
        case "end":
          return [
            this.getOffsetForAlignment(
              item.end + this.options.scrollPaddingEnd,
              align
            ),
            align
          ];
        default:
          return [
            this.getOffsetForAlignment(
              item.start - this.options.scrollPaddingStart,
              align
            ),
            align
          ];
      }
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index2, { align: initialAlign = "auto", behavior } = {}) => {
      index2 = Math.max(0, Math.min(index2, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index2, initialAlign);
      if (!offsetAndAlign) return;
      const [offset2, align] = offsetAndAlign;
      this._scrollToOffset(offset2, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index2)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index2, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index2, { align, behavior });
            }
          } else {
            this.scrollToIndex(index2, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m10) => m10.end)
        );
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset2, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset2, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count2 = measurements.length - 1;
  const getOffset = (index2) => measurements[index2].start;
  const startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom3.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react83 = __toESM(require_react(), 1);
var import_react_dom7 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
var import_react58 = __toESM(require_react(), 1);
function l6(e8, r17) {
  return e8 !== null && r17 !== null && typeof e8 == "object" && typeof r17 == "object" && "id" in e8 && "id" in r17 ? e8.id === r17.id : e8 === r17;
}
function u9(e8 = l6) {
  return (0, import_react58.useCallback)((r17, t11) => {
    if (typeof e8 == "string") {
      let o17 = e8;
      return (r17 == null ? void 0 : r17[o17]) === (t11 == null ? void 0 : t11[o17]);
    }
    return e8(r17, t11);
  }, [e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
var import_react59 = __toESM(require_react(), 1);
function f8(e8) {
  if (e8 === null) return { width: 0, height: 0 };
  let { width: t11, height: r17 } = e8.getBoundingClientRect();
  return { width: t11, height: r17 };
}
function d3(e8, t11 = false) {
  let [r17, u17] = (0, import_react59.useReducer)(() => ({}), {}), i15 = (0, import_react59.useMemo)(() => f8(e8), [e8, r17]);
  return n(() => {
    if (!e8) return;
    let n13 = new ResizeObserver(u17);
    return n13.observe(e8), () => {
      n13.disconnect();
    };
  }, [e8]), t11 ? { width: `${i15.width}px`, height: `${i15.height}px` } : i15;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var import_react61 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/default-map.js
var a6 = class extends Map {
  constructor(t11) {
    super();
    this.factory = t11;
  }
  get(t11) {
    let e8 = super.get(t11);
    return e8 === void 0 && (e8 = this.factory(t11), this.set(t11, e8)), e8;
  }
};

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o17, r17) {
  let t11 = o17(), n13 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t11;
  }, subscribe(e8) {
    return n13.add(e8), () => n13.delete(e8);
  }, dispatch(e8, ...s13) {
    let i15 = r17[e8].call(t11, ...s13);
    i15 && (t11 = i15, n13.forEach((c15) => c15()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react60 = __toESM(require_react(), 1);
function o10(t11) {
  return (0, import_react60.useSyncExternalStore)(t11.subscribe, t11.getSnapshot, t11.getSnapshot);
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var p3 = new a6(() => a7(() => [], { ADD(r17) {
  return this.includes(r17) ? this : [...this, r17];
}, REMOVE(r17) {
  let e8 = this.indexOf(r17);
  if (e8 === -1) return this;
  let t11 = this.slice();
  return t11.splice(e8, 1), t11;
} }));
function x2(r17, e8) {
  let t11 = p3.get(e8), i15 = (0, import_react61.useId)(), h7 = o10(t11);
  if (n(() => {
    if (r17) return t11.dispatch("ADD", i15), () => t11.dispatch("REMOVE", i15);
  }, [t11, r17]), !r17) return false;
  let s13 = h7.indexOf(i15), o17 = h7.length;
  return s13 === -1 && (s13 = o17, o17 += 1), s13 === o17 - 1;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f9 = /* @__PURE__ */ new Map();
var u10 = /* @__PURE__ */ new Map();
function h4(t11) {
  var e8;
  let r17 = (e8 = u10.get(t11)) != null ? e8 : 0;
  return u10.set(t11, r17 + 1), r17 !== 0 ? () => m5(t11) : (f9.set(t11, { "aria-hidden": t11.getAttribute("aria-hidden"), inert: t11.inert }), t11.setAttribute("aria-hidden", "true"), t11.inert = true, () => m5(t11));
}
function m5(t11) {
  var i15;
  let r17 = (i15 = u10.get(t11)) != null ? i15 : 1;
  if (r17 === 1 ? u10.delete(t11) : u10.set(t11, r17 - 1), r17 !== 1) return;
  let e8 = f9.get(t11);
  e8 && (e8["aria-hidden"] === null ? t11.removeAttribute("aria-hidden") : t11.setAttribute("aria-hidden", e8["aria-hidden"]), t11.inert = e8.inert, f9.delete(t11));
}
function y3(t11, { allowed: r17, disallowed: e8 } = {}) {
  let i15 = x2(t11, "inert-others");
  n(() => {
    var d13, c15;
    if (!i15) return;
    let a20 = o2();
    for (let n13 of (d13 = e8 == null ? void 0 : e8()) != null ? d13 : []) n13 && a20.add(h4(n13));
    let s13 = (c15 = r17 == null ? void 0 : r17()) != null ? c15 : [];
    for (let n13 of s13) {
      if (!n13) continue;
      let l14 = u(n13);
      if (!l14) continue;
      let o17 = n13.parentElement;
      for (; o17 && o17 !== l14.body; ) {
        for (let p6 of o17.children) s13.some((E12) => p6.contains(E12)) || a20.add(h4(p6));
        o17 = o17.parentElement;
      }
    }
    return a20.dispose;
  }, [i15, r17, e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react62 = __toESM(require_react(), 1);
function m6(s13, n13, l14) {
  let i15 = s3((t11) => {
    let e8 = t11.getBoundingClientRect();
    e8.x === 0 && e8.y === 0 && e8.width === 0 && e8.height === 0 && l14();
  });
  (0, import_react62.useEffect)(() => {
    if (!s13) return;
    let t11 = n13 === null ? null : n13 instanceof HTMLElement ? n13 : n13.current;
    if (!t11) return;
    let e8 = o2();
    if (typeof ResizeObserver != "undefined") {
      let r17 = new ResizeObserver(() => i15.current(t11));
      r17.observe(t11), e8.add(() => r17.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r17 = new IntersectionObserver(() => i15.current(t11));
      r17.observe(t11), e8.add(() => r17.disconnect());
    }
    return () => e8.dispose();
  }, [n13, i15, s13]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react65 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f10 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e8) => `${e8}:not([tabindex='-1'])`).join(",");
var p4 = ["[data-autofocus]"].map((e8) => `${e8}:not([tabindex='-1'])`).join(",");
var F2 = ((n13) => (n13[n13.First = 1] = "First", n13[n13.Previous = 2] = "Previous", n13[n13.Next = 4] = "Next", n13[n13.Last = 8] = "Last", n13[n13.WrapAround = 16] = "WrapAround", n13[n13.NoScroll = 32] = "NoScroll", n13[n13.AutoFocus = 64] = "AutoFocus", n13))(F2 || {});
var T5 = ((o17) => (o17[o17.Error = 0] = "Error", o17[o17.Overflow = 1] = "Overflow", o17[o17.Success = 2] = "Success", o17[o17.Underflow = 3] = "Underflow", o17))(T5 || {});
var y4 = ((t11) => (t11[t11.Previous = -1] = "Previous", t11[t11.Next = 1] = "Next", t11))(y4 || {});
function b2(e8 = document.body) {
  return e8 == null ? [] : Array.from(e8.querySelectorAll(f10)).sort((r17, t11) => Math.sign((r17.tabIndex || Number.MAX_SAFE_INTEGER) - (t11.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S3(e8 = document.body) {
  return e8 == null ? [] : Array.from(e8.querySelectorAll(p4)).sort((r17, t11) => Math.sign((r17.tabIndex || Number.MAX_SAFE_INTEGER) - (t11.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h5 = ((t11) => (t11[t11.Strict = 0] = "Strict", t11[t11.Loose = 1] = "Loose", t11))(h5 || {});
function A2(e8, r17 = 0) {
  var t11;
  return e8 === ((t11 = u(e8)) == null ? void 0 : t11.body) ? false : u2(r17, { [0]() {
    return e8.matches(f10);
  }, [1]() {
    let u17 = e8;
    for (; u17 !== null; ) {
      if (u17.matches(f10)) return true;
      u17 = u17.parentElement;
    }
    return false;
  } });
}
function G2(e8) {
  let r17 = u(e8);
  o2().nextFrame(() => {
    r17 && !A2(r17.activeElement, 0) && I2(e8);
  });
}
var H5 = ((t11) => (t11[t11.Keyboard = 0] = "Keyboard", t11[t11.Mouse = 1] = "Mouse", t11))(H5 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e8) => {
  e8.metaKey || e8.altKey || e8.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e8) => {
  e8.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e8.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I2(e8) {
  e8 == null || e8.focus({ preventScroll: true });
}
var w5 = ["textarea", "input"].join(",");
function O2(e8) {
  var r17, t11;
  return (t11 = (r17 = e8 == null ? void 0 : e8.matches) == null ? void 0 : r17.call(e8, w5)) != null ? t11 : false;
}
function _3(e8, r17 = (t11) => t11) {
  return e8.slice().sort((t11, u17) => {
    let o17 = r17(t11), c15 = r17(u17);
    if (o17 === null || c15 === null) return 0;
    let l14 = o17.compareDocumentPosition(c15);
    return l14 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l14 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function j3(e8, r17) {
  return P6(b2(), r17, { relativeTo: e8 });
}
function P6(e8, r17, { sorted: t11 = true, relativeTo: u17 = null, skipElements: o17 = [] } = {}) {
  let c15 = Array.isArray(e8) ? e8.length > 0 ? e8[0].ownerDocument : document : e8.ownerDocument, l14 = Array.isArray(e8) ? t11 ? _3(e8) : e8 : r17 & 64 ? S3(e8) : b2(e8);
  o17.length > 0 && l14.length > 1 && (l14 = l14.filter((s13) => !o17.some((a20) => a20 != null && "current" in a20 ? (a20 == null ? void 0 : a20.current) === s13 : a20 === s13))), u17 = u17 != null ? u17 : c15.activeElement;
  let n13 = (() => {
    if (r17 & 5) return 1;
    if (r17 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x10 = (() => {
    if (r17 & 1) return 0;
    if (r17 & 2) return Math.max(0, l14.indexOf(u17)) - 1;
    if (r17 & 4) return Math.max(0, l14.indexOf(u17)) + 1;
    if (r17 & 8) return l14.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M9 = r17 & 32 ? { preventScroll: true } : {}, m10 = 0, d13 = l14.length, i15;
  do {
    if (m10 >= d13 || m10 + d13 <= 0) return 0;
    let s13 = x10 + m10;
    if (r17 & 16) s13 = (s13 + d13) % d13;
    else {
      if (s13 < 0) return 3;
      if (s13 >= d13) return 1;
    }
    i15 = l14[s13], i15 == null || i15.focus(M9), m10 += n13;
  } while (i15 !== c15.activeElement);
  return r17 & 6 && O2(i15) && i15.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i8() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n8() {
  return t4() || i8();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react63 = __toESM(require_react(), 1);
function i9(t11, e8, o17, n13) {
  let u17 = s3(o17);
  (0, import_react63.useEffect)(() => {
    if (!t11) return;
    function r17(m10) {
      u17.current(m10);
    }
    return document.addEventListener(e8, r17, n13), () => document.removeEventListener(e8, r17, n13);
  }, [t11, e8, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react64 = __toESM(require_react(), 1);
function s5(t11, e8, o17, n13) {
  let i15 = s3(o17);
  (0, import_react64.useEffect)(() => {
    if (!t11) return;
    function r17(d13) {
      i15.current(d13);
    }
    return window.addEventListener(e8, r17, n13), () => window.removeEventListener(e8, r17, n13);
  }, [t11, e8, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var E4 = 30;
function R3(p6, f22, C9) {
  let u17 = x2(p6, "outside-click"), m10 = s3(C9), s13 = (0, import_react65.useCallback)(function(e8, n13) {
    if (e8.defaultPrevented) return;
    let r17 = n13(e8);
    if (r17 === null || !r17.getRootNode().contains(r17) || !r17.isConnected) return;
    let h7 = function l14(o17) {
      return typeof o17 == "function" ? l14(o17()) : Array.isArray(o17) || o17 instanceof Set ? o17 : [o17];
    }(f22);
    for (let l14 of h7) if (l14 !== null && (l14.contains(r17) || e8.composed && e8.composedPath().includes(l14))) return;
    return !A2(r17, h5.Loose) && r17.tabIndex !== -1 && e8.preventDefault(), m10.current(e8, r17);
  }, [m10, f22]), i15 = (0, import_react65.useRef)(null);
  i9(u17, "pointerdown", (t11) => {
    var e8, n13;
    i15.current = ((n13 = (e8 = t11.composedPath) == null ? void 0 : e8.call(t11)) == null ? void 0 : n13[0]) || t11.target;
  }, true), i9(u17, "mousedown", (t11) => {
    var e8, n13;
    i15.current = ((n13 = (e8 = t11.composedPath) == null ? void 0 : e8.call(t11)) == null ? void 0 : n13[0]) || t11.target;
  }, true), i9(u17, "click", (t11) => {
    n8() || i15.current && (s13(t11, () => i15.current), i15.current = null);
  }, true);
  let a20 = (0, import_react65.useRef)({ x: 0, y: 0 });
  i9(u17, "touchstart", (t11) => {
    a20.current.x = t11.touches[0].clientX, a20.current.y = t11.touches[0].clientY;
  }, true), i9(u17, "touchend", (t11) => {
    let e8 = { x: t11.changedTouches[0].clientX, y: t11.changedTouches[0].clientY };
    if (!(Math.abs(e8.x - a20.current.x) >= E4 || Math.abs(e8.y - a20.current.y) >= E4)) return s13(t11, () => t11.target instanceof HTMLElement ? t11.target : null);
  }, true), s5(u17, "blur", (t11) => s13(t11, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react66 = __toESM(require_react(), 1);
function n9(...e8) {
  return (0, import_react66.useMemo)(() => u(...e8), [...e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
var import_react68 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react67 = __toESM(require_react(), 1);
function E5(n13, e8, a20, t11) {
  let i15 = s3(a20);
  (0, import_react67.useEffect)(() => {
    n13 = n13 != null ? n13 : window;
    function r17(o17) {
      i15.current(o17);
    }
    return n13.addEventListener(e8, r17, t11), () => n13.removeEventListener(e8, r17, t11);
  }, [n13, e8, t11]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function i10(e8) {
  let n13 = (0, import_react68.useRef)({ value: "", selectionStart: null, selectionEnd: null });
  return E5(e8, "blur", (l14) => {
    let t11 = l14.target;
    t11 instanceof HTMLInputElement && (n13.current = { value: t11.value, selectionStart: t11.selectionStart, selectionEnd: t11.selectionEnd });
  }), o4(() => {
    if (document.activeElement !== e8 && e8 instanceof HTMLInputElement && e8.isConnected) {
      if (e8.focus({ preventScroll: true }), e8.value !== n13.current.value) e8.setSelectionRange(e8.value.length, e8.value.length);
      else {
        let { selectionStart: l14, selectionEnd: t11 } = n13.current;
        l14 !== null && t11 !== null && e8.setSelectionRange(l14, t11);
      }
      n13.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react69 = __toESM(require_react(), 1);
function e6(t11, u17) {
  return (0, import_react69.useMemo)(() => {
    var n13;
    if (t11.type) return t11.type;
    let r17 = (n13 = t11.as) != null ? n13 : "button";
    if (typeof r17 == "string" && r17.toLowerCase() === "button" || (u17 == null ? void 0 : u17.tagName) === "BUTTON" && !u17.hasAttribute("type")) return "button";
  }, [t11.type, t11.as, u17]);
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d6() {
  let r17;
  return { before({ doc: e8 }) {
    var l14;
    let o17 = e8.documentElement, t11 = (l14 = e8.defaultView) != null ? l14 : window;
    r17 = Math.max(0, t11.innerWidth - o17.clientWidth);
  }, after({ doc: e8, d: o17 }) {
    let t11 = e8.documentElement, l14 = Math.max(0, t11.clientWidth - t11.offsetWidth), n13 = Math.max(0, r17 - l14);
    o17.style(t11, "paddingRight", `${n13}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d7() {
  return t4() ? { before({ doc: r17, d: n13, meta: c15 }) {
    function o17(a20) {
      return c15.containers.flatMap((l14) => l14()).some((l14) => l14.contains(a20));
    }
    n13.microTask(() => {
      var s13;
      if (window.getComputedStyle(r17.documentElement).scrollBehavior !== "auto") {
        let t11 = o2();
        t11.style(r17.documentElement, "scrollBehavior", "auto"), n13.add(() => n13.microTask(() => t11.dispose()));
      }
      let a20 = (s13 = window.scrollY) != null ? s13 : window.pageYOffset, l14 = null;
      n13.addEventListener(r17, "click", (t11) => {
        if (t11.target instanceof HTMLElement) try {
          let e8 = t11.target.closest("a");
          if (!e8) return;
          let { hash: f22 } = new URL(e8.href), i15 = r17.querySelector(f22);
          i15 && !o17(i15) && (l14 = i15);
        } catch {
        }
      }, true), n13.addEventListener(r17, "touchstart", (t11) => {
        if (t11.target instanceof HTMLElement) if (o17(t11.target)) {
          let e8 = t11.target;
          for (; e8.parentElement && o17(e8.parentElement); ) e8 = e8.parentElement;
          n13.style(e8, "overscrollBehavior", "contain");
        } else n13.style(t11.target, "touchAction", "none");
      }), n13.addEventListener(r17, "touchmove", (t11) => {
        if (t11.target instanceof HTMLElement) {
          if (t11.target.tagName === "INPUT") return;
          if (o17(t11.target)) {
            let e8 = t11.target;
            for (; e8.parentElement && e8.dataset.headlessuiPortal !== "" && !(e8.scrollHeight > e8.clientHeight || e8.scrollWidth > e8.clientWidth); ) e8 = e8.parentElement;
            e8.dataset.headlessuiPortal === "" && t11.preventDefault();
          } else t11.preventDefault();
        }
      }, { passive: false }), n13.add(() => {
        var e8;
        let t11 = (e8 = window.scrollY) != null ? e8 : window.pageYOffset;
        a20 !== t11 && window.scrollTo(0, a20), l14 && l14.isConnected && (l14.scrollIntoView({ block: "nearest" }), l14 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r7() {
  return { before({ doc: e8, d: o17 }) {
    o17.style(e8.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m7(e8) {
  let n13 = {};
  for (let t11 of e8) Object.assign(n13, t11(n13));
  return n13;
}
var a10 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e8, n13) {
  var o17;
  let t11 = (o17 = this.get(e8)) != null ? o17 : { doc: e8, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t11.count++, t11.meta.add(n13), this.set(e8, t11), this;
}, POP(e8, n13) {
  let t11 = this.get(e8);
  return t11 && (t11.count--, t11.meta.delete(n13)), this;
}, SCROLL_PREVENT({ doc: e8, d: n13, meta: t11 }) {
  let o17 = { doc: e8, d: n13, meta: m7(t11) }, c15 = [d7(), d6(), r7()];
  c15.forEach(({ before: r17 }) => r17 == null ? void 0 : r17(o17)), c15.forEach(({ after: r17 }) => r17 == null ? void 0 : r17(o17));
}, SCROLL_ALLOW({ d: e8 }) {
  e8.dispose();
}, TEARDOWN({ doc: e8 }) {
  this.delete(e8);
} });
a10.subscribe(() => {
  let e8 = a10.getSnapshot(), n13 = /* @__PURE__ */ new Map();
  for (let [t11] of e8) n13.set(t11, t11.documentElement.style.overflow);
  for (let t11 of e8.values()) {
    let o17 = n13.get(t11.doc) === "hidden", c15 = t11.count !== 0;
    (c15 && !o17 || !c15 && o17) && a10.dispatch(t11.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t11), t11.count === 0 && a10.dispatch("TEARDOWN", t11);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a11(r17, e8, n13 = () => ({ containers: [] })) {
  let f22 = o10(a10), o17 = e8 ? f22.get(e8) : void 0, i15 = o17 ? o17.count > 0 : false;
  return n(() => {
    if (!(!e8 || !r17)) return a10.dispatch("PUSH", e8, n13), () => a10.dispatch("POP", e8, n13);
  }, [r17, e8]), i15;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f11(e8, c15, n13 = () => [document.body]) {
  let r17 = x2(e8, "scroll-lock");
  a11(r17, c15, (t11) => {
    var o17;
    return { containers: [...(o17 = t11.containers) != null ? o17 : [], n13] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react70 = __toESM(require_react(), 1);
function t6(e8) {
  return [e8.screenX, e8.screenY];
}
function u11() {
  let e8 = (0, import_react70.useRef)([-1, -1]);
  return { wasMoved(r17) {
    let n13 = t6(r17);
    return e8.current[0] === n13[0] && e8.current[1] === n13[1] ? false : (e8.current = n13, true);
  }, update(r17) {
    e8.current = t6(r17);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react72 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react71 = __toESM(require_react(), 1);
function c6(u17 = 0) {
  let [t11, l14] = (0, import_react71.useState)(u17), g6 = (0, import_react71.useCallback)((e8) => l14(e8), [t11]), s13 = (0, import_react71.useCallback)((e8) => l14((a20) => a20 | e8), [t11]), m10 = (0, import_react71.useCallback)((e8) => (t11 & e8) === e8, [t11]), n13 = (0, import_react71.useCallback)((e8) => l14((a20) => a20 & ~e8), [l14]), F6 = (0, import_react71.useCallback)((e8) => l14((a20) => a20 ^ e8), [l14]);
  return { flags: t11, setFlag: g6, addFlag: s13, hasFlag: m10, removeFlag: n13, toggleFlag: F6 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var T7;
var b4;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T7 = process == null ? void 0 : process.env) == null ? void 0 : T7["NODE_ENV"]) === "test" && typeof ((b4 = Element == null ? void 0 : Element.prototype) == null ? void 0 : b4.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var L2 = ((r17) => (r17[r17.None = 0] = "None", r17[r17.Closed = 1] = "Closed", r17[r17.Enter = 2] = "Enter", r17[r17.Leave = 4] = "Leave", r17))(L2 || {});
function R4(t11) {
  let n13 = {};
  for (let e8 in t11) t11[e8] === true && (n13[`data-${e8}`] = "");
  return n13;
}
function x3(t11, n13, e8, i15) {
  let [r17, o17] = (0, import_react72.useState)(e8), { hasFlag: s13, addFlag: a20, removeFlag: l14 } = c6(t11 && r17 ? 3 : 0), u17 = (0, import_react72.useRef)(false), f22 = (0, import_react72.useRef)(false), E12 = p();
  return n(() => {
    var d13;
    if (t11) {
      if (e8 && o17(true), !n13) {
        e8 && a20(3);
        return;
      }
      return (d13 = i15 == null ? void 0 : i15.start) == null || d13.call(i15, e8), C5(n13, { inFlight: u17, prepare() {
        f22.current ? f22.current = false : f22.current = u17.current, u17.current = true, !f22.current && (e8 ? (a20(3), l14(4)) : (a20(4), l14(2)));
      }, run() {
        f22.current ? e8 ? (l14(3), a20(4)) : (l14(4), a20(3)) : e8 ? l14(1) : a20(1);
      }, done() {
        var p6;
        f22.current && typeof n13.getAnimations == "function" && n13.getAnimations().length > 0 || (u17.current = false, l14(7), e8 || o17(false), (p6 = i15 == null ? void 0 : i15.end) == null || p6.call(i15, e8));
      } });
    }
  }, [t11, e8, n13, E12]), t11 ? [r17, { closed: s13(1), enter: s13(2), leave: s13(4), transition: s13(2) || s13(4) }] : [e8, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function C5(t11, { prepare: n13, run: e8, done: i15, inFlight: r17 }) {
  let o17 = o2();
  return j4(t11, { prepare: n13, inFlight: r17 }), o17.nextFrame(() => {
    e8(), o17.requestAnimationFrame(() => {
      o17.add(M(t11, i15));
    });
  }), o17.dispose;
}
function M(t11, n13) {
  var o17, s13;
  let e8 = o2();
  if (!t11) return e8.dispose;
  let i15 = false;
  e8.add(() => {
    i15 = true;
  });
  let r17 = (s13 = (o17 = t11.getAnimations) == null ? void 0 : o17.call(t11).filter((a20) => a20 instanceof CSSTransition)) != null ? s13 : [];
  return r17.length === 0 ? (n13(), e8.dispose) : (Promise.allSettled(r17.map((a20) => a20.finished)).then(() => {
    i15 || n13();
  }), e8.dispose);
}
function j4(t11, { inFlight: n13, prepare: e8 }) {
  if (n13 != null && n13.current) {
    e8();
    return;
  }
  let i15 = t11.style.transition;
  t11.style.transition = "none", e8(), t11.offsetHeight, t11.style.transition = i15;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react73 = __toESM(require_react(), 1);
function F3(c15, { container: e8, accept: t11, walk: r17 }) {
  let o17 = (0, import_react73.useRef)(t11), l14 = (0, import_react73.useRef)(r17);
  (0, import_react73.useEffect)(() => {
    o17.current = t11, l14.current = r17;
  }, [t11, r17]), n(() => {
    if (!e8 || !c15) return;
    let n13 = u(e8);
    if (!n13) return;
    let f22 = o17.current, p6 = l14.current, i15 = Object.assign((m10) => f22(m10), { acceptNode: f22 }), u17 = n13.createTreeWalker(e8, NodeFilter.SHOW_ELEMENT, i15, false);
    for (; u17.nextNode(); ) p6(u17.currentNode);
  }, [e8, c15, o17, l14]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react74 = __toESM(require_react(), 1);
function m8(u17, t11) {
  let e8 = (0, import_react74.useRef)([]), r17 = o4(u17);
  (0, import_react74.useEffect)(() => {
    let o17 = [...e8.current];
    for (let [a20, l14] of t11.entries()) if (e8.current[a20] !== l14) {
      let n13 = r17(t11, o17);
      return e8.current = t11, n13;
    }
  }, [r17, ...t11]);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React2 = __toESM(require_react(), 1);
var import_react75 = __toESM(require_react(), 1);

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var ReactDOM = __toESM(require_react_dom(), 1);
function useMergeRefs(refs) {
  return React2.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var SafeReact = {
  ...React2
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React2.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React2.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index2, cols, prevRow) {
  return Math.floor(index2 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index2) {
  return index2 < 0 || index2 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index2 = startingIndex;
  do {
    index2 += decrement ? -amount : amount;
  } while (index2 >= 0 && index2 <= list.length - 1 && isDisabled(list, index2, disabledIndices));
  return index2;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset2 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset2 : offset2 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index2) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index2 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i15 = 0; i15 < width; i15++) {
        for (let j9 = 0; j9 < height; j9++) {
          targetCells.push(startIndex + i15 + j9 * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index2;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index2, sizes, cellMap, cols, corner) {
  if (index2 === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index2);
  const sizeItem = sizes[index2];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index2);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index2, cellIndex) => indices.includes(index2) ? [cellIndex] : []);
}
function isDisabled(list, index2, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index2);
  }
  const element = list[index2];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
var index = typeof document !== "undefined" ? import_react75.useLayoutEffect : import_react75.useEffect;
function sortByDocumentPosition(a20, b9) {
  const position = a20.compareDocumentPosition(b9);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React2.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React2.useState(() => /* @__PURE__ */ new Map());
  const register = React2.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React2.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index2) => {
      newMap.set(node, index2);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React2.createElement(FloatingListContext.Provider, {
    value: React2.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React2.useContext(FloatingListContext);
  const [index$1, setIndex] = React2.useState(null);
  const componentRef = React2.useRef(null);
  const ref = React2.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index(() => {
    const index2 = componentRef.current ? map.get(componentRef.current) : null;
    if (index2 != null) {
      setIndex(index2);
    }
  }, [map]);
  return React2.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React2.cloneElement(render, computedProps);
  }
  return React2.createElement("div", computedProps);
}
var CompositeContext = React2.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React2.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    rtl = false,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React2.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React2.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React2.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    const horizontalEndKey = rtl ? ARROW_LEFT : ARROW_RIGHT;
    const horizontalStartKey = rtl ? ARROW_RIGHT : ARROW_LEFT;
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index2) => index2 != null && !isDisabled(elementsRef.current, index2, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index2, cellIndex) => index2 != null && !isDisabled(elementsRef.current, index2, disabledIndices) ? cellIndex : foundIndex, -1);
      const maybeNextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        rtl,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices || elementsRef.current.map((_8, index2) => isDisabled(elementsRef.current, index2) ? index2 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === horizontalEndKey ? "tr" : "tl"
        )
      })];
      if (maybeNextIndex != null) {
        nextIndex = maybeNextIndex;
      }
    }
    const toEndKeys = {
      horizontal: [horizontalEndKey],
      vertical: [ARROW_DOWN],
      both: [horizontalEndKey, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [horizontalStartKey],
      vertical: [ARROW_UP],
      both: [horizontalStartKey, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      var _elementsRef$current$;
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      (_elementsRef$current$ = elementsRef.current[nextIndex]) == null || _elementsRef$current$.focus();
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e8) {
      domProps.onKeyDown == null || domProps.onKeyDown(e8);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e8);
      handleKeyDown(e8);
    }
  };
  return React2.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React2.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React2.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React2.useContext(CompositeContext);
  const {
    ref,
    index: index2
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index2;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e8) {
      domProps.onFocus == null || domProps.onFocus(e8);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e8);
      onNavigate(index2);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i15 = 1; i15 < arguments.length; i15++) {
      var source = arguments[i15];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React2.useState(() => serverHandoffComplete ? genId() : void 0);
  index(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React2.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React2.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow2,
        shift: shift2
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d: d13,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId();
  const [isRTL, setIsRTL] = React2.useState(false);
  index(() => {
    if (!floating) return;
    const isRTL2 = getComputedStyle2(floating).direction === "rtl";
    if (isRTL2) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }
  const [side, alignment] = placement.split("-");
  const isVerticalSide = side === "top" || side === "bottom";
  let computedStaticOffset = staticOffset;
  if (isVerticalSide && shift2 != null && shift2.x || !isVerticalSide && shift2 != null && shift2.y) {
    computedStaticOffset = null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const isCustomShape = !!d13;
  const yOffsetProp = computedStaticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = computedStaticOffset && alignment === "end" ? "right" : "left";
  if (computedStaticOffset && isRTL) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow2 == null ? void 0 : arrow2.x) != null ? computedStaticOffset || arrow2.x : "";
  const arrowY = (arrow2 == null ? void 0 : arrow2.y) != null ? computedStaticOffset || arrow2.y : "";
  const dValue = d13 || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React2.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: [rotation, transform].filter((t11) => !!t11).join(" "),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && React2.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: computedStrokeWidth + (d13 ? 0 : 1),
    d: dValue
  }), React2.createElement("path", {
    stroke: computedStrokeWidth && !d13 ? rest.fill : "none",
    d: dValue
  }), React2.createElement("clipPath", {
    id: clipPathId
  }, React2.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l14) => l14 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React2.createContext(null);
var FloatingTreeContext = React2.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React2.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React2.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var NOOP = () => {
};
var FloatingDelayGroupContext = React2.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React2.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React2.useState();
  index(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React2.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React2.createContext(null);
var attr = createAttribute("portal");
var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
var VisuallyHiddenDismiss = React2.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React2.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var lockCount = 0;
function enableScrollLock() {
  const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
  const bodyStyle = document.body.style;
  const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
  const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
  const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
  bodyStyle.overflow = "hidden";
  if (scrollbarWidth) {
    bodyStyle[paddingProp] = scrollbarWidth + "px";
  }
  if (isIOS) {
    var _window$visualViewpor, _window$visualViewpor2;
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    Object.assign(bodyStyle, {
      position: "fixed",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0"
    });
  }
  return () => {
    Object.assign(bodyStyle, {
      overflow: "",
      [paddingProp]: ""
    });
    if (isIOS) {
      Object.assign(bodyStyle, {
        position: "",
        top: "",
        left: "",
        right: ""
      });
      window.scrollTo(scrollX, scrollY);
    }
  };
}
var cleanup = () => {
};
var FloatingOverlay = React2.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  index(() => {
    if (!lockScroll) return;
    lockCount++;
    if (lockCount === 1) {
      cleanup = enableScrollLock();
    }
    return () => {
      lockCount--;
      if (lockCount === 0) {
        cleanup();
      }
    };
  }, [lockScroll]);
  return React2.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React2.useRef({});
  const [events] = React2.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React2.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React2.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React2.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React2.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React2.useState(null);
  const [positionReference, _setPositionReference] = React2.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React2.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React2.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React2.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React2.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React2.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React2.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React2.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _8,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return React2.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index2 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index2];
    const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const clientTop = floating.clientTop || scrollEl.clientTop;
    const floatingIsBordered = floating.clientTop !== 0;
    const scrollElIsBordered = scrollEl.clientTop !== 0;
    const floatingIsScrollEl = floating === scrollEl;
    if (true) {
      if (!state.placement.startsWith("bottom")) {
        warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
    const rounder = isScrollable ? (v4) => v4 : round;
    const maxHeight = rounder(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
    scrollEl.style.maxHeight = maxHeight + "px";
    scrollEl.scrollTop = diffY;
    if (onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM.flushSync(() => onFallbackChange(shouldFallback));
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React2.useRef(false);
  const prevScrollTopRef = React2.useRef(null);
  const initialOverflowRef = React2.useRef(null);
  React2.useEffect(() => {
    if (!enabled) return;
    function onWheel(e8) {
      if (e8.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e8.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e8.preventDefault();
        ReactDOM.flushSync(() => {
          onChange((d13) => d13 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React2.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          ReactDOM.flushSync(() => onChange((d13) => d13 + scrollDiff));
        }
      }
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React2.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
var j5 = __toESM(require_react(), 1);
var import_react77 = __toESM(require_react(), 1);
var y5 = (0, import_react77.createContext)({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y5.displayName = "FloatingContext";
var H6 = (0, import_react77.createContext)(null);
H6.displayName = "PlacementContext";
function xe(e8) {
  return (0, import_react77.useMemo)(() => e8 ? typeof e8 == "string" ? { to: e8 } : e8 : null, [e8]);
}
function ye() {
  return (0, import_react77.useContext)(y5).setReference;
}
function Fe() {
  return (0, import_react77.useContext)(y5).getReferenceProps;
}
function be() {
  let { getFloatingProps: e8, slot: t11 } = (0, import_react77.useContext)(y5);
  return (0, import_react77.useCallback)((...n13) => Object.assign({}, e8(...n13), { "data-anchor": t11.anchor }), [e8, t11]);
}
function Re(e8 = null) {
  e8 === false && (e8 = null), typeof e8 == "string" && (e8 = { to: e8 });
  let t11 = (0, import_react77.useContext)(H6), n13 = (0, import_react77.useMemo)(() => e8, [JSON.stringify(e8, (r17, o17) => {
    var u17;
    return (u17 = o17 == null ? void 0 : o17.outerHTML) != null ? u17 : o17;
  })]);
  n(() => {
    t11 == null || t11(n13 != null ? n13 : null);
  }, [t11, n13]);
  let l14 = (0, import_react77.useContext)(y5);
  return (0, import_react77.useMemo)(() => [l14.setFloating, e8 ? l14.styles : {}], [l14.setFloating, e8, l14.styles]);
}
var q = 4;
function Me({ children: e8, enabled: t11 = true }) {
  let [n13, l14] = (0, import_react77.useState)(null), [r17, o17] = (0, import_react77.useState)(0), u17 = (0, import_react77.useRef)(null), [f22, s13] = (0, import_react77.useState)(null);
  pe(f22);
  let i15 = t11 && n13 !== null && f22 !== null, { to: F6 = "bottom", gap: E12 = 0, offset: v4 = 0, padding: c15 = 0, inner: P7 } = ce(n13, f22), [a20, p6 = "center"] = F6.split(" ");
  n(() => {
    i15 && o17(0);
  }, [i15]);
  let { refs: b9, floatingStyles: w11, context: g6 } = useFloating2({ open: i15, placement: a20 === "selection" ? p6 === "center" ? "bottom" : `bottom-${p6}` : p6 === "center" ? `${a20}` : `${a20}-${p6}`, strategy: "absolute", transform: false, middleware: [offset({ mainAxis: a20 === "selection" ? 0 : E12, crossAxis: v4 }), shift({ padding: c15 }), a20 !== "selection" && flip({ padding: c15 }), a20 === "selection" && P7 ? inner({ ...P7, padding: c15, overflowRef: u17, offset: r17, minItemsVisible: q, referenceOverflowThreshold: c15, onFallbackChange(h7) {
    var O7, W5;
    if (!h7) return;
    let d13 = g6.elements.floating;
    if (!d13) return;
    let T10 = parseFloat(getComputedStyle(d13).scrollPaddingBottom) || 0, $3 = Math.min(q, d13.childElementCount), L6 = 0, N4 = 0;
    for (let m10 of (W5 = (O7 = g6.elements.floating) == null ? void 0 : O7.childNodes) != null ? W5 : []) if (m10 instanceof HTMLElement) {
      let x10 = m10.offsetTop, k5 = x10 + m10.clientHeight + T10, S7 = d13.scrollTop, U8 = S7 + d13.clientHeight;
      if (x10 >= S7 && k5 <= U8) $3--;
      else {
        N4 = Math.max(0, Math.min(k5, U8) - Math.max(x10, S7)), L6 = m10.clientHeight;
        break;
      }
    }
    $3 >= 1 && o17((m10) => {
      let x10 = L6 * $3 - N4 + T10;
      return m10 >= x10 ? m10 : x10;
    });
  } }) : null, size({ padding: c15, apply({ availableWidth: h7, availableHeight: d13, elements: T10 }) {
    Object.assign(T10.floating.style, { overflow: "auto", maxWidth: `${h7}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d13}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I6 = a20, B3 = p6] = g6.placement.split("-");
  a20 === "selection" && (I6 = "selection");
  let G7 = (0, import_react77.useMemo)(() => ({ anchor: [I6, B3].filter(Boolean).join(" ") }), [I6, B3]), K4 = useInnerOffset(g6, { overflowRef: u17, onChange: o17 }), { getReferenceProps: Q6, getFloatingProps: X4 } = useInteractions([K4]), Y4 = o4((h7) => {
    s13(h7), b9.setFloating(h7);
  });
  return j5.createElement(H6.Provider, { value: l14 }, j5.createElement(y5.Provider, { value: { setFloating: Y4, setReference: b9.setReference, styles: w11, getReferenceProps: Q6, getFloatingProps: X4, slot: G7 } }, e8));
}
function pe(e8) {
  n(() => {
    if (!e8) return;
    let t11 = new MutationObserver(() => {
      let n13 = window.getComputedStyle(e8).maxHeight, l14 = parseFloat(n13);
      if (isNaN(l14)) return;
      let r17 = parseInt(n13);
      isNaN(r17) || l14 !== r17 && (e8.style.maxHeight = `${Math.ceil(l14)}px`);
    });
    return t11.observe(e8, { attributes: true, attributeFilter: ["style"] }), () => {
      t11.disconnect();
    };
  }, [e8]);
}
function ce(e8, t11) {
  var o17, u17, f22;
  let n13 = V2((o17 = e8 == null ? void 0 : e8.gap) != null ? o17 : "var(--anchor-gap, 0)", t11), l14 = V2((u17 = e8 == null ? void 0 : e8.offset) != null ? u17 : "var(--anchor-offset, 0)", t11), r17 = V2((f22 = e8 == null ? void 0 : e8.padding) != null ? f22 : "var(--anchor-padding, 0)", t11);
  return { ...e8, gap: n13, offset: l14, padding: r17 };
}
function V2(e8, t11, n13 = void 0) {
  let l14 = p(), r17 = o4((s13, i15) => {
    if (s13 == null) return [n13, null];
    if (typeof s13 == "number") return [s13, null];
    if (typeof s13 == "string") {
      if (!i15) return [n13, null];
      let F6 = J2(s13, i15);
      return [F6, (E12) => {
        let v4 = D2(s13);
        {
          let c15 = v4.map((P7) => window.getComputedStyle(i15).getPropertyValue(P7));
          l14.requestAnimationFrame(function P7() {
            l14.nextFrame(P7);
            let a20 = false;
            for (let [b9, w11] of v4.entries()) {
              let g6 = window.getComputedStyle(i15).getPropertyValue(w11);
              if (c15[b9] !== g6) {
                c15[b9] = g6, a20 = true;
                break;
              }
            }
            if (!a20) return;
            let p6 = J2(s13, i15);
            F6 !== p6 && (E12(p6), F6 = p6);
          });
        }
        return l14.dispose;
      }];
    }
    return [n13, null];
  }), o17 = (0, import_react77.useMemo)(() => r17(e8, t11)[0], [e8, t11]), [u17 = o17, f22] = (0, import_react77.useState)();
  return n(() => {
    let [s13, i15] = r17(e8, t11);
    if (f22(s13), !!i15) return i15(f22);
  }, [e8, t11]), u17;
}
function D2(e8) {
  let t11 = /var\((.*)\)/.exec(e8);
  if (t11) {
    let n13 = t11[1].indexOf(",");
    if (n13 === -1) return [t11[1]];
    let l14 = t11[1].slice(0, n13).trim(), r17 = t11[1].slice(n13 + 1).trim();
    return r17 ? [l14, ...D2(r17)] : [l14];
  }
  return [];
}
function J2(e8, t11) {
  let n13 = document.createElement("div");
  t11.appendChild(n13), n13.style.setProperty("margin-top", "0px", "important"), n13.style.setProperty("margin-top", e8, "important");
  let l14 = parseFloat(window.getComputedStyle(n13).marginTop) || 0;
  return t11.removeChild(n13), l14;
}

// node_modules/@headlessui/react/dist/internal/frozen.js
var import_react78 = __toESM(require_react(), 1);
function f13({ children: o17, freeze: e8 }) {
  let n13 = l7(e8, o17);
  return import_react78.default.createElement(import_react78.default.Fragment, null, n13);
}
function l7(o17, e8) {
  let [n13, t11] = (0, import_react78.useState)(e8);
  return !o17 && n13 !== e8 && t11(e8), o17 ? n13 : e8;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react79 = __toESM(require_react(), 1);
var n10 = (0, import_react79.createContext)(null);
n10.displayName = "OpenClosedContext";
var i11 = ((e8) => (e8[e8.Open = 1] = "Open", e8[e8.Closed = 2] = "Closed", e8[e8.Closing = 4] = "Closing", e8[e8.Opening = 8] = "Opening", e8))(i11 || {});
function u13() {
  return (0, import_react79.useContext)(n10);
}
function c8({ value: o17, children: t11 }) {
  return import_react79.default.createElement(n10.Provider, { value: o17 }, t11);
}
function s7({ children: o17 }) {
  return import_react79.default.createElement(n10.Provider, { value: null }, o17);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t7(n13) {
  function e8() {
    document.readyState !== "loading" && (n13(), document.removeEventListener("DOMContentLoaded", e8));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e8), e8());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var r11 = [];
t7(() => {
  function e8(t11) {
    if (!(t11.target instanceof HTMLElement) || t11.target === document.body || r11[0] === t11.target) return;
    let n13 = t11.target;
    n13 = n13.closest(f10), r11.unshift(n13 != null ? n13 : t11.target), r11 = r11.filter((o17) => o17 != null && o17.isConnected), r11.splice(10);
  }
  window.addEventListener("click", e8, { capture: true }), window.addEventListener("mousedown", e8, { capture: true }), window.addEventListener("focus", e8, { capture: true }), document.body.addEventListener("click", e8, { capture: true }), document.body.addEventListener("mousedown", e8, { capture: true }), document.body.addEventListener("focus", e8, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u14(l14) {
  throw new Error("Unexpected object: " + l14);
}
var c9 = ((i15) => (i15[i15.First = 0] = "First", i15[i15.Previous = 1] = "Previous", i15[i15.Next = 2] = "Next", i15[i15.Last = 3] = "Last", i15[i15.Specific = 4] = "Specific", i15[i15.Nothing = 5] = "Nothing", i15))(c9 || {});
function f14(l14, n13) {
  let t11 = n13.resolveItems();
  if (t11.length <= 0) return null;
  let r17 = n13.resolveActiveIndex(), s13 = r17 != null ? r17 : -1;
  switch (l14.focus) {
    case 0: {
      for (let e8 = 0; e8 < t11.length; ++e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r17;
    }
    case 1: {
      s13 === -1 && (s13 = t11.length);
      for (let e8 = s13 - 1; e8 >= 0; --e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r17;
    }
    case 2: {
      for (let e8 = s13 + 1; e8 < t11.length; ++e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r17;
    }
    case 3: {
      for (let e8 = t11.length - 1; e8 >= 0; --e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r17;
    }
    case 4: {
      for (let e8 = 0; e8 < t11.length; ++e8) if (n13.resolveId(t11[e8], e8, t11) === l14.id) return e8;
      return r17;
    }
    case 5:
      return null;
    default:
      u14(l14);
  }
}

// node_modules/@headlessui/react/dist/components/mouse.js
var g2 = ((f22) => (f22[f22.Left = 0] = "Left", f22[f22.Right = 2] = "Right", f22))(g2 || {});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react82 = __toESM(require_react(), 1);
var import_react_dom6 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react80 = __toESM(require_react(), 1);
function c10(t11) {
  let r17 = o4(t11), e8 = (0, import_react80.useRef)(false);
  (0, import_react80.useEffect)(() => (e8.current = false, () => {
    e8.current = true, t(() => {
      e8.current && r17();
    });
  }), [r17]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t8 = __toESM(require_react(), 1);
function s8() {
  let r17 = typeof document == "undefined";
  return "useSyncExternalStore" in t8 ? ((o17) => o17.useSyncExternalStore)(t8)(() => () => {
  }, () => false, () => !r17) : false;
}
function l9() {
  let r17 = s8(), [e8, n13] = t8.useState(s.isHandoffComplete);
  return e8 && s.isHandoffComplete === false && n13(false), t8.useEffect(() => {
    e8 !== true && n13(true);
  }, [e8]), t8.useEffect(() => s.handoff(), []), r17 ? false : e8;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react81 = __toESM(require_react(), 1);
var e7 = (0, import_react81.createContext)(false);
function a12() {
  return (0, import_react81.useContext)(e7);
}
function l10(o17) {
  return import_react81.default.createElement(e7.Provider, { value: o17.force }, o17.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function N2(u17) {
  let r17 = a12(), n13 = (0, import_react82.useContext)(v3), e8 = n9(u17), [o17, l14] = (0, import_react82.useState)(() => {
    var t11;
    if (!r17 && n13 !== null) return (t11 = n13.current) != null ? t11 : null;
    if (s.isServer) return null;
    let p6 = e8 == null ? void 0 : e8.getElementById("headlessui-portal-root");
    if (p6) return p6;
    if (e8 === null) return null;
    let a20 = e8.createElement("div");
    return a20.setAttribute("id", "headlessui-portal-root"), e8.body.appendChild(a20);
  });
  return (0, import_react82.useEffect)(() => {
    o17 !== null && (e8 != null && e8.body.contains(o17) || e8 == null || e8.body.appendChild(o17));
  }, [o17, e8]), (0, import_react82.useEffect)(() => {
    r17 || n13 !== null && l14(n13.current);
  }, [n13, l14, r17]), o17;
}
var M3 = import_react82.Fragment;
var S5 = K(function(r17, n13) {
  let e8 = r17, o17 = (0, import_react82.useRef)(null), l14 = y(T2((i15) => {
    o17.current = i15;
  }), n13), p6 = n9(o17), a20 = N2(o17), [t11] = (0, import_react82.useState)(() => {
    var i15;
    return s.isServer ? null : (i15 = p6 == null ? void 0 : p6.createElement("div")) != null ? i15 : null;
  }), s13 = (0, import_react82.useContext)(y6), b9 = l9();
  n(() => {
    !a20 || !t11 || a20.contains(t11) || (t11.setAttribute("data-headlessui-portal", ""), a20.appendChild(t11));
  }, [a20, t11]), n(() => {
    if (t11 && s13) return s13.register(t11);
  }, [s13, t11]), c10(() => {
    var i15;
    !a20 || !t11 || (t11 instanceof Node && a20.contains(t11) && a20.removeChild(t11), a20.childNodes.length <= 0 && ((i15 = a20.parentElement) == null || i15.removeChild(a20)));
  });
  let H13 = L();
  return b9 ? !a20 || !t11 ? null : (0, import_react_dom6.createPortal)(H13({ ourProps: { ref: l14 }, theirProps: e8, slot: {}, defaultTag: M3, name: "Portal" }), t11) : null;
});
function j6(u17, r17) {
  let n13 = y(r17), { enabled: e8 = true, ...o17 } = u17, l14 = L();
  return e8 ? import_react82.default.createElement(S5, { ...o17, ref: n13 }) : l14({ ourProps: { ref: n13 }, theirProps: o17, slot: {}, defaultTag: M3, name: "Portal" });
}
var W2 = import_react82.Fragment;
var v3 = (0, import_react82.createContext)(null);
function I3(u17, r17) {
  let { target: n13, ...e8 } = u17, l14 = { ref: y(r17) }, p6 = L();
  return import_react82.default.createElement(v3.Provider, { value: n13 }, p6({ ourProps: l14, theirProps: e8, defaultTag: W2, name: "Popover.Group" }));
}
var y6 = (0, import_react82.createContext)(null);
function te() {
  let u17 = (0, import_react82.useContext)(y6), r17 = (0, import_react82.useRef)([]), n13 = o4((l14) => (r17.current.push(l14), u17 && u17.register(l14), () => e8(l14))), e8 = o4((l14) => {
    let p6 = r17.current.indexOf(l14);
    p6 !== -1 && r17.current.splice(p6, 1), u17 && u17.unregister(l14);
  }), o17 = (0, import_react82.useMemo)(() => ({ register: n13, unregister: e8, portals: r17 }), [n13, e8, r17]);
  return [r17, (0, import_react82.useMemo)(() => function({ children: p6 }) {
    return import_react82.default.createElement(y6.Provider, { value: o17 }, p6);
  }, [o17])];
}
var J3 = K(j6);
var X = K(I3);
var re = Object.assign(J3, { Group: X });

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var Ct = ((e8) => (e8[e8.Open = 0] = "Open", e8[e8.Closed = 1] = "Closed", e8))(Ct || {});
var Et = ((e8) => (e8[e8.Single = 0] = "Single", e8[e8.Multi = 1] = "Multi", e8))(Et || {});
var St = ((o17) => (o17[o17.Pointer = 0] = "Pointer", o17[o17.Focus = 1] = "Focus", o17[o17.Other = 2] = "Other", o17))(St || {});
var It = ((l14) => (l14[l14.OpenCombobox = 0] = "OpenCombobox", l14[l14.CloseCombobox = 1] = "CloseCombobox", l14[l14.GoToOption = 2] = "GoToOption", l14[l14.SetTyping = 3] = "SetTyping", l14[l14.RegisterOption = 4] = "RegisterOption", l14[l14.UnregisterOption = 5] = "UnregisterOption", l14[l14.SetActivationTrigger = 6] = "SetActivationTrigger", l14[l14.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", l14[l14.SetInputElement = 8] = "SetInputElement", l14[l14.SetButtonElement = 9] = "SetButtonElement", l14[l14.SetOptionsElement = 10] = "SetOptionsElement", l14))(It || {});
function ve(t11, n13 = (e8) => e8) {
  let e8 = t11.activeOptionIndex !== null ? t11.options[t11.activeOptionIndex] : null, o17 = n13(t11.options.slice()), f22 = o17.length > 0 && o17[0].dataRef.current.order !== null ? o17.sort((m10, d13) => m10.dataRef.current.order - d13.dataRef.current.order) : _3(o17, (m10) => m10.dataRef.current.domRef.current), b9 = e8 ? f22.indexOf(e8) : null;
  return b9 === -1 && (b9 = null), { options: f22, activeOptionIndex: b9 };
}
var Pt = { [1](t11) {
  var n13;
  return (n13 = t11.dataRef.current) != null && n13.disabled || t11.comboboxState === 1 ? t11 : { ...t11, activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, __demoMode: false };
}, [0](t11) {
  var n13, e8;
  if ((n13 = t11.dataRef.current) != null && n13.disabled || t11.comboboxState === 0) return t11;
  if ((e8 = t11.dataRef.current) != null && e8.value) {
    let o17 = t11.dataRef.current.calculateIndex(t11.dataRef.current.value);
    if (o17 !== -1) return { ...t11, activeOptionIndex: o17, comboboxState: 0, __demoMode: false };
  }
  return { ...t11, comboboxState: 0, __demoMode: false };
}, [3](t11, n13) {
  return t11.isTyping === n13.isTyping ? t11 : { ...t11, isTyping: n13.isTyping };
}, [2](t11, n13) {
  var b9, m10, d13, x10;
  if ((b9 = t11.dataRef.current) != null && b9.disabled || t11.optionsElement && !((m10 = t11.dataRef.current) != null && m10.optionsPropsRef.current.static) && t11.comboboxState === 1) return t11;
  if (t11.virtual) {
    let { options: i15, disabled: r17 } = t11.virtual, l14 = n13.focus === c9.Specific ? n13.idx : f14(n13, { resolveItems: () => i15, resolveActiveIndex: () => {
      var R9, s13;
      return (s13 = (R9 = t11.activeOptionIndex) != null ? R9 : i15.findIndex((D6) => !r17(D6))) != null ? s13 : null;
    }, resolveDisabled: r17, resolveId() {
      throw new Error("Function not implemented.");
    } }), S7 = (d13 = n13.trigger) != null ? d13 : 2;
    return t11.activeOptionIndex === l14 && t11.activationTrigger === S7 ? t11 : { ...t11, activeOptionIndex: l14, activationTrigger: S7, isTyping: false, __demoMode: false };
  }
  let e8 = ve(t11);
  if (e8.activeOptionIndex === null) {
    let i15 = e8.options.findIndex((r17) => !r17.dataRef.current.disabled);
    i15 !== -1 && (e8.activeOptionIndex = i15);
  }
  let o17 = n13.focus === c9.Specific ? n13.idx : f14(n13, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (i15) => i15.id, resolveDisabled: (i15) => i15.dataRef.current.disabled }), f22 = (x10 = n13.trigger) != null ? x10 : 2;
  return t11.activeOptionIndex === o17 && t11.activationTrigger === f22 ? t11 : { ...t11, ...e8, isTyping: false, activeOptionIndex: o17, activationTrigger: f22, __demoMode: false };
}, [4]: (t11, n13) => {
  var b9, m10, d13;
  if ((b9 = t11.dataRef.current) != null && b9.virtual) return { ...t11, options: [...t11.options, n13.payload] };
  let e8 = n13.payload, o17 = ve(t11, (x10) => (x10.push(e8), x10));
  t11.activeOptionIndex === null && (m10 = t11.dataRef.current) != null && m10.isSelected(n13.payload.dataRef.current.value) && (o17.activeOptionIndex = o17.options.indexOf(e8));
  let f22 = { ...t11, ...o17, activationTrigger: 2 };
  return (d13 = t11.dataRef.current) != null && d13.__demoMode && t11.dataRef.current.value === void 0 && (f22.activeOptionIndex = 0), f22;
}, [5]: (t11, n13) => {
  var o17;
  if ((o17 = t11.dataRef.current) != null && o17.virtual) return { ...t11, options: t11.options.filter((f22) => f22.id !== n13.id) };
  let e8 = ve(t11, (f22) => {
    let b9 = f22.findIndex((m10) => m10.id === n13.id);
    return b9 !== -1 && f22.splice(b9, 1), f22;
  });
  return { ...t11, ...e8, activationTrigger: 2 };
}, [6]: (t11, n13) => t11.activationTrigger === n13.trigger ? t11 : { ...t11, activationTrigger: n13.trigger }, [7]: (t11, n13) => {
  var o17, f22;
  if (t11.virtual === null) return { ...t11, virtual: { options: n13.options, disabled: (o17 = n13.disabled) != null ? o17 : () => false } };
  if (t11.virtual.options === n13.options && t11.virtual.disabled === n13.disabled) return t11;
  let e8 = t11.activeOptionIndex;
  if (t11.activeOptionIndex !== null) {
    let b9 = n13.options.indexOf(t11.virtual.options[t11.activeOptionIndex]);
    b9 !== -1 ? e8 = b9 : e8 = null;
  }
  return { ...t11, activeOptionIndex: e8, virtual: { options: n13.options, disabled: (f22 = n13.disabled) != null ? f22 : () => false } };
}, [8]: (t11, n13) => t11.inputElement === n13.element ? t11 : { ...t11, inputElement: n13.element }, [9]: (t11, n13) => t11.buttonElement === n13.element ? t11 : { ...t11, buttonElement: n13.element }, [10]: (t11, n13) => t11.optionsElement === n13.element ? t11 : { ...t11, optionsElement: n13.element } };
var ye2 = (0, import_react83.createContext)(null);
ye2.displayName = "ComboboxActionsContext";
function le(t11) {
  let n13 = (0, import_react83.useContext)(ye2);
  if (n13 === null) {
    let e8 = new Error(`<${t11} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, le), e8;
  }
  return n13;
}
var Ne = (0, import_react83.createContext)(null);
function At(t11) {
  let n13 = ne("VirtualProvider"), { options: e8 } = n13.virtual, [o17, f22] = (0, import_react83.useMemo)(() => {
    let i15 = n13.optionsElement;
    if (!i15) return [0, 0];
    let r17 = window.getComputedStyle(i15);
    return [parseFloat(r17.paddingBlockStart || r17.paddingTop), parseFloat(r17.paddingBlockEnd || r17.paddingBottom)];
  }, [n13.optionsElement]), b9 = useVirtualizer({ enabled: e8.length !== 0, scrollPaddingStart: o17, scrollPaddingEnd: f22, count: e8.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return n13.optionsElement;
  }, overscan: 12 }), [m10, d13] = (0, import_react83.useState)(0);
  n(() => {
    d13((i15) => i15 + 1);
  }, [e8]);
  let x10 = b9.getVirtualItems();
  return x10.length === 0 ? null : import_react83.default.createElement(Ne.Provider, { value: b9 }, import_react83.default.createElement("div", { style: { position: "relative", width: "100%", height: `${b9.getTotalSize()}px` }, ref: (i15) => {
    i15 && n13.activationTrigger !== 0 && n13.activeOptionIndex !== null && e8.length > n13.activeOptionIndex && b9.scrollToIndex(n13.activeOptionIndex);
  } }, x10.map((i15) => {
    var r17;
    return import_react83.default.createElement(import_react83.Fragment, { key: i15.key }, import_react83.default.cloneElement((r17 = t11.children) == null ? void 0 : r17.call(t11, { ...t11.slot, option: e8[i15.index] }), { key: `${m10}-${i15.key}`, "data-index": i15.index, "aria-setsize": e8.length, "aria-posinset": i15.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${i15.start}px)`, overflowAnchor: "none" } }));
  })));
}
var ae2 = (0, import_react83.createContext)(null);
ae2.displayName = "ComboboxDataContext";
function ne(t11) {
  let n13 = (0, import_react83.useContext)(ae2);
  if (n13 === null) {
    let e8 = new Error(`<${t11} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, ne), e8;
  }
  return n13;
}
function Rt(t11, n13) {
  return u2(n13.type, Pt, t11, n13);
}
var _t = import_react83.Fragment;
function ht(t11, n13) {
  var Oe4, Ce5;
  let e8 = a3(), { value: o17, defaultValue: f22, onChange: b9, form: m10, name: d13, by: x10, disabled: i15 = e8 || false, onClose: r17, __demoMode: l14 = false, multiple: S7 = false, immediate: R9 = false, virtual: s13 = null, nullable: D6, ...B3 } = t11, _8 = l2(f22), [I6 = S7 ? [] : void 0, O7] = T(o17, b9, _8), [P7, g6] = (0, import_react83.useReducer)(Rt, { dataRef: (0, import_react83.createRef)(), comboboxState: l14 ? 0 : 1, isTyping: false, options: [], virtual: s13 ? { options: s13.options, disabled: (Oe4 = s13.disabled) != null ? Oe4 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: l14 }), V6 = (0, import_react83.useRef)(false), w11 = (0, import_react83.useRef)({ static: false, hold: false }), T10 = u9(x10), $3 = o4((p6) => s13 ? x10 === null ? s13.options.indexOf(p6) : s13.options.findIndex((v4) => T10(v4, p6)) : P7.options.findIndex((v4) => T10(v4.dataRef.current.value, p6))), K4 = (0, import_react83.useCallback)((p6) => u2(u17.mode, { [1]: () => I6.some((v4) => T10(v4, p6)), [0]: () => T10(I6, p6) }), [I6]), Z4 = o4((p6) => P7.activeOptionIndex === $3(p6)), u17 = (0, import_react83.useMemo)(() => ({ ...P7, immediate: R9, optionsPropsRef: w11, value: I6, defaultValue: _8, disabled: i15, mode: S7 ? 1 : 0, virtual: s13 ? P7.virtual : null, get activeOptionIndex() {
    if (V6.current && P7.activeOptionIndex === null && (s13 ? s13.options.length > 0 : P7.options.length > 0)) {
      if (s13) {
        let v4 = s13.options.findIndex((z4) => {
          var se4, Ee3;
          return !((Ee3 = (se4 = s13.disabled) == null ? void 0 : se4.call(s13, z4)) != null && Ee3);
        });
        if (v4 !== -1) return v4;
      }
      let p6 = P7.options.findIndex((v4) => !v4.dataRef.current.disabled);
      if (p6 !== -1) return p6;
    }
    return P7.activeOptionIndex;
  }, calculateIndex: $3, compare: T10, isSelected: K4, isActive: Z4 }), [I6, _8, i15, S7, l14, P7, s13]);
  n(() => {
    var p6;
    s13 && g6({ type: 7, options: s13.options, disabled: (p6 = s13.disabled) != null ? p6 : null });
  }, [s13, s13 == null ? void 0 : s13.options, s13 == null ? void 0 : s13.disabled]), n(() => {
    P7.dataRef.current = u17;
  }, [u17]);
  let X4 = u17.comboboxState === 0;
  R3(X4, [u17.buttonElement, u17.inputElement, u17.optionsElement], () => C9.closeCombobox());
  let N4 = (0, import_react83.useMemo)(() => {
    var p6, v4, z4;
    return { open: u17.comboboxState === 0, disabled: i15, activeIndex: u17.activeOptionIndex, activeOption: u17.activeOptionIndex === null ? null : u17.virtual ? u17.virtual.options[(p6 = u17.activeOptionIndex) != null ? p6 : 0] : (z4 = (v4 = u17.options[u17.activeOptionIndex]) == null ? void 0 : v4.dataRef.current.value) != null ? z4 : null, value: I6 };
  }, [u17, i15, I6]), U8 = o4(() => {
    if (u17.activeOptionIndex !== null) {
      if (C9.setIsTyping(false), u17.virtual) j9(u17.virtual.options[u17.activeOptionIndex]);
      else {
        let { dataRef: p6 } = u17.options[u17.activeOptionIndex];
        j9(p6.current.value);
      }
      C9.goToOption(c9.Specific, u17.activeOptionIndex);
    }
  }), y9 = o4(() => {
    g6({ type: 0 }), V6.current = true;
  }), G7 = o4(() => {
    g6({ type: 1 }), V6.current = false, r17 == null || r17();
  }), ue5 = o4((p6) => {
    g6({ type: 3, isTyping: p6 });
  }), Y4 = o4((p6, v4, z4) => (V6.current = false, p6 === c9.Specific ? g6({ type: 2, focus: c9.Specific, idx: v4, trigger: z4 }) : g6({ type: 2, focus: p6, trigger: z4 }))), Q6 = o4((p6, v4) => (g6({ type: 4, payload: { id: p6, dataRef: v4 } }), () => {
    u17.isActive(v4.current.value) && (V6.current = true), g6({ type: 5, id: p6 });
  })), j9 = o4((p6) => u2(u17.mode, { [0]() {
    return O7 == null ? void 0 : O7(p6);
  }, [1]() {
    let v4 = u17.value.slice(), z4 = v4.findIndex((se4) => T10(se4, p6));
    return z4 === -1 ? v4.push(p6) : v4.splice(z4, 1), O7 == null ? void 0 : O7(v4);
  } })), h7 = o4((p6) => {
    g6({ type: 6, trigger: p6 });
  }), pe4 = o4((p6) => {
    g6({ type: 8, element: p6 });
  }), a20 = o4((p6) => {
    g6({ type: 9, element: p6 });
  }), k5 = o4((p6) => {
    g6({ type: 10, element: p6 });
  }), C9 = (0, import_react83.useMemo)(() => ({ onChange: j9, registerOption: Q6, goToOption: Y4, setIsTyping: ue5, closeCombobox: G7, openCombobox: y9, setActivationTrigger: h7, selectActiveOption: U8, setInputElement: pe4, setButtonElement: a20, setOptionsElement: k5 }), []), [H13, E12] = K2(), L6 = n13 === null ? {} : { ref: n13 }, J7 = (0, import_react83.useCallback)(() => {
    if (_8 !== void 0) return O7 == null ? void 0 : O7(_8);
  }, [O7, _8]), ke4 = L();
  return import_react83.default.createElement(E12, { value: H13, props: { htmlFor: (Ce5 = u17.inputElement) == null ? void 0 : Ce5.id }, slot: { open: u17.comboboxState === 0, disabled: i15 } }, import_react83.default.createElement(Me, null, import_react83.default.createElement(ye2.Provider, { value: C9 }, import_react83.default.createElement(ae2.Provider, { value: u17 }, import_react83.default.createElement(c8, { value: u2(u17.comboboxState, { [0]: i11.Open, [1]: i11.Closed }) }, d13 != null && import_react83.default.createElement(j2, { disabled: i15, data: I6 != null ? { [d13]: I6 } : {}, form: m10, onReset: J7 }), ke4({ ourProps: L6, theirProps: B3, slot: N4, defaultTag: _t, name: "Combobox" }))))));
}
var Mt = "input";
function Dt(t11, n13) {
  var Y4, Q6, j9, h7, pe4;
  let e8 = ne("Combobox.Input"), o17 = le("Combobox.Input"), f22 = (0, import_react49.useId)(), b9 = u5(), { id: m10 = b9 || `headlessui-combobox-input-${f22}`, onChange: d13, displayValue: x10, disabled: i15 = e8.disabled || false, autoFocus: r17 = false, type: l14 = "text", ...S7 } = t11, R9 = (0, import_react83.useRef)(null), s13 = y(R9, n13, ye(), o17.setInputElement), D6 = n9(e8.inputElement), B3 = p(), _8 = o4(() => {
    o17.onChange(null), e8.optionsElement && (e8.optionsElement.scrollTop = 0), o17.goToOption(c9.Nothing);
  }), I6 = (0, import_react83.useMemo)(() => {
    var a20;
    return typeof x10 == "function" && e8.value !== void 0 ? (a20 = x10(e8.value)) != null ? a20 : "" : typeof e8.value == "string" ? e8.value : "";
  }, [e8.value, x10]);
  m8(([a20, k5], [C9, H13]) => {
    if (e8.isTyping) return;
    let E12 = R9.current;
    E12 && ((H13 === 0 && k5 === 1 || a20 !== C9) && (E12.value = a20), requestAnimationFrame(() => {
      if (e8.isTyping || !E12 || (D6 == null ? void 0 : D6.activeElement) !== E12) return;
      let { selectionStart: L6, selectionEnd: J7 } = E12;
      Math.abs((J7 != null ? J7 : 0) - (L6 != null ? L6 : 0)) === 0 && L6 === 0 && E12.setSelectionRange(E12.value.length, E12.value.length);
    }));
  }, [I6, e8.comboboxState, D6, e8.isTyping]), m8(([a20], [k5]) => {
    if (a20 === 0 && k5 === 1) {
      if (e8.isTyping) return;
      let C9 = R9.current;
      if (!C9) return;
      let H13 = C9.value, { selectionStart: E12, selectionEnd: L6, selectionDirection: J7 } = C9;
      C9.value = "", C9.value = H13, J7 !== null ? C9.setSelectionRange(E12, L6, J7) : C9.setSelectionRange(E12, L6);
    }
  }, [e8.comboboxState]);
  let O7 = (0, import_react83.useRef)(false), P7 = o4(() => {
    O7.current = true;
  }), g6 = o4(() => {
    B3.nextFrame(() => {
      O7.current = false;
    });
  }), V6 = o4((a20) => {
    switch (o17.setIsTyping(true), a20.key) {
      case o8.Enter:
        if (e8.comboboxState !== 0 || O7.current) return;
        if (a20.preventDefault(), a20.stopPropagation(), e8.activeOptionIndex === null) {
          o17.closeCombobox();
          return;
        }
        o17.selectActiveOption(), e8.mode === 0 && o17.closeCombobox();
        break;
      case o8.ArrowDown:
        return a20.preventDefault(), a20.stopPropagation(), u2(e8.comboboxState, { [0]: () => o17.goToOption(c9.Next), [1]: () => o17.openCombobox() });
      case o8.ArrowUp:
        return a20.preventDefault(), a20.stopPropagation(), u2(e8.comboboxState, { [0]: () => o17.goToOption(c9.Previous), [1]: () => {
          (0, import_react_dom7.flushSync)(() => o17.openCombobox()), e8.value || o17.goToOption(c9.Last);
        } });
      case o8.Home:
        if (a20.shiftKey) break;
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.First);
      case o8.PageUp:
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.First);
      case o8.End:
        if (a20.shiftKey) break;
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.Last);
      case o8.PageDown:
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.Last);
      case o8.Escape:
        return e8.comboboxState !== 0 ? void 0 : (a20.preventDefault(), e8.optionsElement && !e8.optionsPropsRef.current.static && a20.stopPropagation(), e8.mode === 0 && e8.value === null && _8(), o17.closeCombobox());
      case o8.Tab:
        if (e8.comboboxState !== 0) return;
        e8.mode === 0 && e8.activationTrigger !== 1 && o17.selectActiveOption(), o17.closeCombobox();
        break;
    }
  }), w11 = o4((a20) => {
    d13 == null || d13(a20), e8.mode === 0 && a20.target.value === "" && _8(), o17.openCombobox();
  }), T10 = o4((a20) => {
    var C9, H13, E12;
    let k5 = (C9 = a20.relatedTarget) != null ? C9 : r11.find((L6) => L6 !== a20.currentTarget);
    if (!((H13 = e8.optionsElement) != null && H13.contains(k5)) && !((E12 = e8.buttonElement) != null && E12.contains(k5)) && e8.comboboxState === 0) return a20.preventDefault(), e8.mode === 0 && e8.value === null && _8(), o17.closeCombobox();
  }), $3 = o4((a20) => {
    var C9, H13, E12;
    let k5 = (C9 = a20.relatedTarget) != null ? C9 : r11.find((L6) => L6 !== a20.currentTarget);
    (H13 = e8.buttonElement) != null && H13.contains(k5) || (E12 = e8.optionsElement) != null && E12.contains(k5) || e8.disabled || e8.immediate && e8.comboboxState !== 0 && B3.microTask(() => {
      (0, import_react_dom7.flushSync)(() => o17.openCombobox()), o17.setActivationTrigger(1);
    });
  }), K4 = I(), Z4 = U2(), { isFocused: u17, focusProps: X4 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r17 }), { isHovered: N4, hoverProps: U8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i15 }), y9 = (0, import_react83.useMemo)(() => ({ open: e8.comboboxState === 0, disabled: i15, hover: N4, focus: u17, autofocus: r17 }), [e8, N4, u17, r17, i15]), G7 = _({ ref: s13, id: m10, role: "combobox", type: l14, "aria-controls": (Y4 = e8.optionsElement) == null ? void 0 : Y4.id, "aria-expanded": e8.comboboxState === 0, "aria-activedescendant": e8.activeOptionIndex === null ? void 0 : e8.virtual ? (Q6 = e8.options.find((a20) => !a20.dataRef.current.disabled && e8.compare(a20.dataRef.current.value, e8.virtual.options[e8.activeOptionIndex]))) == null ? void 0 : Q6.id : (j9 = e8.options[e8.activeOptionIndex]) == null ? void 0 : j9.id, "aria-labelledby": K4, "aria-describedby": Z4, "aria-autocomplete": "list", defaultValue: (pe4 = (h7 = t11.defaultValue) != null ? h7 : e8.defaultValue !== void 0 ? x10 == null ? void 0 : x10(e8.defaultValue) : null) != null ? pe4 : e8.defaultValue, disabled: i15 || void 0, autoFocus: r17, onCompositionStart: P7, onCompositionEnd: g6, onKeyDown: V6, onChange: w11, onFocus: $3, onBlur: T10 }, X4, U8);
  return L()({ ourProps: G7, theirProps: S7, slot: y9, defaultTag: Mt, name: "Combobox.Input" });
}
var Ft = "button";
function Vt(t11, n13) {
  var w11;
  let e8 = ne("Combobox.Button"), o17 = le("Combobox.Button"), f22 = y(n13, o17.setButtonElement), b9 = (0, import_react49.useId)(), { id: m10 = `headlessui-combobox-button-${b9}`, disabled: d13 = e8.disabled || false, autoFocus: x10 = false, ...i15 } = t11, r17 = i10(e8.inputElement), l14 = o4((T10) => {
    switch (T10.key) {
      case o8.Space:
      case o8.Enter:
        T10.preventDefault(), T10.stopPropagation(), e8.comboboxState === 1 && (0, import_react_dom7.flushSync)(() => o17.openCombobox()), r17();
        return;
      case o8.ArrowDown:
        T10.preventDefault(), T10.stopPropagation(), e8.comboboxState === 1 && ((0, import_react_dom7.flushSync)(() => o17.openCombobox()), e8.value || o17.goToOption(c9.First)), r17();
        return;
      case o8.ArrowUp:
        T10.preventDefault(), T10.stopPropagation(), e8.comboboxState === 1 && ((0, import_react_dom7.flushSync)(() => o17.openCombobox()), e8.value || o17.goToOption(c9.Last)), r17();
        return;
      case o8.Escape:
        if (e8.comboboxState !== 0) return;
        T10.preventDefault(), e8.optionsElement && !e8.optionsPropsRef.current.static && T10.stopPropagation(), (0, import_react_dom7.flushSync)(() => o17.closeCombobox()), r17();
        return;
      default:
        return;
    }
  }), S7 = o4((T10) => {
    T10.preventDefault(), !r4(T10.currentTarget) && (T10.button === g2.Left && (e8.comboboxState === 0 ? o17.closeCombobox() : o17.openCombobox()), r17());
  }), R9 = I([m10]), { isFocusVisible: s13, focusProps: D6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: x10 }), { isHovered: B3, hoverProps: _8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: d13 }), { pressed: I6, pressProps: O7 } = w({ disabled: d13 }), P7 = (0, import_react83.useMemo)(() => ({ open: e8.comboboxState === 0, active: I6 || e8.comboboxState === 0, disabled: d13, value: e8.value, hover: B3, focus: s13 }), [e8, B3, s13, I6, d13]), g6 = _({ ref: f22, id: m10, type: e6(t11, e8.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (w11 = e8.optionsElement) == null ? void 0 : w11.id, "aria-expanded": e8.comboboxState === 0, "aria-labelledby": R9, disabled: d13 || void 0, autoFocus: x10, onMouseDown: S7, onKeyDown: l14 }, D6, _8, O7);
  return L()({ ourProps: g6, theirProps: i15, slot: P7, defaultTag: Ft, name: "Combobox.Button" });
}
var Lt = "div";
var Bt = O.RenderStrategy | O.Static;
function wt(t11, n13) {
  var Y4, Q6, j9;
  let e8 = (0, import_react49.useId)(), { id: o17 = `headlessui-combobox-options-${e8}`, hold: f22 = false, anchor: b9, portal: m10 = false, modal: d13 = true, transition: x10 = false, ...i15 } = t11, r17 = ne("Combobox.Options"), l14 = le("Combobox.Options"), S7 = xe(b9);
  S7 && (m10 = true);
  let [R9, s13] = Re(S7), [D6, B3] = (0, import_react83.useState)(null), _8 = be(), I6 = y(n13, S7 ? R9 : null, l14.setOptionsElement, B3), O7 = n9(r17.optionsElement), P7 = u13(), [g6, V6] = x3(x10, D6, P7 !== null ? (P7 & i11.Open) === i11.Open : r17.comboboxState === 0);
  m6(g6, r17.inputElement, l14.closeCombobox);
  let w11 = r17.__demoMode ? false : d13 && r17.comboboxState === 0;
  f11(w11, O7);
  let T10 = r17.__demoMode ? false : d13 && r17.comboboxState === 0;
  y3(T10, { allowed: (0, import_react83.useCallback)(() => [r17.inputElement, r17.buttonElement, r17.optionsElement], [r17.inputElement, r17.buttonElement, r17.optionsElement]) }), n(() => {
    var h7;
    r17.optionsPropsRef.current.static = (h7 = t11.static) != null ? h7 : false;
  }, [r17.optionsPropsRef, t11.static]), n(() => {
    r17.optionsPropsRef.current.hold = f22;
  }, [r17.optionsPropsRef, f22]), F3(r17.comboboxState === 0, { container: r17.optionsElement, accept(h7) {
    return h7.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : h7.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(h7) {
    h7.setAttribute("role", "none");
  } });
  let $3 = I([(Y4 = r17.buttonElement) == null ? void 0 : Y4.id]), K4 = (0, import_react83.useMemo)(() => ({ open: r17.comboboxState === 0, option: void 0 }), [r17.comboboxState]), Z4 = o4(() => {
    l14.setActivationTrigger(0);
  }), u17 = o4((h7) => {
    h7.preventDefault(), l14.setActivationTrigger(0);
  }), X4 = _(S7 ? _8() : {}, { "aria-labelledby": $3, role: "listbox", "aria-multiselectable": r17.mode === 1 ? true : void 0, id: o17, ref: I6, style: { ...i15.style, ...s13, "--input-width": d3(r17.inputElement, true).width, "--button-width": d3(r17.buttonElement, true).width }, onWheel: r17.activationTrigger === 0 ? void 0 : Z4, onMouseDown: u17, ...R4(V6) }), N4 = g6 && r17.comboboxState === 1, U8 = l7(N4, (Q6 = r17.virtual) == null ? void 0 : Q6.options), y9 = l7(N4, r17.value), G7 = o4((h7) => r17.compare(y9, h7));
  if (r17.virtual) {
    if (U8 === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(i15, { children: import_react83.default.createElement(ae2.Provider, { value: U8 !== r17.virtual.options ? { ...r17, virtual: { ...r17.virtual, options: U8 } } : r17 }, import_react83.default.createElement(At, { slot: K4 }, i15.children)) });
  }
  let ue5 = L();
  return import_react83.default.createElement(re, { enabled: m10 ? t11.static || g6 : false }, import_react83.default.createElement(ae2.Provider, { value: r17.mode === 1 ? r17 : { ...r17, isSelected: G7 } }, ue5({ ourProps: X4, theirProps: { ...i15, children: import_react83.default.createElement(f13, { freeze: N4 }, typeof i15.children == "function" ? (j9 = i15.children) == null ? void 0 : j9.call(i15, K4) : i15.children) }, slot: K4, defaultTag: Lt, features: Bt, visible: g6, name: "Combobox.Options" })));
}
var Nt = "div";
function kt(t11, n13) {
  var u17, X4, N4, U8;
  let e8 = ne("Combobox.Option"), o17 = le("Combobox.Option"), f22 = (0, import_react49.useId)(), { id: b9 = `headlessui-combobox-option-${f22}`, value: m10, disabled: d13 = (N4 = (X4 = (u17 = e8.virtual) == null ? void 0 : u17.disabled) == null ? void 0 : X4.call(u17, m10)) != null ? N4 : false, order: x10 = null, ...i15 } = t11, r17 = i10(e8.inputElement), l14 = e8.virtual ? e8.activeOptionIndex === e8.calculateIndex(m10) : e8.activeOptionIndex === null ? false : ((U8 = e8.options[e8.activeOptionIndex]) == null ? void 0 : U8.id) === b9, S7 = e8.isSelected(m10), R9 = (0, import_react83.useRef)(null), s13 = s3({ disabled: d13, value: m10, domRef: R9, order: x10 }), D6 = (0, import_react83.useContext)(Ne), B3 = y(n13, R9, D6 ? D6.measureElement : null), _8 = o4(() => {
    o17.setIsTyping(false), o17.onChange(m10);
  });
  n(() => o17.registerOption(b9, s13), [s13, b9]);
  let I6 = (0, import_react83.useRef)(!(e8.virtual || e8.__demoMode));
  n(() => {
    if (!e8.virtual && !e8.__demoMode) return o2().requestAnimationFrame(() => {
      I6.current = true;
    });
  }, [e8.virtual, e8.__demoMode]), n(() => {
    if (I6.current && e8.comboboxState === 0 && l14 && e8.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var y9, G7;
      (G7 = (y9 = R9.current) == null ? void 0 : y9.scrollIntoView) == null || G7.call(y9, { block: "nearest" });
    });
  }, [R9, l14, e8.comboboxState, e8.activationTrigger, e8.activeOptionIndex]);
  let O7 = o4((y9) => {
    y9.preventDefault(), y9.button === g2.Left && (d13 || (_8(), n8() || requestAnimationFrame(() => r17()), e8.mode === 0 && o17.closeCombobox()));
  }), P7 = o4(() => {
    if (d13) return o17.goToOption(c9.Nothing);
    let y9 = e8.calculateIndex(m10);
    o17.goToOption(c9.Specific, y9);
  }), g6 = u11(), V6 = o4((y9) => g6.update(y9)), w11 = o4((y9) => {
    if (!g6.wasMoved(y9) || d13 || l14) return;
    let G7 = e8.calculateIndex(m10);
    o17.goToOption(c9.Specific, G7, 0);
  }), T10 = o4((y9) => {
    g6.wasMoved(y9) && (d13 || l14 && (e8.optionsPropsRef.current.hold || o17.goToOption(c9.Nothing)));
  }), $3 = (0, import_react83.useMemo)(() => ({ active: l14, focus: l14, selected: S7, disabled: d13 }), [l14, S7, d13]), K4 = { id: b9, ref: B3, role: "option", tabIndex: d13 === true ? void 0 : -1, "aria-disabled": d13 === true ? true : void 0, "aria-selected": S7, disabled: void 0, onMouseDown: O7, onFocus: P7, onPointerEnter: V6, onMouseEnter: V6, onPointerMove: w11, onMouseMove: w11, onPointerLeave: T10, onMouseLeave: T10 };
  return L()({ ourProps: K4, theirProps: i15, slot: $3, defaultTag: Nt, name: "Combobox.Option" });
}
var Ht = K(ht);
var Ut = K(Vt);
var Gt = K(Dt);
var zt = Q;
var Kt = K(wt);
var jt = K(kt);
var Ho = Object.assign(Ht, { Input: Gt, Button: Ut, Label: zt, Options: Kt, Option: jt });

// node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js
var import_react84 = __toESM(require_react(), 1);
var E8 = import_react84.Fragment;
function d9(o17, n13) {
  let { ...s13 } = o17, e8 = false, { isFocusVisible: t11, focusProps: p6 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), { isHovered: r17, hoverProps: i15 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: a20, pressProps: T10 } = w({ disabled: e8 }), l14 = _({ ref: n13 }, p6, i15, T10), c15 = (0, import_react84.useMemo)(() => ({ hover: r17, focus: t11, active: a20 }), [r17, t11, a20]);
  return L()({ ourProps: l14, theirProps: s13, slot: c15, defaultTag: E8, name: "DataInteractive" });
}
var x4 = K(d9);

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react91 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a13(o17, r17 = typeof document != "undefined" ? document.defaultView : null, t11) {
  let n13 = x2(o17, "escape");
  E5(r17, "keydown", (e8) => {
    n13 && (e8.defaultPrevented || e8.key === o8.Escape && t11(e8));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react85 = __toESM(require_react(), 1);
function f17() {
  var t11;
  let [e8] = (0, import_react85.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o17, c15] = (0, import_react85.useState)((t11 = e8 == null ? void 0 : e8.matches) != null ? t11 : false);
  return n(() => {
    if (!e8) return;
    function n13(r17) {
      c15(r17.matches);
    }
    return e8.addEventListener("change", n13), () => e8.removeEventListener("change", n13);
  }, [e8]), o17;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react86 = __toESM(require_react(), 1);
function R7({ defaultContainers: l14 = [], portals: n13, mainTreeNode: o17 } = {}) {
  let r17 = n9(o17), u17 = o4(() => {
    var i15, c15;
    let t11 = [];
    for (let e8 of l14) e8 !== null && (e8 instanceof HTMLElement ? t11.push(e8) : "current" in e8 && e8.current instanceof HTMLElement && t11.push(e8.current));
    if (n13 != null && n13.current) for (let e8 of n13.current) t11.push(e8);
    for (let e8 of (i15 = r17 == null ? void 0 : r17.querySelectorAll("html > *, body > *")) != null ? i15 : []) e8 !== document.body && e8 !== document.head && e8 instanceof HTMLElement && e8.id !== "headlessui-portal-root" && (o17 && (e8.contains(o17) || e8.contains((c15 = o17 == null ? void 0 : o17.getRootNode()) == null ? void 0 : c15.host)) || t11.some((m10) => e8.contains(m10)) || t11.push(e8));
    return t11;
  });
  return { resolveContainers: u17, contains: o4((t11) => u17().some((i15) => i15.contains(t11))) };
}
var a14 = (0, import_react86.createContext)(null);
function O4({ children: l14, node: n13 }) {
  let [o17, r17] = (0, import_react86.useState)(null), u17 = b5(n13 != null ? n13 : o17);
  return import_react86.default.createElement(a14.Provider, { value: u17 }, l14, u17 === null && import_react86.default.createElement(f4, { features: s4.Hidden, ref: (t11) => {
    var i15, c15;
    if (t11) {
      for (let e8 of (c15 = (i15 = u(t11)) == null ? void 0 : i15.querySelectorAll("html > *, body > *")) != null ? c15 : []) if (e8 !== document.body && e8 !== document.head && e8 instanceof HTMLElement && e8 != null && e8.contains(t11)) {
        r17(e8);
        break;
      }
    }
  } }));
}
function b5(l14 = null) {
  var n13;
  return (n13 = (0, import_react86.useContext)(a14)) != null ? n13 : l14;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react89 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react87 = __toESM(require_react(), 1);
function f19() {
  let e8 = (0, import_react87.useRef)(false);
  return n(() => (e8.current = true, () => {
    e8.current = false;
  }), []), e8;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react88 = __toESM(require_react(), 1);
var a15 = ((r17) => (r17[r17.Forwards = 0] = "Forwards", r17[r17.Backwards = 1] = "Backwards", r17))(a15 || {});
function u16() {
  let e8 = (0, import_react88.useRef)(0);
  return s5(true, "keydown", (r17) => {
    r17.key === "Tab" && (e8.current = r17.shiftKey ? 1 : 0);
  }, true), e8;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function U4(o17) {
  if (!o17) return /* @__PURE__ */ new Set();
  if (typeof o17 == "function") return new Set(o17());
  let e8 = /* @__PURE__ */ new Set();
  for (let t11 of o17.current) t11.current instanceof HTMLElement && e8.add(t11.current);
  return e8;
}
var Z = "div";
var x5 = ((n13) => (n13[n13.None = 0] = "None", n13[n13.InitialFocus = 1] = "InitialFocus", n13[n13.TabLock = 2] = "TabLock", n13[n13.FocusLock = 4] = "FocusLock", n13[n13.RestoreFocus = 8] = "RestoreFocus", n13[n13.AutoFocus = 16] = "AutoFocus", n13))(x5 || {});
function $2(o17, e8) {
  let t11 = (0, import_react89.useRef)(null), r17 = y(t11, e8), { initialFocus: s13, initialFocusFallback: a20, containers: n13, features: u17 = 15, ...f22 } = o17;
  l9() || (u17 = 0);
  let l14 = n9(t11);
  ee2(u17, { ownerDocument: l14 });
  let i15 = te3(u17, { ownerDocument: l14, container: t11, initialFocus: s13, initialFocusFallback: a20 });
  re2(u17, { ownerDocument: l14, container: t11, containers: n13, previousActiveElement: i15 });
  let R9 = u16(), g6 = o4((c15) => {
    let m10 = t11.current;
    if (!m10) return;
    ((G7) => G7())(() => {
      u2(R9.current, { [a15.Forwards]: () => {
        P6(m10, F2.First, { skipElements: [c15.relatedTarget, a20] });
      }, [a15.Backwards]: () => {
        P6(m10, F2.Last, { skipElements: [c15.relatedTarget, a20] });
      } });
    });
  }), v4 = x2(!!(u17 & 2), "focus-trap#tab-lock"), N4 = p(), F6 = (0, import_react89.useRef)(false), k5 = { ref: r17, onKeyDown(c15) {
    c15.key == "Tab" && (F6.current = true, N4.requestAnimationFrame(() => {
      F6.current = false;
    }));
  }, onBlur(c15) {
    if (!(u17 & 4)) return;
    let m10 = U4(n13);
    t11.current instanceof HTMLElement && m10.add(t11.current);
    let d13 = c15.relatedTarget;
    d13 instanceof HTMLElement && d13.dataset.headlessuiFocusGuard !== "true" && (I4(m10, d13) || (F6.current ? P6(t11.current, u2(R9.current, { [a15.Forwards]: () => F2.Next, [a15.Backwards]: () => F2.Previous }) | F2.WrapAround, { relativeTo: c15.target }) : c15.target instanceof HTMLElement && I2(c15.target)));
  } }, B3 = L();
  return import_react89.default.createElement(import_react89.default.Fragment, null, v4 && import_react89.default.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g6, features: s4.Focusable }), B3({ ourProps: k5, theirProps: f22, defaultTag: Z, name: "FocusTrap" }), v4 && import_react89.default.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g6, features: s4.Focusable }));
}
var D4 = K($2);
var ye3 = Object.assign(D4, { features: x5 });
function w6(o17 = true) {
  let e8 = (0, import_react89.useRef)(r11.slice());
  return m8(([t11], [r17]) => {
    r17 === true && t11 === false && t(() => {
      e8.current.splice(0);
    }), r17 === false && t11 === true && (e8.current = r11.slice());
  }, [o17, r11, e8]), o4(() => {
    var t11;
    return (t11 = e8.current.find((r17) => r17 != null && r17.isConnected)) != null ? t11 : null;
  });
}
function ee2(o17, { ownerDocument: e8 }) {
  let t11 = !!(o17 & 8), r17 = w6(t11);
  m8(() => {
    t11 || (e8 == null ? void 0 : e8.activeElement) === (e8 == null ? void 0 : e8.body) && I2(r17());
  }, [t11]), c10(() => {
    t11 && I2(r17());
  });
}
function te3(o17, { ownerDocument: e8, container: t11, initialFocus: r17, initialFocusFallback: s13 }) {
  let a20 = (0, import_react89.useRef)(null), n13 = x2(!!(o17 & 1), "focus-trap#initial-focus"), u17 = f19();
  return m8(() => {
    if (o17 === 0) return;
    if (!n13) {
      s13 != null && s13.current && I2(s13.current);
      return;
    }
    let f22 = t11.current;
    f22 && t(() => {
      if (!u17.current) return;
      let l14 = e8 == null ? void 0 : e8.activeElement;
      if (r17 != null && r17.current) {
        if ((r17 == null ? void 0 : r17.current) === l14) {
          a20.current = l14;
          return;
        }
      } else if (f22.contains(l14)) {
        a20.current = l14;
        return;
      }
      if (r17 != null && r17.current) I2(r17.current);
      else {
        if (o17 & 16) {
          if (P6(f22, F2.First | F2.AutoFocus) !== T5.Error) return;
        } else if (P6(f22, F2.First) !== T5.Error) return;
        if (s13 != null && s13.current && (I2(s13.current), (e8 == null ? void 0 : e8.activeElement) === s13.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a20.current = e8 == null ? void 0 : e8.activeElement;
    });
  }, [s13, n13, o17]), a20;
}
function re2(o17, { ownerDocument: e8, container: t11, containers: r17, previousActiveElement: s13 }) {
  let a20 = f19(), n13 = !!(o17 & 4);
  E5(e8 == null ? void 0 : e8.defaultView, "focus", (u17) => {
    if (!n13 || !a20.current) return;
    let f22 = U4(r17);
    t11.current instanceof HTMLElement && f22.add(t11.current);
    let l14 = s13.current;
    if (!l14) return;
    let i15 = u17.target;
    i15 && i15 instanceof HTMLElement ? I4(f22, i15) ? (s13.current = i15, I2(i15)) : (u17.preventDefault(), u17.stopPropagation(), I2(l14)) : I2(s13.current);
  }, true);
}
function I4(o17, e8) {
  for (let t11 of o17) if (t11.contains(e8)) return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react90 = __toESM(require_react(), 1);
function ue2(e8) {
  var t11;
  return !!(e8.enter || e8.enterFrom || e8.enterTo || e8.leave || e8.leaveFrom || e8.leaveTo) || ((t11 = e8.as) != null ? t11 : de2) !== import_react90.Fragment || import_react90.default.Children.count(e8.children) === 1;
}
var w7 = (0, import_react90.createContext)(null);
w7.displayName = "TransitionContext";
var _e = ((n13) => (n13.Visible = "visible", n13.Hidden = "hidden", n13))(_e || {});
function De() {
  let e8 = (0, import_react90.useContext)(w7);
  if (e8 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
function He() {
  let e8 = (0, import_react90.useContext)(M7);
  if (e8 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
var M7 = (0, import_react90.createContext)(null);
M7.displayName = "NestingContext";
function U5(e8) {
  return "children" in e8 ? U5(e8.children) : e8.current.filter(({ el: t11 }) => t11.current !== null).filter(({ state: t11 }) => t11 === "visible").length > 0;
}
function Te2(e8, t11) {
  let n13 = s3(e8), l14 = (0, import_react90.useRef)([]), S7 = f19(), R9 = p(), d13 = o4((o17, i15 = A.Hidden) => {
    let a20 = l14.current.findIndex(({ el: s13 }) => s13 === o17);
    a20 !== -1 && (u2(i15, { [A.Unmount]() {
      l14.current.splice(a20, 1);
    }, [A.Hidden]() {
      l14.current[a20].state = "hidden";
    } }), R9.microTask(() => {
      var s13;
      !U5(l14) && S7.current && ((s13 = n13.current) == null || s13.call(n13));
    }));
  }), y9 = o4((o17) => {
    let i15 = l14.current.find(({ el: a20 }) => a20 === o17);
    return i15 ? i15.state !== "visible" && (i15.state = "visible") : l14.current.push({ el: o17, state: "visible" }), () => d13(o17, A.Unmount);
  }), p6 = (0, import_react90.useRef)([]), c15 = (0, import_react90.useRef)(Promise.resolve()), C9 = (0, import_react90.useRef)({ enter: [], leave: [] }), h7 = o4((o17, i15, a20) => {
    p6.current.splice(0), t11 && (t11.chains.current[i15] = t11.chains.current[i15].filter(([s13]) => s13 !== o17)), t11 == null || t11.chains.current[i15].push([o17, new Promise((s13) => {
      p6.current.push(s13);
    })]), t11 == null || t11.chains.current[i15].push([o17, new Promise((s13) => {
      Promise.all(C9.current[i15].map(([r17, f22]) => f22)).then(() => s13());
    })]), i15 === "enter" ? c15.current = c15.current.then(() => t11 == null ? void 0 : t11.wait.current).then(() => a20(i15)) : a20(i15);
  }), g6 = o4((o17, i15, a20) => {
    Promise.all(C9.current[i15].splice(0).map(([s13, r17]) => r17)).then(() => {
      var s13;
      (s13 = p6.current.shift()) == null || s13();
    }).then(() => a20(i15));
  });
  return (0, import_react90.useMemo)(() => ({ children: l14, register: y9, unregister: d13, onStart: h7, onStop: g6, wait: c15, chains: C9 }), [y9, d13, l14, h7, g6, C9, c15]);
}
var de2 = import_react90.Fragment;
var fe2 = O.RenderStrategy;
function Ae3(e8, t11) {
  var ee7, te6;
  let { transition: n13 = true, beforeEnter: l14, afterEnter: S7, beforeLeave: R9, afterLeave: d13, enter: y9, enterFrom: p6, enterTo: c15, entered: C9, leave: h7, leaveFrom: g6, leaveTo: o17, ...i15 } = e8, [a20, s13] = (0, import_react90.useState)(null), r17 = (0, import_react90.useRef)(null), f22 = ue2(e8), j9 = y(...f22 ? [r17, t11, s13] : t11 === null ? [] : [t11]), H13 = (ee7 = i15.unmount) == null || ee7 ? A.Unmount : A.Hidden, { show: u17, appear: z4, initial: K4 } = De(), [v4, G7] = (0, import_react90.useState)(u17 ? "visible" : "hidden"), Q6 = He(), { register: A7, unregister: I6 } = Q6;
  n(() => A7(r17), [A7, r17]), n(() => {
    if (H13 === A.Hidden && r17.current) {
      if (u17 && v4 !== "visible") {
        G7("visible");
        return;
      }
      return u2(v4, { ["hidden"]: () => I6(r17), ["visible"]: () => A7(r17) });
    }
  }, [v4, r17, A7, I6, u17, H13]);
  let B3 = l9();
  n(() => {
    if (f22 && B3 && v4 === "visible" && r17.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r17, v4, B3, f22]);
  let ce5 = K4 && !z4, Y4 = z4 && u17 && K4, W5 = (0, import_react90.useRef)(false), L6 = Te2(() => {
    W5.current || (G7("hidden"), I6(r17));
  }, Q6), Z4 = o4((k5) => {
    W5.current = true;
    let F6 = k5 ? "enter" : "leave";
    L6.onStart(r17, F6, (_8) => {
      _8 === "enter" ? l14 == null || l14() : _8 === "leave" && (R9 == null || R9());
    });
  }), $3 = o4((k5) => {
    let F6 = k5 ? "enter" : "leave";
    W5.current = false, L6.onStop(r17, F6, (_8) => {
      _8 === "enter" ? S7 == null || S7() : _8 === "leave" && (d13 == null || d13());
    }), F6 === "leave" && !U5(L6) && (G7("hidden"), I6(r17));
  });
  (0, import_react90.useEffect)(() => {
    f22 && n13 || (Z4(u17), $3(u17));
  }, [u17, f22, n13]);
  let pe4 = /* @__PURE__ */ (() => !(!n13 || !f22 || !B3 || ce5))(), [, T10] = x3(pe4, a20, u17, { start: Z4, end: $3 }), Ce5 = m2({ ref: j9, className: ((te6 = t3(i15.className, Y4 && y9, Y4 && p6, T10.enter && y9, T10.enter && T10.closed && p6, T10.enter && !T10.closed && c15, T10.leave && h7, T10.leave && !T10.closed && g6, T10.leave && T10.closed && o17, !T10.transition && u17 && C9)) == null ? void 0 : te6.trim()) || void 0, ...R4(T10) }), N4 = 0;
  v4 === "visible" && (N4 |= i11.Open), v4 === "hidden" && (N4 |= i11.Closed), T10.enter && (N4 |= i11.Opening), T10.leave && (N4 |= i11.Closing);
  let he3 = L();
  return import_react90.default.createElement(M7.Provider, { value: L6 }, import_react90.default.createElement(c8, { value: N4 }, he3({ ourProps: Ce5, theirProps: i15, defaultTag: de2, features: fe2, visible: v4 === "visible", name: "Transition.Child" })));
}
function Ie(e8, t11) {
  let { show: n13, appear: l14 = false, unmount: S7 = true, ...R9 } = e8, d13 = (0, import_react90.useRef)(null), y9 = ue2(e8), p6 = y(...y9 ? [d13, t11] : t11 === null ? [] : [t11]);
  l9();
  let c15 = u13();
  if (n13 === void 0 && c15 !== null && (n13 = (c15 & i11.Open) === i11.Open), n13 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [C9, h7] = (0, import_react90.useState)(n13 ? "visible" : "hidden"), g6 = Te2(() => {
    n13 || h7("hidden");
  }), [o17, i15] = (0, import_react90.useState)(true), a20 = (0, import_react90.useRef)([n13]);
  n(() => {
    o17 !== false && a20.current[a20.current.length - 1] !== n13 && (a20.current.push(n13), i15(false));
  }, [a20, n13]);
  let s13 = (0, import_react90.useMemo)(() => ({ show: n13, appear: l14, initial: o17 }), [n13, l14, o17]);
  n(() => {
    n13 ? h7("visible") : !U5(g6) && d13.current !== null && h7("hidden");
  }, [n13, g6]);
  let r17 = { unmount: S7 }, f22 = o4(() => {
    var u17;
    o17 && i15(false), (u17 = e8.beforeEnter) == null || u17.call(e8);
  }), j9 = o4(() => {
    var u17;
    o17 && i15(false), (u17 = e8.beforeLeave) == null || u17.call(e8);
  }), H13 = L();
  return import_react90.default.createElement(M7.Provider, { value: g6 }, import_react90.default.createElement(w7.Provider, { value: s13 }, H13({ ourProps: { ...r17, as: import_react90.Fragment, children: import_react90.default.createElement(me, { ref: p6, ...r17, ...R9, beforeEnter: f22, beforeLeave: j9 }) }, theirProps: {}, defaultTag: import_react90.Fragment, features: fe2, visible: C9 === "visible", name: "Transition" })));
}
function Le(e8, t11) {
  let n13 = (0, import_react90.useContext)(w7) !== null, l14 = u13() !== null;
  return import_react90.default.createElement(import_react90.default.Fragment, null, !n13 && l14 ? import_react90.default.createElement(X2, { ref: t11, ...e8 }) : import_react90.default.createElement(me, { ref: t11, ...e8 }));
}
var X2 = K(Ie);
var me = K(Ae3);
var Fe2 = K(Le);
var ze = Object.assign(X2, { Child: Fe2, Root: X2 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Oe = ((o17) => (o17[o17.Open = 0] = "Open", o17[o17.Closed = 1] = "Closed", o17))(Oe || {});
var he = ((t11) => (t11[t11.SetTitleId = 0] = "SetTitleId", t11))(he || {});
var Se = { [0](e8, t11) {
  return e8.titleId === t11.id ? e8 : { ...e8, titleId: t11.id };
} };
var k3 = (0, import_react91.createContext)(null);
k3.displayName = "DialogContext";
function O6(e8) {
  let t11 = (0, import_react91.useContext)(k3);
  if (t11 === null) {
    let o17 = new Error(`<${e8} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, O6), o17;
  }
  return t11;
}
function Ie2(e8, t11) {
  return u2(t11.type, Se, e8, t11);
}
var V4 = K(function(t11, o17) {
  let a20 = (0, import_react49.useId)(), { id: l14 = `headlessui-dialog-${a20}`, open: i15, onClose: p6, initialFocus: d13, role: s13 = "dialog", autoFocus: f22 = true, __demoMode: u17 = false, unmount: P7 = false, ...h7 } = t11, R9 = (0, import_react91.useRef)(false);
  s13 = function() {
    return s13 === "dialog" || s13 === "alertdialog" ? s13 : (R9.current || (R9.current = true, console.warn(`Invalid role [${s13}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let c15 = u13();
  i15 === void 0 && c15 !== null && (i15 = (c15 & i11.Open) === i11.Open);
  let T10 = (0, import_react91.useRef)(null), S7 = y(T10, o17), F6 = n9(T10), g6 = i15 ? 0 : 1, [b9, q4] = (0, import_react91.useReducer)(Ie2, { titleId: null, descriptionId: null, panelRef: (0, import_react91.createRef)() }), m10 = o4(() => p6(false)), w11 = o4((r17) => q4({ type: 0, id: r17 })), D6 = l9() ? g6 === 0 : false, [z4, Q6] = te(), Z4 = { get current() {
    var r17;
    return (r17 = b9.panelRef.current) != null ? r17 : T10.current;
  } }, v4 = b5(), { resolveContainers: I6 } = R7({ mainTreeNode: v4, portals: z4, defaultContainers: [Z4] }), B3 = c15 !== null ? (c15 & i11.Closing) === i11.Closing : false;
  y3(u17 || B3 ? false : D6, { allowed: o4(() => {
    var r17, H13;
    return [(H13 = (r17 = T10.current) == null ? void 0 : r17.closest("[data-headlessui-portal]")) != null ? H13 : null];
  }), disallowed: o4(() => {
    var r17;
    return [(r17 = v4 == null ? void 0 : v4.closest("body > *:not(#headlessui-portal-root)")) != null ? r17 : null];
  }) }), R3(D6, I6, (r17) => {
    r17.preventDefault(), m10();
  }), a13(D6, F6 == null ? void 0 : F6.defaultView, (r17) => {
    r17.preventDefault(), r17.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m10();
  }), f11(u17 || B3 ? false : D6, F6, I6), m6(D6, T10, m10);
  let [ee7, te6] = w3(), oe3 = (0, import_react91.useMemo)(() => [{ dialogState: g6, close: m10, setTitleId: w11, unmount: P7 }, b9], [g6, b9, m10, w11, P7]), U8 = (0, import_react91.useMemo)(() => ({ open: g6 === 0 }), [g6]), ne4 = { ref: S7, id: l14, role: s13, tabIndex: -1, "aria-modal": u17 ? void 0 : g6 === 0 ? true : void 0, "aria-labelledby": b9.titleId, "aria-describedby": ee7, unmount: P7 }, re5 = !f17(), y9 = x5.None;
  D6 && !u17 && (y9 |= x5.RestoreFocus, y9 |= x5.TabLock, f22 && (y9 |= x5.AutoFocus), re5 && (y9 |= x5.InitialFocus));
  let le4 = L();
  return import_react91.default.createElement(s7, null, import_react91.default.createElement(l10, { force: true }, import_react91.default.createElement(re, null, import_react91.default.createElement(k3.Provider, { value: oe3 }, import_react91.default.createElement(X, { target: T10 }, import_react91.default.createElement(l10, { force: false }, import_react91.default.createElement(te6, { slot: U8 }, import_react91.default.createElement(Q6, null, import_react91.default.createElement(ye3, { initialFocus: d13, initialFocusFallback: T10, containers: I6, features: y9 }, import_react91.default.createElement(C4, { value: m10 }, le4({ ourProps: ne4, theirProps: h7, slot: U8, defaultTag: Me2, features: Ge2, visible: g6 === 0, name: "Dialog" })))))))))));
});
var Me2 = "div";
var Ge2 = O.RenderStrategy | O.Static;
function ke(e8, t11) {
  let { transition: o17 = false, open: a20, ...l14 } = e8, i15 = u13(), p6 = e8.hasOwnProperty("open") || i15 !== null, d13 = e8.hasOwnProperty("onClose");
  if (!p6 && !d13) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p6) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d13) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i15 && typeof e8.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e8.open}`);
  if (typeof e8.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e8.onClose}`);
  return (a20 !== void 0 || o17) && !l14.static ? import_react91.default.createElement(O4, null, import_react91.default.createElement(ze, { show: a20, transition: o17, unmount: l14.unmount }, import_react91.default.createElement(V4, { ref: t11, ...l14 }))) : import_react91.default.createElement(O4, null, import_react91.default.createElement(V4, { ref: t11, open: a20, ...l14 }));
}
var we = "div";
function Be(e8, t11) {
  let o17 = (0, import_react49.useId)(), { id: a20 = `headlessui-dialog-panel-${o17}`, transition: l14 = false, ...i15 } = e8, [{ dialogState: p6, unmount: d13 }, s13] = O6("Dialog.Panel"), f22 = y(t11, s13.panelRef), u17 = (0, import_react91.useMemo)(() => ({ open: p6 === 0 }), [p6]), P7 = o4((S7) => {
    S7.stopPropagation();
  }), h7 = { ref: f22, id: a20, onClick: P7 }, R9 = l14 ? Fe2 : import_react91.Fragment, c15 = l14 ? { unmount: d13 } : {}, T10 = L();
  return import_react91.default.createElement(R9, { ...c15 }, T10({ ourProps: h7, theirProps: i15, slot: u17, defaultTag: we, name: "Dialog.Panel" }));
}
var Ue2 = "div";
function He2(e8, t11) {
  let { transition: o17 = false, ...a20 } = e8, [{ dialogState: l14, unmount: i15 }] = O6("Dialog.Backdrop"), p6 = (0, import_react91.useMemo)(() => ({ open: l14 === 0 }), [l14]), d13 = { ref: t11, "aria-hidden": true }, s13 = o17 ? Fe2 : import_react91.Fragment, f22 = o17 ? { unmount: i15 } : {}, u17 = L();
  return import_react91.default.createElement(s13, { ...f22 }, u17({ ourProps: d13, theirProps: a20, slot: p6, defaultTag: Ue2, name: "Dialog.Backdrop" }));
}
var Ne2 = "h2";
function We(e8, t11) {
  let o17 = (0, import_react49.useId)(), { id: a20 = `headlessui-dialog-title-${o17}`, ...l14 } = e8, [{ dialogState: i15, setTitleId: p6 }] = O6("Dialog.Title"), d13 = y(t11);
  (0, import_react91.useEffect)(() => (p6(a20), () => p6(null)), [a20, p6]);
  let s13 = (0, import_react91.useMemo)(() => ({ open: i15 === 0 }), [i15]), f22 = { ref: d13, id: a20 };
  return L()({ ourProps: f22, theirProps: l14, slot: s13, defaultTag: Ne2, name: "Dialog.Title" });
}
var $e = K(ke);
var je = K(Be);
var Dt2 = K(He2);
var Ye = K(We);
var Pt2 = H4;
var yt = Object.assign($e, { Panel: je, Title: Ye, Description: H4 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react93 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react92 = __toESM(require_react(), 1);
var t10;
var a16 = (t10 = import_react92.default.startTransition) != null ? t10 : function(i15) {
  i15();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var ce3 = ((l14) => (l14[l14.Open = 0] = "Open", l14[l14.Closed = 1] = "Closed", l14))(ce3 || {});
var de4 = ((n13) => (n13[n13.ToggleDisclosure = 0] = "ToggleDisclosure", n13[n13.CloseDisclosure = 1] = "CloseDisclosure", n13[n13.SetButtonId = 2] = "SetButtonId", n13[n13.SetPanelId = 3] = "SetPanelId", n13[n13.SetButtonElement = 4] = "SetButtonElement", n13[n13.SetPanelElement = 5] = "SetPanelElement", n13))(de4 || {});
var Te3 = { [0]: (e8) => ({ ...e8, disclosureState: u2(e8.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e8) => e8.disclosureState === 1 ? e8 : { ...e8, disclosureState: 1 }, [2](e8, t11) {
  return e8.buttonId === t11.buttonId ? e8 : { ...e8, buttonId: t11.buttonId };
}, [3](e8, t11) {
  return e8.panelId === t11.panelId ? e8 : { ...e8, panelId: t11.panelId };
}, [4](e8, t11) {
  return e8.buttonElement === t11.element ? e8 : { ...e8, buttonElement: t11.element };
}, [5](e8, t11) {
  return e8.panelElement === t11.element ? e8 : { ...e8, panelElement: t11.element };
} };
var _5 = (0, import_react93.createContext)(null);
_5.displayName = "DisclosureContext";
function M8(e8) {
  let t11 = (0, import_react93.useContext)(_5);
  if (t11 === null) {
    let l14 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l14, M8), l14;
  }
  return t11;
}
var F4 = (0, import_react93.createContext)(null);
F4.displayName = "DisclosureAPIContext";
function J4(e8) {
  let t11 = (0, import_react93.useContext)(F4);
  if (t11 === null) {
    let l14 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l14, J4), l14;
  }
  return t11;
}
var H8 = (0, import_react93.createContext)(null);
H8.displayName = "DisclosurePanelContext";
function fe3() {
  return (0, import_react93.useContext)(H8);
}
function me2(e8, t11) {
  return u2(t11.type, Te3, e8, t11);
}
var De2 = import_react93.Fragment;
function ye4(e8, t11) {
  let { defaultOpen: l14 = false, ...p6 } = e8, i15 = (0, import_react93.useRef)(null), c15 = y(t11, T2((a20) => {
    i15.current = a20;
  }, e8.as === void 0 || e8.as === import_react93.Fragment)), n13 = (0, import_react93.useReducer)(me2, { disclosureState: l14 ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: o17, buttonId: r17 }, m10] = n13, s13 = o4((a20) => {
    m10({ type: 1 });
    let d13 = u(i15);
    if (!d13 || !r17) return;
    let T10 = (() => a20 ? a20 instanceof HTMLElement ? a20 : a20.current instanceof HTMLElement ? a20.current : d13.getElementById(r17) : d13.getElementById(r17))();
    T10 == null || T10.focus();
  }), E12 = (0, import_react93.useMemo)(() => ({ close: s13 }), [s13]), f22 = (0, import_react93.useMemo)(() => ({ open: o17 === 0, close: s13 }), [o17, s13]), D6 = { ref: c15 }, S7 = L();
  return import_react93.default.createElement(_5.Provider, { value: n13 }, import_react93.default.createElement(F4.Provider, { value: E12 }, import_react93.default.createElement(C4, { value: s13 }, import_react93.default.createElement(c8, { value: u2(o17, { [0]: i11.Open, [1]: i11.Closed }) }, S7({ ourProps: D6, theirProps: p6, slot: f22, defaultTag: De2, name: "Disclosure" })))));
}
var Pe2 = "button";
function Ee(e8, t11) {
  let l14 = (0, import_react49.useId)(), { id: p6 = `headlessui-disclosure-button-${l14}`, disabled: i15 = false, autoFocus: c15 = false, ...n13 } = e8, [o17, r17] = M8("Disclosure.Button"), m10 = fe3(), s13 = m10 === null ? false : m10 === o17.panelId, E12 = (0, import_react93.useRef)(null), f22 = y(E12, t11, o4((u17) => {
    if (!s13) return r17({ type: 4, element: u17 });
  }));
  (0, import_react93.useEffect)(() => {
    if (!s13) return r17({ type: 2, buttonId: p6 }), () => {
      r17({ type: 2, buttonId: null });
    };
  }, [p6, r17, s13]);
  let D6 = o4((u17) => {
    var g6;
    if (s13) {
      if (o17.disclosureState === 1) return;
      switch (u17.key) {
        case o8.Space:
        case o8.Enter:
          u17.preventDefault(), u17.stopPropagation(), r17({ type: 0 }), (g6 = o17.buttonElement) == null || g6.focus();
          break;
      }
    } else switch (u17.key) {
      case o8.Space:
      case o8.Enter:
        u17.preventDefault(), u17.stopPropagation(), r17({ type: 0 });
        break;
    }
  }), S7 = o4((u17) => {
    switch (u17.key) {
      case o8.Space:
        u17.preventDefault();
        break;
    }
  }), a20 = o4((u17) => {
    var g6;
    r4(u17.currentTarget) || i15 || (s13 ? (r17({ type: 0 }), (g6 = o17.buttonElement) == null || g6.focus()) : r17({ type: 0 }));
  }), { isFocusVisible: d13, focusProps: T10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: c15 }), { isHovered: b9, hoverProps: h7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i15 }), { pressed: U8, pressProps: N4 } = w({ disabled: i15 }), X4 = (0, import_react93.useMemo)(() => ({ open: o17.disclosureState === 0, hover: b9, active: U8, disabled: i15, focus: d13, autofocus: c15 }), [o17, b9, U8, d13, i15, c15]), k5 = e6(e8, o17.buttonElement), V6 = s13 ? _({ ref: f22, type: k5, disabled: i15 || void 0, autoFocus: c15, onKeyDown: D6, onClick: a20 }, T10, h7, N4) : _({ ref: f22, id: p6, type: k5, "aria-expanded": o17.disclosureState === 0, "aria-controls": o17.panelElement ? o17.panelId : void 0, disabled: i15 || void 0, autoFocus: c15, onKeyDown: D6, onKeyUp: S7, onClick: a20 }, T10, h7, N4);
  return L()({ ourProps: V6, theirProps: n13, slot: X4, defaultTag: Pe2, name: "Disclosure.Button" });
}
var Se2 = "div";
var ge2 = O.RenderStrategy | O.Static;
function Ae4(e8, t11) {
  let l14 = (0, import_react49.useId)(), { id: p6 = `headlessui-disclosure-panel-${l14}`, transition: i15 = false, ...c15 } = e8, [n13, o17] = M8("Disclosure.Panel"), { close: r17 } = J4("Disclosure.Panel"), [m10, s13] = (0, import_react93.useState)(null), E12 = y(t11, o4((b9) => {
    a16(() => o17({ type: 5, element: b9 }));
  }), s13);
  (0, import_react93.useEffect)(() => (o17({ type: 3, panelId: p6 }), () => {
    o17({ type: 3, panelId: null });
  }), [p6, o17]);
  let f22 = u13(), [D6, S7] = x3(i15, m10, f22 !== null ? (f22 & i11.Open) === i11.Open : n13.disclosureState === 0), a20 = (0, import_react93.useMemo)(() => ({ open: n13.disclosureState === 0, close: r17 }), [n13.disclosureState, r17]), d13 = { ref: E12, id: p6, ...R4(S7) }, T10 = L();
  return import_react93.default.createElement(s7, null, import_react93.default.createElement(H8.Provider, { value: n13.panelId }, T10({ ourProps: d13, theirProps: c15, slot: a20, defaultTag: Se2, features: ge2, visible: D6, name: "Disclosure.Panel" })));
}
var be2 = K(ye4);
var Ce = K(Ee);
var Re2 = K(Ae4);
var je2 = Object.assign(be2, { Button: Ce, Panel: Re2 });

// node_modules/@headlessui/react/dist/components/field/field.js
var import_react94 = __toESM(require_react(), 1);
var _6 = "div";
function c13(d13, l14) {
  let t11 = `headlessui-control-${(0, import_react49.useId)()}`, [s13, p6] = K2(), [n13, a20] = w3(), m10 = a3(), { disabled: e8 = m10 || false, ...i15 } = d13, o17 = (0, import_react94.useMemo)(() => ({ disabled: e8 }), [e8]), F6 = { ref: l14, disabled: e8 || void 0, "aria-disabled": e8 || void 0 }, T10 = L();
  return import_react94.default.createElement(l, { value: e8 }, import_react94.default.createElement(p6, { value: s13 }, import_react94.default.createElement(a20, { value: n13 }, import_react94.default.createElement(f6, { id: t11 }, T10({ ourProps: F6, theirProps: { ...i15, children: import_react94.default.createElement(W, null, typeof i15.children == "function" ? i15.children(o17) : i15.children) }, slot: o17, defaultTag: _6, name: "Field" })))));
}
var H9 = K(c13);

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var import_react96 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js
var import_react95 = __toESM(require_react(), 1);
function l11(t11) {
  let e8 = typeof t11 == "string" ? t11 : void 0, [s13, o17] = (0, import_react95.useState)(e8);
  return [e8 != null ? e8 : s13, (0, import_react95.useCallback)((n13) => {
    e8 || n13 instanceof HTMLElement && o17(n13.tagName.toLowerCase());
  }, [e8])];
}

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var d11 = "fieldset";
function _7(t11, a20) {
  var s13;
  let i15 = a3(), { disabled: e8 = i15 || false, ...p6 } = t11, [n13, T10] = l11((s13 = t11.as) != null ? s13 : d11), l14 = y(a20, T10), [r17, f22] = K2(), m10 = (0, import_react96.useMemo)(() => ({ disabled: e8 }), [e8]), y9 = n13 === "fieldset" ? { ref: l14, "aria-labelledby": r17, disabled: e8 || void 0 } : { ref: l14, role: "group", "aria-labelledby": r17, "aria-disabled": e8 || void 0 }, F6 = L();
  return import_react96.default.createElement(l, { value: e8 }, import_react96.default.createElement(f22, null, F6({ ourProps: y9, theirProps: p6, slot: m10, defaultTag: d11, name: "Fieldset" })));
}
var G5 = K(_7);

// node_modules/@headlessui/react/dist/components/input/input.js
var import_react97 = __toESM(require_react(), 1);
var x7 = "input";
function h6(p6, s13) {
  let a20 = (0, import_react49.useId)(), l14 = u5(), i15 = a3(), { id: d13 = l14 || `headlessui-input-${a20}`, disabled: e8 = i15 || false, autoFocus: o17 = false, invalid: t11 = false, ...u17 } = p6, f22 = I(), m10 = U2(), { isFocused: r17, focusProps: T10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o17 }), { isHovered: n13, hoverProps: b9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), y9 = _({ ref: s13, id: d13, "aria-labelledby": f22, "aria-describedby": m10, "aria-invalid": t11 ? "" : void 0, disabled: e8 || void 0, autoFocus: o17 }, T10, b9), I6 = (0, import_react97.useMemo)(() => ({ disabled: e8, invalid: t11, hover: n13, focus: r17, autofocus: o17 }), [e8, t11, n13, r17, o17]);
  return L()({ ourProps: y9, theirProps: u17, slot: I6, defaultTag: x7, name: "Input" });
}
var S6 = K(h6);

// node_modules/@headlessui/react/dist/components/legend/legend.js
var import_react98 = __toESM(require_react(), 1);
function o15(t11, n13) {
  return import_react98.default.createElement(Q, { as: "div", ref: n13, ...t11 });
}
var d12 = K(o15);

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react101 = __toESM(require_react(), 1);
var import_react_dom8 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-did-element-move.js
var import_react99 = __toESM(require_react(), 1);
function s9(n13, t11) {
  let e8 = (0, import_react99.useRef)({ left: 0, top: 0 });
  if (n(() => {
    if (!t11) return;
    let r17 = t11.getBoundingClientRect();
    r17 && (e8.current = r17);
  }, [n13, t11]), t11 == null || !n13 || t11 === document.activeElement) return false;
  let o17 = t11.getBoundingClientRect();
  return o17.top !== e8.current.top || o17.left !== e8.current.left;
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react100 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a18 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o16(e8) {
  var r17, i15;
  let n13 = (r17 = e8.innerText) != null ? r17 : "", t11 = e8.cloneNode(true);
  if (!(t11 instanceof HTMLElement)) return n13;
  let u17 = false;
  for (let f22 of t11.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f22.remove(), u17 = true;
  let l14 = u17 ? (i15 = t11.innerText) != null ? i15 : "" : n13;
  return a18.test(l14) && (l14 = l14.replace(a18, "")), l14;
}
function g5(e8) {
  let n13 = e8.getAttribute("aria-label");
  if (typeof n13 == "string") return n13.trim();
  let t11 = e8.getAttribute("aria-labelledby");
  if (t11) {
    let u17 = t11.split(" ").map((l14) => {
      let r17 = document.getElementById(l14);
      if (r17) {
        let i15 = r17.getAttribute("aria-label");
        return typeof i15 == "string" ? i15.trim() : o16(r17).trim();
      }
      return null;
    }).filter(Boolean);
    if (u17.length > 0) return u17.join(", ");
  }
  return o16(e8).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s10(c15) {
  let t11 = (0, import_react100.useRef)(""), r17 = (0, import_react100.useRef)("");
  return o4(() => {
    let e8 = c15.current;
    if (!e8) return "";
    let u17 = e8.innerText;
    if (t11.current === u17) return r17.current;
    let n13 = g5(e8).trim().toLowerCase();
    return t11.current = u17, r17.current = n13, n13;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var gt = ((o17) => (o17[o17.Open = 0] = "Open", o17[o17.Closed = 1] = "Closed", o17))(gt || {});
var Lt2 = ((o17) => (o17[o17.Single = 0] = "Single", o17[o17.Multi = 1] = "Multi", o17))(Lt2 || {});
var St2 = ((o17) => (o17[o17.Pointer = 0] = "Pointer", o17[o17.Other = 1] = "Other", o17))(St2 || {});
var Et2 = ((n13) => (n13[n13.OpenListbox = 0] = "OpenListbox", n13[n13.CloseListbox = 1] = "CloseListbox", n13[n13.GoToOption = 2] = "GoToOption", n13[n13.Search = 3] = "Search", n13[n13.ClearSearch = 4] = "ClearSearch", n13[n13.RegisterOption = 5] = "RegisterOption", n13[n13.UnregisterOption = 6] = "UnregisterOption", n13[n13.SetButtonElement = 7] = "SetButtonElement", n13[n13.SetOptionsElement = 8] = "SetOptionsElement", n13))(Et2 || {});
function be3(e8, i15 = (o17) => o17) {
  let o17 = e8.activeOptionIndex !== null ? e8.options[e8.activeOptionIndex] : null, r17 = _3(i15(e8.options.slice()), (m10) => m10.dataRef.current.domRef.current), a20 = o17 ? r17.indexOf(o17) : null;
  return a20 === -1 && (a20 = null), { options: r17, activeOptionIndex: a20 };
}
var Pt3 = { [1](e8) {
  return e8.dataRef.current.disabled || e8.listboxState === 1 ? e8 : { ...e8, activeOptionIndex: null, listboxState: 1, __demoMode: false };
}, [0](e8) {
  if (e8.dataRef.current.disabled || e8.listboxState === 0) return e8;
  let i15 = e8.activeOptionIndex, { isSelected: o17 } = e8.dataRef.current, r17 = e8.options.findIndex((a20) => o17(a20.dataRef.current.value));
  return r17 !== -1 && (i15 = r17), { ...e8, listboxState: 0, activeOptionIndex: i15, __demoMode: false };
}, [2](e8, i15) {
  var m10, x10, d13, p6, n13;
  if (e8.dataRef.current.disabled || e8.listboxState === 1) return e8;
  let o17 = { ...e8, searchQuery: "", activationTrigger: (m10 = i15.trigger) != null ? m10 : 1, __demoMode: false };
  if (i15.focus === c9.Nothing) return { ...o17, activeOptionIndex: null };
  if (i15.focus === c9.Specific) return { ...o17, activeOptionIndex: e8.options.findIndex((u17) => u17.id === i15.id) };
  if (i15.focus === c9.Previous) {
    let u17 = e8.activeOptionIndex;
    if (u17 !== null) {
      let P7 = e8.options[u17].dataRef.current.domRef, t11 = f14(i15, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (s13) => s13.id, resolveDisabled: (s13) => s13.dataRef.current.disabled });
      if (t11 !== null) {
        let s13 = e8.options[t11].dataRef.current.domRef;
        if (((x10 = P7.current) == null ? void 0 : x10.previousElementSibling) === s13.current || ((d13 = s13.current) == null ? void 0 : d13.previousElementSibling) === null) return { ...o17, activeOptionIndex: t11 };
      }
    }
  } else if (i15.focus === c9.Next) {
    let u17 = e8.activeOptionIndex;
    if (u17 !== null) {
      let P7 = e8.options[u17].dataRef.current.domRef, t11 = f14(i15, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (s13) => s13.id, resolveDisabled: (s13) => s13.dataRef.current.disabled });
      if (t11 !== null) {
        let s13 = e8.options[t11].dataRef.current.domRef;
        if (((p6 = P7.current) == null ? void 0 : p6.nextElementSibling) === s13.current || ((n13 = s13.current) == null ? void 0 : n13.nextElementSibling) === null) return { ...o17, activeOptionIndex: t11 };
      }
    }
  }
  let r17 = be3(e8), a20 = f14(i15, { resolveItems: () => r17.options, resolveActiveIndex: () => r17.activeOptionIndex, resolveId: (u17) => u17.id, resolveDisabled: (u17) => u17.dataRef.current.disabled });
  return { ...o17, ...r17, activeOptionIndex: a20 };
}, [3]: (e8, i15) => {
  if (e8.dataRef.current.disabled || e8.listboxState === 1) return e8;
  let r17 = e8.searchQuery !== "" ? 0 : 1, a20 = e8.searchQuery + i15.value.toLowerCase(), x10 = (e8.activeOptionIndex !== null ? e8.options.slice(e8.activeOptionIndex + r17).concat(e8.options.slice(0, e8.activeOptionIndex + r17)) : e8.options).find((p6) => {
    var n13;
    return !p6.dataRef.current.disabled && ((n13 = p6.dataRef.current.textValue) == null ? void 0 : n13.startsWith(a20));
  }), d13 = x10 ? e8.options.indexOf(x10) : -1;
  return d13 === -1 || d13 === e8.activeOptionIndex ? { ...e8, searchQuery: a20 } : { ...e8, searchQuery: a20, activeOptionIndex: d13, activationTrigger: 1 };
}, [4](e8) {
  return e8.dataRef.current.disabled || e8.listboxState === 1 || e8.searchQuery === "" ? e8 : { ...e8, searchQuery: "" };
}, [5]: (e8, i15) => {
  let o17 = { id: i15.id, dataRef: i15.dataRef }, r17 = be3(e8, (a20) => [...a20, o17]);
  return e8.activeOptionIndex === null && e8.dataRef.current.isSelected(i15.dataRef.current.value) && (r17.activeOptionIndex = r17.options.indexOf(o17)), { ...e8, ...r17 };
}, [6]: (e8, i15) => {
  let o17 = be3(e8, (r17) => {
    let a20 = r17.findIndex((m10) => m10.id === i15.id);
    return a20 !== -1 && r17.splice(a20, 1), r17;
  });
  return { ...e8, ...o17, activationTrigger: 1 };
}, [7]: (e8, i15) => e8.buttonElement === i15.element ? e8 : { ...e8, buttonElement: i15.element }, [8]: (e8, i15) => e8.optionsElement === i15.element ? e8 : { ...e8, optionsElement: i15.element } };
var Te4 = (0, import_react101.createContext)(null);
Te4.displayName = "ListboxActionsContext";
function Z2(e8) {
  let i15 = (0, import_react101.useContext)(Te4);
  if (i15 === null) {
    let o17 = new Error(`<${e8} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, Z2), o17;
  }
  return i15;
}
var ee3 = (0, import_react101.createContext)(null);
ee3.displayName = "ListboxDataContext";
function Q3(e8) {
  let i15 = (0, import_react101.useContext)(ee3);
  if (i15 === null) {
    let o17 = new Error(`<${e8} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, Q3), o17;
  }
  return i15;
}
function Rt2(e8, i15) {
  return u2(i15.type, Pt3, e8, i15);
}
var At2 = import_react101.Fragment;
function ht2(e8, i15) {
  var me4;
  let o17 = a3(), { value: r17, defaultValue: a20, form: m10, name: x10, onChange: d13, by: p6, invalid: n13 = false, disabled: u17 = o17 || false, horizontal: P7 = false, multiple: t11 = false, __demoMode: s13 = false, ...F6 } = e8;
  const M9 = P7 ? "horizontal" : "vertical";
  let h7 = y(i15), D6 = l2(a20), [O7 = t11 ? [] : void 0, g6] = T(r17, d13, D6), [R9, y9] = (0, import_react101.useReducer)(Rt2, { dataRef: (0, import_react101.createRef)(), listboxState: s13 ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: false, buttonElement: null, optionsElement: null, __demoMode: s13 }), B3 = (0, import_react101.useRef)({ static: false, hold: false }), w11 = (0, import_react101.useRef)(/* @__PURE__ */ new Map()), _8 = u9(p6), b9 = (0, import_react101.useCallback)((f22) => u2(c15.mode, { [1]: () => O7.some((S7) => _8(S7, f22)), [0]: () => _8(O7, f22) }), [O7]), c15 = (0, import_react101.useMemo)(() => ({ ...R9, value: O7, disabled: u17, invalid: n13, mode: t11 ? 1 : 0, orientation: M9, compare: _8, isSelected: b9, optionsPropsRef: B3, listRef: w11 }), [O7, u17, n13, t11, R9, w11]);
  n(() => {
    R9.dataRef.current = c15;
  }, [c15]);
  let N4 = c15.listboxState === 0;
  R3(N4, [c15.buttonElement, c15.optionsElement], (f22, S7) => {
    var C9;
    y9({ type: 1 }), A2(S7, h5.Loose) || (f22.preventDefault(), (C9 = c15.buttonElement) == null || C9.focus());
  });
  let L6 = (0, import_react101.useMemo)(() => ({ open: c15.listboxState === 0, disabled: u17, invalid: n13, value: O7 }), [c15, u17, O7, n13]), H13 = o4((f22) => {
    let S7 = c15.options.find((C9) => C9.id === f22);
    S7 && K4(S7.dataRef.current.value);
  }), te6 = o4(() => {
    if (c15.activeOptionIndex !== null) {
      let { dataRef: f22, id: S7 } = c15.options[c15.activeOptionIndex];
      K4(f22.current.value), y9({ type: 2, focus: c9.Specific, id: S7 });
    }
  }), oe3 = o4(() => y9({ type: 0 })), X4 = o4(() => y9({ type: 1 })), J7 = p(), ne4 = o4((f22, S7, C9) => {
    J7.dispose(), J7.microTask(() => f22 === c9.Specific ? y9({ type: 2, focus: c9.Specific, id: S7, trigger: C9 }) : y9({ type: 2, focus: f22, trigger: C9 }));
  }), ie5 = o4((f22, S7) => (y9({ type: 5, id: f22, dataRef: S7 }), () => y9({ type: 6, id: f22 }))), K4 = o4((f22) => u2(c15.mode, { [0]() {
    return g6 == null ? void 0 : g6(f22);
  }, [1]() {
    let S7 = c15.value.slice(), C9 = S7.findIndex((Re4) => _8(Re4, f22));
    return C9 === -1 ? S7.push(f22) : S7.splice(C9, 1), g6 == null ? void 0 : g6(S7);
  } })), re5 = o4((f22) => y9({ type: 3, value: f22 })), $3 = o4(() => y9({ type: 4 })), q4 = o4((f22) => {
    y9({ type: 7, element: f22 });
  }), l14 = o4((f22) => {
    y9({ type: 8, element: f22 });
  }), I6 = (0, import_react101.useMemo)(() => ({ onChange: K4, registerOption: ie5, goToOption: ne4, closeListbox: X4, openListbox: oe3, selectActiveOption: te6, selectOption: H13, search: re5, clearSearch: $3, setButtonElement: q4, setOptionsElement: l14 }), []), [G7, le4] = K2({ inherit: true }), Se5 = { ref: h7 }, Ee3 = (0, import_react101.useCallback)(() => {
    if (D6 !== void 0) return g6 == null ? void 0 : g6(D6);
  }, [g6, D6]), Pe4 = L();
  return import_react101.default.createElement(le4, { value: G7, props: { htmlFor: (me4 = c15.buttonElement) == null ? void 0 : me4.id }, slot: { open: c15.listboxState === 0, disabled: u17 } }, import_react101.default.createElement(Me, null, import_react101.default.createElement(Te4.Provider, { value: I6 }, import_react101.default.createElement(ee3.Provider, { value: c15 }, import_react101.default.createElement(c8, { value: u2(c15.listboxState, { [0]: i11.Open, [1]: i11.Closed }) }, x10 != null && O7 != null && import_react101.default.createElement(j2, { disabled: u17, data: { [x10]: O7 }, form: m10, onReset: Ee3 }), Pe4({ ourProps: Se5, theirProps: F6, slot: L6, defaultTag: At2, name: "Listbox" }))))));
}
var Dt3 = "button";
function _t2(e8, i15) {
  var N4;
  let o17 = Q3("Listbox.Button"), r17 = Z2("Listbox.Button"), a20 = (0, import_react49.useId)(), m10 = u5(), { id: x10 = m10 || `headlessui-listbox-button-${a20}`, disabled: d13 = o17.disabled || false, autoFocus: p6 = false, ...n13 } = e8, u17 = y(i15, ye(), r17.setButtonElement), P7 = Fe(), t11 = o4((L6) => {
    switch (L6.key) {
      case o8.Enter:
        p2(L6.currentTarget);
        break;
      case o8.Space:
      case o8.ArrowDown:
        L6.preventDefault(), (0, import_react_dom8.flushSync)(() => r17.openListbox()), o17.value || r17.goToOption(c9.First);
        break;
      case o8.ArrowUp:
        L6.preventDefault(), (0, import_react_dom8.flushSync)(() => r17.openListbox()), o17.value || r17.goToOption(c9.Last);
        break;
    }
  }), s13 = o4((L6) => {
    switch (L6.key) {
      case o8.Space:
        L6.preventDefault();
        break;
    }
  }), F6 = o4((L6) => {
    var H13;
    if (r4(L6.currentTarget)) return L6.preventDefault();
    o17.listboxState === 0 ? ((0, import_react_dom8.flushSync)(() => r17.closeListbox()), (H13 = o17.buttonElement) == null || H13.focus({ preventScroll: true })) : (L6.preventDefault(), r17.openListbox());
  }), M9 = o4((L6) => L6.preventDefault()), h7 = I([x10]), D6 = U2(), { isFocusVisible: O7, focusProps: g6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p6 }), { isHovered: R9, hoverProps: y9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: d13 }), { pressed: B3, pressProps: w11 } = w({ disabled: d13 }), _8 = (0, import_react101.useMemo)(() => ({ open: o17.listboxState === 0, active: B3 || o17.listboxState === 0, disabled: d13, invalid: o17.invalid, value: o17.value, hover: R9, focus: O7, autofocus: p6 }), [o17.listboxState, o17.value, d13, R9, O7, B3, o17.invalid, p6]), b9 = _(P7(), { ref: u17, id: x10, type: e6(e8, o17.buttonElement), "aria-haspopup": "listbox", "aria-controls": (N4 = o17.optionsElement) == null ? void 0 : N4.id, "aria-expanded": o17.listboxState === 0, "aria-labelledby": h7, "aria-describedby": D6, disabled: d13 || void 0, autoFocus: p6, onKeyDown: t11, onKeyUp: s13, onKeyPress: M9, onClick: F6 }, g6, y9, w11);
  return L()({ ourProps: b9, theirProps: n13, slot: _8, defaultTag: Dt3, name: "Listbox.Button" });
}
var Le2 = (0, import_react101.createContext)(false);
var It2 = "div";
var Ct2 = O.RenderStrategy | O.Static;
function Ft2(e8, i15) {
  var $3, q4;
  let o17 = (0, import_react49.useId)(), { id: r17 = `headlessui-listbox-options-${o17}`, anchor: a20, portal: m10 = false, modal: x10 = true, transition: d13 = false, ...p6 } = e8, n13 = xe(a20), [u17, P7] = (0, import_react101.useState)(null);
  n13 && (m10 = true);
  let t11 = Q3("Listbox.Options"), s13 = Z2("Listbox.Options"), F6 = n9(t11.optionsElement), M9 = u13(), [h7, D6] = x3(d13, u17, M9 !== null ? (M9 & i11.Open) === i11.Open : t11.listboxState === 0);
  m6(h7, t11.buttonElement, s13.closeListbox);
  let O7 = t11.__demoMode ? false : x10 && t11.listboxState === 0;
  f11(O7, F6);
  let g6 = t11.__demoMode ? false : x10 && t11.listboxState === 0;
  y3(g6, { allowed: (0, import_react101.useCallback)(() => [t11.buttonElement, t11.optionsElement], [t11.buttonElement, t11.optionsElement]) });
  let R9 = t11.listboxState !== 0, B3 = s9(R9, t11.buttonElement) ? false : h7, w11 = h7 && t11.listboxState === 1, _8 = l7(w11, t11.value), b9 = o4((l14) => t11.compare(_8, l14)), c15 = (0, import_react101.useMemo)(() => {
    var I6;
    if (n13 == null || !((I6 = n13 == null ? void 0 : n13.to) != null && I6.includes("selection"))) return null;
    let l14 = t11.options.findIndex((G7) => b9(G7.dataRef.current.value));
    return l14 === -1 && (l14 = 0), l14;
  }, [n13, t11.options]), N4 = (() => {
    if (n13 == null) return;
    if (c15 === null) return { ...n13, inner: void 0 };
    let l14 = Array.from(t11.listRef.current.values());
    return { ...n13, inner: { listRef: { current: l14 }, index: c15 } };
  })(), [L6, H13] = Re(N4), te6 = be(), oe3 = y(i15, n13 ? L6 : null, s13.setOptionsElement, P7), X4 = p();
  (0, import_react101.useEffect)(() => {
    var I6;
    let l14 = t11.optionsElement;
    l14 && t11.listboxState === 0 && l14 !== ((I6 = u(l14)) == null ? void 0 : I6.activeElement) && (l14 == null || l14.focus({ preventScroll: true }));
  }, [t11.listboxState, t11.optionsElement]);
  let J7 = o4((l14) => {
    var I6, G7;
    switch (X4.dispose(), l14.key) {
      case o8.Space:
        if (t11.searchQuery !== "") return l14.preventDefault(), l14.stopPropagation(), s13.search(l14.key);
      case o8.Enter:
        if (l14.preventDefault(), l14.stopPropagation(), t11.activeOptionIndex !== null) {
          let { dataRef: le4 } = t11.options[t11.activeOptionIndex];
          s13.onChange(le4.current.value);
        }
        t11.mode === 0 && ((0, import_react_dom8.flushSync)(() => s13.closeListbox()), (I6 = t11.buttonElement) == null || I6.focus({ preventScroll: true }));
        break;
      case u2(t11.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.Next);
      case u2(t11.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.Previous);
      case o8.Home:
      case o8.PageUp:
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.First);
      case o8.End:
      case o8.PageDown:
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.Last);
      case o8.Escape:
        l14.preventDefault(), l14.stopPropagation(), (0, import_react_dom8.flushSync)(() => s13.closeListbox()), (G7 = t11.buttonElement) == null || G7.focus({ preventScroll: true });
        return;
      case o8.Tab:
        l14.preventDefault(), l14.stopPropagation(), (0, import_react_dom8.flushSync)(() => s13.closeListbox()), j3(t11.buttonElement, l14.shiftKey ? F2.Previous : F2.Next);
        break;
      default:
        l14.key.length === 1 && (s13.search(l14.key), X4.setTimeout(() => s13.clearSearch(), 350));
        break;
    }
  }), ne4 = ($3 = t11.buttonElement) == null ? void 0 : $3.id, ie5 = (0, import_react101.useMemo)(() => ({ open: t11.listboxState === 0 }), [t11.listboxState]), K4 = _(n13 ? te6() : {}, { id: r17, ref: oe3, "aria-activedescendant": t11.activeOptionIndex === null || (q4 = t11.options[t11.activeOptionIndex]) == null ? void 0 : q4.id, "aria-multiselectable": t11.mode === 1 ? true : void 0, "aria-labelledby": ne4, "aria-orientation": t11.orientation, onKeyDown: J7, role: "listbox", tabIndex: t11.listboxState === 0 ? 0 : void 0, style: { ...p6.style, ...H13, "--button-width": d3(t11.buttonElement, true).width }, ...R4(D6) }), re5 = L();
  return import_react101.default.createElement(re, { enabled: m10 ? e8.static || h7 : false }, import_react101.default.createElement(ee3.Provider, { value: t11.mode === 1 ? t11 : { ...t11, isSelected: b9 } }, re5({ ourProps: K4, theirProps: p6, slot: ie5, defaultTag: It2, features: Ct2, visible: B3, name: "Listbox.Options" })));
}
var Mt2 = "div";
function Bt2(e8, i15) {
  let o17 = (0, import_react49.useId)(), { id: r17 = `headlessui-listbox-option-${o17}`, disabled: a20 = false, value: m10, ...x10 } = e8, d13 = (0, import_react101.useContext)(Le2) === true, p6 = Q3("Listbox.Option"), n13 = Z2("Listbox.Option"), u17 = p6.activeOptionIndex !== null ? p6.options[p6.activeOptionIndex].id === r17 : false, P7 = p6.isSelected(m10), t11 = (0, import_react101.useRef)(null), s13 = s10(t11), F6 = s3({ disabled: a20, value: m10, domRef: t11, get textValue() {
    return s13();
  } }), M9 = y(i15, t11, (b9) => {
    b9 ? p6.listRef.current.set(r17, b9) : p6.listRef.current.delete(r17);
  });
  n(() => {
    if (!p6.__demoMode && p6.listboxState === 0 && u17 && p6.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var b9, c15;
      (c15 = (b9 = t11.current) == null ? void 0 : b9.scrollIntoView) == null || c15.call(b9, { block: "nearest" });
    });
  }, [t11, u17, p6.__demoMode, p6.listboxState, p6.activationTrigger, p6.activeOptionIndex]), n(() => {
    if (!d13) return n13.registerOption(r17, F6);
  }, [F6, r17, d13]);
  let h7 = o4((b9) => {
    var c15;
    if (a20) return b9.preventDefault();
    n13.onChange(m10), p6.mode === 0 && ((0, import_react_dom8.flushSync)(() => n13.closeListbox()), (c15 = p6.buttonElement) == null || c15.focus({ preventScroll: true }));
  }), D6 = o4(() => {
    if (a20) return n13.goToOption(c9.Nothing);
    n13.goToOption(c9.Specific, r17);
  }), O7 = u11(), g6 = o4((b9) => {
    O7.update(b9), !a20 && (u17 || n13.goToOption(c9.Specific, r17, 0));
  }), R9 = o4((b9) => {
    O7.wasMoved(b9) && (a20 || u17 || n13.goToOption(c9.Specific, r17, 0));
  }), y9 = o4((b9) => {
    O7.wasMoved(b9) && (a20 || u17 && n13.goToOption(c9.Nothing));
  }), B3 = (0, import_react101.useMemo)(() => ({ active: u17, focus: u17, selected: P7, disabled: a20, selectedOption: P7 && d13 }), [u17, P7, a20, d13]), w11 = d13 ? {} : { id: r17, ref: M9, role: "option", tabIndex: a20 === true ? void 0 : -1, "aria-disabled": a20 === true ? true : void 0, "aria-selected": P7, disabled: void 0, onClick: h7, onFocus: D6, onPointerEnter: g6, onMouseEnter: g6, onPointerMove: R9, onMouseMove: R9, onPointerLeave: y9, onMouseLeave: y9 }, _8 = L();
  return !P7 && d13 ? null : _8({ ourProps: w11, theirProps: x10, slot: B3, defaultTag: Mt2, name: "Listbox.Option" });
}
var wt2 = import_react101.Fragment;
function kt2(e8, i15) {
  let { options: o17, placeholder: r17, ...a20 } = e8, x10 = { ref: y(i15) }, d13 = Q3("ListboxSelectedOption"), p6 = (0, import_react101.useMemo)(() => ({}), []), n13 = d13.value === void 0 || d13.value === null || d13.mode === 1 && Array.isArray(d13.value) && d13.value.length === 0, u17 = L();
  return import_react101.default.createElement(Le2.Provider, { value: true }, u17({ ourProps: x10, theirProps: { ...a20, children: import_react101.default.createElement(import_react101.default.Fragment, null, r17 && n13 ? r17 : o17) }, slot: p6, defaultTag: wt2, name: "ListboxSelectedOption" }));
}
var Ut2 = K(ht2);
var Nt2 = K(_t2);
var Ht2 = Q;
var Gt2 = K(Ft2);
var Vt2 = K(Bt2);
var Kt2 = K(kt2);
var Mo = Object.assign(Ut2, { Button: Nt2, Label: Ht2, Options: Gt2, Option: Vt2, SelectedOption: Kt2 });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react102 = __toESM(require_react(), 1);
var import_react_dom9 = __toESM(require_react_dom(), 1);
var qe = ((r17) => (r17[r17.Open = 0] = "Open", r17[r17.Closed = 1] = "Closed", r17))(qe || {});
var ze2 = ((r17) => (r17[r17.Pointer = 0] = "Pointer", r17[r17.Other = 1] = "Other", r17))(ze2 || {});
var Ye2 = ((a20) => (a20[a20.OpenMenu = 0] = "OpenMenu", a20[a20.CloseMenu = 1] = "CloseMenu", a20[a20.GoToItem = 2] = "GoToItem", a20[a20.Search = 3] = "Search", a20[a20.ClearSearch = 4] = "ClearSearch", a20[a20.RegisterItem = 5] = "RegisterItem", a20[a20.UnregisterItem = 6] = "UnregisterItem", a20[a20.SetButtonElement = 7] = "SetButtonElement", a20[a20.SetItemsElement = 8] = "SetItemsElement", a20))(Ye2 || {});
function j7(e8, n13 = (r17) => r17) {
  let r17 = e8.activeItemIndex !== null ? e8.items[e8.activeItemIndex] : null, l14 = _3(n13(e8.items.slice()), (u17) => u17.dataRef.current.domRef.current), o17 = r17 ? l14.indexOf(r17) : null;
  return o17 === -1 && (o17 = null), { items: l14, activeItemIndex: o17 };
}
var Ze = { [1](e8) {
  return e8.menuState === 1 ? e8 : { ...e8, activeItemIndex: null, menuState: 1 };
}, [0](e8) {
  return e8.menuState === 0 ? e8 : { ...e8, __demoMode: false, menuState: 0 };
}, [2]: (e8, n13) => {
  var u17, p6, s13, m10, a20;
  if (e8.menuState === 1) return e8;
  let r17 = { ...e8, searchQuery: "", activationTrigger: (u17 = n13.trigger) != null ? u17 : 1, __demoMode: false };
  if (n13.focus === c9.Nothing) return { ...r17, activeItemIndex: null };
  if (n13.focus === c9.Specific) return { ...r17, activeItemIndex: e8.items.findIndex((t11) => t11.id === n13.id) };
  if (n13.focus === c9.Previous) {
    let t11 = e8.activeItemIndex;
    if (t11 !== null) {
      let d13 = e8.items[t11].dataRef.current.domRef, f22 = f14(n13, { resolveItems: () => e8.items, resolveActiveIndex: () => e8.activeItemIndex, resolveId: (c15) => c15.id, resolveDisabled: (c15) => c15.dataRef.current.disabled });
      if (f22 !== null) {
        let c15 = e8.items[f22].dataRef.current.domRef;
        if (((p6 = d13.current) == null ? void 0 : p6.previousElementSibling) === c15.current || ((s13 = c15.current) == null ? void 0 : s13.previousElementSibling) === null) return { ...r17, activeItemIndex: f22 };
      }
    }
  } else if (n13.focus === c9.Next) {
    let t11 = e8.activeItemIndex;
    if (t11 !== null) {
      let d13 = e8.items[t11].dataRef.current.domRef, f22 = f14(n13, { resolveItems: () => e8.items, resolveActiveIndex: () => e8.activeItemIndex, resolveId: (c15) => c15.id, resolveDisabled: (c15) => c15.dataRef.current.disabled });
      if (f22 !== null) {
        let c15 = e8.items[f22].dataRef.current.domRef;
        if (((m10 = d13.current) == null ? void 0 : m10.nextElementSibling) === c15.current || ((a20 = c15.current) == null ? void 0 : a20.nextElementSibling) === null) return { ...r17, activeItemIndex: f22 };
      }
    }
  }
  let l14 = j7(e8), o17 = f14(n13, { resolveItems: () => l14.items, resolveActiveIndex: () => l14.activeItemIndex, resolveId: (t11) => t11.id, resolveDisabled: (t11) => t11.dataRef.current.disabled });
  return { ...r17, ...l14, activeItemIndex: o17 };
}, [3]: (e8, n13) => {
  let l14 = e8.searchQuery !== "" ? 0 : 1, o17 = e8.searchQuery + n13.value.toLowerCase(), p6 = (e8.activeItemIndex !== null ? e8.items.slice(e8.activeItemIndex + l14).concat(e8.items.slice(0, e8.activeItemIndex + l14)) : e8.items).find((m10) => {
    var a20;
    return ((a20 = m10.dataRef.current.textValue) == null ? void 0 : a20.startsWith(o17)) && !m10.dataRef.current.disabled;
  }), s13 = p6 ? e8.items.indexOf(p6) : -1;
  return s13 === -1 || s13 === e8.activeItemIndex ? { ...e8, searchQuery: o17 } : { ...e8, searchQuery: o17, activeItemIndex: s13, activationTrigger: 1 };
}, [4](e8) {
  return e8.searchQuery === "" ? e8 : { ...e8, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e8, n13) => {
  let r17 = j7(e8, (l14) => [...l14, { id: n13.id, dataRef: n13.dataRef }]);
  return { ...e8, ...r17 };
}, [6]: (e8, n13) => {
  let r17 = j7(e8, (l14) => {
    let o17 = l14.findIndex((u17) => u17.id === n13.id);
    return o17 !== -1 && l14.splice(o17, 1), l14;
  });
  return { ...e8, ...r17, activationTrigger: 1 };
}, [7]: (e8, n13) => e8.buttonElement === n13.element ? e8 : { ...e8, buttonElement: n13.element }, [8]: (e8, n13) => e8.itemsElement === n13.element ? e8 : { ...e8, itemsElement: n13.element } };
var Q4 = (0, import_react102.createContext)(null);
Q4.displayName = "MenuContext";
function w9(e8) {
  let n13 = (0, import_react102.useContext)(Q4);
  if (n13 === null) {
    let r17 = new Error(`<${e8} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r17, w9), r17;
  }
  return n13;
}
function et(e8, n13) {
  return u2(n13.type, Ze, e8, n13);
}
var tt = import_react102.Fragment;
function nt(e8, n13) {
  let { __demoMode: r17 = false, ...l14 } = e8, o17 = (0, import_react102.useReducer)(et, { __demoMode: r17, menuState: r17 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: u17, itemsElement: p6, buttonElement: s13 }, m10] = o17, a20 = y(n13);
  R3(u17 === 0, [s13, p6], (b9, S7) => {
    m10({ type: 1 }), A2(S7, h5.Loose) || (b9.preventDefault(), s13 == null || s13.focus());
  });
  let d13 = o4(() => {
    m10({ type: 1 });
  }), f22 = (0, import_react102.useMemo)(() => ({ open: u17 === 0, close: d13 }), [u17, d13]), c15 = { ref: a20 }, A7 = L();
  return import_react102.default.createElement(Me, null, import_react102.default.createElement(Q4.Provider, { value: o17 }, import_react102.default.createElement(c8, { value: u2(u17, { [0]: i11.Open, [1]: i11.Closed }) }, A7({ ourProps: c15, theirProps: l14, slot: f22, defaultTag: tt, name: "Menu" }))));
}
var rt = "button";
function ot(e8, n13) {
  var h7;
  let r17 = (0, import_react49.useId)(), { id: l14 = `headlessui-menu-button-${r17}`, disabled: o17 = false, autoFocus: u17 = false, ...p6 } = e8, [s13, m10] = w9("Menu.Button"), a20 = Fe(), t11 = y(n13, ye(), o4((T10) => m10({ type: 7, element: T10 }))), d13 = o4((T10) => {
    switch (T10.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        T10.preventDefault(), T10.stopPropagation(), (0, import_react_dom9.flushSync)(() => m10({ type: 0 })), m10({ type: 2, focus: c9.First });
        break;
      case o8.ArrowUp:
        T10.preventDefault(), T10.stopPropagation(), (0, import_react_dom9.flushSync)(() => m10({ type: 0 })), m10({ type: 2, focus: c9.Last });
        break;
    }
  }), f22 = o4((T10) => {
    switch (T10.key) {
      case o8.Space:
        T10.preventDefault();
        break;
    }
  }), c15 = o4((T10) => {
    var F6;
    if (r4(T10.currentTarget)) return T10.preventDefault();
    o17 || (s13.menuState === 0 ? ((0, import_react_dom9.flushSync)(() => m10({ type: 1 })), (F6 = s13.buttonElement) == null || F6.focus({ preventScroll: true })) : (T10.preventDefault(), m10({ type: 0 })));
  }), { isFocusVisible: A7, focusProps: b9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: u17 }), { isHovered: S7, hoverProps: D6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: o17 }), { pressed: M9, pressProps: P7 } = w({ disabled: o17 }), v4 = (0, import_react102.useMemo)(() => ({ open: s13.menuState === 0, active: M9 || s13.menuState === 0, disabled: o17, hover: S7, focus: A7, autofocus: u17 }), [s13, S7, A7, M9, o17, u17]), C9 = _(a20(), { ref: t11, id: l14, type: e6(e8, s13.buttonElement), "aria-haspopup": "menu", "aria-controls": (h7 = s13.itemsElement) == null ? void 0 : h7.id, "aria-expanded": s13.menuState === 0, disabled: o17 || void 0, autoFocus: u17, onKeyDown: d13, onKeyUp: f22, onClick: c15 }, b9, D6, P7);
  return L()({ ourProps: C9, theirProps: p6, slot: v4, defaultTag: rt, name: "Menu.Button" });
}
var at = "div";
var lt = O.RenderStrategy | O.Static;
function it(e8, n13) {
  var J7, V6;
  let r17 = (0, import_react49.useId)(), { id: l14 = `headlessui-menu-items-${r17}`, anchor: o17, portal: u17 = false, modal: p6 = true, transition: s13 = false, ...m10 } = e8, a20 = xe(o17), [t11, d13] = w9("Menu.Items"), [f22, c15] = Re(a20), A7 = be(), [b9, S7] = (0, import_react102.useState)(null), D6 = y(n13, a20 ? f22 : null, o4((i15) => d13({ type: 8, element: i15 })), S7), M9 = n9(t11.itemsElement);
  a20 && (u17 = true);
  let P7 = u13(), [v4, C9] = x3(s13, b9, P7 !== null ? (P7 & i11.Open) === i11.Open : t11.menuState === 0);
  m6(v4, t11.buttonElement, () => {
    d13({ type: 1 });
  });
  let O7 = t11.__demoMode ? false : p6 && t11.menuState === 0;
  f11(O7, M9);
  let h7 = t11.__demoMode ? false : p6 && t11.menuState === 0;
  y3(h7, { allowed: (0, import_react102.useCallback)(() => [t11.buttonElement, t11.itemsElement], [t11.buttonElement, t11.itemsElement]) });
  let T10 = t11.menuState !== 0, K4 = s9(T10, t11.buttonElement) ? false : v4;
  (0, import_react102.useEffect)(() => {
    let i15 = t11.itemsElement;
    i15 && t11.menuState === 0 && i15 !== (M9 == null ? void 0 : M9.activeElement) && i15.focus({ preventScroll: true });
  }, [t11.menuState, t11.itemsElement, M9]), F3(t11.menuState === 0, { container: t11.itemsElement, accept(i15) {
    return i15.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : i15.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(i15) {
    i15.setAttribute("role", "none");
  } });
  let I6 = p(), G7 = o4((i15) => {
    var X4, $3, q4;
    switch (I6.dispose(), i15.key) {
      case o8.Space:
        if (t11.searchQuery !== "") return i15.preventDefault(), i15.stopPropagation(), d13({ type: 3, value: i15.key });
      case o8.Enter:
        if (i15.preventDefault(), i15.stopPropagation(), d13({ type: 1 }), t11.activeItemIndex !== null) {
          let { dataRef: ue5 } = t11.items[t11.activeItemIndex];
          ($3 = (X4 = ue5.current) == null ? void 0 : X4.domRef.current) == null || $3.click();
        }
        G2(t11.buttonElement);
        break;
      case o8.ArrowDown:
        return i15.preventDefault(), i15.stopPropagation(), d13({ type: 2, focus: c9.Next });
      case o8.ArrowUp:
        return i15.preventDefault(), i15.stopPropagation(), d13({ type: 2, focus: c9.Previous });
      case o8.Home:
      case o8.PageUp:
        return i15.preventDefault(), i15.stopPropagation(), d13({ type: 2, focus: c9.First });
      case o8.End:
      case o8.PageDown:
        return i15.preventDefault(), i15.stopPropagation(), d13({ type: 2, focus: c9.Last });
      case o8.Escape:
        i15.preventDefault(), i15.stopPropagation(), (0, import_react_dom9.flushSync)(() => d13({ type: 1 })), (q4 = t11.buttonElement) == null || q4.focus({ preventScroll: true });
        break;
      case o8.Tab:
        i15.preventDefault(), i15.stopPropagation(), (0, import_react_dom9.flushSync)(() => d13({ type: 1 })), j3(t11.buttonElement, i15.shiftKey ? F2.Previous : F2.Next);
        break;
      default:
        i15.key.length === 1 && (d13({ type: 3, value: i15.key }), I6.setTimeout(() => d13({ type: 4 }), 350));
        break;
    }
  }), ae6 = o4((i15) => {
    switch (i15.key) {
      case o8.Space:
        i15.preventDefault();
        break;
    }
  }), le4 = (0, import_react102.useMemo)(() => ({ open: t11.menuState === 0 }), [t11.menuState]), ie5 = _(a20 ? A7() : {}, { "aria-activedescendant": t11.activeItemIndex === null || (J7 = t11.items[t11.activeItemIndex]) == null ? void 0 : J7.id, "aria-labelledby": (V6 = t11.buttonElement) == null ? void 0 : V6.id, id: l14, onKeyDown: G7, onKeyUp: ae6, role: "menu", tabIndex: t11.menuState === 0 ? 0 : void 0, ref: D6, style: { ...m10.style, ...c15, "--button-width": d3(t11.buttonElement, true).width }, ...R4(C9) }), se4 = L();
  return import_react102.default.createElement(re, { enabled: u17 ? e8.static || v4 : false }, se4({ ourProps: ie5, theirProps: m10, slot: le4, defaultTag: at, features: lt, visible: K4, name: "Menu.Items" }));
}
var st = import_react102.Fragment;
function ut(e8, n13) {
  let r17 = (0, import_react49.useId)(), { id: l14 = `headlessui-menu-item-${r17}`, disabled: o17 = false, ...u17 } = e8, [p6, s13] = w9("Menu.Item"), m10 = p6.activeItemIndex !== null ? p6.items[p6.activeItemIndex].id === l14 : false, a20 = (0, import_react102.useRef)(null), t11 = y(n13, a20);
  n(() => {
    if (!p6.__demoMode && p6.menuState === 0 && m10 && p6.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var I6, G7;
      (G7 = (I6 = a20.current) == null ? void 0 : I6.scrollIntoView) == null || G7.call(I6, { block: "nearest" });
    });
  }, [p6.__demoMode, a20, m10, p6.menuState, p6.activationTrigger, p6.activeItemIndex]);
  let d13 = s10(a20), f22 = (0, import_react102.useRef)({ disabled: o17, domRef: a20, get textValue() {
    return d13();
  } });
  n(() => {
    f22.current.disabled = o17;
  }, [f22, o17]), n(() => (s13({ type: 5, id: l14, dataRef: f22 }), () => s13({ type: 6, id: l14 })), [f22, l14]);
  let c15 = o4(() => {
    s13({ type: 1 });
  }), A7 = o4((I6) => {
    if (o17) return I6.preventDefault();
    s13({ type: 1 }), G2(p6.buttonElement);
  }), b9 = o4(() => {
    if (o17) return s13({ type: 2, focus: c9.Nothing });
    s13({ type: 2, focus: c9.Specific, id: l14 });
  }), S7 = u11(), D6 = o4((I6) => {
    S7.update(I6), !o17 && (m10 || s13({ type: 2, focus: c9.Specific, id: l14, trigger: 0 }));
  }), M9 = o4((I6) => {
    S7.wasMoved(I6) && (o17 || m10 || s13({ type: 2, focus: c9.Specific, id: l14, trigger: 0 }));
  }), P7 = o4((I6) => {
    S7.wasMoved(I6) && (o17 || m10 && s13({ type: 2, focus: c9.Nothing }));
  }), [v4, C9] = K2(), [O7, h7] = w3(), T10 = (0, import_react102.useMemo)(() => ({ active: m10, focus: m10, disabled: o17, close: c15 }), [m10, o17, c15]), F6 = { id: l14, ref: t11, role: "menuitem", tabIndex: o17 === true ? void 0 : -1, "aria-disabled": o17 === true ? true : void 0, "aria-labelledby": v4, "aria-describedby": O7, disabled: void 0, onClick: A7, onFocus: b9, onPointerEnter: D6, onMouseEnter: D6, onPointerMove: M9, onMouseMove: M9, onPointerLeave: P7, onMouseLeave: P7 }, K4 = L();
  return import_react102.default.createElement(C9, null, import_react102.default.createElement(h7, null, K4({ ourProps: F6, theirProps: u17, slot: T10, defaultTag: st, name: "Menu.Item" })));
}
var pt = "div";
function mt(e8, n13) {
  let [r17, l14] = K2(), o17 = e8, u17 = { ref: n13, "aria-labelledby": r17, role: "group" }, p6 = L();
  return import_react102.default.createElement(l14, null, p6({ ourProps: u17, theirProps: o17, slot: {}, defaultTag: pt, name: "Menu.Section" }));
}
var dt = "header";
function ct(e8, n13) {
  let r17 = (0, import_react49.useId)(), { id: l14 = `headlessui-menu-heading-${r17}`, ...o17 } = e8, u17 = P5();
  n(() => u17.register(l14), [l14, u17.register]);
  let p6 = { id: l14, ref: n13, role: "presentation", ...u17.props };
  return L()({ ourProps: p6, theirProps: o17, slot: {}, defaultTag: dt, name: "Menu.Heading" });
}
var ft = "div";
function Tt(e8, n13) {
  let r17 = e8, l14 = { ref: n13, role: "separator" };
  return L()({ ourProps: l14, theirProps: r17, slot: {}, defaultTag: ft, name: "Menu.Separator" });
}
var yt2 = K(nt);
var It3 = K(ot);
var gt2 = K(it);
var Et3 = K(ut);
var Mt3 = K(mt);
var St3 = K(ct);
var At3 = K(Tt);
var rn = Object.assign(yt2, { Button: It3, Items: gt2, Item: Et3, Section: Mt3, Heading: St3, Separator: At3 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react103 = __toESM(require_react(), 1);
var lt2 = ((f22) => (f22[f22.Open = 0] = "Open", f22[f22.Closed = 1] = "Closed", f22))(lt2 || {});
var at2 = ((p6) => (p6[p6.TogglePopover = 0] = "TogglePopover", p6[p6.ClosePopover = 1] = "ClosePopover", p6[p6.SetButton = 2] = "SetButton", p6[p6.SetButtonId = 3] = "SetButtonId", p6[p6.SetPanel = 4] = "SetPanel", p6[p6.SetPanelId = 5] = "SetPanelId", p6))(at2 || {});
var pt2 = { [0]: (o17) => ({ ...o17, popoverState: u2(o17.popoverState, { [0]: 1, [1]: 0 }), __demoMode: false }), [1](o17) {
  return o17.popoverState === 1 ? o17 : { ...o17, popoverState: 1, __demoMode: false };
}, [2](o17, a20) {
  return o17.button === a20.button ? o17 : { ...o17, button: a20.button };
}, [3](o17, a20) {
  return o17.buttonId === a20.buttonId ? o17 : { ...o17, buttonId: a20.buttonId };
}, [4](o17, a20) {
  return o17.panel === a20.panel ? o17 : { ...o17, panel: a20.panel };
}, [5](o17, a20) {
  return o17.panelId === a20.panelId ? o17 : { ...o17, panelId: a20.panelId };
} };
var Ee2 = (0, import_react103.createContext)(null);
Ee2.displayName = "PopoverContext";
function se3(o17) {
  let a20 = (0, import_react103.useContext)(Ee2);
  if (a20 === null) {
    let f22 = new Error(`<${o17} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f22, se3), f22;
  }
  return a20;
}
var ue4 = (0, import_react103.createContext)(null);
ue4.displayName = "PopoverAPIContext";
function be4(o17) {
  let a20 = (0, import_react103.useContext)(ue4);
  if (a20 === null) {
    let f22 = new Error(`<${o17} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(f22, be4), f22;
  }
  return a20;
}
var ge3 = (0, import_react103.createContext)(null);
ge3.displayName = "PopoverGroupContext";
function Me3() {
  return (0, import_react103.useContext)(ge3);
}
var ie4 = (0, import_react103.createContext)(null);
ie4.displayName = "PopoverPanelContext";
function st2() {
  return (0, import_react103.useContext)(ie4);
}
function ut2(o17, a20) {
  return u2(a20.type, pt2, o17, a20);
}
var it2 = "div";
function dt2(o17, a20) {
  var J7;
  let { __demoMode: f22 = false, ...C9 } = o17, T10 = (0, import_react103.useRef)(null), S7 = y(a20, T2((t11) => {
    T10.current = t11;
  })), p6 = (0, import_react103.useRef)([]), l14 = (0, import_react103.useReducer)(ut2, { __demoMode: f22, popoverState: f22 ? 0 : 1, buttons: p6, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react103.createRef)(), afterPanelSentinel: (0, import_react103.createRef)(), afterButtonSentinel: (0, import_react103.createRef)() }), [{ popoverState: c15, button: d13, buttonId: r17, panel: s13, panelId: R9, beforePanelSentinel: m10, afterPanelSentinel: h7, afterButtonSentinel: P7 }, n13] = l14, v4 = n9((J7 = T10.current) != null ? J7 : d13), g6 = (0, import_react103.useMemo)(() => {
    if (!d13 || !s13) return false;
    for (let E12 of document.querySelectorAll("body > *")) if (Number(E12 == null ? void 0 : E12.contains(d13)) ^ Number(E12 == null ? void 0 : E12.contains(s13))) return true;
    let t11 = b2(), e8 = t11.indexOf(d13), u17 = (e8 + t11.length - 1) % t11.length, i15 = (e8 + 1) % t11.length, A7 = t11[u17], x10 = t11[i15];
    return !s13.contains(A7) && !s13.contains(x10);
  }, [d13, s13]), _8 = s3(r17), L6 = s3(R9), I6 = (0, import_react103.useMemo)(() => ({ buttonId: _8, panelId: L6, close: () => n13({ type: 1 }) }), [_8, L6, n13]), M9 = Me3(), k5 = M9 == null ? void 0 : M9.registerPopover, B3 = o4(() => {
    var t11;
    return (t11 = M9 == null ? void 0 : M9.isFocusWithinPopoverGroup()) != null ? t11 : (v4 == null ? void 0 : v4.activeElement) && ((d13 == null ? void 0 : d13.contains(v4.activeElement)) || (s13 == null ? void 0 : s13.contains(v4.activeElement)));
  });
  (0, import_react103.useEffect)(() => k5 == null ? void 0 : k5(I6), [k5, I6]);
  let [U8, O7] = te(), N4 = b5(d13), w11 = R7({ mainTreeNode: N4, portals: U8, defaultContainers: [d13, s13] });
  E5(v4 == null ? void 0 : v4.defaultView, "focus", (t11) => {
    var e8, u17, i15, A7, x10, E12;
    t11.target !== window && t11.target instanceof HTMLElement && c15 === 0 && (B3() || d13 && s13 && (w11.contains(t11.target) || (u17 = (e8 = m10.current) == null ? void 0 : e8.contains) != null && u17.call(e8, t11.target) || (A7 = (i15 = h7.current) == null ? void 0 : i15.contains) != null && A7.call(i15, t11.target) || (E12 = (x10 = P7.current) == null ? void 0 : x10.contains) != null && E12.call(x10, t11.target) || n13({ type: 1 })));
  }, true), R3(c15 === 0, w11.resolveContainers, (t11, e8) => {
    n13({ type: 1 }), A2(e8, h5.Loose) || (t11.preventDefault(), d13 == null || d13.focus());
  });
  let F6 = o4((t11) => {
    n13({ type: 1 });
    let e8 = (() => t11 ? t11 instanceof HTMLElement ? t11 : "current" in t11 && t11.current instanceof HTMLElement ? t11.current : d13 : d13)();
    e8 == null || e8.focus();
  }), Q6 = (0, import_react103.useMemo)(() => ({ close: F6, isPortalled: g6 }), [F6, g6]), K4 = (0, import_react103.useMemo)(() => ({ open: c15 === 0, close: F6 }), [c15, F6]), Z4 = { ref: S7 }, $3 = L();
  return import_react103.default.createElement(O4, { node: N4 }, import_react103.default.createElement(Me, null, import_react103.default.createElement(ie4.Provider, { value: null }, import_react103.default.createElement(Ee2.Provider, { value: l14 }, import_react103.default.createElement(ue4.Provider, { value: Q6 }, import_react103.default.createElement(C4, { value: F6 }, import_react103.default.createElement(c8, { value: u2(c15, { [0]: i11.Open, [1]: i11.Closed }) }, import_react103.default.createElement(O7, null, $3({ ourProps: Z4, theirProps: C9, slot: K4, defaultTag: it2, name: "Popover" })))))))));
}
var Pt4 = "button";
function ft2(o17, a20) {
  let f22 = (0, import_react49.useId)(), { id: C9 = `headlessui-popover-button-${f22}`, disabled: T10 = false, autoFocus: S7 = false, ...p6 } = o17, [l14, c15] = se3("Popover.Button"), { isPortalled: d13 } = be4("Popover.Button"), r17 = (0, import_react103.useRef)(null), s13 = `headlessui-focus-sentinel-${(0, import_react49.useId)()}`, R9 = Me3(), m10 = R9 == null ? void 0 : R9.closeOthers, P7 = st2() !== null;
  (0, import_react103.useEffect)(() => {
    if (!P7) return c15({ type: 3, buttonId: C9 }), () => {
      c15({ type: 3, buttonId: null });
    };
  }, [P7, C9, c15]);
  let [n13] = (0, import_react103.useState)(() => Symbol()), v4 = y(r17, a20, ye(), o4((e8) => {
    if (!P7) {
      if (e8) l14.buttons.current.push(n13);
      else {
        let u17 = l14.buttons.current.indexOf(n13);
        u17 !== -1 && l14.buttons.current.splice(u17, 1);
      }
      l14.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e8 && c15({ type: 2, button: e8 });
    }
  })), g6 = y(r17, a20), _8 = n9(r17), L6 = o4((e8) => {
    var u17, i15, A7;
    if (P7) {
      if (l14.popoverState === 1) return;
      switch (e8.key) {
        case o8.Space:
        case o8.Enter:
          e8.preventDefault(), (i15 = (u17 = e8.target).click) == null || i15.call(u17), c15({ type: 1 }), (A7 = l14.button) == null || A7.focus();
          break;
      }
    } else switch (e8.key) {
      case o8.Space:
      case o8.Enter:
        e8.preventDefault(), e8.stopPropagation(), l14.popoverState === 1 && (m10 == null || m10(l14.buttonId)), c15({ type: 0 });
        break;
      case o8.Escape:
        if (l14.popoverState !== 0) return m10 == null ? void 0 : m10(l14.buttonId);
        if (!r17.current || _8 != null && _8.activeElement && !r17.current.contains(_8.activeElement)) return;
        e8.preventDefault(), e8.stopPropagation(), c15({ type: 1 });
        break;
    }
  }), I6 = o4((e8) => {
    P7 || e8.key === o8.Space && e8.preventDefault();
  }), M9 = o4((e8) => {
    var u17, i15;
    r4(e8.currentTarget) || T10 || (P7 ? (c15({ type: 1 }), (u17 = l14.button) == null || u17.focus()) : (e8.preventDefault(), e8.stopPropagation(), l14.popoverState === 1 && (m10 == null || m10(l14.buttonId)), c15({ type: 0 }), (i15 = l14.button) == null || i15.focus()));
  }), k5 = o4((e8) => {
    e8.preventDefault(), e8.stopPropagation();
  }), { isFocusVisible: B3, focusProps: U8 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: S7 }), { isHovered: O7, hoverProps: N4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: T10 }), { pressed: w11, pressProps: Y4 } = w({ disabled: T10 }), F6 = l14.popoverState === 0, Q6 = (0, import_react103.useMemo)(() => ({ open: F6, active: w11 || F6, disabled: T10, hover: O7, focus: B3, autofocus: S7 }), [F6, O7, B3, w11, T10, S7]), K4 = e6(o17, l14.button), Z4 = P7 ? _({ ref: g6, type: K4, onKeyDown: L6, onClick: M9, disabled: T10 || void 0, autoFocus: S7 }, U8, N4, Y4) : _({ ref: v4, id: l14.buttonId, type: K4, "aria-expanded": l14.popoverState === 0, "aria-controls": l14.panel ? l14.panelId : void 0, disabled: T10 || void 0, autoFocus: S7, onKeyDown: L6, onKeyUp: I6, onClick: M9, onMouseDown: k5 }, U8, N4, Y4), $3 = u16(), J7 = o4(() => {
    let e8 = l14.panel;
    if (!e8) return;
    function u17() {
      u2($3.current, { [a15.Forwards]: () => P6(e8, F2.First), [a15.Backwards]: () => P6(e8, F2.Last) }) === T5.Error && P6(b2().filter((A7) => A7.dataset.headlessuiFocusGuard !== "true"), u2($3.current, { [a15.Forwards]: F2.Next, [a15.Backwards]: F2.Previous }), { relativeTo: l14.button });
    }
    u17();
  }), t11 = L();
  return import_react103.default.createElement(import_react103.default.Fragment, null, t11({ ourProps: Z4, theirProps: p6, slot: Q6, defaultTag: Pt4, name: "Popover.Button" }), F6 && !P7 && d13 && import_react103.default.createElement(f4, { id: s13, ref: l14.afterButtonSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: J7 }));
}
var ct2 = "div";
var vt = O.RenderStrategy | O.Static;
function Oe2(o17, a20) {
  let f22 = (0, import_react49.useId)(), { id: C9 = `headlessui-popover-backdrop-${f22}`, transition: T10 = false, ...S7 } = o17, [{ popoverState: p6 }, l14] = se3("Popover.Backdrop"), [c15, d13] = (0, import_react103.useState)(null), r17 = y(a20, d13), s13 = u13(), [R9, m10] = x3(T10, c15, s13 !== null ? (s13 & i11.Open) === i11.Open : p6 === 0), h7 = o4((g6) => {
    if (r4(g6.currentTarget)) return g6.preventDefault();
    l14({ type: 1 });
  }), P7 = (0, import_react103.useMemo)(() => ({ open: p6 === 0 }), [p6]), n13 = { ref: r17, id: C9, "aria-hidden": true, onClick: h7, ...R4(m10) };
  return L()({ ourProps: n13, theirProps: S7, slot: P7, defaultTag: ct2, features: vt, visible: R9, name: "Popover.Backdrop" });
}
var Tt2 = "div";
var mt2 = O.RenderStrategy | O.Static;
function yt3(o17, a20) {
  let f22 = (0, import_react49.useId)(), { id: C9 = `headlessui-popover-panel-${f22}`, focus: T10 = false, anchor: S7, portal: p6 = false, modal: l14 = false, transition: c15 = false, ...d13 } = o17, [r17, s13] = se3("Popover.Panel"), { close: R9, isPortalled: m10 } = be4("Popover.Panel"), h7 = `headlessui-focus-sentinel-before-${f22}`, P7 = `headlessui-focus-sentinel-after-${f22}`, n13 = (0, import_react103.useRef)(null), v4 = xe(S7), [g6, _8] = Re(v4), L6 = be();
  v4 && (p6 = true);
  let [I6, M9] = (0, import_react103.useState)(null), k5 = y(n13, a20, v4 ? g6 : null, o4((t11) => s13({ type: 4, panel: t11 })), M9), B3 = n9(n13);
  n(() => (s13({ type: 5, panelId: C9 }), () => {
    s13({ type: 5, panelId: null });
  }), [C9, s13]);
  let U8 = u13(), [O7, N4] = x3(c15, I6, U8 !== null ? (U8 & i11.Open) === i11.Open : r17.popoverState === 0);
  m6(O7, r17.button, () => {
    s13({ type: 1 });
  });
  let w11 = r17.__demoMode ? false : l14 && O7;
  f11(w11, B3);
  let Y4 = o4((t11) => {
    var e8;
    switch (t11.key) {
      case o8.Escape:
        if (r17.popoverState !== 0 || !n13.current || B3 != null && B3.activeElement && !n13.current.contains(B3.activeElement)) return;
        t11.preventDefault(), t11.stopPropagation(), s13({ type: 1 }), (e8 = r17.button) == null || e8.focus();
        break;
    }
  });
  (0, import_react103.useEffect)(() => {
    var t11;
    o17.static || r17.popoverState === 1 && ((t11 = o17.unmount) == null || t11) && s13({ type: 4, panel: null });
  }, [r17.popoverState, o17.unmount, o17.static, s13]), (0, import_react103.useEffect)(() => {
    if (r17.__demoMode || !T10 || r17.popoverState !== 0 || !n13.current) return;
    let t11 = B3 == null ? void 0 : B3.activeElement;
    n13.current.contains(t11) || P6(n13.current, F2.First);
  }, [r17.__demoMode, T10, n13.current, r17.popoverState]);
  let F6 = (0, import_react103.useMemo)(() => ({ open: r17.popoverState === 0, close: R9 }), [r17.popoverState, R9]), Q6 = _(v4 ? L6() : {}, { ref: k5, id: C9, onKeyDown: Y4, onBlur: T10 && r17.popoverState === 0 ? (t11) => {
    var u17, i15, A7, x10, E12;
    let e8 = t11.relatedTarget;
    e8 && n13.current && ((u17 = n13.current) != null && u17.contains(e8) || (s13({ type: 1 }), ((A7 = (i15 = r17.beforePanelSentinel.current) == null ? void 0 : i15.contains) != null && A7.call(i15, e8) || (E12 = (x10 = r17.afterPanelSentinel.current) == null ? void 0 : x10.contains) != null && E12.call(x10, e8)) && e8.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1, style: { ...d13.style, ..._8, "--button-width": d3(r17.button, true).width }, ...R4(N4) }), K4 = u16(), Z4 = o4(() => {
    let t11 = n13.current;
    if (!t11) return;
    function e8() {
      u2(K4.current, { [a15.Forwards]: () => {
        var i15;
        P6(t11, F2.First) === T5.Error && ((i15 = r17.afterPanelSentinel.current) == null || i15.focus());
      }, [a15.Backwards]: () => {
        var u17;
        (u17 = r17.button) == null || u17.focus({ preventScroll: true });
      } });
    }
    e8();
  }), $3 = o4(() => {
    let t11 = n13.current;
    if (!t11) return;
    function e8() {
      u2(K4.current, { [a15.Forwards]: () => {
        if (!r17.button) return;
        let u17 = b2(), i15 = u17.indexOf(r17.button), A7 = u17.slice(0, i15 + 1), E12 = [...u17.slice(i15 + 1), ...A7];
        for (let de6 of E12.slice()) if (de6.dataset.headlessuiFocusGuard === "true" || I6 != null && I6.contains(de6)) {
          let Se5 = E12.indexOf(de6);
          Se5 !== -1 && E12.splice(Se5, 1);
        }
        P6(E12, F2.First, { sorted: false });
      }, [a15.Backwards]: () => {
        var i15;
        P6(t11, F2.Previous) === T5.Error && ((i15 = r17.button) == null || i15.focus());
      } });
    }
    e8();
  }), J7 = L();
  return import_react103.default.createElement(s7, null, import_react103.default.createElement(ie4.Provider, { value: C9 }, import_react103.default.createElement(ue4.Provider, { value: { close: R9, isPortalled: m10 } }, import_react103.default.createElement(re, { enabled: p6 ? o17.static || O7 : false }, O7 && m10 && import_react103.default.createElement(f4, { id: h7, ref: r17.beforePanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: Z4 }), J7({ ourProps: Q6, theirProps: d13, slot: F6, defaultTag: Tt2, features: mt2, visible: O7, name: "Popover.Panel" }), O7 && m10 && import_react103.default.createElement(f4, { id: P7, ref: r17.afterPanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: $3 })))));
}
var Et4 = "div";
function bt(o17, a20) {
  let f22 = (0, import_react103.useRef)(null), C9 = y(f22, a20), [T10, S7] = (0, import_react103.useState)([]), p6 = o4((P7) => {
    S7((n13) => {
      let v4 = n13.indexOf(P7);
      if (v4 !== -1) {
        let g6 = n13.slice();
        return g6.splice(v4, 1), g6;
      }
      return n13;
    });
  }), l14 = o4((P7) => (S7((n13) => [...n13, P7]), () => p6(P7))), c15 = o4(() => {
    var v4;
    let P7 = u(f22);
    if (!P7) return false;
    let n13 = P7.activeElement;
    return (v4 = f22.current) != null && v4.contains(n13) ? true : T10.some((g6) => {
      var _8, L6;
      return ((_8 = P7.getElementById(g6.buttonId.current)) == null ? void 0 : _8.contains(n13)) || ((L6 = P7.getElementById(g6.panelId.current)) == null ? void 0 : L6.contains(n13));
    });
  }), d13 = o4((P7) => {
    for (let n13 of T10) n13.buttonId.current !== P7 && n13.close();
  }), r17 = (0, import_react103.useMemo)(() => ({ registerPopover: l14, unregisterPopover: p6, isFocusWithinPopoverGroup: c15, closeOthers: d13 }), [l14, p6, c15, d13]), s13 = (0, import_react103.useMemo)(() => ({}), []), R9 = o17, m10 = { ref: C9 }, h7 = L();
  return import_react103.default.createElement(O4, null, import_react103.default.createElement(ge3.Provider, { value: r17 }, h7({ ourProps: m10, theirProps: R9, slot: s13, defaultTag: Et4, name: "Popover.Group" })));
}
var gt3 = K(dt2);
var St4 = K(ft2);
var At4 = K(Oe2);
var Ct3 = K(Oe2);
var Rt3 = K(yt3);
var Bt3 = K(bt);
var lo = Object.assign(gt3, { Button: St4, Backdrop: Ct3, Overlay: At4, Panel: Rt3, Group: Bt3 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react104 = __toESM(require_react(), 1);
var ke2 = ((e8) => (e8[e8.RegisterOption = 0] = "RegisterOption", e8[e8.UnregisterOption = 1] = "UnregisterOption", e8))(ke2 || {});
var Fe3 = { [0](o17, t11) {
  let e8 = [...o17.options, { id: t11.id, element: t11.element, propsRef: t11.propsRef }];
  return { ...o17, options: _3(e8, (a20) => a20.element.current) };
}, [1](o17, t11) {
  let e8 = o17.options.slice(), a20 = o17.options.findIndex((g6) => g6.id === t11.id);
  return a20 === -1 ? o17 : (e8.splice(a20, 1), { ...o17, options: e8 });
} };
var J5 = (0, import_react104.createContext)(null);
J5.displayName = "RadioGroupDataContext";
function X3(o17) {
  let t11 = (0, import_react104.useContext)(J5);
  if (t11 === null) {
    let e8 = new Error(`<${o17} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, X3), e8;
  }
  return t11;
}
var z2 = (0, import_react104.createContext)(null);
z2.displayName = "RadioGroupActionsContext";
function q3(o17) {
  let t11 = (0, import_react104.useContext)(z2);
  if (t11 === null) {
    let e8 = new Error(`<${o17} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, q3), e8;
  }
  return t11;
}
function Ie5(o17, t11) {
  return u2(t11.type, Fe3, o17, t11);
}
var Ue3 = "div";
function Me4(o17, t11) {
  let e8 = (0, import_react49.useId)(), a20 = a3(), { id: g6 = `headlessui-radiogroup-${e8}`, value: R9, form: O7, name: n13, onChange: f22, by: c15, disabled: p6 = a20 || false, defaultValue: I6, ...m10 } = o17, T10 = u9(c15), [P7, C9] = (0, import_react104.useReducer)(Ie5, { options: [] }), i15 = P7.options, [U8, h7] = K2(), [v4, L6] = w3(), D6 = (0, import_react104.useRef)(null), M9 = y(D6, t11), l14 = l2(I6), [s13, A7] = T(R9, f22, l14), S7 = (0, import_react104.useMemo)(() => i15.find((r17) => !r17.propsRef.current.disabled), [i15]), y9 = (0, import_react104.useMemo)(() => i15.some((r17) => T10(r17.propsRef.current.value, s13)), [i15, s13]), d13 = o4((r17) => {
    var u17;
    if (p6 || T10(r17, s13)) return false;
    let k5 = (u17 = i15.find((w11) => T10(w11.propsRef.current.value, r17))) == null ? void 0 : u17.propsRef.current;
    return k5 != null && k5.disabled ? false : (A7 == null || A7(r17), true);
  }), _8 = o4((r17) => {
    let k5 = D6.current;
    if (!k5) return;
    let u17 = u(k5), w11 = i15.filter((b9) => b9.propsRef.current.disabled === false).map((b9) => b9.element.current);
    switch (r17.key) {
      case o8.Enter:
        p2(r17.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (r17.preventDefault(), r17.stopPropagation(), P6(w11, F2.Previous | F2.WrapAround) === T5.Success) {
          let E12 = i15.find((W5) => W5.element.current === (u17 == null ? void 0 : u17.activeElement));
          E12 && d13(E12.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (r17.preventDefault(), r17.stopPropagation(), P6(w11, F2.Next | F2.WrapAround) === T5.Success) {
          let E12 = i15.find((W5) => W5.element.current === (u17 == null ? void 0 : u17.activeElement));
          E12 && d13(E12.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          r17.preventDefault(), r17.stopPropagation();
          let b9 = i15.find((E12) => E12.element.current === (u17 == null ? void 0 : u17.activeElement));
          b9 && d13(b9.propsRef.current.value);
        }
        break;
    }
  }), Q6 = o4((r17) => (C9({ type: 0, ...r17 }), () => C9({ type: 1, id: r17.id }))), ue5 = (0, import_react104.useMemo)(() => ({ value: s13, firstOption: S7, containsCheckedOption: y9, disabled: p6, compare: T10, ...P7 }), [s13, S7, y9, p6, T10, P7]), ce5 = (0, import_react104.useMemo)(() => ({ registerOption: Q6, change: d13 }), [Q6, d13]), fe5 = { ref: M9, id: g6, role: "radiogroup", "aria-labelledby": U8, "aria-describedby": v4, onKeyDown: _8 }, Te6 = (0, import_react104.useMemo)(() => ({ value: s13 }), [s13]), Re4 = (0, import_react104.useCallback)(() => {
    if (l14 !== void 0) return d13(l14);
  }, [d13, l14]), me4 = L();
  return import_react104.default.createElement(L6, { name: "RadioGroup.Description" }, import_react104.default.createElement(h7, { name: "RadioGroup.Label" }, import_react104.default.createElement(z2.Provider, { value: ce5 }, import_react104.default.createElement(J5.Provider, { value: ue5 }, n13 != null && import_react104.default.createElement(j2, { disabled: p6, data: { [n13]: s13 || "on" }, overrides: { type: "radio", checked: s13 != null }, form: O7, onReset: Re4 }), me4({ ourProps: fe5, theirProps: m10, slot: Te6, defaultTag: Ue3, name: "RadioGroup" })))));
}
var Se3 = "div";
function He3(o17, t11) {
  var y9;
  let e8 = X3("RadioGroup.Option"), a20 = q3("RadioGroup.Option"), g6 = (0, import_react49.useId)(), { id: R9 = `headlessui-radiogroup-option-${g6}`, value: O7, disabled: n13 = e8.disabled || false, autoFocus: f22 = false, ...c15 } = o17, p6 = (0, import_react104.useRef)(null), I6 = y(p6, t11), [m10, T10] = K2(), [P7, C9] = w3(), i15 = s3({ value: O7, disabled: n13 });
  n(() => a20.registerOption({ id: R9, element: p6, propsRef: i15 }), [R9, a20, p6, i15]);
  let U8 = o4((d13) => {
    var _8;
    if (r4(d13.currentTarget)) return d13.preventDefault();
    a20.change(O7) && ((_8 = p6.current) == null || _8.focus());
  }), h7 = ((y9 = e8.firstOption) == null ? void 0 : y9.id) === R9, { isFocusVisible: v4, focusProps: L6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f22 }), { isHovered: D6, hoverProps: M9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: n13 }), l14 = e8.compare(e8.value, O7), s13 = _({ ref: I6, id: R9, role: "radio", "aria-checked": l14 ? "true" : "false", "aria-labelledby": m10, "aria-describedby": P7, "aria-disabled": n13 ? true : void 0, tabIndex: (() => n13 ? -1 : l14 || !e8.containsCheckedOption && h7 ? 0 : -1)(), onClick: n13 ? void 0 : U8, autoFocus: f22 }, L6, M9), A7 = (0, import_react104.useMemo)(() => ({ checked: l14, disabled: n13, active: v4, hover: D6, focus: v4, autofocus: f22 }), [l14, n13, D6, v4, f22]), S7 = L();
  return import_react104.default.createElement(C9, { name: "RadioGroup.Description" }, import_react104.default.createElement(T10, { name: "RadioGroup.Label" }, S7({ ourProps: s13, theirProps: c15, slot: A7, defaultTag: Se3, name: "RadioGroup.Option" })));
}
var we2 = "span";
function Ne3(o17, t11) {
  var y9;
  let e8 = X3("Radio"), a20 = q3("Radio"), g6 = (0, import_react49.useId)(), R9 = u5(), O7 = a3(), { id: n13 = R9 || `headlessui-radio-${g6}`, value: f22, disabled: c15 = e8.disabled || O7 || false, autoFocus: p6 = false, ...I6 } = o17, m10 = (0, import_react104.useRef)(null), T10 = y(m10, t11), P7 = I(), C9 = U2(), i15 = s3({ value: f22, disabled: c15 });
  n(() => a20.registerOption({ id: n13, element: m10, propsRef: i15 }), [n13, a20, m10, i15]);
  let U8 = o4((d13) => {
    var _8;
    if (r4(d13.currentTarget)) return d13.preventDefault();
    a20.change(f22) && ((_8 = m10.current) == null || _8.focus());
  }), { isFocusVisible: h7, focusProps: v4 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p6 }), { isHovered: L6, hoverProps: D6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: c15 }), M9 = ((y9 = e8.firstOption) == null ? void 0 : y9.id) === n13, l14 = e8.compare(e8.value, f22), s13 = _({ ref: T10, id: n13, role: "radio", "aria-checked": l14 ? "true" : "false", "aria-labelledby": P7, "aria-describedby": C9, "aria-disabled": c15 ? true : void 0, tabIndex: (() => c15 ? -1 : l14 || !e8.containsCheckedOption && M9 ? 0 : -1)(), autoFocus: p6, onClick: c15 ? void 0 : U8 }, v4, D6), A7 = (0, import_react104.useMemo)(() => ({ checked: l14, disabled: c15, hover: L6, focus: h7, autofocus: p6 }), [l14, c15, L6, h7, p6]);
  return L()({ ourProps: s13, theirProps: I6, slot: A7, defaultTag: we2, name: "Radio" });
}
var We2 = K(Me4);
var Be2 = K(He3);
var Ve = K(Ne3);
var Ke = Q;
var $e2 = H4;
var Rt4 = Object.assign(We2, { Option: Be2, Radio: Ve, Label: Ke, Description: $e2 });

// node_modules/@headlessui/react/dist/components/select/select.js
var import_react105 = __toESM(require_react(), 1);
var H11 = "select";
function B2(a20, i15) {
  let p6 = (0, import_react49.useId)(), d13 = u5(), n13 = a3(), { id: c15 = d13 || `headlessui-select-${p6}`, disabled: e8 = n13 || false, invalid: t11 = false, autoFocus: o17 = false, ...f22 } = a20, m10 = I(), u17 = U2(), { isFocusVisible: r17, focusProps: T10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o17 }), { isHovered: l14, hoverProps: b9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: s13, pressProps: y9 } = w({ disabled: e8 }), P7 = _({ ref: i15, id: c15, "aria-labelledby": m10, "aria-describedby": u17, "aria-invalid": t11 ? "" : void 0, disabled: e8 || void 0, autoFocus: o17 }, T10, b9, y9), S7 = (0, import_react105.useMemo)(() => ({ disabled: e8, invalid: t11, hover: l14, focus: r17, active: s13, autofocus: o17 }), [e8, t11, l14, r17, s13, o17]);
  return L()({ ourProps: P7, theirProps: f22, slot: S7, defaultTag: H11, name: "Select" });
}
var j8 = K(B2);

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react106 = __toESM(require_react(), 1);
var E10 = (0, import_react106.createContext)(null);
E10.displayName = "GroupContext";
var De5 = import_react106.Fragment;
function ge4(n13) {
  var u17;
  let [o17, s13] = (0, import_react106.useState)(null), [h7, b9] = K2(), [T10, t11] = w3(), p6 = (0, import_react106.useMemo)(() => ({ switch: o17, setSwitch: s13 }), [o17, s13]), y9 = {}, S7 = n13, c15 = L();
  return import_react106.default.createElement(t11, { name: "Switch.Description", value: T10 }, import_react106.default.createElement(b9, { name: "Switch.Label", value: h7, props: { htmlFor: (u17 = p6.switch) == null ? void 0 : u17.id, onClick(d13) {
    o17 && (d13.currentTarget instanceof HTMLLabelElement && d13.preventDefault(), o17.click(), o17.focus({ preventScroll: true }));
  } } }, import_react106.default.createElement(E10.Provider, { value: p6 }, c15({ ourProps: y9, theirProps: S7, slot: {}, defaultTag: De5, name: "Switch.Group" }))));
}
var ve2 = "button";
function xe3(n13, o17) {
  var L6;
  let s13 = (0, import_react49.useId)(), h7 = u5(), b9 = a3(), { id: T10 = h7 || `headlessui-switch-${s13}`, disabled: t11 = b9 || false, checked: p6, defaultChecked: y9, onChange: S7, name: c15, value: u17, form: d13, autoFocus: m10 = false, ...F6 } = n13, _8 = (0, import_react106.useContext)(E10), [H13, k5] = (0, import_react106.useState)(null), M9 = (0, import_react106.useRef)(null), U8 = y(M9, o17, _8 === null ? null : _8.setSwitch, k5), l14 = l2(y9), [a20, r17] = T(p6, S7, l14 != null ? l14 : false), I6 = p(), [P7, D6] = (0, import_react106.useState)(false), g6 = o4(() => {
    D6(true), r17 == null || r17(!a20), I6.nextFrame(() => {
      D6(false);
    });
  }), B3 = o4((e8) => {
    if (r4(e8.currentTarget)) return e8.preventDefault();
    e8.preventDefault(), g6();
  }), K4 = o4((e8) => {
    e8.key === o8.Space ? (e8.preventDefault(), g6()) : e8.key === o8.Enter && p2(e8.currentTarget);
  }), W5 = o4((e8) => e8.preventDefault()), O7 = I(), N4 = U2(), { isFocusVisible: v4, focusProps: J7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: m10 }), { isHovered: x10, hoverProps: V6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: t11 }), { pressed: C9, pressProps: X4 } = w({ disabled: t11 }), j9 = (0, import_react106.useMemo)(() => ({ checked: a20, disabled: t11, hover: x10, focus: v4, active: C9, autofocus: m10, changing: P7 }), [a20, x10, v4, C9, t11, P7, m10]), $3 = _({ id: T10, ref: U8, role: "switch", type: e6(n13, H13), tabIndex: n13.tabIndex === -1 ? 0 : (L6 = n13.tabIndex) != null ? L6 : 0, "aria-checked": a20, "aria-labelledby": O7, "aria-describedby": N4, disabled: t11 || void 0, autoFocus: m10, onClick: B3, onKeyUp: K4, onKeyPress: W5 }, J7, V6, X4), q4 = (0, import_react106.useCallback)(() => {
    if (l14 !== void 0) return r17 == null ? void 0 : r17(l14);
  }, [r17, l14]), z4 = L();
  return import_react106.default.createElement(import_react106.default.Fragment, null, c15 != null && import_react106.default.createElement(j2, { disabled: t11, data: { [c15]: u17 || "on" }, overrides: { type: "checkbox", checked: a20 }, form: d13, onReset: q4 }), z4({ ourProps: $3, theirProps: F6, slot: j9, defaultTag: ve2, name: "Switch" }));
}
var Ce3 = K(xe3);
var Le3 = ge4;
var Re3 = Q;
var Ge3 = H4;
var Ye3 = Object.assign(Ce3, { Group: Le3, Label: Re3, Description: Ge3 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react108 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react107 = __toESM(require_react(), 1);
function b8({ onFocus: n13 }) {
  let [r17, o17] = (0, import_react107.useState)(true), u17 = f19();
  return r17 ? import_react107.default.createElement(f4, { as: "button", type: "button", features: s4.Focusable, onFocus: (a20) => {
    a20.preventDefault();
    let e8, i15 = 50;
    function t11() {
      if (i15-- <= 0) {
        e8 && cancelAnimationFrame(e8);
        return;
      }
      if (n13()) {
        if (cancelAnimationFrame(e8), !u17.current) return;
        o17(false);
        return;
      }
      e8 = requestAnimationFrame(t11);
    }
    e8 = requestAnimationFrame(t11);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var l13 = __toESM(require_react(), 1);
var s12 = l13.createContext(null);
function a19() {
  return { groups: /* @__PURE__ */ new Map(), get(o17, e8) {
    var i15;
    let t11 = this.groups.get(o17);
    t11 || (t11 = /* @__PURE__ */ new Map(), this.groups.set(o17, t11));
    let n13 = (i15 = t11.get(e8)) != null ? i15 : 0;
    t11.set(e8, n13 + 1);
    let r17 = Array.from(t11.keys()).indexOf(e8);
    function u17() {
      let c15 = t11.get(e8);
      c15 > 1 ? t11.set(e8, c15 - 1) : t11.delete(e8);
    }
    return [r17, u17];
  } };
}
function f21({ children: o17 }) {
  let e8 = l13.useRef(a19());
  return l13.createElement(s12.Provider, { value: e8 }, o17);
}
function C7(o17) {
  let e8 = l13.useContext(s12);
  if (!e8) throw new Error("You must wrap your component in a <StableCollection>");
  let t11 = l13.useId(), [n13, r17] = e8.current.get(o17, t11);
  return l13.useEffect(() => r17, []), n13;
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var Le4 = ((t11) => (t11[t11.Forwards = 0] = "Forwards", t11[t11.Backwards = 1] = "Backwards", t11))(Le4 || {});
var _e3 = ((l14) => (l14[l14.Less = -1] = "Less", l14[l14.Equal = 0] = "Equal", l14[l14.Greater = 1] = "Greater", l14))(_e3 || {});
var De6 = ((n13) => (n13[n13.SetSelectedIndex = 0] = "SetSelectedIndex", n13[n13.RegisterTab = 1] = "RegisterTab", n13[n13.UnregisterTab = 2] = "UnregisterTab", n13[n13.RegisterPanel = 3] = "RegisterPanel", n13[n13.UnregisterPanel = 4] = "UnregisterPanel", n13))(De6 || {});
var Se4 = { [0](e8, r17) {
  var d13;
  let t11 = _3(e8.tabs, (u17) => u17.current), l14 = _3(e8.panels, (u17) => u17.current), a20 = t11.filter((u17) => {
    var T10;
    return !((T10 = u17.current) != null && T10.hasAttribute("disabled"));
  }), n13 = { ...e8, tabs: t11, panels: l14 };
  if (r17.index < 0 || r17.index > t11.length - 1) {
    let u17 = u2(Math.sign(r17.index - e8.selectedIndex), { [-1]: () => 1, [0]: () => u2(Math.sign(r17.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a20.length === 0) return n13;
    let T10 = u2(u17, { [0]: () => t11.indexOf(a20[0]), [1]: () => t11.indexOf(a20[a20.length - 1]) });
    return { ...n13, selectedIndex: T10 === -1 ? e8.selectedIndex : T10 };
  }
  let s13 = t11.slice(0, r17.index), b9 = [...t11.slice(r17.index), ...s13].find((u17) => a20.includes(u17));
  if (!b9) return n13;
  let f22 = (d13 = t11.indexOf(b9)) != null ? d13 : e8.selectedIndex;
  return f22 === -1 && (f22 = e8.selectedIndex), { ...n13, selectedIndex: f22 };
}, [1](e8, r17) {
  if (e8.tabs.includes(r17.tab)) return e8;
  let t11 = e8.tabs[e8.selectedIndex], l14 = _3([...e8.tabs, r17.tab], (n13) => n13.current), a20 = e8.selectedIndex;
  return e8.info.current.isControlled || (a20 = l14.indexOf(t11), a20 === -1 && (a20 = e8.selectedIndex)), { ...e8, tabs: l14, selectedIndex: a20 };
}, [2](e8, r17) {
  return { ...e8, tabs: e8.tabs.filter((t11) => t11 !== r17.tab) };
}, [3](e8, r17) {
  return e8.panels.includes(r17.panel) ? e8 : { ...e8, panels: _3([...e8.panels, r17.panel], (t11) => t11.current) };
}, [4](e8, r17) {
  return { ...e8, panels: e8.panels.filter((t11) => t11 !== r17.panel) };
} };
var V5 = (0, import_react108.createContext)(null);
V5.displayName = "TabsDataContext";
function C8(e8) {
  let r17 = (0, import_react108.useContext)(V5);
  if (r17 === null) {
    let t11 = new Error(`<${e8} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t11, C8), t11;
  }
  return r17;
}
var Q5 = (0, import_react108.createContext)(null);
Q5.displayName = "TabsActionsContext";
function Y3(e8) {
  let r17 = (0, import_react108.useContext)(Q5);
  if (r17 === null) {
    let t11 = new Error(`<${e8} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t11, Y3), t11;
  }
  return r17;
}
function Fe4(e8, r17) {
  return u2(r17.type, Se4, e8, r17);
}
var Ie6 = "div";
function he2(e8, r17) {
  let { defaultIndex: t11 = 0, vertical: l14 = false, manual: a20 = false, onChange: n13, selectedIndex: s13 = null, ...g6 } = e8;
  const b9 = l14 ? "vertical" : "horizontal", f22 = a20 ? "manual" : "auto";
  let d13 = s13 !== null, u17 = s3({ isControlled: d13 }), T10 = y(r17), [p6, c15] = (0, import_react108.useReducer)(Fe4, { info: u17, selectedIndex: s13 != null ? s13 : t11, tabs: [], panels: [] }), h7 = (0, import_react108.useMemo)(() => ({ selectedIndex: p6.selectedIndex }), [p6.selectedIndex]), m10 = s3(n13 || (() => {
  })), M9 = s3(p6.tabs), S7 = (0, import_react108.useMemo)(() => ({ orientation: b9, activation: f22, ...p6 }), [b9, f22, p6]), P7 = o4((i15) => (c15({ type: 1, tab: i15 }), () => c15({ type: 2, tab: i15 }))), A7 = o4((i15) => (c15({ type: 3, panel: i15 }), () => c15({ type: 4, panel: i15 }))), E12 = o4((i15) => {
    _8.current !== i15 && m10.current(i15), d13 || c15({ type: 0, index: i15 });
  }), _8 = s3(d13 ? e8.selectedIndex : p6.selectedIndex), D6 = (0, import_react108.useMemo)(() => ({ registerTab: P7, registerPanel: A7, change: E12 }), []);
  n(() => {
    c15({ type: 0, index: s13 != null ? s13 : t11 });
  }, [s13]), n(() => {
    if (_8.current === void 0 || p6.tabs.length <= 0) return;
    let i15 = _3(p6.tabs, (R9) => R9.current);
    i15.some((R9, X4) => p6.tabs[X4] !== R9) && E12(i15.indexOf(p6.tabs[_8.current]));
  });
  let K4 = { ref: T10 }, J7 = L();
  return import_react108.default.createElement(f21, null, import_react108.default.createElement(Q5.Provider, { value: D6 }, import_react108.default.createElement(V5.Provider, { value: S7 }, S7.tabs.length <= 0 && import_react108.default.createElement(b8, { onFocus: () => {
    var i15, G7;
    for (let R9 of M9.current) if (((i15 = R9.current) == null ? void 0 : i15.tabIndex) === 0) return (G7 = R9.current) == null || G7.focus(), true;
    return false;
  } }), J7({ ourProps: K4, theirProps: g6, slot: h7, defaultTag: Ie6, name: "Tabs" }))));
}
var ve3 = "div";
function Ce4(e8, r17) {
  let { orientation: t11, selectedIndex: l14 } = C8("Tab.List"), a20 = y(r17), n13 = (0, import_react108.useMemo)(() => ({ selectedIndex: l14 }), [l14]), s13 = e8, g6 = { ref: a20, role: "tablist", "aria-orientation": t11 };
  return L()({ ourProps: g6, theirProps: s13, slot: n13, defaultTag: ve3, name: "Tabs.List" });
}
var Me5 = "button";
function Ge4(e8, r17) {
  var ee7, te6;
  let t11 = (0, import_react49.useId)(), { id: l14 = `headlessui-tabs-tab-${t11}`, disabled: a20 = false, autoFocus: n13 = false, ...s13 } = e8, { orientation: g6, activation: b9, selectedIndex: f22, tabs: d13, panels: u17 } = C8("Tab"), T10 = Y3("Tab"), p6 = C8("Tab"), [c15, h7] = (0, import_react108.useState)(null), m10 = (0, import_react108.useRef)(null), M9 = y(m10, r17, h7);
  n(() => T10.registerTab(m10), [T10, m10]);
  let S7 = C7("tabs"), P7 = d13.indexOf(m10);
  P7 === -1 && (P7 = S7);
  let A7 = P7 === f22, E12 = o4((o17) => {
    var $3;
    let L6 = o17();
    if (L6 === T5.Success && b9 === "auto") {
      let q4 = ($3 = u(m10)) == null ? void 0 : $3.activeElement, re5 = p6.tabs.findIndex((ce5) => ce5.current === q4);
      re5 !== -1 && T10.change(re5);
    }
    return L6;
  }), _8 = o4((o17) => {
    let L6 = d13.map((q4) => q4.current).filter(Boolean);
    if (o17.key === o8.Space || o17.key === o8.Enter) {
      o17.preventDefault(), o17.stopPropagation(), T10.change(P7);
      return;
    }
    switch (o17.key) {
      case o8.Home:
      case o8.PageUp:
        return o17.preventDefault(), o17.stopPropagation(), E12(() => P6(L6, F2.First));
      case o8.End:
      case o8.PageDown:
        return o17.preventDefault(), o17.stopPropagation(), E12(() => P6(L6, F2.Last));
    }
    if (E12(() => u2(g6, { vertical() {
      return o17.key === o8.ArrowUp ? P6(L6, F2.Previous | F2.WrapAround) : o17.key === o8.ArrowDown ? P6(L6, F2.Next | F2.WrapAround) : T5.Error;
    }, horizontal() {
      return o17.key === o8.ArrowLeft ? P6(L6, F2.Previous | F2.WrapAround) : o17.key === o8.ArrowRight ? P6(L6, F2.Next | F2.WrapAround) : T5.Error;
    } })) === T5.Success) return o17.preventDefault();
  }), D6 = (0, import_react108.useRef)(false), K4 = o4(() => {
    var o17;
    D6.current || (D6.current = true, (o17 = m10.current) == null || o17.focus({ preventScroll: true }), T10.change(P7), t(() => {
      D6.current = false;
    }));
  }), J7 = o4((o17) => {
    o17.preventDefault();
  }), { isFocusVisible: i15, focusProps: G7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n13 }), { isHovered: R9, hoverProps: X4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a20 }), { pressed: Z4, pressProps: ue5 } = w({ disabled: a20 }), Te6 = (0, import_react108.useMemo)(() => ({ selected: A7, hover: R9, active: Z4, focus: i15, autofocus: n13, disabled: a20 }), [A7, R9, i15, Z4, n13, a20]), de6 = _({ ref: M9, onKeyDown: _8, onMouseDown: J7, onClick: K4, id: l14, role: "tab", type: e6(e8, c15), "aria-controls": (te6 = (ee7 = u17[P7]) == null ? void 0 : ee7.current) == null ? void 0 : te6.id, "aria-selected": A7, tabIndex: A7 ? 0 : -1, disabled: a20 || void 0, autoFocus: n13 }, G7, X4, ue5);
  return L()({ ourProps: de6, theirProps: s13, slot: Te6, defaultTag: Me5, name: "Tabs.Tab" });
}
var Ue4 = "div";
function He4(e8, r17) {
  let { selectedIndex: t11 } = C8("Tab.Panels"), l14 = y(r17), a20 = (0, import_react108.useMemo)(() => ({ selectedIndex: t11 }), [t11]), n13 = e8, s13 = { ref: l14 };
  return L()({ ourProps: s13, theirProps: n13, slot: a20, defaultTag: Ue4, name: "Tabs.Panels" });
}
var we3 = "div";
var Oe3 = O.RenderStrategy | O.Static;
function Ne4(e8, r17) {
  var A7, E12, _8, D6;
  let t11 = (0, import_react49.useId)(), { id: l14 = `headlessui-tabs-panel-${t11}`, tabIndex: a20 = 0, ...n13 } = e8, { selectedIndex: s13, tabs: g6, panels: b9 } = C8("Tab.Panel"), f22 = Y3("Tab.Panel"), d13 = (0, import_react108.useRef)(null), u17 = y(d13, r17);
  n(() => f22.registerPanel(d13), [f22, d13]);
  let T10 = C7("panels"), p6 = b9.indexOf(d13);
  p6 === -1 && (p6 = T10);
  let c15 = p6 === s13, { isFocusVisible: h7, focusProps: m10 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), M9 = (0, import_react108.useMemo)(() => ({ selected: c15, focus: h7 }), [c15, h7]), S7 = _({ ref: u17, id: l14, role: "tabpanel", "aria-labelledby": (E12 = (A7 = g6[p6]) == null ? void 0 : A7.current) == null ? void 0 : E12.id, tabIndex: c15 ? a20 : -1 }, m10), P7 = L();
  return !c15 && ((_8 = n13.unmount) == null || _8) && !((D6 = n13.static) != null && D6) ? import_react108.default.createElement(f4, { "aria-hidden": "true", ...S7 }) : P7({ ourProps: S7, theirProps: n13, slot: M9, defaultTag: we3, features: Oe3, visible: c15, name: "Tabs.Panel" });
}
var ke3 = K(Ge4);
var Be3 = K(he2);
var We3 = K(Ce4);
var je3 = K(He4);
var Ke2 = K(Ne4);
var Tt3 = Object.assign(ke3, { Group: Be3, List: We3, Panels: je3, Panel: Ke2 });

// node_modules/@headlessui/react/dist/components/textarea/textarea.js
var import_react109 = __toESM(require_react(), 1);
var L5 = "textarea";
function H12(s13, l14) {
  let i15 = (0, import_react49.useId)(), d13 = u5(), n13 = a3(), { id: p6 = d13 || `headlessui-textarea-${i15}`, disabled: e8 = n13 || false, autoFocus: r17 = false, invalid: a20 = false, ...T10 } = s13, f22 = I(), m10 = U2(), { isFocused: o17, focusProps: u17 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r17 }), { isHovered: t11, hoverProps: b9 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), y9 = _({ ref: l14, id: p6, "aria-labelledby": f22, "aria-describedby": m10, "aria-invalid": a20 ? "" : void 0, disabled: e8 || void 0, autoFocus: r17 }, u17, b9), x10 = (0, import_react109.useMemo)(() => ({ disabled: e8, invalid: a20, hover: t11, focus: o17, autofocus: r17 }), [e8, a20, t11, o17, r17]);
  return L()({ ourProps: y9, theirProps: T10, slot: x10, defaultTag: L5, name: "Textarea" });
}
var J6 = K(H12);
export {
  H2 as Button,
  Ae as Checkbox,
  y2 as CloseButton,
  Ho as Combobox,
  Ut as ComboboxButton,
  Gt as ComboboxInput,
  zt as ComboboxLabel,
  jt as ComboboxOption,
  Kt as ComboboxOptions,
  x4 as DataInteractive,
  H4 as Description,
  yt as Dialog,
  Dt2 as DialogBackdrop,
  Pt2 as DialogDescription,
  je as DialogPanel,
  Ye as DialogTitle,
  je2 as Disclosure,
  Ce as DisclosureButton,
  Re2 as DisclosurePanel,
  H9 as Field,
  G5 as Fieldset,
  ye3 as FocusTrap,
  x5 as FocusTrapFeatures,
  S6 as Input,
  Q as Label,
  d12 as Legend,
  Mo as Listbox,
  Nt2 as ListboxButton,
  Ht2 as ListboxLabel,
  Vt2 as ListboxOption,
  Gt2 as ListboxOptions,
  Kt2 as ListboxSelectedOption,
  rn as Menu,
  It3 as MenuButton,
  St3 as MenuHeading,
  Et3 as MenuItem,
  gt2 as MenuItems,
  Mt3 as MenuSection,
  At3 as MenuSeparator,
  lo as Popover,
  Ct3 as PopoverBackdrop,
  St4 as PopoverButton,
  Bt3 as PopoverGroup,
  At4 as PopoverOverlay,
  Rt3 as PopoverPanel,
  re as Portal,
  Ve as Radio,
  Rt4 as RadioGroup,
  $e2 as RadioGroupDescription,
  Ke as RadioGroupLabel,
  Be2 as RadioGroupOption,
  j8 as Select,
  Ye3 as Switch,
  Ge3 as SwitchDescription,
  Le3 as SwitchGroup,
  Re3 as SwitchLabel,
  Tt3 as Tab,
  Be3 as TabGroup,
  We3 as TabList,
  Ke2 as TabPanel,
  je3 as TabPanels,
  J6 as Textarea,
  ze as Transition,
  Fe2 as TransitionChild,
  u8 as useClose
};
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@headlessui_react.js.map
