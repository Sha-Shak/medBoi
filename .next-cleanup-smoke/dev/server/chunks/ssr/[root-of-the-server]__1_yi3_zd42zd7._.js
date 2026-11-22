module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/public-app/app/[lang]/[section]/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Detail,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/catalogue.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/media.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/profile.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/app/[lang]/components.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/app/[lang]/photo.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function load(params) {
    const { lang, section, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLanguage"])(lang) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSection"])(section)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const id = slug.slice(slug.lastIndexOf('--') + 2);
    if (!slug.includes('--') || !/^[\w:-]{1,128}$/.test(id)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRecord"])(section, id);
    if (!row) (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordPath"])(lang, section, row._id, row.name, row.strength);
    if (slug !== decodeURIComponent(path.split('/').at(-1))) (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["permanentRedirect"])(path);
    const name = lang === 'bn' && row.nameBn ? row.nameBn : row.name;
    return {
        lang,
        section,
        id,
        row,
        path,
        name
    };
}
async function generateMetadata({ params }) {
    const { lang, section, row, path, name } = await load(params);
    const formulation = [
        name,
        row.strength,
        row.dosageForm
    ].filter(Boolean).join(' ');
    const facts = [
        row.genericName,
        row.manufacturerName,
        row.location?.district
    ].filter(Boolean).join(' · ');
    const description = (formulation + (facts ? ' · ' + facts : '') + '. ' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["local"])(lang, 'Explore details in the Bangladesh healthcare directory.', 'বাংলাদেশের স্বাস্থ্যতথ্য নির্দেশিকায় বিস্তারিত দেখুন।')).slice(0, 160);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seo"])(lang, path.slice(3), formulation + ' · ' + (section === 'medicines' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["local"])(lang, 'Price and uses in Bangladesh', 'বাংলাদেশে দাম ও ব্যবহার') : section === 'tests' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["local"])(lang, 'Test price in Bangladesh', 'বাংলাদেশে পরীক্ষার মূল্য') : __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section][lang]), description);
}
function date(value, lang) {
    if (typeof value !== 'string' && !(value instanceof Date)) return null;
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-BD', {
        dateStyle: 'medium',
        timeZone: 'Asia/Dhaka'
    }).format(d);
}
function money(value, lang, currency = 'BDT') {
    if (typeof value !== 'number' || !Number.isFinite(value)) return __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["words"][lang].unknown;
    return new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-BD', {
        style: 'currency',
        currency: /^[A-Z]{3}$/.test(currency) ? currency : 'BDT',
        maximumFractionDigits: 2
    }).format(value);
}
function Fact({ label, value }) {
    if (!(typeof value === 'string' && value.trim()) && typeof value !== 'number') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                children: label
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 54,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                children: String(value)
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 54,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
async function Detail({ params }) {
    const { lang, section, id, row, path, name } = await load(params);
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["words"][lang];
    const l = (en, bn)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["local"])(lang, en, bn);
    const test = section === 'tests';
    const medicine = section === 'medicines';
    const doctor = section === 'doctors';
    const facility = section === 'facilities';
    const offers = medicine ? row.price?.offers ?? [] : test ? [
        ...row.prices?.government ?? [],
        ...row.prices?.private ?? []
    ] : [];
    const available = offers.filter((offer)=>typeof offer?.price === 'number' && Number.isFinite(offer.price) && (offer.price > 0 || test && offer.price === 0 && offer.isFree === true) && (!test || typeof offer.facilityId === 'string' && offer.facilityId.length > 0));
    const unique = new Set();
    const comparison = available.flatMap((offer)=>{
        const lines = [
            offer
        ];
        if (test && typeof offer.eligibleGovernmentOrDependentPrice === 'number') {
            lines.push({
                ...offer,
                price: offer.eligibleGovernmentOrDependentPrice,
                patientCategory: 'eligible',
                isFree: offer.eligibleGovernmentOrDependentPrice === 0
            });
        }
        return lines.filter((line)=>{
            const fingerprint = JSON.stringify([
                line.facilityId,
                line.providerName,
                line.branchName,
                line.sample,
                line.reportTime,
                line.patientCategory,
                line.price,
                line.currency,
                line.packageUnit,
                line.priceDate || line.updatedAt,
                line.priceType
            ]);
            if (unique.has(fingerprint)) return false;
            unique.add(fingerprint);
            return true;
        });
    });
    const qualified = (row.qualifications ?? []).map((item)=>item.originalText).filter(Boolean);
    let label = medicine ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineSections"])(row.labelSections, lang) : [];
    let genericLabel = row.labelScope === 'generic';
    const [related, generic] = medicine ? await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relatedMedicines"])(id, row.genericId).catch(()=>[]),
        !label.length && typeof row.genericId === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGenericInformation"])(row.genericId).catch(()=>null) : null
    ]) : [
        [],
        null
    ];
    if (generic && generic.name === row.genericName) {
        label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["medicineSections"])({
            indication: generic.indications,
            'therapeutic class': generic.drugClass,
            ...generic.labelSections
        }, lang);
        genericLabel = true;
    }
    const linkedDoctors = facility ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["doctorsAtFacility"])(id).catch(()=>[]) : [];
    const photo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$media$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["imagePath"])(section, id, row.picture);
    const profile = row.professionalDetails;
    const doctorGroups = doctor ? [
        {
            title: t.qualifications,
            items: [
                ...new Set([
                    ...qualified.map(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publicText"]),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileItems"])(profile, 'education')
                ].filter(Boolean))
            ]
        },
        {
            title: l('Specialties and expertise', 'বিশেষত্ব ও দক্ষতা'),
            items: [
                ...new Set([
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.specialties),
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileItems"])(profile, 'expertise', 'specializations')
                ])
            ]
        },
        {
            title: l('Work experience', 'কর্মজীবনের অভিজ্ঞতা'),
            items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileItems"])(profile, 'workExperience', 'workplace', 'institute', 'affiliation')
        },
        {
            title: l('Awards and achievements', 'পুরস্কার ও অর্জন'),
            items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileItems"])(profile, 'awards', 'achievements')
        },
        {
            title: l('Publications', 'প্রকাশনা'),
            items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileItems"])(profile, 'publications')
        },
        {
            title: l('About the doctor', 'চিকিৎসকের পরিচিতি'),
            items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileItems"])(profile, 'bio', 'about')
        }
    ].filter((group)=>group.items.length) : [];
    const designations = doctor ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileItems"])(profile, 'designation') : [];
    const years = [
        ...new Set((Array.isArray(profile) ? profile : []).map((item)=>item.experienceYears).filter((year)=>typeof year === 'number' && Number.isFinite(year) && year > 0 && year < 90))
    ];
    const experience = years.length === 1 ? years[0] : undefined;
    const facilitySpecialties = facility && Array.isArray(row.directory?.specialtyBreakdown) ? row.directory.specialtyBreakdown.filter((item)=>typeof item?.specialty === 'string' && Number.isSafeInteger(item.doctorCount) && Number(item.doctorCount) > 0) : [];
    const title = [
        name,
        medicine ? row.strength : null
    ].filter(Boolean).join(' ');
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteOrigin"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "main",
        className: "shell inner",
        children: [
            origin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonLd"])({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: t.home,
                                item: origin + '/' + lang
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section][lang],
                                item: origin + '/' + lang + '/' + section
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: title,
                                item: origin + path
                            }
                        ]
                    })
                }
            }, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 115,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crumbs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: '/' + lang,
                        children: t.home
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 121,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 121,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: '/' + lang + '/' + section,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section][lang]
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 121,
                        columnNumber: 82
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 121,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "profile glass",
                children: [
                    photo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                        src: photo,
                        alt: name,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].icon,
                        className: 'profile-photo ' + section,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 16
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: 'category-icon ' + section,
                        "aria-hidden": true,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].icon
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "profile-category",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section][lang]
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 73
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    name !== row.name ? row.name : row.nameBn,
                                    row.genericName,
                                    row.dosageForm,
                                    ...designations.slice(0, 2),
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.specialties)
                                ].filter(Boolean).join(' · ')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 125,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LanguageLink"], {
                        lang: lang,
                        path: path.slice(3)
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 127,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 122,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.keyFacts
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "facts",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Generic', 'জেনেরিক'),
                                value: row.genericName
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 130,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Manufacturer', 'প্রস্তুতকারক'),
                                value: row.manufacturerName
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Strength', 'মাত্রা'),
                                value: row.strength
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 132,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Dosage form', 'ওষুধের ধরন'),
                                value: row.dosageForm
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 133,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Pack size', 'প্যাকের আকার'),
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publicText"])(row.packageSize)
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 134,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('DGDA registration number', 'ডিজিডিএ নিবন্ধন নম্বর'),
                                value: row.dgdaRegistry?.registrationNumber
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 135,
                                columnNumber: 7
                            }, this),
                            medicine && row.dgdaRegistry?.registrationNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Registration status', 'নিবন্ধনের অবস্থা'),
                                value: row.dgdaEvidenceType === 'registry-snapshot' ? l('Recorded in a registry snapshot. Current status has yet to be confirmed.', 'নিবন্ধনের তথ্য পুরোনো রেকর্ডে আছে। বর্তমান অবস্থা নিশ্চিত করা হয়নি।') : l('Registration number on record. Check current status with DGDA.', 'নিবন্ধন নম্বর তালিকাভুক্ত আছে। বর্তমান অবস্থা ডিজিডিএ-তে যাচাই করুন।')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 60
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Registration scope', 'নিবন্ধনের আওতা'),
                                value: row.dgdaRegistry?.registeredFor
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 140,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: t.mrp,
                                value: row.price?.mrp != null ? [
                                    money(row.price.mrp, lang, row.price.currency),
                                    row.price.mrpPackageUnit
                                ].filter(Boolean).join(' · ') : undefined
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 141,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Category', 'বিভাগ'),
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.categories).join(', ')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 142,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Other names', 'বিকল্প নাম'),
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.aliases).join(', ')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 143,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('BMDC registration', 'বিএমডিসি নিবন্ধন'),
                                value: doctor ? row.bmdc?.number ?? t.unknown : undefined
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 7
                            }, this),
                            doctor && row.bmdc?.number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Registration status', 'নিবন্ধনের অবস্থা'),
                                value: [
                                    'verified',
                                    'bmdc-verified'
                                ].includes(row.bmdc.status) ? l('Verified', 'যাচাইকৃত') : l('Listed; verification not confirmed', 'তালিকাভুক্ত; যাচাই নিশ্চিত নয়')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 145,
                                columnNumber: 38
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Years of experience', 'অভিজ্ঞতার বছর'),
                                value: experience
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 147,
                                columnNumber: 7
                            }, this),
                            doctor && !qualified.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: t.qualifications,
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.degrees).join(', ')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 148,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Facility type', 'প্রতিষ্ঠানের ধরন'),
                                value: row.type
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('DGHS code', 'ডিজিএইচএস কোড'),
                                value: row.registryCode
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 150,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Facility licence', 'প্রতিষ্ঠানের লাইসেন্স'),
                                value: row.government?.licence?.number
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 151,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Level of care', 'সেবার স্তর'),
                                value: row.healthcareLevel || row.facilityLevel
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 152,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Facility function', 'প্রতিষ্ঠানের কার্যক্রম'),
                                value: row.facilityFunction
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 153,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Established', 'প্রতিষ্ঠাকাল'),
                                value: row.establishmentYear
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 154,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Beds', 'শয্যা'),
                                value: row.capacity?.beds
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 155,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Ownership', 'মালিকানা'),
                                value: row.isPrivate === true ? l('Private', 'বেসরকারি') : row.isPrivate === false ? l('Public', 'সরকারি') : row.ownership
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 156,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Address', 'ঠিকানা'),
                                value: row.address
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 157,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('District', 'জেলা'),
                                value: row.location?.district
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 158,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Upazila', 'উপজেলা'),
                                value: row.location?.upazila
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 159,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Services', 'সেবা'),
                                value: [
                                    ...new Set([
                                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.services),
                                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.directory?.servicesAsListed)
                                    ])
                                ].join(', ')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 160,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Emergency care', 'জরুরি সেবা'),
                                value: facility && row.emergency?.status !== 'conflicting-sources' && row.emergency?.available === true ? row.emergency.open24Hours ? l('Reported open 24 hours', '২৪ ঘণ্টা খোলা বলে উল্লেখ আছে') : l('Reported available', 'উপলভ্য বলে উল্লেখ আছে') : undefined
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 161,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Phone', 'ফোন'),
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.contact?.phoneNumbers).join(', ')
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 163,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Fact, {
                                label: l('Email', 'ইমেইল'),
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["strings"])(row.contact?.emails).join(', ') || row.email
                            }, void 0, false, {
                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                lineNumber: 164,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 59
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 129,
                columnNumber: 5
            }, this),
            (medicine || test) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.prices
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 166,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "price-note",
                        children: t.caution
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 166,
                        columnNumber: 80
                    }, this),
                    !comparison.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: test && offers.length ? l('No prices have been verified for a specific facility here.', 'এই পরীক্ষার জন্য কোনো নির্দিষ্ট প্রতিষ্ঠানের মূল্য যাচাই করা হয়নি।') : t.noPrices
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 167,
                        columnNumber: 29
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            test && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: t.facility
                                            }, void 0, false, {
                                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: medicine ? t.pack : t.rate
                                            }, void 0, false, {
                                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: t.price
                                            }, void 0, false, {
                                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 88
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: t.date
                                            }, void 0, false, {
                                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 106
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: comparison.map((offer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                test && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        offer.facilityId && offer.providerName ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            className: "table-link",
                                                            prefetch: false,
                                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordPath"])(lang, 'facilities', offer.facilityId, offer.providerName),
                                                            children: offer.providerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 15
                                                        }, this) : offer.providerName || t.unknown,
                                                        offer.branchName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: offer.branchName
                                                        }, void 0, false, {
                                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 68
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 20
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        medicine ? offer.packageUnit || t.unknown : offer.patientCategory === 'eligible' ? t.eligible : offer.patientCategory === 'non-government' ? l('Non-government', 'বেসরকারি রোগী') : offer.patientCategory || t.standard,
                                                        !medicine && (offer.sample || offer.reportTime) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                offer.sample,
                                                                offer.reportTime
                                                            ].filter(Boolean).join(' · ')
                                                        }, void 0, false, {
                                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 65
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: offer.isFree ? t.free : money(offer.price, lang, offer.currency)
                                                        }, void 0, false, {
                                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 15
                                                        }, this),
                                                        medicine && typeof offer.mrp === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: [
                                                                t.mrp,
                                                                " ",
                                                                money(offer.mrp, lang, offer.currency)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 59
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        date(offer.priceDate || offer.updatedAt || offer.observedAt, lang) || t.unknown,
                                                        offer.priceType === 'historical-snapshot' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: t.historical
                                                        }, void 0, false, {
                                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 59
                                                        }, this),
                                                        test && (offer.dateBasis ?? offer.sources?.[0]?.dateBasis) === 'observed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: t.checked
                                                        }, void 0, false, {
                                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                            lineNumber: 182,
                                                            columnNumber: 91
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 46
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 171,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                            lineNumber: 169,
                            columnNumber: 59
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 169,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 166,
                columnNumber: 28
            }, this),
            label.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass panel",
                "aria-label": l('Medicine information', 'ওষুধের তথ্য'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: l('Medicine information', 'ওষুধের তথ্য')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 187,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: genericLabel ? l('These reference notes describe the generic medicine. Ask a doctor or pharmacist about your dose and the exact formulation.', 'এই তথ্য জেনেরিক ওষুধের জন্য। আপনার মাত্রা ও নির্দিষ্ট ওষুধ সম্পর্কে চিকিৎসক বা ফার্মাসিস্টকে জিজ্ঞাসা করুন।') : l('Use this information for reference. Ask your doctor or pharmacist about dosing and suitability.', 'এই তথ্য সহায়ক নির্দেশিকা হিসেবে দেখুন। আপনার মাত্রা ও উপযোগিতা সম্পর্কে চিকিৎসক বা ফার্মাসিস্টকে জিজ্ঞাসা করুন।')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 188,
                        columnNumber: 7
                    }, this),
                    label.map(({ title, content }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "information",
                            open: i === 0 || undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    lang: /[\u0980-\u09ff]/.test(content) ? 'bn' : 'en',
                                    children: content
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, title, true, {
                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                            lineNumber: 193,
                            columnNumber: 45
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 186,
                columnNumber: 26
            }, this),
            doctorGroups.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: l('Professional profile', 'পেশাগত পরিচিতি')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 197,
                        columnNumber: 66
                    }, this),
                    doctorGroups.map(({ title, items })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "information",
                            open: title === t.qualifications || undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 58
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, title, true, {
                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                            lineNumber: 198,
                            columnNumber: 47
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 197,
                columnNumber: 33
            }, this),
            facilitySpecialties.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: l('Specialties and listed doctors', 'বিশেষত্ব ও তালিকাভুক্ত চিকিৎসক')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 203,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: l('Counts reflect doctors listed for this facility. Confirm availability directly with the facility.', 'এই সংখ্যা প্রতিষ্ঠানের তালিকাভুক্ত চিকিৎসকদের ভিত্তিতে। উপস্থিতি সরাসরি প্রতিষ্ঠান থেকে জেনে নিন।')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 204,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: l('Specialty', 'বিশেষত্ব')
                                            }, void 0, false, {
                                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: l('Listed doctors', 'তালিকাভুক্ত চিকিৎসক')
                                            }, void 0, false, {
                                                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                lineNumber: 207,
                                                columnNumber: 46
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 51
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 44
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: facilitySpecialties.map(({ specialty, doctorCount })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["publicText"])(specialty)
                                                }, void 0, false, {
                                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: doctorCount.toLocaleString(lang === 'bn' ? 'bn-BD' : 'en-BD')
                                                }, void 0, false, {
                                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 61
                                                }, this)
                                            ]
                                        }, specialty, true, {
                                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 20
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                            lineNumber: 206,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 202,
                columnNumber: 40
            }, this),
            linkedDoctors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "directory",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: l('Doctors with a chamber at this facility', 'এই প্রতিষ্ঠানে চেম্বার আছে এমন চিকিৎসক')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 212,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: l('Selected linked profiles. Confirm availability directly with the facility.', 'সংযুক্ত কয়েকজন চিকিৎসকের প্রোফাইল। উপস্থিতি সরাসরি প্রতিষ্ঠান থেকে নিশ্চিত করুন।')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 213,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RecordList"], {
                        lang: lang,
                        section: "doctors",
                        rows: linkedDoctors
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 215,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 211,
                columnNumber: 34
            }, this),
            doctor && Boolean(row.chambers?.length) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: t.chambers
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 217,
                        columnNumber: 82
                    }, this),
                    row.chambers.map((chamber, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "chamber",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: chamber.facilityId && chamber.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        prefetch: false,
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordPath"])(lang, 'facilities', chamber.facilityId, chamber.name),
                                        children: chamber.name
                                    }, void 0, false, {
                                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 11
                                    }, this) : chamber.name
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 218,
                                    columnNumber: 91
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        chamber.address,
                                        chamber.room && l('Room ', 'কক্ষ ') + chamber.room,
                                        chamber.visitingHours?.raw,
                                        chamber.appointmentPhone
                                    ].filter(Boolean).join(' · ')
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 9
                                }, this),
                                typeof chamber.fee === 'number' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        l('Consultation fee', 'পরামর্শ ফি'),
                                        " ",
                                        money(chamber.fee, lang),
                                        " · ",
                                        t.caution
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 221,
                                    columnNumber: 45
                                }, this),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webUrl"])(chamber.mapUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webUrl"])(chamber.mapUrl),
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: t.maps
                                }, void 0, false, {
                                    fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                            lineNumber: 218,
                            columnNumber: 54
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 217,
                columnNumber: 49
            }, this),
            related.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "directory",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: l('More brands with this generic', 'এই জেনেরিকের আরও ব্র্যান্ড')
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 225,
                        columnNumber: 59
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RecordList"], {
                        lang: lang,
                        section: "medicines",
                        rows: related
                    }, void 0, false, {
                        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                        lineNumber: 226,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 225,
                columnNumber: 28
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$app$2f5b$lang$5d2f$components$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdSlot"], {}, void 0, false, {
                fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
                lineNumber: 227,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/public-app/app/[lang]/[section]/[slug]/page.tsx",
        lineNumber: 114,
        columnNumber: 10
    }, this);
}
}),
"[project]/public-app/app/[lang]/[section]/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/public-app/app/[lang]/[section]/[slug]/page.tsx [app-rsc] (ecmascript)"));
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$mongo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readCatalogue"])((db)=>read(db.collection(__TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sections"][section].collection)));
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
    if (section === 'medicines') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$mongo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readCatalogue"])(async (db)=>{
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
const getGenericInformation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_cache"])(async (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$mongo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readCatalogue"])((db)=>db.collection('generics').findOne({
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/public-app/node_modules/mongodb)");
;
const state = globalThis;
function connection() {
    if (state.medBoiPublicConnection) return state.medBoiPublicConnection;
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error('Catalogue connection is unavailable.');
    const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__["MongoClient"](uri, {
        serverSelectionTimeoutMS: 6500,
        maxPoolSize: 12,
        readPreference: 'primaryPreferred',
        maxStalenessSeconds: 120
    });
    const pending = client.connect().catch(async (error)=>{
        if (state.medBoiPublicConnection === pending) delete state.medBoiPublicConnection;
        await client.close().catch(()=>undefined);
        throw error;
    });
    state.medBoiPublicConnection = pending;
    return pending;
}
async function readCatalogue(read) {
    const dbName = process.env.MONGODB_DATABASE || 'medicine_catalog_prod';
    for(let attempt = 0;; attempt++){
        const pending = connection();
        try {
            return await read((await pending).db(dbName));
        } catch (error) {
            if (!(error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__["MongoTopologyClosedError"] || error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$public$2d$app$2f$node_modules$2f$mongodb$29$__["MongoNotConnectedError"])) throw error;
            // Another read may already have opened a replacement pool.
            if (state.medBoiPublicConnection === pending) {
                delete state.medBoiPublicConnection;
                void pending.then((client)=>client.close()).catch(()=>undefined);
            }
            if (attempt > 0) throw error;
        }
    }
}
}),
"[project]/public-app/lib/profile.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "medicineSections",
    ()=>medicineSections,
    "profileItems",
    ()=>profileItems,
    "publicText",
    ()=>publicText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/public-app/lib/content.ts [app-rsc] (ecmascript)");
