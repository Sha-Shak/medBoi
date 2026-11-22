module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/public-app/app/[lang]/[section]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Browse,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/catalogue.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/app/[lang]/components.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function generateMetadata({ params, searchParams }) {
    const { lang, section } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLanguage"])(lang) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSection"])(section)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { q, page } = await searchParams;
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cleanQuery"])(q);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"])(lang, '/' + section, query ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["words"][lang].results + ' · ' + query : __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section][lang], lang === 'en' ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].enHint : __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].bnHint, !query && (!page || page === '1'));
}
async function Browse({ params, searchParams }) {
    const { lang, section } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLanguage"])(lang) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSection"])(section)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { q, page } = await searchParams;
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cleanQuery"])(q);
    const current = Math.max(1, Math.min(2000, Number.parseInt(page ?? '1', 10) || 1));
    const { rows, hasMore } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchCatalogue"])(section, query, current);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["words"][lang];
    const href = (page)=>'?' + new URLSearchParams({
            ...query ? {
                q: query
            } : {},
            ...page > 1 ? {
                page: String(page)
            } : {}
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "main",
        className: "shell inner",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crumbs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: '/' + lang,
                        children: t.home
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                        lineNumber: 29,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                        lineNumber: 29,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section][lang]
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                        lineNumber: 29,
                        columnNumber: 82
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 29,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "page-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section][lang]
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                                lineNumber: 30,
                                columnNumber: 40
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: lang === 'en' ? __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].enHint : __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].bnHint
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                                lineNumber: 30,
                                columnNumber: 74
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                        lineNumber: 30,
                        columnNumber: 35
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LanguageLink"], {
                        lang: lang,
                        path: '/' + section + href(current)
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Search"], {
                lang: lang,
                section: section,
                query: query
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this),
            query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "list-heading",
                children: [
                    t.results,
                    " · ",
                    query
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 33,
                columnNumber: 15
            }, this),
            rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RecordList"], {
                lang: lang,
                section: section,
                rows: rows
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 34,
                columnNumber: 20
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "glass panel",
                children: t.empty
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 34,
                columnNumber: 79
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "pager",
                "aria-label": t.browse,
                children: [
                    current > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "pill glass",
                        href: href(current - 1),
                        prefetch: false,
                        children: t.previous
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 23
                    }, this),
                    hasMore && current < 2000 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "pill glass",
                        href: href(current + 1),
                        prefetch: false,
                        children: t.next
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            rows.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdSlot"], {}, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
                lineNumber: 39,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/public-app/app/[lang]/[section]/page.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
}),
"[project]/public-app/app/[lang]/[section]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/public-app/app/[lang]/[section]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/public-app/app/[lang]/ads.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Adsense",
    ()=>Adsense
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Adsense = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Adsense() from the server but Adsense is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/public-app/app/[lang]/ads.tsx", "Adsense");
}),
"[project]/public-app/app/[lang]/ads.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$ads$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/public-app/app/[lang]/ads.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$ads$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/public-app/app/[lang]/components.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdSlot",
    ()=>AdSlot,
    "LanguageLink",
    ()=>LanguageLink,
    "RecordList",
    ()=>RecordList,
    "Search",
    ()=>Search,
    "Sponsor",
    ()=>Sponsor,
    "strings",
    ()=>strings,
    "webUrl",
    ()=>webUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$ads$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/app/[lang]/ads.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/app/[lang]/photo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/content.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Search({ lang, section, query = '', hero = false }) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["words"][lang];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: '/' + lang + '/' + section,
        className: hero ? 'search glass hero-search' : 'search glass',
        role: "search",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "magnify",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/components.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "q",
                type: "search",
                "aria-label": t.search,
                defaultValue: query,
                maxLength: 90,
                placeholder: section === 'medicines' ? t.placeholder : (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["local"])(lang, 'Search by name', 'নাম দিয়ে খুঁজুন')
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/components.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                children: t.search
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/components.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/public-app/app/[lang]/components.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
function LanguageLink({ lang, path }) {
    const other = lang === 'en' ? 'bn' : 'en';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: '/' + other + path,
        hrefLang: other,
        className: "subtle",
        children: other === 'bn' ? 'এই পাতাটি বাংলায়' : 'This page in English'
    }, void 0, false, {
        fileName: "[project]/public-app/app/[lang]/components.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
function RecordList({ lang, section, rows }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "record-list",
        children: rows.map((row)=>{
            const name = lang === 'bn' && row.nameBn ? row.nameBn : row.name;
            const parts = [
                row.name !== name ? row.name : undefined,
                row.genericName,
                row.strength,
                row.dosageForm,
                row.manufacturerName,
                row.type,
                row.location?.district,
                row.chambers?.[0]?.name,
                ...strings(row.specialties).slice(0, 2),
                ...strings(row.categories).slice(0, 2)
            ].filter(Boolean);
            const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imagePath"])(section, row._id, row.picture);
            const image = photo && section === 'doctors' ? photo + '?size=thumbnail' : photo;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "record glass",
                prefetch: false,
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordPath"])(lang, section, row._id, row.name, row.strength),
                children: [
                    image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                        src: image,
                        alt: "",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].icon,
                        className: 'result-photo ' + section
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/components.tsx",
                        lineNumber: 31,
                        columnNumber: 16
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: 'category-icon ' + section,
                        "aria-hidden": true,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].icon
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/components.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "record-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/components.tsx",
                                lineNumber: 33,
                                columnNumber: 40
                            }, this),
                            parts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: parts.join(' · ')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/components.tsx",
                                lineNumber: 33,
                                columnNumber: 84
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/public-app/app/[lang]/components.tsx",
                        lineNumber: 33,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "chevron",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/components.tsx",
                        lineNumber: 34,
                        columnNumber: 7
                    }, this)
                ]
            }, row._id, true, {
                fileName: "[project]/public-app/app/[lang]/components.tsx",
                lineNumber: 30,
                columnNumber: 12
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/public-app/app/[lang]/components.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function strings(value) {
    return Array.isArray(value) ? value.filter((item)=>typeof item === 'string' && Boolean(item.trim())) : [];
}
function webUrl(raw) {
    if (!raw) return undefined;
    try {
        const url = new URL(raw);
        return url.protocol === 'https:' ? url.href : undefined;
    } catch  {
        return undefined;
    }
}
function Sponsor({ lang }) {
    const name = process.env.SPONSOR_NAME;
    const title = lang === 'bn' ? process.env.SPONSOR_TITLE_BN || process.env.SPONSOR_TITLE_EN : process.env.SPONSOR_TITLE_EN;
    const url = webUrl(process.env.SPONSOR_URL);
    if (!name || !title || !url) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "sponsor glass",
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["words"][lang].sponsor,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["words"][lang].sponsor
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/components.tsx",
                        lineNumber: 54,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/components.tsx",
                        lineNumber: 54,
                        columnNumber: 44
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/components.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: url,
                rel: "sponsored noopener noreferrer",
                target: "_blank",
                className: "pill",
                children: name
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/components.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/public-app/app/[lang]/components.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
function AdSlot() {
    const client = process.env.ADSENSE_CLIENT ?? '';
    const slot = process.env.ADSENSE_SLOT ?? '';
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteOrigin"])() || !/^ca-pub-\d{16}$/.test(client) || !/^\d{5,20}$/.test(slot)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "ad-slot",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$ads$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Adsense"], {
            client: client,
            slot: slot
        }, void 0, false, {
            fileName: "[project]/public-app/app/[lang]/components.tsx",
            lineNumber: 63,
            columnNumber: 37
        }, this)
    }, void 0, false, {
        fileName: "[project]/public-app/app/[lang]/components.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
}),
"[project]/public-app/app/[lang]/photo.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Photo",
    ()=>Photo
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Photo() from the server but Photo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/public-app/app/[lang]/photo.tsx", "Photo");
}),
"[project]/public-app/app/[lang]/photo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/public-app/app/[lang]/photo.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/public-app/lib/catalogue.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanQuery",
    ()=>cleanQuery,
    "doctorsAtFacility",
    ()=>doctorsAtFacility,
    "featuredMedicines",
    ()=>featuredMedicines,
    "getGenericInformation",
    ()=>getGenericInformation,
    "getImage",
    ()=>getImage,
    "getRecord",
    ()=>getRecord,
    "relatedMedicines",
    ()=>relatedMedicines,
    "searchCatalogue",
    ()=>searchCatalogue,
    "sitemapChunkSize",
    ()=>sitemapChunkSize,
    "sitemapCounts",
    ()=>sitemapCounts,
    "sitemapEntries",
    ()=>sitemapEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$medicine$2d$references$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/medicine-references.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$mongo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/mongo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function readSection(section, read) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$mongo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readCatalogue"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].collection, (db)=>read(db.collection(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].collection)));
}
const pictureFields = [
    'picture.removedAt',
    'picture.cloudinary.type'
];
const summaries = {
    medicines: [
        'name',
        'nameBn',
        ...Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$medicine$2d$references$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineReferenceProjection"]),
        'strength',
        ...pictureFields
    ],
    tests: [
        'name',
        'nameBn',
        'categories'
    ],
    doctors: [
        'name',
        'nameBn',
        'nameEn',
        'specialties',
        ...pictureFields,
        'chambers.name',
        'chambers.address'
    ],
    facilities: [
        'name',
        'nameBn',
        'type',
        'location.district',
        ...pictureFields
    ]
};
const details = {
    medicines: [
        'packageDescription',
        'packageSize',
        'therapeuticSystem',
        'dgdaRegistry.registrationNumber',
        'dgdaRegistry.registeredFor',
        'labelScope',
        'labelSections',
        'price.mrp',
        'price.currency',
        'price.mrpPackageUnit',
        'price.offers.price',
        'price.offers.currency',
        'price.offers.packageUnit',
        'price.offers.priceDate',
        'price.offers.priceType',
        'price.offers.mrp',
        'price.offers.observedAt'
    ],
    tests: [
        'aliases',
        ...[
            'government',
            'private'
        ].flatMap((sector)=>[
                'providerName',
                'facilityId',
                'branchName',
                'price',
                'currency',
                'sample',
                'reportTime',
                'updatedAt',
                'eligibleGovernmentOrDependentPrice',
                'patientCategory',
                'isFree',
                'dateBasis',
                'sources.dateBasis'
            ].map((field)=>'prices.' + sector + '.' + field))
    ],
    doctors: [
        'degrees',
        ...[
            'education',
            'workExperience',
            'expertise',
            'specializations',
            'awards',
            'achievements',
            'publications',
            'experienceYears',
            'designation',
            'workplace',
            'bio',
            'about',
            'affiliation',
            'institute'
        ].map((field)=>'professionalDetails.' + field),
        'bmdc.number',
        'bmdc.status',
        'qualifications.originalText',
        'chambers.name',
        'chambers.address',
        'chambers.mapUrl',
        'chambers.facilityId',
        'chambers.visitingHours.raw',
        'chambers.appointmentPhone',
        'chambers.room',
        'chambers.fee'
    ],
    facilities: [
        'address',
        'location.upazila',
        'location.division',
        'registryCode',
        'isPrivate',
        'ownership',
        'services',
        'emergency.available',
        'emergency.open24Hours',
        'emergency.status',
        'contact.phoneNumbers',
        'contact.emails',
        'email',
        'capacity.beds',
        'facilityLevel',
        'healthcareLevel',
        'facilityFunction',
        'establishmentYear',
        'government.licence.number',
        'directory.specialtyBreakdown.specialty',
        'directory.specialtyBreakdown.doctorCount',
        'directory.servicesAsListed'
    ]
};
const fields = {
    medicines: [
        'nameKey',
        'name',
        'nameBn',
        'genericName',
        'manufacturerName',
        'strength',
        'dosageForm'
    ],
    tests: [
        'name',
        'nameBn',
        'aliases',
        'searchAliases'
    ],
    doctors: [
        'name',
        'nameEn',
        'nameBn',
        'specialties',
        'chambers.name',
        'chambers.address'
    ],
    facilities: [
        'nameKey',
        'name',
        'nameBn',
        'location.district',
        'registryCode'
    ]
};
const projection = (paths)=>Object.fromEntries(paths.map((path)=>[
            path,
            1
        ]));
