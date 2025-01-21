import "./chunk-5CKQRKRI.js";
import {
  require_jsx_runtime
} from "./chunk-QFD2GQ4D.js";
import "./chunk-QD5PR2Y4.js";
import "./chunk-TN23U6KN.js";
import "./chunk-VEA5WLH7.js";
import {
  Link,
  Navigate,
  Outlet,
  createRoutesFromChildren,
  generatePath,
  matchPath,
  matchRoutes,
  useFetcher,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useResolvedPath,
  useRoutes,
  useSearchParams
} from "./chunk-PLBTKS56.js";
import "./chunk-BC63SET5.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/rasengan/lib/esm/server/utils/createFetchRequest.js
function createFetchRequest(req, host) {
  var origin = "".concat(req.protocol, "://").concat(host);
  var url = new URL(req.originalUrl || req.url, origin);
  var controller = new AbortController();
  if (req.on) {
    req.on("close", function() {
      return controller.abort();
    });
  }
  var headers = new Headers();
  for (var _i = 0, _a = Object.entries(req.headers); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], values = _b[1];
    if (values) {
      if (Array.isArray(values)) {
        for (var _c = 0, values_1 = values; _c < values_1.length; _c++) {
          var value = values_1[_c];
          headers.append(key, value);
        }
      } else {
        headers.set(key, values);
      }
    }
  }
  var init = {
    method: req.method,
    headers,
    signal: controller.signal,
    body: null,
    duplex: "half"
  };
  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = req.body;
  }
  return new Request(url.href, init);
}

// node_modules/rasengan/lib/esm/core/components/index.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/rasengan/lib/esm/routing/utils/index.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/rasengan/lib/esm/routing/components/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var NotFoundPageComponent = function() {
  return (0, import_jsx_runtime.jsxs)("section", { style: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw"
  }, children: [(0, import_jsx_runtime.jsx)("h1", { style: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: 10
  }, children: "404 Page Not Found" }), (0, import_jsx_runtime.jsx)("p", { style: {
    fontSize: "1.2rem",
    marginBottom: 20
  }, children: "The page you are looking for does not exist or has been moved." }), (0, import_jsx_runtime.jsx)(Link, { to: "/", style: {
    fontSize: "1.2rem",
    fontWeight: 800,
    marginBottom: 20,
    textDecoration: "none"
  }, children: "Go back to home page" })] });
};
var CustomLink = function(props) {
  var to = props.to, children = props.children, rest = __rest(props, ["to", "children"]);
  var splitted = to.split("#");
  if (splitted.length > 1) {
    return (0, import_jsx_runtime.jsx)("a", __assign({ href: to }, rest, { children }));
  }
  return (0, import_jsx_runtime.jsx)(Link, __assign({ to }, rest, { children }));
};

// node_modules/rasengan/lib/esm/routing/utils/index.js
var defineRouter = function(option) {
  var imports = option.imports, layout = option.layout, pages = option.pages, loaderComponent = option.loaderComponent, notFoundComponent = option.notFoundComponent;
  return function(Component) {
    if (!option.pages)
      throw new Error("You must provide a list of pages in the router decorator");
    var router = new Component();
    router.routers = imports || [];
    router.layout = layout || DefaultLayout;
    router.pages = pages;
    router.loaderComponent = loaderComponent || function() {
      return null;
    };
    router.notFoundComponent = notFoundComponent || NotFoundPageComponent;
    return router;
  };
};

