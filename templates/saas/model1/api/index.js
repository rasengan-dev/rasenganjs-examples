var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path, { join } from "node:path";
import { createStaticHandler, createStaticRouter, } from "react-router-dom/server.js";
// @ts-ignore
import { createFetchRequest } from "rasengan";
import { fileTypeFromBuffer } from "file-type";
var RASENGAN_VERCEL_CONFIG = process.env.RASENGAN_VERCEL_CONFIG;
// Create server for production only
export default function handler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var url, host, appPath, config_1, configPath, config, filePath, file, err_1, segments, segmentsWithoutOrigin, _i, segments_1, segment, filePath, file, otherFile, result, mimeType, file, templateHtml, serverFilePath, bootstrapDirPath, entry, bootstrap, styles, render, staticRoutes, loadTemplateHtml, handler_1, fetchRequest, context, status_1, redirect, helmetContext, router, rendered, html, e_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 18, , 19]);
                    url = req.url;
                    host = req.headers.host;
                    appPath = process.cwd();
                    // Check if RASENGAN_VERCEL_CONFIG is set
                    if (RASENGAN_VERCEL_CONFIG) {
                        config_1 = JSON.parse(RASENGAN_VERCEL_CONFIG);
                        // Get the app path
                        appPath = join(appPath, config_1.rootDirectory);
                    }
                    configPath = path.resolve(join(appPath, "rasengan.config.js"));
                    return [4 /*yield*/, import(configPath)];
                case 1:
                    config = (_b.sent()).default;
                    if (!(url === "/robots.txt")) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 6]);
                    filePath = join(appPath, "dist/client/robots.txt");
                    return [4 /*yield*/, fs.access(path.resolve(filePath))];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, fs.readFile(filePath, "utf-8")];
                case 4:
                    file = _b.sent();
                    return [2 /*return*/, res.send(file)];
                case 5:
                    err_1 = _b.sent();
                    return [2 /*return*/, res.send("\n          user-agent: *\n          disallow: /downloads/\n          disallow: /private/\n          allow: /\n          \n          user-agent: magicsearchbot\n          disallow: /uploads/\n        ")];
                case 6:
                    // ! Sitemap Fix
                    if (url === "/sitemap.xml") {
                        return [2 /*return*/, res.send(path.resolve(join(appPath, "dist/client/sitemap.xml")))];
                    }
                    // ! Manifest Fix
                    if (url === "/manifest.json") {
                        return [2 /*return*/, res.send(path.resolve(join(appPath, "dist/client/manifest.json")))];
                    }
                    if (!url.includes("/assets")) return [3 /*break*/, 10];
                    segments = url.split("/");
                    segmentsWithoutOrigin = __spreadArray([], segments, true);
                    for (_i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
                        segment = segments_1[_i];
                        if (segment === "assets") {
                            break;
                        }
                        segmentsWithoutOrigin.shift();
                    }
                    filePath = join(appPath, "dist/client", segmentsWithoutOrigin.join("/"));
                    return [4 /*yield*/, fs.readFile(filePath, "utf-8")];
                case 7:
                    file = _b.sent();
                    if (url.endsWith(".js") || url.endsWith(".css")) {
                        return [2 /*return*/, new Response(file, {
                                headers: {
                                    "Content-Type": url.endsWith(".js")
                                        ? "text/javascript"
                                        : "text/css",
                                    "Cache-Control": "max-age=31536000",
                                },
                            })];
                    }
                    return [4 /*yield*/, fs.readFile(filePath)];
                case 8:
                    otherFile = _b.sent();
                    return [4 /*yield*/, fileTypeFromBuffer(otherFile)];
                case 9:
                    result = _b.sent();
                    mimeType = result
                        ? result.mime
                        : url.endsWith(".svg")
                            ? "image/svg+xml"
                            : "application/octet-stream";
                    return [2 /*return*/, new Response(otherFile, {
                            headers: {
                                "Content-Type": mimeType,
                                "Cache-Control": "max-age=31536000",
                            },
                        })];
                case 10:
                    if (!(url.endsWith(".js") || url.endsWith(".css"))) return [3 /*break*/, 12];
                    return [4 /*yield*/, fs.readFile(url, "utf-8")];
                case 11:
                    file = _b.sent();
                    return [2 /*return*/, res
                            .status(200)
                            .setHeader("Content-Type", url.endsWith(".js") ? "text/javascript" : "text/css")
                            .setHeader("Cache-Control", "max-age=31536000")
                            .end(file)];
                case 12:
                    templateHtml = "";
                    serverFilePath = join(appPath, "dist/server/entry-server.js");
                    bootstrapDirPath = join(appPath, "dist/client/assets");
                    return [4 /*yield*/, import(serverFilePath)];
                case 13:
                    entry = _b.sent();
                    bootstrap = "/assets/" +
                        fsSync
                            .readdirSync(bootstrapDirPath)
                            .filter(function (fn) { return fn.includes("entry-client") && fn.endsWith(".js"); })[0];
                    styles = "/assets/" +
                        fsSync
                            .readdirSync(join(appPath, "dist/client/assets"))
                            .filter(function (fn) { return fn.includes("entry-client") && fn.endsWith(".css"); })[0];
                    render = entry.render, staticRoutes = entry.staticRoutes, loadTemplateHtml = entry.loadTemplateHtml;
                    handler_1 = createStaticHandler(staticRoutes);
                    fetchRequest = createFetchRequest(req, host);
                    return [4 /*yield*/, handler_1.query(fetchRequest)];
                case 14:
                    context = _b.sent();
                    status_1 = context.status;
                    if (status_1 === 302) {
                        redirect = context.headers.get("Location");
                        if (redirect)
                            return [2 /*return*/, res.redirect(redirect)];
                    }
                    helmetContext = {};
                    router = createStaticRouter(handler_1.dataRoutes, context);
                    if (!config.experimental.stream) return [3 /*break*/, 16];
                    return [4 /*yield*/, render(router, context, helmetContext, bootstrap, styles, res)];
                case 15: return [2 /*return*/, _b.sent()];
                case 16: return [4 /*yield*/, render(router, context, helmetContext)];
                case 17:
                    rendered = _b.sent();
                    // Load template html
                    if (!templateHtml) {
                        templateHtml = loadTemplateHtml(helmetContext, bootstrap, styles);
                    }
                    html = templateHtml.replace("rasengan-body-app", (_a = rendered.html) !== null && _a !== void 0 ? _a : "");
                    // Send the rendered html page
                    return [2 /*return*/, res
                            .status(200)
                            .setHeader("Content-Type", "text/html")
                            .setHeader("Cache-Control", "max-age=31536000")
                            .end(html)];
                case 18:
                    e_1 = _b.sent();
                    console.log(e_1.stack);
                    res.status(500).end(e_1.stack);
                    return [3 /*break*/, 19];
                case 19: return [2 /*return*/];
            }
        });
    });
}
// export default async function handler(req: VercelRequest, res: VercelResponse) {
//   return await handleRequest(req, res);
// }