const escape = (value)=>value.replace(/[.*+?^$${}()|[\]\\]/g, '\\$&');
function cleanQuery(value) {
    return typeof value === 'string' ? value.normalize('NFKC').trim().replace(/\s+/g, ' ').slice(0, 90) : '';
}
const getRecord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (section, id)=>{
    if (section === 'medicines') return readSection(section, (collection)=>collection.aggregate([
            {
                $match: {
                    _id: id
                }
            },
            {
                $project: {
                    ...projection([
                        ...summaries.medicines,
                        ...details.medicines
                    ]),
                    dgdaEvidenceType: '$source.registry.evidenceType'
                }
            },
            ...__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$medicine$2d$references$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineReferenceStages"]
        ], {
            maxTimeMS: 5000
        }).next());
    return readSection(section, (collection)=>collection.findOne(section === 'tests' ? {
            $or: [
                {
                    _id: id
                },
                {
                    mergedTestIds: id
                }
            ]
        } : {
            _id: id
        }, {
            projection: projection([
                ...summaries[section],
                ...details[section]
            ]),
            maxTimeMS: 5000
        }));
}, [
    'medboi-public-detail-v7'
], {
    revalidate: 300
}));
const pageSize = 20;
async function browse(section, query, page) {
    const tokens = query.split(' ').filter(Boolean).slice(0, 6);
    if (section === 'medicines') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$mongo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readCatalogue"])('medicines', async (db)=>{
        const clauses = await Promise.all(tokens.map(async (token)=>({
                $or: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$medicine$2d$references$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineSearchFields"])(db, escape(token))
            })));
        return db.collection('medicines').aggregate([
            {
                $match: clauses.length ? {
                    $and: clauses
                } : {}
            },
            {
                $sort: {
                    name: 1,
                    _id: 1
                }
            },
            {
                $skip: (page - 1) * pageSize
            },
            {
                $limit: pageSize + 1
            },
            {
                $project: projection(summaries.medicines)
            },
            ...__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$medicine$2d$references$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineReferenceStages"]
        ], {
            maxTimeMS: 5500
        }).toArray();
    });
    const filter = tokens.length ? {
        $and: tokens.map((token)=>({
                $or: fields[section].map((field)=>({
                        [field]: {
                            $regex: escape(token),
                            $options: 'i'
                        }
                    }))
            }))
    } : {};
    return readSection(section, (collection)=>collection.find(filter, {
            projection: projection(summaries[section]),
            maxTimeMS: 5500
        }).sort({
            name: 1,
            _id: 1
        }).skip((page - 1) * pageSize).limit(pageSize + 1).toArray());
}
const cachedBrowse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(browse, [
    'medboi-public-list-v4'
], {
    revalidate: 300
});
async function searchCatalogue(section, query, page) {
    const rows = await (query ? browse : cachedBrowse)(section, query, page);
    return {
        rows: rows.slice(0, pageSize),
        hasMore: rows.length > pageSize
    };
}
const sitemapChunkSize = 5000;
const sitemapCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (section)=>readSection(section, (collection)=>collection.estimatedDocumentCount()), [
    'medboi-sitemap-count-v1'
], {
    revalidate: 3600
});
const sitemapEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (section, page)=>readSection(section, (collection)=>collection.find({}, {
            projection: {
                name: 1,
                strength: 1
            }
        }).sort({
            _id: 1
        }).skip(page * sitemapChunkSize).limit(sitemapChunkSize).toArray()), [
    'medboi-sitemap-v1'
], {
    revalidate: 3600
});
const doctorsAtFacility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (facilityId)=>readSection('doctors', (collection)=>collection.find({
            'chambers.facilityId': facilityId
        }, {
            projection: projection([
                'name',
                'nameBn',
                'specialties',
                ...pictureFields
            ]),
            maxTimeMS: 3000
        }).sort({
            name: 1,
            _id: 1
        }).limit(6).toArray()), [
    'medboi-public-facility-doctors-v1'
], {
    revalidate: 300
});
const relatedMedicines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (id, generic)=>{
    if (!generic) return [];
    return readSection('medicines', (collection)=>collection.aggregate([
            {
                $match: {
                    genericId: generic,
                    _id: {
                        $ne: id
                    }
                }
            },
            {
                $sort: {
                    name: 1,
                    _id: 1
                }
            },
            {
                $limit: 5
            },
            {
                $project: projection(summaries.medicines)
            },
            ...__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$medicine$2d$references$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineReferenceStages"]
        ], {
            maxTimeMS: 3000
        }).toArray());
}, [
    'medboi-public-related-v3'
], {
    revalidate: 300
});
async function getImage(section, id, thumbnail = false) {
    const row = await readSection(section, (collection)=>collection.findOne({
            _id: id
        }, {
            projection: {
                'picture.url': 1,
                'picture.removedAt': 1,
                'picture.cloudinary': 1,
                ...thumbnail ? {
                    'picture.cloudinarySource.role': 1,
                    'picture.sourceKey': 1,
                    'source.photos': 1,
                    pictureHistory: {
                        $slice: -1
                    }
                } : {}
            },
            maxTimeMS: 3500
        }));
    const picture = row?.picture;
    const previous = thumbnail && row?.pictureHistory?.[0];
    const evidence = thumbnail && (row?.source?.photos?.[picture?.sourceKey] ?? picture);
    const previousEvidence = previous && (row?.source?.photos?.[previous.sourceKey] ?? previous);
    if (picture && !picture.removedAt && evidence?.cloudinarySource?.role === 'profile-original' && evidence.url && previousEvidence?.url === evidence.url && previous?.cloudinary?.type === 'authenticated' && previous.cloudinary.width * previous.cloudinary.height < picture.cloudinary.width * picture.cloudinary.height) {
        return {
            cloudinary: previous.cloudinary
        };
    }
    return picture ?? undefined;
}
const getGenericInformation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$mongo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readCatalogue"])('generics', (db)=>db.collection('generics').findOne({
            _id: id
        }, {
            projection: {
                name: 1,
                drugClass: 1,
                indications: 1,
                labelSections: 1
            },
            maxTimeMS: 3500
        })), [
    'medboi-public-generic-v1'
], {
    revalidate: 300
});
const featuredMedicines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async ()=>{
    const preferred = [
        'napa',
        'seclo',
        'ace',
        'maxpro',
        'fexo',
        'monas'
    ];
    const fields = projection([
        ...summaries.medicines,
        'price.mrp',
        'price.currency',
        'price.mrpPackageUnit'
    ]);
    const hosted = {
        'picture.cloudinary.type': 'authenticated',
        'picture.removedAt': {
            $exists: false
        }
    };
    const get = (filter, limit)=>readSection('medicines', (collection)=>collection.aggregate([
                {
                    $match: {
                        ...filter,
                        ...hosted
                    }
                },
                {
                    $sort: {
                        name: 1,
                        strength: 1,
                        _id: 1
                    }
                },
                {
                    $limit: limit
                },
                {
                    $project: fields
                },
                ...__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$medicine$2d$references$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineReferenceStages"]
            ], {
                maxTimeMS: 5000
            }).toArray());
    const results = await get({
        nameKey: {
            $in: preferred
        }
    }, 60);
    const selected = preferred.flatMap((name)=>{
        const matches = results.filter((row)=>row.name.toLowerCase() === name);
        return matches.sort((a, b)=>Number(/tablet|capsule/i.test(b.dosageForm || '')) - Number(/tablet|capsule/i.test(a.dosageForm || '')))[0] ?? [];
    });
    if (selected.length >= 4) return selected;
    const fallback = await get({
        _id: {
            $nin: selected.map((row)=>row._id)
        }
    }, 6 - selected.length);
    return [
        ...selected,
        ...fallback
    ];
}, [
    'medboi-public-featured-v3'
], {
    revalidate: 900
});
}),
"[project]/public-app/lib/media.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imagePath",
    ()=>imagePath,
    "imageSection",
    ()=>imageSection
]);
const imageSections = [
    'facilities',
    'medicines',
    'doctors'
];
function imageSection(section) {
    return imageSections.some((item)=>section === item);
}
function imagePath(section, id, picture) {
    return imageSection(section) && picture?.cloudinary?.type === 'authenticated' && !picture.removedAt ? '/media/' + section + '/' + encodeURIComponent(id) : undefined;
}
}),
"[project]/public-app/lib/mongo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readCatalogue",
    ()=>readCatalogue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$catalogue$2d$destination$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/catalogue-destination.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/public-app/node_modules/mongodb)");