// node_modules/rasengan/lib/esm/core/components/index.js
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var ErrorBoundary = (
  /** @class */
  function(_super) {
    __extends(ErrorBoundary2, _super);
    function ErrorBoundary2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = { hasError: false, error: null, info: null };
      return _this;
    }
    ErrorBoundary2.prototype.componentDidCatch = function(error, info) {
      this.setState({ hasError: true, error, info });
    };
    ErrorBoundary2.prototype.render = function() {
      var _a = this.state, error = _a.error, info = _a.info;
      if (this.state.hasError) {
        return (0, import_jsx_runtime3.jsx)(ErrorFallbackComponent, { error, info });
      }
      return this.props.children;
    };
    return ErrorBoundary2;
  }(import_react2.default.Component)
);
var ErrorFallbackComponent = function(_a) {
  var error = _a.error, info = _a.info;
  return (0, import_jsx_runtime3.jsx)("div", { style: {
    width: "calc(100% - 80px)",
    height: "calc(100vh - 80px)",
    padding: "40px",
    backgroundColor: "#fff"
  }, children: (0, import_jsx_runtime3.jsxs)("div", { children: [(0, import_jsx_runtime3.jsx)("h1", { style: { fontSize: "2rem" }, children: "Something went wrong" }), (0, import_jsx_runtime3.jsx)("p", { children: error.toString() }), (0, import_jsx_runtime3.jsx)("div", { style: {
    width: "100%",
    height: "auto",
    borderRadius: 10,
    padding: "20px",
    marginTop: "10px",
    backgroundColor: "#f0f0f0"
  }, children: (0, import_jsx_runtime3.jsx)("p", { children: info.componentStack }) })] }) });
};
var Body = function(_a) {
  var _b = _a.children, children = _b === void 0 ? void 0 : _b, _c = _a.asChild, asChild = _c === void 0 ? false : _c;
  return (0, import_jsx_runtime3.jsxs)("body", { children: [(0, import_jsx_runtime3.jsx)("noscript", { dangerouslySetInnerHTML: {
    __html: "<b>Enable JavaScript to run this app.</b>"
  } }), asChild ? (0, import_jsx_runtime3.jsx)("div", { id: "root", children }) : (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [(0, import_jsx_runtime3.jsx)("div", { id: "root", children: "rasengan-body-app" }), children] })] });
};
var Scripts = function(_a) {
  var _b = _a.children, children = _b === void 0 ? void 0 : _b, _c = _a.bootstrap, bootstrap = _c === void 0 ? "" : _c;
  var folder = "esm";
  if (typeof exports === "object" && typeof module !== "undefined") {
    folder = "cjs";
  }
  return (0, import_jsx_runtime3.jsxs)(import_react2.default.Fragment, { children: [bootstrap === "" && (0, import_jsx_runtime3.jsx)("script", { type: "module", src: "/node_modules/rasengan/lib/".concat(folder, "/entries/entry-client.js"), defer: true }), children] });
};
var DefaultLayout = function() {
  return (0, import_jsx_runtime3.jsx)(import_react2.default.Fragment, { children: (0, import_jsx_runtime3.jsx)(Outlet, {}) });
};
DefaultLayout.path = "/";

