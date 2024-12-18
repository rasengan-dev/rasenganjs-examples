import {
  require_jsx_runtime
} from "./chunk-MNCPVTVX.js";
import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/@rasenganjs/image/lib/components/image.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var image_default = ({ src, alt, style, loadingOnViewport = true, ...props }) => {
  const [loaded, setLoaded] = (0, import_react.useState)(false);
  const [startLoading, setStartLoading] = (0, import_react.useState)(false);
  const [imageSrc, setImageSrc] = (0, import_react.useState)();
  const imageContainerRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!("IntersectionObserver" in window)) {
      setStartLoading(true);
      return;
    }
    if (!loadingOnViewport) {
      setStartLoading(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStartLoading(true);
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });
    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      observer.observe(imageContainer);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  (0, import_react.useEffect)(() => {
    if (!startLoading)
      return;
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = src;
    setImageSrc(img);
    return () => {
      img.onload = null;
    };
  }, [src, startLoading]);
  return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_jsx_runtime.jsxs)("div", { ref: imageContainerRef, style: {
    width: props.width || (imageSrc == null ? void 0 : imageSrc.width) || 200,
    height: props.height || (imageSrc == null ? void 0 : imageSrc.height) || 200,
    overflow: "hidden",
    position: "relative",
    ...style
  }, className: props.className, children: [
    // If image is not loaded, show loading fallback
    props.loading === "lazy" && !loaded && (0, import_jsx_runtime.jsx)("div", { style: {
      width: "300%",
      height: props.height || (imageSrc == null ? void 0 : imageSrc.height) || 200,
      backgroundColor: "#e5e5e5"
    }, className: `${props.loading === "lazy" ? props.mode === "blur" ? "blur-container" : "wave-container wave" : ""}` }),
    (0, import_jsx_runtime.jsx)("img", { src: imageSrc == null ? void 0 : imageSrc.src, alt, ...props, style: {
      objectFit: props.objectfit || "cover",
      width: "100%",
      height: "100%"
    }, hidden: props.loading === "lazy" ? !loaded : false })
  ] }) });
};
var LoadingFallback = ({ width, height }) => (0, import_jsx_runtime.jsx)("div", { style: {
  width,
  height,
  backgroundColor: "#e5e5e5"
} });

export {
  image_default,
  LoadingFallback
};
//# sourceMappingURL=chunk-ICH3CLKO.js.map