;
;
const state = globalThis;
function connection(uri) {
    if (!uri) throw new Error('Catalogue connection is unavailable.');
    const connections = state.medBoiPublicConnections ??= new Map();
    const existing = connections.get(uri);
    if (existing) return existing;
    const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__["MongoClient"](uri, {
        serverSelectionTimeoutMS: 6500,
        maxPoolSize: 12,
        readPreference: 'primaryPreferred',
        maxStalenessSeconds: 120
    });
    const pending = client.connect().catch(async (error)=>{
        if (connections.get(uri) === pending) connections.delete(uri);
        await client.close().catch(()=>undefined);
        throw error;
    });
    connections.set(uri, pending);
    return pending;
}
async function readCatalogue(collection, read) {
    const destination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$catalogue$2d$destination$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["catalogueDestination"])(collection);
    const uri = destination?.uri ?? process.env.MONGODB_URI;
    if (!uri) throw new Error('Catalogue connection is unavailable.');
    const dbName = destination?.name ?? (process.env.MONGODB_DATABASE || 'medicine_catalog_prod');
    for(let attempt = 0;; attempt++){
        const pending = connection(uri);
        try {
            return await read((await pending).db(dbName));
        } catch (error) {
            if (!(error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__["MongoTopologyClosedError"] || error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__["MongoNotConnectedError"])) throw error;
            // Another read may already have opened a replacement pool.
            if (state.medBoiPublicConnections?.get(uri) === pending) {
                state.medBoiPublicConnections?.delete(uri);
                void pending.then((client)=>client.close()).catch(()=>undefined);
            }
            if (attempt > 0) throw error;
        }
    }
}
}),
"[project]/public-app/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jsonLd",
    ()=>jsonLd,
    "seo",
    ()=>seo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/content.ts [app-rsc] (ecmascript)");