// node_modules/rasengan/lib/esm/routing/interfaces.js
var RouterComponent = (
  /** @class */
  function() {
    function RouterComponent2() {
    }
    Object.defineProperty(RouterComponent2.prototype, "layout", {
      // Getters
      /**
       * Get the layout value
       */
      get: function() {
        return this._layout;
      },
      // Setters
      /**
       * Set the layout value
       */
      set: function(layout) {
        this._layout = layout;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(RouterComponent2.prototype, "routers", {
      /**
       * Get the list of routers
       */
      get: function() {
        return this._routers;
      },
      /**
       * Set the list of routers
       */
      set: function(routers) {
        this._routers = routers;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(RouterComponent2.prototype, "pages", {
      /**
       * Get the list of pages
       */
      get: function() {
        return this._pages;
      },
      /**
       * Set the list of pages
       */
      set: function(pages) {
        this._pages = pages;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(RouterComponent2.prototype, "loaderComponent", {
      /**
       * Get the loader component
       */
      get: function() {
        return this._loaderComponent;
      },
      /**
       * Set the loader component
       */
      set: function(loaderComponent) {
        this._loaderComponent = loaderComponent;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(RouterComponent2.prototype, "notFoundComponent", {
      /**
       * Get the not found component
       */
      get: function() {
        return this._notFoundComponent;
      },
      /**
       * Set the not found component
       */
      set: function(notFoundComponent) {
        this._notFoundComponent = notFoundComponent;
      },
      enumerable: false,
      configurable: true
    });
    return RouterComponent2;
  }()
);

// node_modules/rasengan/lib/esm/config/index.js
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var defineConfig = function(loadedConfig) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  var reactStrictMode = loadedConfig.reactStrictMode, server = loadedConfig.server, vite = loadedConfig.vite, experimental = loadedConfig.experimental;
  var defaultViteConfig = {
    plugins: (vite === null || vite === void 0 ? void 0 : vite.plugins) || [],
    optimizeDeps: {
      exclude: ((_a = vite === null || vite === void 0 ? void 0 : vite.optimizeDeps) === null || _a === void 0 ? void 0 : _a.exclude) || [],
      include: ((_b = vite === null || vite === void 0 ? void 0 : vite.optimizeDeps) === null || _b === void 0 ? void 0 : _b.include) || []
    },
    css: {
      postcss: ((_c = vite === null || vite === void 0 ? void 0 : vite.css) === null || _c === void 0 ? void 0 : _c.postcss) || void 0
    },
    build: {
      external: ((_d = vite === null || vite === void 0 ? void 0 : vite.build) === null || _d === void 0 ? void 0 : _d.external) || []
    },
    resolve: {
      symbole: ((_e = vite === null || vite === void 0 ? void 0 : vite.resolve) === null || _e === void 0 ? void 0 : _e.symbole) || "@",
      alias: ((_f = vite === null || vite === void 0 ? void 0 : vite.resolve) === null || _f === void 0 ? void 0 : _f.alias) || []
    }
  };
  var defaultServerConfig = {
    development: {
      port: ((_g = server === null || server === void 0 ? void 0 : server.development) === null || _g === void 0 ? void 0 : _g.port) || void 0,
      open: ((_h = server === null || server === void 0 ? void 0 : server.development) === null || _h === void 0 ? void 0 : _h.open) || false
    },
    production: {
      hosting: ((_j = server === null || server === void 0 ? void 0 : server.production) === null || _j === void 0 ? void 0 : _j.hosting) || "custom"
    }
  };
  var defaultExperimentalFeaturesConfig = {
    stream: (experimental === null || experimental === void 0 ? void 0 : experimental.stream) || false
  };
  try {
    var config = {
      reactStrictMode: reactStrictMode === void 0 ? true : reactStrictMode,
      server: defaultServerConfig,
      vite: {
        plugins: defaultViteConfig.plugins,
        optimizeDeps: {
          exclude: __spreadArray([
            "node:http",
            "node-fetch"
          ], defaultViteConfig.optimizeDeps.exclude, true),
          include: __spreadArray([
            "react-fast-compare",
            "invariant",
            "shallowequal",
            "react-dom/client",
            "react-dom",
            "react",
            "react-router-dom",
            "react-helmet-async"
          ], defaultViteConfig.optimizeDeps.include, true)
        },
        css: {
          postcss: defaultViteConfig.css.postcss
        },
        build: {
          external: defaultViteConfig.build.external
        },
        resolve: {
          // concat two arrays
          alias: __spreadArray([
            {
              find: defaultViteConfig.resolve.symbole,
              replacement: "./src"
            },
            {
              find: "path",
              replacement: "node_modules/path-browserify"
            }
          ], defaultViteConfig.resolve.alias, true)
        },
        appType: "custom"
      },
      experimental: defaultExperimentalFeaturesConfig
      // More config options...
    };
    return config;
  } catch (error) {
    console.error(error);
    return {
      reactStrictMode: true,
      vite: {
        optimizeDeps: {
          exclude: ["node:http", "node-fetch"],
          include: [
            "react-fast-compare",
            "invariant",
            "shallowequal",
            "react-dom/client",
            "react-dom",
            "react",
            "react-router-dom",
            "react-helmet-async"
          ]
        },
        appType: "custom",
        resolve: {
          alias: [
            {
              find: "@",
              replacement: "./src"
            },
            {
              find: "path",
              replacement: "node_modules/path-browserify"
            }
          ]
        }
      },
      experimental: {
        stream: false
      }
    };
  }
};
var adaptPath = function(paths) {
  var isProduction = false;
  var prefix = isProduction ? "./../../" : "";
  var isArray = Array.isArray(paths);
  if (isArray) {
    return paths.map(function(path) {
      return "".concat(process.cwd(), "/").concat(prefix).concat(path);
    });
  }
  return "".concat(process.cwd(), "/").concat(prefix).concat(paths);
};
var resolvePath = function(path) {
  var isWindows = process.platform === "win32";
  if (isWindows) {
    return "file:///".concat(path);
  }
  return path;
};
export {
  Body,
  CustomLink as Link,
  Navigate,
  Outlet,
  RouterComponent,
  Scripts,
  adaptPath,
  createFetchRequest,
  createRoutesFromChildren,
  defineConfig,
  defineRouter,
  generatePath,
  matchPath,
  matchRoutes,
  resolvePath,
  useFetcher,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
  useResolvedPath,
  useRoutes,
  useSearchParams
};
//# sourceMappingURL=rasengan.js.map
