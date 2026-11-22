(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/public-app/app/[lang]/error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ErrorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ErrorPage({ reset }) {
    _s();
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])().lang === 'bn' ? 'bn' : 'en';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "main",
        className: "shell inner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "glass panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["words"][lang].unavailable
                }, void 0, false, {
                    fileName: "[project]/public-app/app/[lang]/error.tsx",
                    lineNumber: 9,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "pill",
                        onClick: reset,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["local"])(lang, 'Try again', 'আবার চেষ্টা করুন')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/error.tsx",
                        lineNumber: 10,
                        columnNumber: 8
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/public-app/app/[lang]/error.tsx",
                    lineNumber: 10,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/public-app/app/[lang]/error.tsx",
            lineNumber: 8,
            columnNumber: 50
        }, this)
    }, void 0, false, {
        fileName: "[project]/public-app/app/[lang]/error.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_s(ErrorPage, "zmUErVVHtqqM6DIDQ9M8H17P2nM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ErrorPage;
var _c;
__turbopack_context__.k.register(_c, "ErrorPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public-app/lib/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLanguage",
    ()=>isLanguage,
    "isSection",
    ()=>isSection,
    "languages",
    ()=>languages,
    "local",
    ()=>local,
    "recordPath",
    ()=>recordPath,
    "sectionKeys",
    ()=>sectionKeys,
    "sections",
    ()=>sections,
    "siteOrigin",
    ()=>siteOrigin,
    "words",
    ()=>words
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/public-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const languages = [
    'en',
    'bn'
];
const sections = {
    medicines: {
        collection: 'medicines',
        icon: '✚',
        en: 'Medicines',
        bn: 'ওষুধ',
        enHint: 'Search brands, generics and strengths',
        bnHint: 'ব্র্যান্ড, জেনেরিক ও মাত্রা খুঁজুন'
    },
    tests: {
        collection: 'diagnostic_tests',
        icon: '◇',
        en: 'Diagnostic tests',
        bn: 'পরীক্ষা',
        enHint: 'Compare test prices and patient rates',
        bnHint: 'পরীক্ষার মূল্য ও রোগীভেদে মূল্য দেখুন'
    },
    doctors: {
        collection: 'doctors',
        icon: '⊕',
        en: 'Doctors',
        bn: 'চিকিৎসক',
        enHint: 'Explore specialties and chambers',
        bnHint: 'বিশেষত্ব ও চেম্বার দেখুন'
    },
    facilities: {
        collection: 'facilities',
        icon: '▦',
        en: 'Hospitals & clinics',
        bn: 'হাসপাতাল ও ক্লিনিক',
        enHint: 'Find addresses and available services',
        bnHint: 'ঠিকানা ও উপলভ্য সেবা দেখুন'
    }
};
const sectionKeys = Object.keys(sections);
const isLanguage = (value)=>value === 'en' || value === 'bn';
const isSection = (value)=>Object.hasOwn(sections, value);
const words = {
    en: {
        title: 'Clear answers start here.',
        subtitle: 'Explore medicines, test prices, doctors and hospitals across Bangladesh.',
        overline: 'Your Bangladesh healthcare guide',
        search: 'Search',
        placeholder: 'Try Napa, paracetamol or a brand name',
        explore: 'Explore the guide',
        common: 'Look up a medicine',
        home: 'Home',
        results: 'Search results',
        browse: 'Browse all',
        empty: 'No matching records. Try a shorter name or search by generic.',
        previous: 'Previous',
        next: 'Next page',
        featured: 'Browse medicines',
        keyFacts: 'At a glance',
        prices: 'Prices',
        price: 'Price',
        mrp: 'Listed MRP',
        pack: 'Pack / unit',
        date: 'Price date',
        checked: 'Date checked',
        historical: 'Historical price',
        facility: 'Facility',
        rate: 'Patient rate',
        eligible: 'Eligible staff and dependents',
        standard: 'Standard',
        unknown: 'Unavailable',
        free: 'Free',
        caution: 'Prices are indicative and subject to change. Confirm the current price before purchase or booking.',
        noPrices: 'No prices are listed for this entry.',
        chambers: 'Chambers',
        maps: 'Open map',
        qualifications: 'Qualifications',
        sponsor: 'Sponsored',
        info: 'Healthcare information for Bangladesh',
        language: 'Language',
        directory: 'Directory',
        shortlist: 'Browse by category',
        privacy: 'Privacy',
        unavailable: 'The directory is temporarily unavailable.'
    },
    bn: {
        title: 'স্বাস্থ্যতথ্য এখন হাতের কাছে।',
        subtitle: 'বাংলাদেশের ওষুধ, পরীক্ষার মূল্য, চিকিৎসক ও হাসপাতালের তথ্য খুঁজুন।',
        overline: 'বাংলাদেশের স্বাস্থ্যতথ্য নির্দেশিকা',
        search: 'খুঁজুন',
        placeholder: 'Napa, paracetamol বা ব্র্যান্ডের নাম লিখুন',
        explore: 'তথ্যের বিভাগ',
        common: 'ওষুধ খুঁজুন',
        home: 'প্রচ্ছদ',
        results: 'অনুসন্ধানের ফলাফল',
        browse: 'সব দেখুন',
        empty: 'কোনো তথ্য মেলেনি। ছোট নাম বা জেনেরিক দিয়ে খুঁজুন।',
        previous: 'আগের পাতা',
        next: 'পরের পাতা',
        featured: 'ওষুধের তালিকা',
        keyFacts: 'এক নজরে',
        prices: 'মূল্য',
        price: 'দাম',
        mrp: 'তালিকাভুক্ত সর্বোচ্চ মূল্য',
        pack: 'প্যাক / একক',
        date: 'মূল্যের তারিখ',
        checked: 'যাচাইয়ের তারিখ',
        historical: 'পুরোনো মূল্য',
        facility: 'প্রতিষ্ঠান',
        rate: 'রোগীর শ্রেণি',
        eligible: 'যোগ্য কর্মী ও নির্ভরশীল',
        standard: 'সাধারণ',
        unknown: 'তথ্য নেই',
        free: 'বিনামূল্যে',
        caution: 'দাম আনুমানিক ও পরিবর্তনশীল। কেনার বা বুকিংয়ের আগে বর্তমান মূল্য জেনে নিন।',
        noPrices: 'এই তথ্যের জন্য কোনো মূল্য তালিকাভুক্ত নেই।',
        chambers: 'চেম্বার',
        maps: 'মানচিত্র দেখুন',
        qualifications: 'যোগ্যতা',
        sponsor: 'স্পনসরকৃত',
        info: 'বাংলাদেশের স্বাস্থ্যসেবা সম্পর্কিত তথ্য',
        language: 'ভাষা',
        directory: 'তথ্যভাণ্ডার',
        shortlist: 'বিভাগ অনুযায়ী দেখুন',
        privacy: 'গোপনীয়তা',
        unavailable: 'তথ্যভাণ্ডার সাময়িকভাবে বন্ধ আছে।'
    }
};
const local = (lang, english, bangla)=>lang === 'bn' ? bangla : english;
function recordPath(lang, section, id, name, strength) {
    const slug = [
        name,
        strength
    ].filter(Boolean).join(' ').normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 92).replace(/-$/, '');
    return '/' + lang + '/' + section + '/' + (slug || section) + '--' + encodeURIComponent(id);
}
function siteOrigin() {
    const value = __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SITE_URL;
    if (!value) return undefined;
    try {
        const parsed = new URL(value);
        return [
            'https:',
            'http:'
        ].includes(parsed.protocol) ? parsed.origin : undefined;
    } catch  {
        return undefined;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/public-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/public-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/public-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/public-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/public-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/public-app/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/public-app/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=public-app_0mx3b62fy4d63._.js.map