;
function publicText(value) {
    return typeof value === 'string' ? value.replace(/(?:https?:\/\/|www\.)\S+/gi, '').trim() : '';
}
function profileItems(entries, ...fields) {
    const values = new Map();
    if (!Array.isArray(entries)) return [];
    for (const row of entries){
        if (!row || typeof row !== 'object') continue;
        for (const field of fields){
            const raw = row[field];
            for (const item of Array.isArray(raw) ? raw : [
                raw
            ]){
                const value = publicText(item);
                const key = value.normalize('NFKC').toLowerCase().replace(/\s+/g, ' ');
                if (value && !values.has(key)) values.set(key, value);
            }
        }
    }
    return [
        ...values.values()
    ];
}
const labelSections = [
    [
        [
            'indications',
            'indication'
        ],
        'Indications',
        'ব্যবহারের নির্দেশনা'
    ],
    [
        [
            'composition'
        ],
        'Composition',
        'উপাদান'
    ],
    [
        [
            'drug classes',
            'therapeutic class'
        ],
        'Therapeutic class',
        'থেরাপিউটিক শ্রেণি'
    ],
    [
        [
            'mode of action',
            'pharmacology'
        ],
        'Pharmacology',
        'কার্যপ্রণালি'
    ],
    [
        [
            'dosage',
            'dosage and administration'
        ],
        'Dosage information',
        'মাত্রা সম্পর্কিত তথ্য'
    ],
    [
        [
            'administration'
        ],
        'Administration',
        'সেবনের পদ্ধতি'
    ],
    [
        [
            'interaction',
            'interactions'
        ],
        'Interactions',
        'ওষুধের মিথস্ক্রিয়া'
    ],
    [
        [
            'contraindications'
        ],
        'Contraindications',
        'প্রতিনির্দেশনা'
    ],
    [
        [
            'side effects'
        ],
        'Side effects',
        'পার্শ্বপ্রতিক্রিয়া'
    ],
    [
        [
            'pregnancy cat',
            'pregnancy and lactation'
        ],
        'Pregnancy and breastfeeding',
        'গর্ভাবস্থা ও স্তন্যদান'
    ],
    [
        [
            'precautions'
        ],
        'Precautions',
        'সতর্কতা'
    ],
    [
        [
            'pediatric usage'
        ],
        'Use in children',
        'শিশুদের ক্ষেত্রে ব্যবহার'
    ],
    [
        [
            'storage conditions',
            'storage'
        ],
        'Storage',
        'সংরক্ষণ'
    ]
];
function medicineSections(row, lang) {
    const values = new Map(Object.entries(row ?? {}).map(([key, value])=>[
            key.toLowerCase().trim().replace(/_/g, ' ').replace(/\s*&\s*/g, ' and '),
            publicText(value)
        ]));
    return labelSections.flatMap(([keys, en, bn])=>{
        const content = keys.map((key)=>values.get(key)).find(Boolean);
        return content ? [
            {
                title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$public$2d$app$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["local"])(lang, en, bn),
                content
            }
        ] : [];
    });
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1_yi3_zd42zd7._.js.map