;
function seo(lang, path, title, description, index = true) {
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteOrigin"])();
    const url = origin ? origin + '/' + lang + path : undefined;
    return {
        title,
        description,
        robots: {
            index: Boolean(origin && index),
            follow: Boolean(origin)
        },
        alternates: origin ? {
            canonical: url,
            languages: {
                en: origin + '/en' + path,
                bn: origin + '/bn' + path,
                'x-default': origin + '/en' + path
            }
        } : undefined,
        openGraph: {
            title,
            description,
            url,
            siteName: 'medBoi',
            locale: lang === 'bn' ? 'bn_BD' : 'en_BD',
            type: 'website'
        }
    };
}
function jsonLd(value) {
    return JSON.stringify(value).replace(/</g, '\\u003c');
}
}),
"[project]/shared/catalogue-destination.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalogueDestination",
    ()=>catalogueDestination
]);
const medicineCollections = new Set([
    'medicines',
    'generics',
    'manufacturers',
    'dosage_forms'
]);
function catalogueDestination(collection) {
    if (!collection || collection === 'admins' || process.env.MONGODB_CATALOGUE_SPLIT !== 'true') return undefined;
    const medicineUri = process.env.MONGODB_HEALTHCARE_MEDICINE_URI?.trim();
    const directoryUri = process.env.MONGODB_HEALTHCARE_DIRECTORY_URI?.trim();
    if (!medicineUri || !directoryUri) throw new Error('Both healthcare database connections are required.');
    return medicineCollections.has(collection) ? {
        uri: medicineUri,
        name: 'healthcare_medicines'
    } : {
        uri: directoryUri,
        name: 'healthcare_directory'
    };
}
}),
"[project]/shared/medicine-references.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "medicineReferenceProjection",
    ()=>medicineReferenceProjection,
    "medicineReferenceStages",
    ()=>medicineReferenceStages,
    "medicineSearchFields",
    ()=>medicineSearchFields
]);
const references = [
    [
        'genericId',
        'generics',
        'genericName'
    ],
    [
        'manufacturerId',
        'manufacturers',
        'manufacturerName'
    ],
    [
        'dosageFormId',
        'dosage_forms',
        'dosageForm'
    ]
];
const medicineReferenceProjection = {
    genericId: 1,
    manufacturerId: 1,
    dosageFormId: 1
};
const medicineReferenceStages = references.flatMap(([id, collection, label])=>[
        {
            $lookup: {
                from: collection,
                localField: id,
                foreignField: '_id',
                as: '_reference'
            }
        },
        {
            $set: {
                [label]: {
                    $ifNull: [
                        {
                            $first: '$_reference.name'
                        },
                        null
                    ]
                }
            }
        },
        {
            $unset: '_reference'
        }
    ]);
async function medicineSearchFields(db, pattern) {
    const match = {
        $regex: pattern,
        $options: 'i'
    };
    const linked = await Promise.all(references.map(async ([id, collection])=>({
            [id]: {
                $in: await db.collection(collection).distinct('_id', collection === 'dosage_forms' ? {
                    $or: [
                        {
                            name: match
                        },
                        {
                            sourceLabels: match
                        }
                    ]
                } : {
                    $or: [
                        {
                            name: match
                        },
                        {
                            aliases: match
                        }
                    ]
                })
            }
        })));
    return [
        ...[
            'nameKey',
            'name',
            'nameBn',
            'strength'
        ].map((field)=>({
                [field]: match
            })),
        ...linked
    ];
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0e3px5upg-b9q._.js.map