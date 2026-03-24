module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/tableRegistry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// TABLE REGISTRY - Centralized table configuration
// Replace mock data with Python API calls when ready
// ============================================================
__turbopack_context__.s([
    "allDataTypes",
    ()=>allDataTypes,
    "allDepartments",
    ()=>allDepartments,
    "getColumns",
    ()=>getColumns,
    "getTableData",
    ()=>getTableData,
    "tableConfigs",
    ()=>tableConfigs,
    "tableStats",
    ()=>tableStats
]);
const tableConfigs = [
    {
        key: 'states',
        label: 'States',
        path: '/tables/states',
        department: 'Geography',
        dataType: 'Location',
        usageCount: 342,
        dateAdded: '2024-01-15'
    },
    {
        key: 'countries',
        label: 'Countries',
        path: '/tables/countries',
        department: 'Geography',
        dataType: 'Location',
        usageCount: 528,
        dateAdded: '2023-11-02'
    },
    {
        key: 'departments',
        label: 'Departments',
        path: '/tables/departments',
        department: 'Corporate',
        dataType: 'Organizational',
        usageCount: 187,
        dateAdded: '2024-06-20'
    }
];
const allDepartments = [
    'Geography',
    'Corporate',
    'Reference'
];
const allDataTypes = [
    'Location',
    'Organizational',
    'Lookup'
];
// --- Column Definitions ---
const statesColumns = [
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
        width: 80
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 180
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
        width: 150
    },
    {
        title: 'Capital',
        dataIndex: 'capital',
        key: 'capital',
        width: 150
    },
    {
        title: 'Population',
        dataIndex: 'population',
        key: 'population',
        width: 140,
        align: 'right',
        render: (v)=>v.toLocaleString()
    }
];
const countriesColumns = [
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
        width: 80
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 180
    },
    {
        title: 'Continent',
        dataIndex: 'continent',
        key: 'continent',
        width: 140
    },
    {
        title: 'Capital',
        dataIndex: 'capital',
        key: 'capital',
        width: 150
    },
    {
        title: 'Currency',
        dataIndex: 'currency',
        key: 'currency',
        width: 100,
        align: 'center'
    },
    {
        title: 'Population',
        dataIndex: 'population',
        key: 'population',
        width: 160,
        align: 'right',
        render: (v)=>v.toLocaleString()
    }
];
const departmentsColumns = [
    {
        title: 'Code',
        dataIndex: 'code',
        key: 'code',
        width: 80
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 160
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        width: 280,
        ellipsis: true
    },
    {
        title: 'Manager',
        dataIndex: 'manager',
        key: 'manager',
        width: 150
    },
    {
        title: 'Head Count',
        dataIndex: 'headCount',
        key: 'headCount',
        width: 110,
        align: 'right'
    },
    {
        title: 'Budget',
        dataIndex: 'budget',
        key: 'budget',
        width: 130,
        align: 'right',
        render: (v)=>`$${v.toLocaleString()}`
    }
];
// --- Mock Data (Replace with API) ---
const statesData = [
    {
        id: '1',
        code: 'CA',
        name: 'California',
        country: 'United States',
        population: 39538223,
        capital: 'Sacramento'
    },
    {
        id: '2',
        code: 'TX',
        name: 'Texas',
        country: 'United States',
        population: 29145505,
        capital: 'Austin'
    },
    {
        id: '3',
        code: 'FL',
        name: 'Florida',
        country: 'United States',
        population: 21538187,
        capital: 'Tallahassee'
    },
    {
        id: '4',
        code: 'NY',
        name: 'New York',
        country: 'United States',
        population: 20201249,
        capital: 'Albany'
    },
    {
        id: '5',
        code: 'PA',
        name: 'Pennsylvania',
        country: 'United States',
        population: 13002700,
        capital: 'Harrisburg'
    },
    {
        id: '6',
        code: 'IL',
        name: 'Illinois',
        country: 'United States',
        population: 12812508,
        capital: 'Springfield'
    },
    {
        id: '7',
        code: 'OH',
        name: 'Ohio',
        country: 'United States',
        population: 11799448,
        capital: 'Columbus'
    },
    {
        id: '8',
        code: 'GA',
        name: 'Georgia',
        country: 'United States',
        population: 10711908,
        capital: 'Atlanta'
    },
    {
        id: '9',
        code: 'NC',
        name: 'North Carolina',
        country: 'United States',
        population: 10439388,
        capital: 'Raleigh'
    },
    {
        id: '10',
        code: 'MI',
        name: 'Michigan',
        country: 'United States',
        population: 10077331,
        capital: 'Lansing'
    },
    {
        id: '11',
        code: 'NJ',
        name: 'New Jersey',
        country: 'United States',
        population: 9288994,
        capital: 'Trenton'
    },
    {
        id: '12',
        code: 'VA',
        name: 'Virginia',
        country: 'United States',
        population: 8631393,
        capital: 'Richmond'
    }
];
const countriesData = [
    {
        id: '1',
        code: 'US',
        name: 'United States',
        continent: 'North America',
        population: 331002651,
        capital: 'Washington D.C.',
        currency: 'USD'
    },
    {
        id: '2',
        code: 'CN',
        name: 'China',
        continent: 'Asia',
        population: 1439323776,
        capital: 'Beijing',
        currency: 'CNY'
    },
    {
        id: '3',
        code: 'IN',
        name: 'India',
        continent: 'Asia',
        population: 1380004385,
        capital: 'New Delhi',
        currency: 'INR'
    },
    {
        id: '4',
        code: 'BR',
        name: 'Brazil',
        continent: 'South America',
        population: 212559417,
        capital: 'Brasilia',
        currency: 'BRL'
    },
    {
        id: '5',
        code: 'RU',
        name: 'Russia',
        continent: 'Europe',
        population: 145934462,
        capital: 'Moscow',
        currency: 'RUB'
    },
    {
        id: '6',
        code: 'JP',
        name: 'Japan',
        continent: 'Asia',
        population: 126476461,
        capital: 'Tokyo',
        currency: 'JPY'
    },
    {
        id: '7',
        code: 'DE',
        name: 'Germany',
        continent: 'Europe',
        population: 83783942,
        capital: 'Berlin',
        currency: 'EUR'
    },
    {
        id: '8',
        code: 'GB',
        name: 'United Kingdom',
        continent: 'Europe',
        population: 67886011,
        capital: 'London',
        currency: 'GBP'
    },
    {
        id: '9',
        code: 'FR',
        name: 'France',
        continent: 'Europe',
        population: 65273511,
        capital: 'Paris',
        currency: 'EUR'
    },
    {
        id: '10',
        code: 'IT',
        name: 'Italy',
        continent: 'Europe',
        population: 60461826,
        capital: 'Rome',
        currency: 'EUR'
    },
    {
        id: '11',
        code: 'CA',
        name: 'Canada',
        continent: 'North America',
        population: 37742154,
        capital: 'Ottawa',
        currency: 'CAD'
    },
    {
        id: '12',
        code: 'AU',
        name: 'Australia',
        continent: 'Oceania',
        population: 25499884,
        capital: 'Canberra',
        currency: 'AUD'
    }
];
const departmentsData = [
    {
        id: '1',
        code: 'ENG',
        name: 'Engineering',
        description: 'Software development and infrastructure',
        headCount: 150,
        budget: 5000000,
        manager: 'John Smith'
    },
    {
        id: '2',
        code: 'MKT',
        name: 'Marketing',
        description: 'Brand management and customer acquisition',
        headCount: 45,
        budget: 2000000,
        manager: 'Sarah Johnson'
    },
    {
        id: '3',
        code: 'SAL',
        name: 'Sales',
        description: 'Revenue generation and client relationships',
        headCount: 80,
        budget: 3000000,
        manager: 'Michael Brown'
    },
    {
        id: '4',
        code: 'HR',
        name: 'Human Resources',
        description: 'Talent acquisition and employee relations',
        headCount: 25,
        budget: 800000,
        manager: 'Emily Davis'
    },
    {
        id: '5',
        code: 'FIN',
        name: 'Finance',
        description: 'Financial planning and accounting',
        headCount: 30,
        budget: 1200000,
        manager: 'Robert Wilson'
    },
    {
        id: '6',
        code: 'OPS',
        name: 'Operations',
        description: 'Business operations and logistics',
        headCount: 60,
        budget: 1500000,
        manager: 'Jennifer Martinez'
    },
    {
        id: '7',
        code: 'LEG',
        name: 'Legal',
        description: 'Legal compliance and contracts',
        headCount: 15,
        budget: 600000,
        manager: 'David Anderson'
    },
    {
        id: '8',
        code: 'CUS',
        name: 'Customer Support',
        description: 'Customer service and success',
        headCount: 100,
        budget: 1800000,
        manager: 'Lisa Thompson'
    },
    {
        id: '9',
        code: 'PRD',
        name: 'Product',
        description: 'Product management and strategy',
        headCount: 35,
        budget: 1000000,
        manager: 'James Garcia'
    },
    {
        id: '10',
        code: 'DAT',
        name: 'Data Science',
        description: 'Analytics and machine learning',
        headCount: 40,
        budget: 2500000,
        manager: 'Amanda Lee'
    }
];
function getTableData(tableName) {
    // TODO: Replace with fetch() to Python API
    switch(tableName){
        case 'states':
            return statesData;
        case 'countries':
            return countriesData;
        case 'departments':
            return departmentsData;
        default:
            return [];
    }
}
function getColumns(tableName) {
    switch(tableName){
        case 'states':
            return statesColumns;
        case 'countries':
            return countriesColumns;
        case 'departments':
            return departmentsColumns;
        default:
            return [];
    }
}
const tableStats = {
    states: statesData.length,
    countries: countriesData.length,
    departments: departmentsData.length
};
}),
"[project]/components/ThemeProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLOR_SCHEMES",
    ()=>COLOR_SCHEMES,
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/config-provider/index.js [app-ssr] (ecmascript) <locals> <export default as ConfigProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/theme/index.js [app-ssr] (ecmascript) <export default as theme>");
'use client';
;
;
;
const COLOR_SCHEMES = [
    // ── CLASSIC ──────────────────────────────────────────
    {
        key: 'ocean-blue',
        name: 'Ocean Blue',
        emoji: '🌊',
        category: 'classic',
        forceDark: false,
        gradientStart: '#3b82f6',
        gradientMid: '#6366f1',
        gradientEnd: '#8b5cf6',
        darkGradientStart: '#1e3a8a',
        darkGradientMid: '#4338ca',
        darkGradientEnd: '#6d28d9',
        primaryAccent: '#3b82f6',
        sidebarStart: '#1e293b',
        sidebarEnd: '#0f172a',
        darkSidebarStart: '#020617',
        darkSidebarEnd: '#0f172a',
        sidebarActive: 'rgba(59,130,246,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'forest',
        name: 'Forest',
        emoji: '🌲',
        category: 'classic',
        forceDark: false,
        gradientStart: '#16a34a',
        gradientMid: '#15803d',
        gradientEnd: '#166534',
        darkGradientStart: '#14532d',
        darkGradientMid: '#166534',
        darkGradientEnd: '#052e16',
        primaryAccent: '#16a34a',
        sidebarStart: '#14532d',
        sidebarEnd: '#052e16',
        darkSidebarStart: '#052e16',
        darkSidebarEnd: '#021a0e',
        sidebarActive: 'rgba(22,163,74,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'sunset',
        name: 'Sunset',
        emoji: '🌅',
        category: 'classic',
        forceDark: false,
        gradientStart: '#f97316',
        gradientMid: '#ef4444',
        gradientEnd: '#dc2626',
        darkGradientStart: '#7c2d12',
        darkGradientMid: '#991b1b',
        darkGradientEnd: '#7f1d1d',
        primaryAccent: '#f97316',
        sidebarStart: '#7c2d12',
        sidebarEnd: '#431407',
        darkSidebarStart: '#431407',
        darkSidebarEnd: '#1c0a03',
        sidebarActive: 'rgba(249,115,22,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'midnight',
        name: 'Midnight',
        emoji: '🌙',
        category: 'classic',
        forceDark: false,
        gradientStart: '#1e1b4b',
        gradientMid: '#312e81',
        gradientEnd: '#4c1d95',
        darkGradientStart: '#0f0d27',
        darkGradientMid: '#1e1b4b',
        darkGradientEnd: '#2e1065',
        primaryAccent: '#6366f1',
        sidebarStart: '#1e1b4b',
        sidebarEnd: '#0f0e27',
        darkSidebarStart: '#0f0d27',
        darkSidebarEnd: '#05040f',
        sidebarActive: 'rgba(99,102,241,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'rose-gold',
        name: 'Rose Gold',
        emoji: '🌹',
        category: 'classic',
        forceDark: false,
        gradientStart: '#f43f5e',
        gradientMid: '#e11d48',
        gradientEnd: '#be123c',
        darkGradientStart: '#881337',
        darkGradientMid: '#9f1239',
        darkGradientEnd: '#7f1d1d',
        primaryAccent: '#f43f5e',
        sidebarStart: '#881337',
        sidebarEnd: '#4c0519',
        darkSidebarStart: '#4c0519',
        darkSidebarEnd: '#200210',
        sidebarActive: 'rgba(244,63,94,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'minimalist',
        name: 'Minimalist',
        emoji: '⬜',
        category: 'classic',
        forceDark: false,
        gradientStart: '#f5f5f4',
        gradientMid: '#e7e5e4',
        gradientEnd: '#d6d3d1',
        darkGradientStart: '#292524',
        darkGradientMid: '#1c1917',
        darkGradientEnd: '#0c0a09',
        primaryAccent: '#44403c',
        sidebarStart: '#f5f5f4',
        sidebarEnd: '#e7e5e4',
        darkSidebarStart: '#1c1917',
        darkSidebarEnd: '#0c0a09',
        sidebarActive: 'rgba(68,64,60,0.15)',
        backgroundEffect: 'none',
        cardStyle: 'flat',
        scanlines: false,
        flatHeader: true,
        flatSidebar: true
    },
    // ── SEASONAL ─────────────────────────────────────────
    {
        key: 'winter',
        name: 'Winter',
        emoji: '❄️',
        category: 'seasonal',
        forceDark: false,
        gradientStart: '#60a5fa',
        gradientMid: '#93c5fd',
        gradientEnd: '#bfdbfe',
        darkGradientStart: '#1e3a5f',
        darkGradientMid: '#1d4ed8',
        darkGradientEnd: '#1e40af',
        primaryAccent: '#60a5fa',
        sidebarStart: '#1e3a5f',
        sidebarEnd: '#0c1f3a',
        darkSidebarStart: '#0c1f3a',
        darkSidebarEnd: '#060e1c',
        sidebarActive: 'rgba(96,165,250,0.3)',
        backgroundEffect: 'snow',
        cardStyle: 'glass',
        scanlines: false
    },
    {
        key: 'spring',
        name: 'Spring',
        emoji: '🌸',
        category: 'seasonal',
        forceDark: false,
        gradientStart: '#ec4899',
        gradientMid: '#f472b6',
        gradientEnd: '#34d399',
        darkGradientStart: '#831843',
        darkGradientMid: '#9d174d',
        darkGradientEnd: '#065f46',
        primaryAccent: '#ec4899',
        sidebarStart: '#831843',
        sidebarEnd: '#3d0b1f',
        darkSidebarStart: '#3d0b1f',
        darkSidebarEnd: '#1c0510',
        sidebarActive: 'rgba(236,72,153,0.3)',
        backgroundEffect: 'petals',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'summer',
        name: 'Summer',
        emoji: '☀️',
        category: 'seasonal',
        forceDark: false,
        gradientStart: '#0891b2',
        gradientMid: '#0ea5e9',
        gradientEnd: '#38bdf8',
        darkGradientStart: '#164e63',
        darkGradientMid: '#0c4a6e',
        darkGradientEnd: '#083344',
        primaryAccent: '#f59e0b',
        sidebarStart: '#164e63',
        sidebarEnd: '#083344',
        darkSidebarStart: '#083344',
        darkSidebarEnd: '#031a22',
        sidebarActive: 'rgba(245,158,11,0.3)',
        backgroundEffect: 'waves',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'autumn',
        name: 'Autumn',
        emoji: '🍂',
        category: 'seasonal',
        forceDark: false,
        gradientStart: '#b45309',
        gradientMid: '#c2410c',
        gradientEnd: '#7c2d12',
        darkGradientStart: '#78350f',
        darkGradientMid: '#92400e',
        darkGradientEnd: '#431407',
        primaryAccent: '#d97706',
        sidebarStart: '#78350f',
        sidebarEnd: '#3c1a07',
        darkSidebarStart: '#3c1a07',
        darkSidebarEnd: '#1c0c03',
        sidebarActive: 'rgba(217,119,6,0.3)',
        backgroundEffect: 'leaves',
        cardStyle: 'default',
        scanlines: false
    },
    // ── NATURE ───────────────────────────────────────────
    {
        key: 'sakura',
        name: 'Sakura',
        emoji: '🌺',
        category: 'nature',
        forceDark: false,
        gradientStart: '#be185d',
        gradientMid: '#9d174d',
        gradientEnd: '#831843',
        darkGradientStart: '#831843',
        darkGradientMid: '#701535',
        darkGradientEnd: '#4c0519',
        primaryAccent: '#f472b6',
        sidebarStart: '#831843',
        sidebarEnd: '#4c0519',
        darkSidebarStart: '#4c0519',
        darkSidebarEnd: '#260210',
        sidebarActive: 'rgba(244,114,182,0.3)',
        backgroundEffect: 'sakura-petals',
        cardStyle: 'glass',
        scanlines: false
    },
    {
        key: 'aurora',
        name: 'Aurora Borealis',
        emoji: '🌌',
        category: 'nature',
        forceDark: true,
        gradientStart: '#022c22',
        gradientMid: '#064e3b',
        gradientEnd: '#065f46',
        darkGradientStart: '#011a14',
        darkGradientMid: '#022c22',
        darkGradientEnd: '#031a10',
        primaryAccent: '#34d399',
        sidebarStart: '#022c22',
        sidebarEnd: '#011a14',
        darkSidebarStart: '#010e0b',
        darkSidebarEnd: '#010e0b',
        sidebarActive: 'rgba(52,211,153,0.25)',
        backgroundEffect: 'aurora',
        cardStyle: 'glass',
        scanlines: false,
        glowColor: '#34d399'
    },
    {
        key: 'underwater',
        name: 'Underwater',
        emoji: '🐠',
        category: 'nature',
        forceDark: false,
        gradientStart: '#0284c7',
        gradientMid: '#0369a1',
        gradientEnd: '#075985',
        darkGradientStart: '#0c4a6e',
        darkGradientMid: '#075985',
        darkGradientEnd: '#0a3555',
        primaryAccent: '#22d3ee',
        sidebarStart: '#0c4a6e',
        sidebarEnd: '#0a2d4a',
        darkSidebarStart: '#052030',
        darkSidebarEnd: '#021520',
        sidebarActive: 'rgba(34,211,238,0.3)',
        backgroundEffect: 'bubbles',
        cardStyle: 'glass',
        scanlines: false
    },
    {
        key: 'deep-sea',
        name: 'Deep Sea',
        emoji: '🦑',
        category: 'nature',
        forceDark: true,
        gradientStart: '#020a1a',
        gradientMid: '#030d24',
        gradientEnd: '#020818',
        darkGradientStart: '#010510',
        darkGradientMid: '#020818',
        darkGradientEnd: '#010510',
        primaryAccent: '#22d3ee',
        sidebarStart: '#020a1a',
        sidebarEnd: '#010510',
        darkSidebarStart: '#010408',
        darkSidebarEnd: '#010408',
        sidebarActive: 'rgba(34,211,238,0.2)',
        backgroundEffect: 'orbs',
        cardStyle: 'glass',
        scanlines: false,
        glowColor: '#22d3ee'
    },
    {
        key: 'lava',
        name: 'Lava',
        emoji: '🌋',
        category: 'nature',
        forceDark: true,
        gradientStart: '#1c0800',
        gradientMid: '#3d0a00',
        gradientEnd: '#1a0500',
        darkGradientStart: '#0e0400',
        darkGradientMid: '#240600',
        darkGradientEnd: '#0e0400',
        primaryAccent: '#f97316',
        sidebarStart: '#1c0800',
        sidebarEnd: '#0e0400',
        darkSidebarStart: '#080200',
        darkSidebarEnd: '#080200',
        sidebarActive: 'rgba(249,115,22,0.3)',
        backgroundEffect: 'embers',
        cardStyle: 'sharp',
        scanlines: false,
        glowColor: '#ff4500'
    },
    {
        key: 'storm',
        name: 'Storm',
        emoji: '⛈️',
        category: 'nature',
        forceDark: true,
        gradientStart: '#1c1c2e',
        gradientMid: '#374151',
        gradientEnd: '#1f2937',
        darkGradientStart: '#0f0f1a',
        darkGradientMid: '#1f2937',
        darkGradientEnd: '#111827',
        primaryAccent: '#60a5fa',
        sidebarStart: '#1c1c2e',
        sidebarEnd: '#0f0f1a',
        darkSidebarStart: '#08080f',
        darkSidebarEnd: '#08080f',
        sidebarActive: 'rgba(96,165,250,0.25)',
        backgroundEffect: 'lightning-rain',
        cardStyle: 'flat',
        scanlines: false
    },
    {
        key: 'fog',
        name: 'Fog',
        emoji: '🌫️',
        category: 'nature',
        forceDark: false,
        gradientStart: '#9ca3af',
        gradientMid: '#6b7280',
        gradientEnd: '#4b5563',
        darkGradientStart: '#374151',
        darkGradientMid: '#1f2937',
        darkGradientEnd: '#111827',
        primaryAccent: '#9ca3af',
        sidebarStart: '#374151',
        sidebarEnd: '#1f2937',
        darkSidebarStart: '#1f2937',
        darkSidebarEnd: '#111827',
        sidebarActive: 'rgba(156,163,175,0.3)',
        backgroundEffect: 'fog',
        cardStyle: 'glass',
        scanlines: false
    },
    {
        key: 'volcano',
        name: 'Volcano',
        emoji: '🔥',
        category: 'nature',
        forceDark: true,
        gradientStart: '#1a0000',
        gradientMid: '#450a0a',
        gradientEnd: '#1c0a00',
        darkGradientStart: '#0d0000',
        darkGradientMid: '#280505',
        darkGradientEnd: '#0d0500',
        primaryAccent: '#ef4444',
        sidebarStart: '#1a0000',
        sidebarEnd: '#0d0000',
        darkSidebarStart: '#080000',
        darkSidebarEnd: '#080000',
        sidebarActive: 'rgba(239,68,68,0.3)',
        backgroundEffect: 'embers',
        cardStyle: 'sharp',
        scanlines: false,
        glowColor: '#ff2200'
    },
    // ── SPORTS ───────────────────────────────────────────
    {
        key: 'soccer',
        name: 'Soccer Pitch',
        emoji: '⚽',
        category: 'sports',
        forceDark: false,
        gradientStart: '#15803d',
        gradientMid: '#16a34a',
        gradientEnd: '#14532d',
        darkGradientStart: '#14532d',
        darkGradientMid: '#166534',
        darkGradientEnd: '#052e16',
        primaryAccent: '#22c55e',
        sidebarStart: '#14532d',
        sidebarEnd: '#052e16',
        darkSidebarStart: '#052e16',
        darkSidebarEnd: '#021a0e',
        sidebarActive: 'rgba(34,197,94,0.3)',
        backgroundEffect: 'field-lines',
        cardStyle: 'flat',
        scanlines: false,
        flatHeader: true
    },
    {
        key: 'football',
        name: 'Football Field',
        emoji: '🏈',
        category: 'sports',
        forceDark: false,
        gradientStart: '#166534',
        gradientMid: '#15803d',
        gradientEnd: '#14532d',
        darkGradientStart: '#052e16',
        darkGradientMid: '#064e3b',
        darkGradientEnd: '#022c22',
        primaryAccent: '#f59e0b',
        sidebarStart: '#14532d',
        sidebarEnd: '#052e16',
        darkSidebarStart: '#052e16',
        darkSidebarEnd: '#021a0e',
        sidebarActive: 'rgba(245,158,11,0.3)',
        backgroundEffect: 'field-lines',
        cardStyle: 'flat',
        scanlines: false
    },
    {
        key: 'basketball',
        name: 'Basketball Court',
        emoji: '🏀',
        category: 'sports',
        forceDark: false,
        gradientStart: '#a16207',
        gradientMid: '#b45309',
        gradientEnd: '#92400e',
        darkGradientStart: '#78350f',
        darkGradientMid: '#92400e',
        darkGradientEnd: '#431407',
        primaryAccent: '#f97316',
        sidebarStart: '#78350f',
        sidebarEnd: '#431407',
        darkSidebarStart: '#3c1a07',
        darkSidebarEnd: '#1c0c03',
        sidebarActive: 'rgba(249,115,22,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'flat',
        scanlines: false,
        flatHeader: true,
        flatSidebar: true
    },
    {
        key: 'baseball',
        name: 'Baseball Diamond',
        emoji: '⚾',
        category: 'sports',
        forceDark: false,
        gradientStart: '#92400e',
        gradientMid: '#a16207',
        gradientEnd: '#78350f',
        darkGradientStart: '#78350f',
        darkGradientMid: '#92400e',
        darkGradientEnd: '#451a03',
        primaryAccent: '#d97706',
        sidebarStart: '#78350f',
        sidebarEnd: '#451a03',
        darkSidebarStart: '#3c1a07',
        darkSidebarEnd: '#1c0c03',
        sidebarActive: 'rgba(217,119,6,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'hockey',
        name: 'Hockey Rink',
        emoji: '🏒',
        category: 'sports',
        forceDark: false,
        gradientStart: '#93c5fd',
        gradientMid: '#60a5fa',
        gradientEnd: '#3b82f6',
        darkGradientStart: '#1e3a8a',
        darkGradientMid: '#1e40af',
        darkGradientEnd: '#1d4ed8',
        primaryAccent: '#3b82f6',
        sidebarStart: '#1e3a8a',
        sidebarEnd: '#1e40af',
        darkSidebarStart: '#0c1f5a',
        darkSidebarEnd: '#060e2e',
        sidebarActive: 'rgba(59,130,246,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'flat',
        scanlines: false
    },
    {
        key: 'golf',
        name: 'Golf Course',
        emoji: '⛳',
        category: 'sports',
        forceDark: false,
        gradientStart: '#166534',
        gradientMid: '#14532d',
        gradientEnd: '#052e16',
        darkGradientStart: '#064e3b',
        darkGradientMid: '#052e16',
        darkGradientEnd: '#022c22',
        primaryAccent: '#84cc16',
        sidebarStart: '#14532d',
        sidebarEnd: '#052e16',
        darkSidebarStart: '#052e16',
        darkSidebarEnd: '#021a0e',
        sidebarActive: 'rgba(132,204,22,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'flat',
        scanlines: false,
        flatHeader: true
    },
    {
        key: 'tennis',
        name: 'Tennis Court',
        emoji: '🎾',
        category: 'sports',
        forceDark: false,
        gradientStart: '#b45309',
        gradientMid: '#c2410c',
        gradientEnd: '#a16207',
        darkGradientStart: '#78350f',
        darkGradientMid: '#92400e',
        darkGradientEnd: '#451a03',
        primaryAccent: '#fcd34d',
        sidebarStart: '#78350f',
        sidebarEnd: '#451a03',
        darkSidebarStart: '#3c1a07',
        darkSidebarEnd: '#1c0c03',
        sidebarActive: 'rgba(252,211,77,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'flat',
        scanlines: false
    },
    {
        key: 'nascar',
        name: 'NASCAR',
        emoji: '🏁',
        category: 'sports',
        forceDark: true,
        gradientStart: '#0a0a0a',
        gradientMid: '#1a1a1a',
        gradientEnd: '#0a0a0a',
        darkGradientStart: '#050505',
        darkGradientMid: '#0f0f0f',
        darkGradientEnd: '#050505',
        primaryAccent: '#fbbf24',
        sidebarStart: '#0a0a0a',
        sidebarEnd: '#050505',
        darkSidebarStart: '#020202',
        darkSidebarEnd: '#020202',
        sidebarActive: 'rgba(251,191,36,0.2)',
        backgroundEffect: 'checkered',
        cardStyle: 'sharp',
        scanlines: false,
        glowColor: '#fbbf24'
    },
    // ── HOLIDAY ──────────────────────────────────────────
    {
        key: 'christmas',
        name: 'Christmas',
        emoji: '🎄',
        category: 'holiday',
        forceDark: false,
        gradientStart: '#dc2626',
        gradientMid: '#16a34a',
        gradientEnd: '#b91c1c',
        darkGradientStart: '#7f1d1d',
        darkGradientMid: '#052e16',
        darkGradientEnd: '#7f1d1d',
        primaryAccent: '#fcd34d',
        sidebarStart: '#7f1d1d',
        sidebarEnd: '#052e16',
        darkSidebarStart: '#3d0b0b',
        darkSidebarEnd: '#021a0e',
        sidebarActive: 'rgba(252,211,77,0.3)',
        backgroundEffect: 'confetti',
        cardStyle: 'default',
        scanlines: false,
        glowColor: '#fcd34d'
    },
    {
        key: 'new-years',
        name: "New Year's",
        emoji: '🎆',
        category: 'holiday',
        forceDark: true,
        gradientStart: '#0a0a0a',
        gradientMid: '#1a1500',
        gradientEnd: '#0a0a0a',
        darkGradientStart: '#050500',
        darkGradientMid: '#0f0d00',
        darkGradientEnd: '#050500',
        primaryAccent: '#fbbf24',
        sidebarStart: '#0a0a0a',
        sidebarEnd: '#050500',
        darkSidebarStart: '#030300',
        darkSidebarEnd: '#030300',
        sidebarActive: 'rgba(251,191,36,0.25)',
        backgroundEffect: 'confetti',
        cardStyle: 'neon',
        scanlines: false,
        glowColor: '#fbbf24'
    },
    {
        key: 'valentines',
        name: "Valentine's Day",
        emoji: '💕',
        category: 'holiday',
        forceDark: false,
        gradientStart: '#e11d48',
        gradientMid: '#be123c',
        gradientEnd: '#9f1239',
        darkGradientStart: '#881337',
        darkGradientMid: '#9f1239',
        darkGradientEnd: '#4c0519',
        primaryAccent: '#f43f5e',
        sidebarStart: '#881337',
        sidebarEnd: '#4c0519',
        darkSidebarStart: '#4c0519',
        darkSidebarEnd: '#200210',
        sidebarActive: 'rgba(244,63,94,0.3)',
        backgroundEffect: 'hearts',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'st-patricks',
        name: "St. Patrick's Day",
        emoji: '🍀',
        category: 'holiday',
        forceDark: false,
        gradientStart: '#16a34a',
        gradientMid: '#15803d',
        gradientEnd: '#166534',
        darkGradientStart: '#14532d',
        darkGradientMid: '#166534',
        darkGradientEnd: '#052e16',
        primaryAccent: '#4ade80',
        sidebarStart: '#14532d',
        sidebarEnd: '#052e16',
        darkSidebarStart: '#052e16',
        darkSidebarEnd: '#021a0e',
        sidebarActive: 'rgba(74,222,128,0.3)',
        backgroundEffect: 'shamrocks',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'olympics',
        name: 'Olympics',
        emoji: '🏅',
        category: 'holiday',
        forceDark: false,
        gradientStart: '#fbbf24',
        gradientMid: '#f59e0b',
        gradientEnd: '#d97706',
        darkGradientStart: '#92400e',
        darkGradientMid: '#78350f',
        darkGradientEnd: '#451a03',
        primaryAccent: '#0284c7',
        sidebarStart: '#92400e',
        sidebarEnd: '#451a03',
        darkSidebarStart: '#451a03',
        darkSidebarEnd: '#1c0c03',
        sidebarActive: 'rgba(2,132,199,0.3)',
        backgroundEffect: 'olympic-rings',
        cardStyle: 'flat',
        scanlines: false,
        flatHeader: true
    },
    // ── AESTHETIC ────────────────────────────────────────
    {
        key: 'vaporwave',
        name: 'Vaporwave',
        emoji: '🌆',
        category: 'aesthetic',
        forceDark: true,
        gradientStart: '#ec4899',
        gradientMid: '#a855f7',
        gradientEnd: '#6366f1',
        darkGradientStart: '#9d174d',
        darkGradientMid: '#7e22ce',
        darkGradientEnd: '#4338ca',
        primaryAccent: '#f0abfc',
        sidebarStart: '#1a0030',
        sidebarEnd: '#0a0018',
        darkSidebarStart: '#0a0018',
        darkSidebarEnd: '#040008',
        sidebarActive: 'rgba(240,171,252,0.2)',
        backgroundEffect: 'vaporwave-grid',
        cardStyle: 'neon',
        scanlines: true,
        glowColor: '#f0abfc'
    },
    {
        key: 'lofi',
        name: 'Lo-Fi',
        emoji: '🎧',
        category: 'aesthetic',
        forceDark: false,
        gradientStart: '#92400e',
        gradientMid: '#78350f',
        gradientEnd: '#6b2d1a',
        darkGradientStart: '#451a03',
        darkGradientMid: '#3c1a07',
        darkGradientEnd: '#1c0c03',
        primaryAccent: '#fcd34d',
        sidebarStart: '#451a03',
        sidebarEnd: '#1c0c03',
        darkSidebarStart: '#1c0c03',
        darkSidebarEnd: '#0e0602',
        sidebarActive: 'rgba(252,211,77,0.3)',
        backgroundEffect: 'rain',
        cardStyle: 'default',
        scanlines: false
    },
    {
        key: 'coffee',
        name: 'Coffee Shop',
        emoji: '☕',
        category: 'aesthetic',
        forceDark: false,
        gradientStart: '#6b4226',
        gradientMid: '#8b5e3c',
        gradientEnd: '#4a2c1a',
        darkGradientStart: '#3d2010',
        darkGradientMid: '#4a2c1a',
        darkGradientEnd: '#231208',
        primaryAccent: '#d97706',
        sidebarStart: '#3d2010',
        sidebarEnd: '#231208',
        darkSidebarStart: '#1a0e06',
        darkSidebarEnd: '#0e0702',
        sidebarActive: 'rgba(217,119,6,0.3)',
        backgroundEffect: 'steam',
        cardStyle: 'flat',
        scanlines: false,
        flatHeader: true
    },
    {
        key: 'blueprint',
        name: 'Blueprint',
        emoji: '📐',
        category: 'aesthetic',
        forceDark: true,
        gradientStart: '#1e3a8a',
        gradientMid: '#1d4ed8',
        gradientEnd: '#1e40af',
        darkGradientStart: '#0f1d45',
        darkGradientMid: '#0f2770',
        darkGradientEnd: '#0f1f55',
        primaryAccent: '#93c5fd',
        sidebarStart: '#1e3a8a',
        sidebarEnd: '#0f1d45',
        darkSidebarStart: '#0a1030',
        darkSidebarEnd: '#060a18',
        sidebarActive: 'rgba(147,197,253,0.25)',
        backgroundEffect: 'none',
        cardStyle: 'flat',
        scanlines: false
    },
    {
        key: 'sepia',
        name: 'Sepia & Vintage',
        emoji: '📷',
        category: 'aesthetic',
        forceDark: false,
        gradientStart: '#92400e',
        gradientMid: '#78350f',
        gradientEnd: '#6b3a1f',
        darkGradientStart: '#451a03',
        darkGradientMid: '#3c1a07',
        darkGradientEnd: '#231208',
        primaryAccent: '#fbbf24',
        sidebarStart: '#451a03',
        sidebarEnd: '#231208',
        darkSidebarStart: '#1a0e06',
        darkSidebarEnd: '#0e0702',
        sidebarActive: 'rgba(251,191,36,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'flat',
        scanlines: false,
        flatHeader: true,
        flatSidebar: true
    },
    {
        key: 'watercolor',
        name: 'Watercolor',
        emoji: '🎨',
        category: 'aesthetic',
        forceDark: false,
        gradientStart: '#a5b4fc',
        gradientMid: '#fbcfe8',
        gradientEnd: '#bfdbfe',
        darkGradientStart: '#3730a3',
        darkGradientMid: '#9d174d',
        darkGradientEnd: '#1e40af',
        primaryAccent: '#818cf8',
        sidebarStart: '#3730a3',
        sidebarEnd: '#1e3a8a',
        darkSidebarStart: '#1e1b4b',
        darkSidebarEnd: '#0f0d27',
        sidebarActive: 'rgba(129,140,248,0.3)',
        backgroundEffect: 'none',
        cardStyle: 'glass',
        scanlines: false
    },
    // ── SPECIAL ──────────────────────────────────────────
    {
        key: 'cyberpunk',
        name: 'Cyberpunk',
        emoji: '🤖',
        category: 'special',
        forceDark: true,
        gradientStart: '#0a0a0a',
        gradientMid: '#1a0030',
        gradientEnd: '#0d0d0d',
        darkGradientStart: '#050505',
        darkGradientMid: '#0f0020',
        darkGradientEnd: '#080808',
        primaryAccent: '#00fff5',
        sidebarStart: '#0a0a1a',
        sidebarEnd: '#050510',
        darkSidebarStart: '#050508',
        darkSidebarEnd: '#020205',
        sidebarActive: 'rgba(0,255,245,0.2)',
        backgroundEffect: 'none',
        cardStyle: 'neon',
        scanlines: true,
        glowColor: '#00fff5'
    },
    {
        key: 'space',
        name: 'Space',
        emoji: '🚀',
        category: 'special',
        forceDark: true,
        gradientStart: '#0a0a2e',
        gradientMid: '#16213e',
        gradientEnd: '#0f3460',
        darkGradientStart: '#050516',
        darkGradientMid: '#0a0f2e',
        darkGradientEnd: '#071830',
        primaryAccent: '#7c3aed',
        sidebarStart: '#0a0a2e',
        sidebarEnd: '#050516',
        darkSidebarStart: '#030310',
        darkSidebarEnd: '#010108',
        sidebarActive: 'rgba(124,58,237,0.3)',
        backgroundEffect: 'stars',
        cardStyle: 'glass',
        scanlines: false
    },
    {
        key: 'halloween',
        name: 'Halloween',
        emoji: '🎃',
        category: 'special',
        forceDark: true,
        gradientStart: '#1a0a00',
        gradientMid: '#4a1200',
        gradientEnd: '#1a0020',
        darkGradientStart: '#0d0500',
        darkGradientMid: '#2a0900',
        darkGradientEnd: '#0d0010',
        primaryAccent: '#f97316',
        sidebarStart: '#1a0a00',
        sidebarEnd: '#0d0500',
        darkSidebarStart: '#0d0500',
        darkSidebarEnd: '#060200',
        sidebarActive: 'rgba(249,115,22,0.3)',
        backgroundEffect: 'bats',
        cardStyle: 'sharp',
        scanlines: false
    },
    {
        key: 'retro-arcade',
        name: 'Retro Arcade',
        emoji: '🕹️',
        category: 'special',
        forceDark: true,
        gradientStart: '#000000',
        gradientMid: '#0a0a0a',
        gradientEnd: '#111111',
        darkGradientStart: '#000000',
        darkGradientMid: '#050505',
        darkGradientEnd: '#0a0a0a',
        primaryAccent: '#00ff41',
        sidebarStart: '#0a0a0a',
        sidebarEnd: '#000000',
        darkSidebarStart: '#000000',
        darkSidebarEnd: '#000000',
        sidebarActive: 'rgba(0,255,65,0.2)',
        backgroundEffect: 'pixels',
        cardStyle: 'neon',
        scanlines: true,
        glowColor: '#00ff41',
        fontOverride: "'Press Start 2P', monospace"
    },
    // ── TECH / GAMING ─────────────────────────────────────
    {
        key: 'matrix',
        name: 'Matrix',
        emoji: '💊',
        category: 'tech',
        forceDark: true,
        gradientStart: '#000000',
        gradientMid: '#001100',
        gradientEnd: '#000000',
        darkGradientStart: '#000000',
        darkGradientMid: '#000a00',
        darkGradientEnd: '#000000',
        primaryAccent: '#00ff41',
        sidebarStart: '#000000',
        sidebarEnd: '#001100',
        darkSidebarStart: '#000000',
        darkSidebarEnd: '#000000',
        sidebarActive: 'rgba(0,255,65,0.2)',
        backgroundEffect: 'matrix-rain',
        cardStyle: 'neon',
        scanlines: true,
        glowColor: '#00ff41'
    },
    {
        key: 'circuit',
        name: 'Circuit Board',
        emoji: '🔌',
        category: 'tech',
        forceDark: true,
        gradientStart: '#001a00',
        gradientMid: '#003300',
        gradientEnd: '#001a00',
        darkGradientStart: '#000d00',
        darkGradientMid: '#001a00',
        darkGradientEnd: '#000d00',
        primaryAccent: '#22c55e',
        sidebarStart: '#001a00',
        sidebarEnd: '#000d00',
        darkSidebarStart: '#000800',
        darkSidebarEnd: '#000800',
        sidebarActive: 'rgba(34,197,94,0.2)',
        backgroundEffect: 'circuit-pulse',
        cardStyle: 'neon',
        scanlines: false,
        glowColor: '#22c55e'
    },
    {
        key: 'neural',
        name: 'Neural Network',
        emoji: '🧠',
        category: 'tech',
        forceDark: true,
        gradientStart: '#0a0520',
        gradientMid: '#1a0540',
        gradientEnd: '#100230',
        darkGradientStart: '#050210',
        darkGradientMid: '#0d0325',
        darkGradientEnd: '#080118',
        primaryAccent: '#a78bfa',
        sidebarStart: '#0a0520',
        sidebarEnd: '#050210',
        darkSidebarStart: '#030110',
        darkSidebarEnd: '#030110',
        sidebarActive: 'rgba(167,139,250,0.25)',
        backgroundEffect: 'neural-network',
        cardStyle: 'glass',
        scanlines: false,
        glowColor: '#a78bfa'
    },
    {
        key: 'terminal-amber',
        name: 'Terminal',
        emoji: '🖥️',
        category: 'tech',
        forceDark: true,
        gradientStart: '#0a0500',
        gradientMid: '#1a0a00',
        gradientEnd: '#0a0500',
        darkGradientStart: '#050200',
        darkGradientMid: '#0d0500',
        darkGradientEnd: '#050200',
        primaryAccent: '#f59e0b',
        sidebarStart: '#0a0500',
        sidebarEnd: '#050200',
        darkSidebarStart: '#030100',
        darkSidebarEnd: '#030100',
        sidebarActive: 'rgba(245,158,11,0.2)',
        backgroundEffect: 'none',
        cardStyle: 'neon',
        scanlines: true,
        glowColor: '#f59e0b',
        fontOverride: "'Courier New', 'Consolas', monospace"
    },
    {
        key: 'data-flow',
        name: 'Data Flow',
        emoji: '📊',
        category: 'tech',
        forceDark: true,
        gradientStart: '#020a14',
        gradientMid: '#0a1628',
        gradientEnd: '#040e1e',
        darkGradientStart: '#010508',
        darkGradientMid: '#050d18',
        darkGradientEnd: '#020810',
        primaryAccent: '#38bdf8',
        sidebarStart: '#020a14',
        sidebarEnd: '#010508',
        darkSidebarStart: '#010305',
        darkSidebarEnd: '#010305',
        sidebarActive: 'rgba(56,189,248,0.25)',
        backgroundEffect: 'animated-beams',
        cardStyle: 'glass',
        scanlines: false,
        glowColor: '#38bdf8'
    },
    {
        key: 'dungeon',
        name: 'Dungeon RPG',
        emoji: '⚔️',
        category: 'tech',
        forceDark: true,
        gradientStart: '#1c1410',
        gradientMid: '#2c1810',
        gradientEnd: '#1c1410',
        darkGradientStart: '#0e0a08',
        darkGradientMid: '#160c08',
        darkGradientEnd: '#0e0a08',
        primaryAccent: '#f97316',
        sidebarStart: '#1c1410',
        sidebarEnd: '#0e0a08',
        darkSidebarStart: '#080604',
        darkSidebarEnd: '#080604',
        sidebarActive: 'rgba(249,115,22,0.25)',
        backgroundEffect: 'torch',
        cardStyle: 'sharp',
        scanlines: false,
        glowColor: '#f97316'
    },
    {
        key: 'galaxy-rose',
        name: 'Galaxy Rose',
        emoji: '🌹',
        category: 'tech',
        forceDark: true,
        gradientStart: '#1a0028',
        gradientMid: '#2d0a40',
        gradientEnd: '#160020',
        darkGradientStart: '#0d0014',
        darkGradientMid: '#180520',
        darkGradientEnd: '#0d0014',
        primaryAccent: '#f9a8d4',
        sidebarStart: '#1a0028',
        sidebarEnd: '#0d0014',
        darkSidebarStart: '#07000a',
        darkSidebarEnd: '#07000a',
        sidebarActive: 'rgba(249,168,212,0.25)',
        backgroundEffect: 'meteor-streaks',
        cardStyle: 'glass',
        scanlines: false,
        glowColor: '#f9a8d4'
    },
    {
        key: 'stained-glass',
        name: 'Stained Glass',
        emoji: '🪟',
        category: 'tech',
        forceDark: false,
        gradientStart: '#7c3aed',
        gradientMid: '#dc2626',
        gradientEnd: '#1d4ed8',
        darkGradientStart: '#4c1d95',
        darkGradientMid: '#7f1d1d',
        darkGradientEnd: '#1e3a8a',
        primaryAccent: '#a855f7',
        sidebarStart: '#1e1b4b',
        sidebarEnd: '#0f0d27',
        darkSidebarStart: '#0f0d27',
        darkSidebarEnd: '#05040f',
        sidebarActive: 'rgba(168,85,247,0.3)',
        backgroundEffect: 'stained-glass-overlay',
        cardStyle: 'default',
        scanlines: false
    }
];
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
}
function applySchemeVars(scheme, mode) {
    const root = document.documentElement;
    const isDark = mode === 'dark';
    const headerStart = isDark ? scheme.darkGradientStart : scheme.gradientStart;
    const headerMid = isDark ? scheme.darkGradientMid : scheme.gradientMid;
    const headerEnd = isDark ? scheme.darkGradientEnd : scheme.gradientEnd;
    const sidebarStart = isDark ? scheme.darkSidebarStart : scheme.sidebarStart;
    const sidebarEnd = isDark ? scheme.darkSidebarEnd : scheme.sidebarEnd;
    if (scheme.flatHeader) {
        root.style.setProperty('--header-bg', isDark ? scheme.darkGradientStart : scheme.gradientStart);
    } else {
        root.style.setProperty('--header-bg', `linear-gradient(135deg, ${headerStart} 0%, ${headerMid} 50%, ${headerEnd} 100%)`);
    }
    root.style.setProperty('--primary', scheme.primaryAccent);
    root.style.setProperty('--primary-hover', scheme.primaryAccent);
    if (scheme.flatSidebar) {
        root.style.setProperty('--sidebar-bg', sidebarStart);
    } else {
        root.style.setProperty('--sidebar-bg', `linear-gradient(180deg, ${sidebarStart} 0%, ${sidebarEnd} 100%)`);
    }
    root.style.setProperty('--sidebar-active', scheme.sidebarActive);
    root.style.setProperty('--glow-color', scheme.glowColor ?? 'transparent');
    root.style.setProperty('--theme-font', scheme.fontOverride ?? 'inherit');
    root.setAttribute('data-card-style', scheme.cardStyle);
    root.setAttribute('data-scanlines', scheme.scanlines ? 'true' : 'false');
    root.setAttribute('data-effect', scheme.backgroundEffect);
    root.setAttribute('data-force-dark', scheme.forceDark ? 'true' : 'false');
}
function ThemeProvider({ children }) {
    const [colorMode, setColorMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('light');
    const [colorScheme, setColorSchemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ocean-blue');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedMode = localStorage.getItem('colorMode');
        const savedScheme = localStorage.getItem('colorScheme');
        const mode = savedMode && (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'light';
        const scheme = savedScheme && COLOR_SCHEMES.find((s)=>s.key === savedScheme) ? savedScheme : 'ocean-blue';
        setColorMode(mode);
        setColorSchemeState(scheme);
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(colorMode);
        document.documentElement.setAttribute('data-scheme', colorScheme);
        localStorage.setItem('colorMode', colorMode);
        const scheme = COLOR_SCHEMES.find((s)=>s.key === colorScheme) ?? COLOR_SCHEMES[0];
        applySchemeVars(scheme, colorMode);
    }, [
        colorMode,
        colorScheme
    ]);
    const toggleColorMode = ()=>setColorMode((prev)=>prev === 'light' ? 'dark' : 'light');
    const setColorScheme = (scheme)=>{
        setColorSchemeState(scheme);
        localStorage.setItem('colorScheme', scheme);
    };
    const currentScheme = COLOR_SCHEMES.find((s)=>s.key === colorScheme) ?? COLOR_SCHEMES[0];
    // Defer dark algorithm until after client mount to prevent SSR/client CSS hash mismatch
    const useDarkAlgorithm = mounted && (colorMode === 'dark' || currentScheme.forceDark);
    const antdThemeConfig = {
        algorithm: useDarkAlgorithm ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].darkAlgorithm : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$theme$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__theme$3e$__["theme"].defaultAlgorithm,
        token: {
            colorPrimary: currentScheme.primaryAccent,
            borderRadius: 8
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            colorMode,
            colorScheme,
            toggleColorMode,
            setColorScheme,
            currentScheme
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$config$2d$provider$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__ConfigProvider$3e$__["ConfigProvider"], {
            theme: antdThemeConfig,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ThemeProvider.tsx",
            lineNumber: 666,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ThemeProvider.tsx",
        lineNumber: 665,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/DashboardSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/menu/index.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/input/index.js [app-ssr] (ecmascript) <export default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/popover/index.js [app-ssr] (ecmascript) <export default as Popover>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/checkbox/index.js [app-ssr] (ecmascript) <export default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/radio/index.js [app-ssr] (ecmascript) <locals> <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/badge/index.js [app-ssr] (ecmascript) <export default as Badge>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TableOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TableOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/TableOutlined.js [app-ssr] (ecmascript) <export default as TableOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DatabaseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/DatabaseOutlined.js [app-ssr] (ecmascript) <export default as DatabaseOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HomeOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/HomeOutlined.js [app-ssr] (ecmascript) <export default as HomeOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SearchOutlined.js [app-ssr] (ecmascript) <export default as SearchOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FilterOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/FilterOutlined.js [app-ssr] (ecmascript) <export default as FilterOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SortAscendingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SortAscendingOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SortAscendingOutlined.js [app-ssr] (ecmascript) <export default as SortAscendingOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tableRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tableRegistry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const { Sider } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const { Title } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
function DashboardSidebar({ collapsed, onCollapse }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { currentScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [searchText, setSearchText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedDepartments, setSelectedDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDataTypes, setSelectedDataTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sortOption, setSortOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('az');
    const [filterOpen, setFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortOpen, setSortOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get selected menu key from URL
    const getSelectedKey = ()=>{
        if (pathname === '/') return 'home';
        return pathname.split('/').pop() || 'home';
    };
    // Active filter count
    const activeFilterCount = selectedDepartments.length + selectedDataTypes.length;
    // Sort helper
    const sortTables = (tables)=>{
        const sorted = [
            ...tables
        ];
        switch(sortOption){
            case 'az':
                return sorted.sort((a, b)=>a.label.localeCompare(b.label));
            case 'za':
                return sorted.sort((a, b)=>b.label.localeCompare(a.label));
            case 'most-used':
                return sorted.sort((a, b)=>b.usageCount - a.usageCount);
            case 'newest':
                return sorted.sort((a, b)=>new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
            default:
                return sorted;
        }
    };
    // Filter and sort tables
    const filteredTableItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tableRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableConfigs"];
        const query = searchText.toLowerCase().trim();
        if (query) {
            filtered = filtered.filter((config)=>config.label.toLowerCase().includes(query) || config.key.toLowerCase().includes(query));
        }
        if (selectedDepartments.length > 0) {
            filtered = filtered.filter((config)=>selectedDepartments.includes(config.department));
        }
        if (selectedDataTypes.length > 0) {
            filtered = filtered.filter((config)=>selectedDataTypes.includes(config.dataType));
        }
        return sortTables(filtered);
    }, [
        searchText,
        selectedDepartments,
        selectedDataTypes,
        sortOption
    ]);
    // Toggle department filter
    const toggleDepartment = (dept)=>{
        setSelectedDepartments((prev)=>prev.includes(dept) ? prev.filter((d)=>d !== dept) : [
                ...prev,
                dept
            ]);
    };
    // Toggle data type filter
    const toggleDataType = (dt)=>{
        setSelectedDataTypes((prev)=>prev.includes(dt) ? prev.filter((d)=>d !== dt) : [
                ...prev,
                dt
            ]);
    };
    // Clear all filters
    const clearFilters = ()=>{
        setSelectedDepartments([]);
        setSelectedDataTypes([]);
    };
    const homeItem = {
        key: 'home',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$HomeOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HomeOutlined$3e$__["HomeOutlined"], {
            style: {
                fontSize: 16
            }
        }, void 0, false, {
            fileName: "[project]/components/DashboardSidebar.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this),
        label: 'Home',
        onClick: ()=>router.push('/')
    };
    // Filtered table menu items
    const tableMenuItems = filteredTableItems.map((config)=>({
            key: config.key,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$TableOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TableOutlined$3e$__["TableOutlined"], {
                style: {
                    fontSize: 16
                }
            }, void 0, false, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 112,
                columnNumber: 11
            }, this),
            label: config.label,
            onClick: ()=>router.push(config.path)
        }));
    // Sort label
    const sortLabels = {
        'az': 'A → Z',
        'za': 'Z → A',
        'most-used': 'Most Used',
        'newest': 'Newest Added'
    };
    // Filter popup content
    const filterContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 220
        },
        "data-testid": "popup-filter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontWeight: 600,
                            fontSize: 13
                        },
                        children: "Filter Tables"
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearFilters,
                        style: {
                            fontSize: 12,
                            color: '#3b82f6',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0
                        },
                        "data-testid": "button-clear-filters",
                        children: "Clear all"
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: 6,
                            color: '#888'
                        },
                        children: "Department"
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tableRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allDepartments"].map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: selectedDepartments.includes(dept),
                                onChange: ()=>toggleDepartment(dept),
                                "data-testid": `checkbox-dept-${dept.toLowerCase()}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 13
                                    },
                                    children: dept
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            }, dept, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 11,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: 6,
                            color: '#888'
                        },
                        children: "Data Type"
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tableRegistry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allDataTypes"].map((dt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$checkbox$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Checkbox$3e$__["Checkbox"], {
                                checked: selectedDataTypes.includes(dt),
                                onChange: ()=>toggleDataType(dt),
                                "data-testid": `checkbox-type-${dt.toLowerCase()}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 13
                                    },
                                    children: dt
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            }, dt, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardSidebar.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
    // Sort popup content
    const sortContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 180
        },
        "data-testid": "popup-sort",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontWeight: 600,
                        fontSize: 13
                    },
                    children: "Sort Tables"
                }, void 0, false, {
                    fileName: "[project]/components/DashboardSidebar.tsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__["Radio"].Group, {
                value: sortOption,
                onChange: (e)=>{
                    setSortOption(e.target.value);
                    setSortOpen(false);
                },
                className: "flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__["Radio"], {
                        value: "az",
                        "data-testid": "radio-sort-az",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13
                            },
                            children: "Alphabetical A → Z"
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 190,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__["Radio"], {
                        value: "za",
                        "data-testid": "radio-sort-za",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13
                            },
                            children: "Alphabetical Z → A"
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 191,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__["Radio"], {
                        value: "most-used",
                        "data-testid": "radio-sort-most-used",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13
                            },
                            children: "Most Used"
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 192,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$radio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__Radio$3e$__["Radio"], {
                        value: "newest",
                        "data-testid": "radio-sort-newest",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: 13
                            },
                            children: "Newest Added"
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 193,
                            columnNumber: 63
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardSidebar.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Sider, {
        width: 280,
        collapsible: true,
        collapsed: collapsed,
        onCollapse: onCollapse,
        breakpoint: "lg",
        collapsedWidth: 80,
        className: "h-screen sticky top-0 left-0",
        style: {
            background: 'var(--sidebar-bg)',
            borderRight: '1px solid var(--sidebar-border)'
        },
        "data-testid": "sidebar",
        trigger: null,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: '1px solid var(--sidebar-border)'
                },
                className: "jsx-47c60ffea24c6ef2" + " " + "p-4 mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-47c60ffea24c6ef2" + " " + "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)'
                            },
                            className: "jsx-47c60ffea24c6ef2" + " " + "flex items-center justify-center w-10 h-10 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DatabaseOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatabaseOutlined$3e$__["DatabaseOutlined"], {
                                style: {
                                    color: 'white',
                                    fontSize: 20
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-47c60ffea24c6ef2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                    level: 5,
                                    style: {
                                        margin: 0,
                                        fontSize: currentScheme.fontOverride ? 12 : 16,
                                        color: 'var(--sidebar-text)',
                                        fontFamily: currentScheme.fontOverride ? 'var(--theme-font)' : undefined,
                                        letterSpacing: currentScheme.fontOverride ? '0.03em' : undefined,
                                        lineHeight: currentScheme.fontOverride ? '1.6' : undefined
                                    },
                                    children: "RDM Lighthouse"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 12,
                                        color: 'var(--sidebar-text-muted)'
                                    },
                                    className: "jsx-47c60ffea24c6ef2",
                                    children: "Data Governance"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                    lineNumber: 235,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DashboardSidebar.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-47c60ffea24c6ef2" + " " + "px-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    mode: "inline",
                    selectedKeys: [
                        getSelectedKey()
                    ],
                    items: [
                        homeItem
                    ],
                    style: {
                        border: 'none',
                        background: 'transparent'
                    },
                    "data-testid": "sidebar-home-menu"
                }, void 0, false, {
                    fileName: "[project]/components/DashboardSidebar.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    minHeight: 0,
                    flex: 1
                },
                className: "jsx-47c60ffea24c6ef2" + " " + "px-2 mt-1 flex flex-col",
                children: [
                    !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-47c60ffea24c6ef2" + " " + "px-4 py-2 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: 11,
                                        fontWeight: 600,
                                        color: 'var(--sidebar-text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    },
                                    className: "jsx-47c60ffea24c6ef2",
                                    children: "Tables"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                    lineNumber: 257,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-47c60ffea24c6ef2" + " " + "px-2 mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$input$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Input$3e$__["Input"], {
                                    placeholder: "Search tables...",
                                    prefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SearchOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchOutlined$3e$__["SearchOutlined"], {
                                        style: {
                                            color: 'var(--sidebar-text-muted)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardSidebar.tsx",
                                        lineNumber: 266,
                                        columnNumber: 25
                                    }, void 0),
                                    value: searchText,
                                    onChange: (e)=>setSearchText(e.target.value),
                                    allowClear: true,
                                    size: "small",
                                    "data-testid": "input-table-search",
                                    style: {
                                        background: 'var(--sidebar-hover)',
                                        borderColor: 'var(--sidebar-border)',
                                        color: 'var(--sidebar-text)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-47c60ffea24c6ef2" + " " + "px-3 mb-2 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                                        content: filterContent,
                                        trigger: "click",
                                        open: filterOpen,
                                        onOpenChange: setFilterOpen,
                                        placement: "rightTop",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: '2px 0',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: activeFilterCount > 0 ? '#3b82f6' : 'var(--sidebar-text-muted)',
                                                transition: 'color 0.2s'
                                            },
                                            "data-testid": "button-filter",
                                            className: "jsx-47c60ffea24c6ef2" + " " + "flex items-center gap-1 sidebar-clickable-link",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$FilterOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilterOutlined$3e$__["FilterOutlined"], {
                                                    style: {
                                                        fontSize: 12
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        textDecoration: 'underline',
                                                        textUnderlineOffset: '3px'
                                                    },
                                                    className: "jsx-47c60ffea24c6ef2",
                                                    children: "Filter"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 19
                                                }, this),
                                                activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$badge$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Badge$3e$__["Badge"], {
                                                    count: activeFilterCount,
                                                    size: "small",
                                                    style: {
                                                        marginLeft: 2
                                                    },
                                                    "data-testid": "badge-filter-count"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DashboardSidebar.tsx",
                                            lineNumber: 289,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardSidebar.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'var(--sidebar-border)',
                                            fontSize: 12
                                        },
                                        className: "jsx-47c60ffea24c6ef2",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardSidebar.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$popover$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Popover$3e$__["Popover"], {
                                        content: sortContent,
                                        trigger: "click",
                                        open: sortOpen,
                                        onOpenChange: setSortOpen,
                                        placement: "rightTop",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            style: {
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                padding: '2px 0',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                color: sortOption !== 'az' ? '#3b82f6' : 'var(--sidebar-text-muted)',
                                                transition: 'color 0.2s'
                                            },
                                            "data-testid": "button-sort",
                                            className: "jsx-47c60ffea24c6ef2" + " " + "flex items-center gap-1 sidebar-clickable-link",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SortAscendingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SortAscendingOutlined$3e$__["SortAscendingOutlined"], {
                                                    style: {
                                                        fontSize: 12
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        textDecoration: 'underline',
                                                        textUnderlineOffset: '3px'
                                                    },
                                                    className: "jsx-47c60ffea24c6ef2",
                                                    children: [
                                                        "Sort: ",
                                                        sortLabels[sortOption]
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DashboardSidebar.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardSidebar.tsx",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        className: "jsx-47c60ffea24c6ef2" + " " + "overflow-y-auto",
                        children: tableMenuItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$menu$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            mode: "inline",
                            selectedKeys: [
                                getSelectedKey()
                            ],
                            items: tableMenuItems,
                            style: {
                                border: 'none',
                                background: 'transparent'
                            },
                            "data-testid": "sidebar-table-menu"
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 350,
                            columnNumber: 13
                        }, this) : !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: 'var(--sidebar-text-muted)',
                                fontSize: 13
                            },
                            "data-testid": "text-no-tables-found",
                            className: "jsx-47c60ffea24c6ef2" + " " + "px-4 py-3 text-center",
                            children: "No tables found"
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 359,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "47c60ffea24c6ef2",
                children: ".ant-layout-sider{background:var(--sidebar-bg)!important}.ant-layout-sider .ant-menu{background:0 0!important}.ant-layout-sider .ant-menu-item{color:var(--sidebar-text)!important;border-radius:8px!important;margin:4px 8px!important;transition:all .2s!important}.ant-layout-sider .ant-menu-item:hover{background:var(--sidebar-hover)!important}.ant-layout-sider .ant-menu-item-selected{background:var(--sidebar-active)!important;color:#fff!important}.ant-layout-sider .ant-menu-item-selected:after{display:none!important}.ant-layout-sider .ant-menu-item .anticon{color:inherit!important}.ant-layout-sider-trigger{background:var(--sidebar-hover)!important;color:var(--sidebar-text)!important}.ant-layout-sider .ant-input-affix-wrapper{background:var(--sidebar-hover)!important;border-color:var(--sidebar-border)!important}.ant-layout-sider .ant-input-affix-wrapper .ant-input{color:var(--sidebar-text)!important;background:0 0!important}.ant-layout-sider .ant-input-affix-wrapper .ant-input::placeholder,.ant-layout-sider .ant-input-affix-wrapper .ant-input-clear-icon{color:var(--sidebar-text-muted)!important}.sidebar-clickable-link{opacity:.85;transition:opacity .2s,color .2s}.sidebar-clickable-link:hover{opacity:1;color:#3b82f6!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardSidebar.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/DashboardHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/typography/index.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/avatar/index.js [app-ssr] (ecmascript) <export default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/dropdown/index.js [app-ssr] (ecmascript) <export default as Dropdown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/modal/index.js [app-ssr] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/UserOutlined.js [app-ssr] (ecmascript) <export default as UserOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MenuFoldOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuFoldOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js [app-ssr] (ecmascript) <export default as MenuFoldOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MenuUnfoldOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuUnfoldOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js [app-ssr] (ecmascript) <export default as MenuUnfoldOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SunOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SunOutlined.js [app-ssr] (ecmascript) <export default as SunOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoonOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MoonOutlined.js [app-ssr] (ecmascript) <export default as MoonOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BgColorsOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BgColorsOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/BgColorsOutlined.js [app-ssr] (ecmascript) <export default as BgColorsOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SettingOutlined.js [app-ssr] (ecmascript) <export default as SettingOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const { Header } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
const { Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$typography$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"];
const CATEGORY_LABELS = {
    all: 'All',
    classic: 'Classic',
    seasonal: 'Seasonal',
    nature: 'Nature',
    sports: 'Sports',
    holiday: 'Holiday',
    aesthetic: 'Aesthetic',
    special: 'Special',
    tech: 'Tech'
};
const CATEGORY_EMOJIS = {
    all: '🎨',
    classic: '🖼️',
    seasonal: '🌿',
    nature: '🌍',
    sports: '🏆',
    holiday: '🎉',
    aesthetic: '✨',
    special: '⚡',
    tech: '💻'
};
const CATEGORY_ORDER = [
    'all',
    'classic',
    'seasonal',
    'nature',
    'sports',
    'holiday',
    'aesthetic',
    'special',
    'tech'
];
function DashboardHeader({ collapsed, onToggle }) {
    const { colorMode, colorScheme, toggleColorMode, setColorScheme, currentScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [themeModalOpen, setThemeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [modeKey, setModeKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const hasGlow = !!currentScheme.glowColor;
    const hasFont = !!currentScheme.fontOverride;
    const isFlat = !!currentScheme.flatHeader;
    const titleClass = currentScheme.key === 'aurora' ? 'aurora-text' : currentScheme.key === 'terminal-amber' ? 'typewriter-cursor' : hasGlow ? 'neon-glow' : hasFont || isFlat ? '' : 'shiny-text';
    const btnStyle = {
        background: 'rgba(255,255,255,0.15)',
        color: 'var(--header-text)'
    };
    const btnHover = (e, hover)=>{
        e.currentTarget.style.background = hover ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.15)';
    };
    const handleToggleMode = ()=>{
        toggleColorMode();
        setModeKey((k)=>k + 1);
    };
    const filteredSchemes = activeCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"] : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"].filter((s)=>s.category === activeCategory);
    const userMenuItems = [
        {
            key: 'theme',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BgColorsOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BgColorsOutlined$3e$__["BgColorsOutlined"], {}, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            label: 'Theme',
            onClick: ()=>setThemeModalOpen(true)
        },
        {
            key: 'settings',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__["SettingOutlined"], {}, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            label: 'Settings',
            disabled: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                className: "flex items-center justify-between px-6 sticky top-0 z-50 animate-gradient",
                style: {
                    background: 'var(--header-bg)',
                    borderBottom: 'none',
                    height: 64,
                    padding: '0 24px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                },
                "data-testid": "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggle,
                                className: "flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer border-none",
                                style: btnStyle,
                                onMouseEnter: (e)=>btnHover(e, true),
                                onMouseLeave: (e)=>btnHover(e, false),
                                "data-testid": "button-toggle-sidebar",
                                "aria-label": collapsed ? 'Expand sidebar' : 'Collapse sidebar',
                                children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MenuUnfoldOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuUnfoldOutlined$3e$__["MenuUnfoldOutlined"], {
                                    style: {
                                        fontSize: 18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 110,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MenuFoldOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuFoldOutlined$3e$__["MenuFoldOutlined"], {
                                    style: {
                                        fontSize: 18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 110,
                                    columnNumber: 76
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardHeader.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                strong: true,
                                className: titleClass,
                                style: {
                                    fontSize: hasFont ? 14 : 16,
                                    color: hasGlow && currentScheme.key !== 'aurora' && currentScheme.key !== 'terminal-amber' ? 'var(--glow-color)' : titleClass === '' ? 'var(--header-text)' : undefined,
                                    fontFamily: hasFont ? 'var(--theme-font)' : undefined,
                                    letterSpacing: hasFont ? '0.04em' : undefined,
                                    lineHeight: hasFont ? '1.6' : undefined
                                },
                                children: "Reference Data Management"
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardHeader.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardHeader.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleToggleMode,
                                className: "flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer border-none",
                                style: btnStyle,
                                onMouseEnter: (e)=>btnHover(e, true),
                                onMouseLeave: (e)=>btnHover(e, false),
                                "data-testid": "button-toggle-mode",
                                "aria-label": colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode',
                                title: colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "toggle-icon-enter",
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: 17
                                    },
                                    children: colorMode === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoonOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonOutlined$3e$__["MoonOutlined"], {}, void 0, false, {
                                        fileName: "[project]/components/DashboardHeader.tsx",
                                        lineNumber: 142,
                                        columnNumber: 40
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SunOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunOutlined$3e$__["SunOutlined"], {}, void 0, false, {
                                        fileName: "[project]/components/DashboardHeader.tsx",
                                        lineNumber: 142,
                                        columnNumber: 59
                                    }, this)
                                }, modeKey, false, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardHeader.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
                                menu: {
                                    items: userMenuItems
                                },
                                trigger: [
                                    'click'
                                ],
                                placement: "bottomRight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$avatar$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Avatar$3e$__["Avatar"], {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$UserOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserOutlined$3e$__["UserOutlined"], {}, void 0, false, {
                                        fileName: "[project]/components/DashboardHeader.tsx",
                                        lineNumber: 152,
                                        columnNumber: 21
                                    }, void 0),
                                    style: {
                                        backgroundColor: 'rgba(255,255,255,0.2)',
                                        border: '2px solid rgba(255,255,255,0.3)',
                                        cursor: 'pointer'
                                    },
                                    "data-testid": "avatar-user"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardHeader.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardHeader.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                title: "Choose a Theme",
                open: themeModalOpen,
                onCancel: ()=>setThemeModalOpen(false),
                footer: null,
                width: 620,
                "data-testid": "modal-theme-picker",
                styles: {
                    body: {
                        padding: 0
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        minHeight: 400
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 110,
                                borderRight: '1px solid var(--border-color, #e2e8f0)',
                                paddingTop: 8,
                                paddingBottom: 8,
                                flexShrink: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1,
                                overflowY: 'auto'
                            },
                            children: CATEGORY_ORDER.map((cat)=>{
                                const isActive = activeCategory === cat;
                                const count = cat === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"].length : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"].filter((s)=>s.category === cat).length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveCategory(cat),
                                    "data-testid": `button-category-${cat}`,
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                        padding: '8px 6px',
                                        margin: '0 6px',
                                        borderRadius: 8,
                                        border: 'none',
                                        cursor: 'pointer',
                                        background: isActive ? 'var(--table-row-hover, rgba(59,130,246,0.08))' : 'transparent',
                                        borderLeft: isActive ? '3px solid var(--primary, #3b82f6)' : '3px solid transparent',
                                        transition: 'all 0.15s',
                                        color: isActive ? 'var(--primary, #3b82f6)' : 'var(--foreground-muted, #64748b)',
                                        fontWeight: isActive ? 600 : 400
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 16,
                                                lineHeight: 1
                                            },
                                            children: CATEGORY_EMOJIS[cat]
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 10
                                            },
                                            children: CATEGORY_LABELS[cat]
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 9,
                                                background: isActive ? 'var(--primary, #3b82f6)' : 'var(--border-color, #e2e8f0)',
                                                color: isActive ? '#fff' : 'var(--foreground-muted, #64748b)',
                                                borderRadius: 10,
                                                padding: '1px 5px',
                                                fontWeight: 600,
                                                lineHeight: 1.4
                                            },
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cat, true, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 189,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardHeader.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                overflowY: 'auto',
                                padding: '10px 14px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3
                            },
                            "data-testid": "theme-scheme-list",
                            children: filteredSchemes.map((scheme)=>{
                                const isSelected = colorScheme === scheme.key;
                                const isSchemeFlat = scheme.flatHeader || scheme.cardStyle === 'flat';
                                const swatchBg = isSchemeFlat ? scheme.gradientStart : `linear-gradient(135deg, ${scheme.gradientStart} 0%, ${scheme.gradientMid} 50%, ${scheme.gradientEnd} 100%)`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setColorScheme(scheme.key);
                                        setThemeModalOpen(false);
                                    },
                                    "data-testid": `button-scheme-${scheme.key}`,
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 12,
                                        padding: '8px 10px',
                                        borderRadius: 8,
                                        border: isSelected ? `2px solid ${scheme.primaryAccent}` : '2px solid transparent',
                                        background: isSelected ? `${scheme.primaryAccent}18` : 'transparent',
                                        cursor: 'pointer',
                                        width: '100%',
                                        textAlign: 'left',
                                        transition: 'all 0.15s'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 40,
                                                height: 24,
                                                borderRadius: isSchemeFlat ? 3 : 5,
                                                background: swatchBg,
                                                flexShrink: 0,
                                                boxShadow: scheme.glowColor ? `0 0 6px ${scheme.glowColor}, 0 2px 4px rgba(0,0,0,0.3)` : '0 2px 4px rgba(0,0,0,0.18)',
                                                border: scheme.cardStyle === 'neon' ? `1px solid ${scheme.primaryAccent}` : undefined
                                            },
                                            "data-testid": `swatch-${scheme.key}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontWeight: isSelected ? 600 : 400,
                                                fontSize: 13,
                                                color: 'var(--foreground)',
                                                flex: 1
                                            },
                                            children: [
                                                scheme.emoji,
                                                " ",
                                                scheme.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 275,
                                            columnNumber: 19
                                        }, this),
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: scheme.primaryAccent,
                                                fontWeight: 600,
                                                fontSize: 11,
                                                flexShrink: 0
                                            },
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 279,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, scheme.key, true, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardHeader.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DashboardHeader.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/ThemeEffectsLayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeEffectsLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function random(min, max) {
    return Math.random() * (max - min) + min;
}
function useParticles(count) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.from({
            length: count
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 10),
                duration: random(6, 16),
                size: random(4, 12),
                drift: random(-3, 3),
                opacity: random(0.5, 1)
            }));
    }, [
        count
    ]);
}
/* ── Existing effects ─────────────────────────────────── */ function SnowEffect() {
    const particles = useParticles(55);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "snowflake",
                style: {
                    left: `${p.x}%`,
                    width: p.size,
                    height: p.size,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                    opacity: p.opacity
                }
            }, p.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function StarsEffectStable() {
    const stars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.from({
            length: 110
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                y: random(0, 100),
                delay: random(0, 8),
                duration: random(2, 6),
                size: random(1.5, 4),
                opacity: random(0.4, 1)
            }));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: stars.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "star",
                style: {
                    left: `${s.x}%`,
                    top: `${s.y}%`,
                    width: s.size,
                    height: s.size,
                    animationDelay: `${s.delay}s`,
                    animationDuration: `${s.duration}s`,
                    opacity: s.opacity
                }
            }, s.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function LeavesEffect() {
    const particles = useParticles(28);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "leaf",
                style: {
                    left: `${p.x}%`,
                    width: p.size + 4,
                    height: (p.size + 4) * 0.65,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                    opacity: p.opacity,
                    '--drift': `${p.drift * 40}px`
                }
            }, p.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
function PetalsEffect() {
    const particles = useParticles(28);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "petal",
                style: {
                    left: `${p.x}%`,
                    width: p.size + 2,
                    height: (p.size + 2) * 0.6,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration * 1.3}s`,
                    opacity: p.opacity,
                    '--drift': `${p.drift * 50}px`
                }
            }, p.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
const BAT_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 20" fill="currentColor">
  <path d="M20 8 C14 2, 4 0, 0 6 C4 6, 6 10, 8 10 C10 10, 12 8, 14 8 C16 8, 18 12, 20 12 C22 12, 24 8, 26 8 C28 8, 30 10, 32 10 C34 10, 36 6, 40 6 C36 0, 26 2, 20 8 Z"/>
  <ellipse cx="20" cy="12" rx="3" ry="4"/>
</svg>
`;
function BatsEffect() {
    const bats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.from({
            length: 10
        }, (_, i)=>({
                id: i,
                y: random(5, 80),
                delay: random(0, 15),
                duration: random(12, 22),
                size: random(18, 32),
                direction: Math.random() > 0.5 ? 1 : -1,
                opacity: random(0.5, 0.9)
            }));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: bats.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: b.direction === 1 ? 'bat bat-ltr' : 'bat bat-rtl',
                style: {
                    top: `${b.y}%`,
                    width: b.size,
                    height: b.size * 0.5,
                    animationDelay: `${b.delay}s`,
                    animationDuration: `${b.duration}s`,
                    opacity: b.opacity,
                    color: '#6b21a8'
                },
                dangerouslySetInnerHTML: {
                    __html: BAT_SVG
                }
            }, b.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
function WavesEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer waves-container",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wave wave-1"
            }, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wave wave-2"
            }, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wave wave-3"
            }, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function PixelsEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer pixels-layer",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
function ScanlinesEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scanlines",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
/* ── New: Sakura Petals (heavier + deeper pink) ──────── */ function SakuraPetalsEffect() {
    const petals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 45
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 12),
                duration: random(5, 10),
                size: random(6, 14),
                drift: random(-4, 4),
                opacity: random(0.55, 0.95),
                hue: Math.random() > 0.5 ? '#f9a8d4' : '#fbcfe8'
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: petals.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sakura-petal",
                style: {
                    left: `${p.x}%`,
                    width: p.size,
                    height: p.size * 0.55,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                    opacity: p.opacity,
                    '--drift': `${p.drift * 55}px`,
                    background: p.hue
                }
            }, p.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
/* ── New: Aurora Borealis bands ──────────────────────── */ function AuroraEffect() {
    const bands = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: 0,
                top: '15%',
                color: 'rgba(52,211,153,0.22)',
                delay: 0,
                dur: 14
            },
            {
                id: 1,
                top: '28%',
                color: 'rgba(96,165,250,0.18)',
                delay: 2,
                dur: 18
            },
            {
                id: 2,
                top: '38%',
                color: 'rgba(167,139,250,0.20)',
                delay: 4,
                dur: 12
            },
            {
                id: 3,
                top: '50%',
                color: 'rgba(52,211,153,0.15)',
                delay: 6,
                dur: 20
            },
            {
                id: 4,
                top: '62%',
                color: 'rgba(34,211,238,0.18)',
                delay: 1,
                dur: 16
            }
        ], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: bands.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aurora-band",
                style: {
                    top: b.top,
                    background: b.color,
                    animationDelay: `${b.delay}s`,
                    animationDuration: `${b.dur}s`
                }
            }, b.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 251,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
/* ── New: Bubbles (Underwater) ───────────────────────── */ function BubblesEffect() {
    const bubbles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 40
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 14),
                duration: random(6, 14),
                size: random(4, 18),
                opacity: random(0.2, 0.55),
                drift: random(-2, 2)
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: bubbles.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bubble",
                style: {
                    left: `${b.x}%`,
                    width: b.size,
                    height: b.size,
                    animationDelay: `${b.delay}s`,
                    animationDuration: `${b.duration}s`,
                    opacity: b.opacity,
                    '--drift': `${b.drift * 30}px`
                }
            }, b.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
/* ── New: Orbs (Deep Sea bioluminescence) ────────────── */ function OrbsEffect() {
    const orbs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 22
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                y: random(10, 90),
                delay: random(0, 12),
                duration: random(8, 20),
                size: random(6, 28),
                opacity: random(0.15, 0.5),
                colors: [
                    'rgba(34,211,238,0.6)',
                    'rgba(52,211,153,0.5)',
                    'rgba(96,165,250,0.5)',
                    'rgba(167,139,250,0.45)'
                ]
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: orbs.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "orb",
                style: {
                    left: `${o.x}%`,
                    top: `${o.y}%`,
                    width: o.size,
                    height: o.size,
                    animationDelay: `${o.delay}s`,
                    animationDuration: `${o.duration}s`,
                    opacity: o.opacity,
                    background: o.colors[o.id % o.colors.length],
                    boxShadow: `0 0 ${o.size}px ${o.colors[o.id % o.colors.length]}`
                }
            }, o.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
/* ── New: Embers (Lava / Volcano) ────────────────────── */ function EmbersEffect() {
    const embers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 65
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 8),
                duration: random(2, 6),
                size: random(2, 6),
                opacity: random(0.5, 0.9),
                drift: random(-2, 2),
                color: Math.random() > 0.5 ? '#ff4500' : '#f97316'
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: embers.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ember",
                style: {
                    left: `${e.x}%`,
                    width: e.size,
                    height: e.size,
                    animationDelay: `${e.delay}s`,
                    animationDuration: `${e.duration}s`,
                    opacity: e.opacity,
                    background: e.color,
                    boxShadow: `0 0 ${e.size * 2}px ${e.color}`,
                    '--drift': `${e.drift * 40}px`
                }
            }, e.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 351,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, this);
}
/* ── New: Lightning + Rain (Storm) ───────────────────── */ function LightningRainEffect() {
    const [flash, setFlash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const streaks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 60
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 4),
                duration: random(0.3, 0.8),
                opacity: random(0.15, 0.45),
                length: random(12, 28)
            })), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timeout;
        function scheduleFlash() {
            const wait = random(3500, 9000);
            timeout = setTimeout(()=>{
                setFlash(true);
                setTimeout(()=>setFlash(false), 120);
                scheduleFlash();
            }, wait);
        }
        scheduleFlash();
        return ()=>clearTimeout(timeout);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: [
            flash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lightning-flash"
            }, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 399,
                columnNumber: 17
            }, this),
            streaks.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rain-streak",
                    style: {
                        left: `${s.x}%`,
                        height: s.length,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${s.duration}s`,
                        opacity: s.opacity
                    }
                }, s.id, false, {
                    fileName: "[project]/components/ThemeEffectsLayer.tsx",
                    lineNumber: 401,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
/* ── New: Rain only (Lo-Fi) ──────────────────────────── */ function RainEffect() {
    const streaks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 50
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 4),
                duration: random(0.5, 1.2),
                opacity: random(0.1, 0.3),
                length: random(12, 26)
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: streaks.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rain-streak",
                style: {
                    left: `${s.x}%`,
                    height: s.length,
                    animationDelay: `${s.delay}s`,
                    animationDuration: `${s.duration}s`,
                    opacity: s.opacity
                }
            }, s.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 431,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 429,
        columnNumber: 5
    }, this);
}
/* ── New: Fog layers ─────────────────────────────────── */ function FogEffect() {
    const layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: 0,
                top: '20%',
                opacity: 0.12,
                duration: 25,
                delay: 0
            },
            {
                id: 1,
                top: '50%',
                opacity: 0.10,
                duration: 35,
                delay: 8
            },
            {
                id: 2,
                top: '75%',
                opacity: 0.08,
                duration: 45,
                delay: 15
            }
        ], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: layers.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fog-layer",
                style: {
                    top: l.top,
                    opacity: l.opacity,
                    animationDuration: `${l.duration}s`,
                    animationDelay: `${l.delay}s`
                }
            }, l.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 458,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, this);
}
/* ── New: Field Lines (Soccer / Football) ────────────── */ function FieldLinesEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer field-lines-overlay",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 476,
        columnNumber: 5
    }, this);
}
/* ── New: Floating Hearts (Valentine's) ──────────────── */ const HEART_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
function HeartsEffect() {
    const hearts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 30
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 12),
                duration: random(7, 14),
                size: random(12, 26),
                opacity: random(0.35, 0.75),
                drift: random(-2, 2),
                color: Math.random() > 0.5 ? '#f43f5e' : '#fb7185'
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: hearts.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heart-particle",
                style: {
                    left: `${h.x}%`,
                    width: h.size,
                    height: h.size,
                    color: h.color,
                    animationDelay: `${h.delay}s`,
                    animationDuration: `${h.duration}s`,
                    opacity: h.opacity,
                    '--drift': `${h.drift * 40}px`
                },
                dangerouslySetInnerHTML: {
                    __html: HEART_SVG
                }
            }, h.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 498,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 496,
        columnNumber: 5
    }, this);
}
/* ── New: Shamrocks (St Patrick's) ───────────────────── */ const SHAMROCK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><circle cx="10" cy="10" r="7"/><circle cx="22" cy="10" r="7"/><circle cx="16" cy="20" r="7"/><rect x="14.5" y="20" width="3" height="8" rx="1.5"/></svg>`;
function ShamrocksEffect() {
    const shamrocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 25
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 10),
                duration: random(6, 13),
                size: random(14, 28),
                opacity: random(0.3, 0.7)
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: shamrocks.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shamrock-particle",
                style: {
                    left: `${s.x}%`,
                    width: s.size,
                    height: s.size,
                    color: '#4ade80',
                    animationDelay: `${s.delay}s`,
                    animationDuration: `${s.duration}s`,
                    opacity: s.opacity
                },
                dangerouslySetInnerHTML: {
                    __html: SHAMROCK_SVG
                }
            }, s.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 534,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 532,
        columnNumber: 5
    }, this);
}
/* ── New: Confetti (Christmas / New Year's) ──────────── */ const CONFETTI_COLORS = [
    '#fbbf24',
    '#f43f5e',
    '#34d399',
    '#60a5fa',
    '#a78bfa',
    '#f97316',
    '#ffffff',
    '#ec4899'
];
function ConfettiEffect() {
    const pieces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 80
        }, (_, i)=>({
                id: i,
                x: random(0, 100),
                delay: random(0, 8),
                duration: random(4, 9),
                width: random(5, 11),
                height: random(4, 8),
                opacity: random(0.55, 0.9),
                color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
                rotate: random(0, 360)
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: pieces.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "confetti-piece",
                style: {
                    left: `${p.x}%`,
                    width: p.width,
                    height: p.height,
                    background: p.color,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                    opacity: p.opacity,
                    '--rotate-start': `${p.rotate}deg`
                }
            }, p.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 572,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 570,
        columnNumber: 5
    }, this);
}
/* ── New: Olympic Rings floating ─────────────────────── */ const RING_COLORS = [
    '#0284c7',
    '#000000',
    '#dc2626',
    '#fbbf24',
    '#16a34a'
];
function OlympicRingsEffect() {
    const rings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>RING_COLORS.map((color, i)=>({
                id: i,
                x: 15 + i * 17,
                y: random(20, 70),
                delay: i * 1.5,
                duration: random(10, 18),
                size: random(50, 80),
                color
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: rings.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "olympic-ring",
                style: {
                    left: `${r.x}%`,
                    top: `${r.y}%`,
                    width: r.size,
                    height: r.size,
                    borderColor: r.color,
                    animationDelay: `${r.delay}s`,
                    animationDuration: `${r.duration}s`
                }
            }, r.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 608,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 606,
        columnNumber: 5
    }, this);
}
/* ── New: Steam wisps (Coffee) ───────────────────────── */ function SteamEffect() {
    const wisps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 6
        }, (_, i)=>({
                id: i,
                x: 15 + i * 14,
                delay: i * 1.2,
                duration: random(4, 8),
                opacity: random(0.08, 0.2)
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: wisps.map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "steam-wisp",
                style: {
                    left: `${w.x}%`,
                    animationDelay: `${w.delay}s`,
                    animationDuration: `${w.duration}s`,
                    opacity: w.opacity
                }
            }, w.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 639,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 637,
        columnNumber: 5
    }, this);
}
/* ── New: Data Packets (Data Flow / Neural) ──────────── */ function DataPacketsEffect() {
    const packets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 30
        }, (_, i)=>({
                id: i,
                y: random(5, 95),
                delay: random(0, 6),
                duration: random(2, 5),
                size: random(3, 7),
                opacity: random(0.2, 0.55),
                color: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#a78bfa' : '#34d399'
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: packets.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "data-packet",
                style: {
                    top: `${p.y}%`,
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration}s`,
                    opacity: p.opacity
                }
            }, p.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 669,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 667,
        columnNumber: 5
    }, this);
}
/* ── New: Torch flames (Dungeon) ─────────────────────── */ const TORCH_FLAME = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 36" fill="currentColor"><path d="M10 0 C10 0, 18 10, 16 18 C14 26, 10 28, 10 36 C10 28, 6 26, 4 18 C2 10, 10 0, 10 0 Z" fill="#fbbf24"/><path d="M10 8 C10 8, 15 14, 13 20 C11 26, 10 28, 10 28 C10 28, 9 26, 7 20 C5 14, 10 8, 10 8 Z" fill="#f97316"/></svg>`;
function TorchEffect() {
    const torches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: 0,
                x: 2,
                y: 85,
                delay: 0
            },
            {
                id: 1,
                x: 96,
                y: 85,
                delay: 0.7
            },
            {
                id: 2,
                x: 2,
                y: 15,
                delay: 1.4
            },
            {
                id: 3,
                x: 96,
                y: 15,
                delay: 2.1
            }
        ], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: torches.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "torch-flame",
                style: {
                    left: `${t.x}%`,
                    top: `${t.y}%`,
                    animationDelay: `${t.delay}s`
                },
                dangerouslySetInnerHTML: {
                    __html: TORCH_FLAME
                }
            }, t.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 702,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 700,
        columnNumber: 5
    }, this);
}
/* ── New: Vaporwave Perspective Grid ─────────────────── */ function VaporwaveGridEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer vaporwave-grid-layer",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vaporwave-grid"
        }, void 0, false, {
            fileName: "[project]/components/ThemeEffectsLayer.tsx",
            lineNumber: 721,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, this);
}
/* ── New: Matrix Rain (Canvas) ───────────────────────── */ function MatrixRainEffect() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!canvasRef.current) return;
        const el = canvasRef.current;
        const ctx = el.getContext('2d');
        if (!ctx) return;
        const resize = ()=>{
            el.width = window.innerWidth;
            el.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);
        const fontSize = 13;
        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';
        let cols = Math.floor(el.width / fontSize);
        const drops = Array(cols).fill(1);
        let raf;
        let last = 0;
        const interval = 55;
        const c = ctx;
        const draw = (now)=>{
            if (now - last < interval) {
                raf = requestAnimationFrame(draw);
                return;
            }
            last = now;
            cols = Math.floor(el.width / fontSize);
            while(drops.length < cols)drops.push(1);
            c.fillStyle = 'rgba(0,0,0,0.06)';
            c.fillRect(0, 0, el.width, el.height);
            c.fillStyle = '#00ff41';
            c.font = `${fontSize}px monospace`;
            for(let i = 0; i < drops.length; i++){
                const ch = chars[Math.floor(Math.random() * chars.length)];
                c.fillText(ch, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > el.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            raf = requestAnimationFrame(draw);
        };
        raf = requestAnimationFrame(draw);
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        "aria-hidden": "true",
        style: {
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.55
        }
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 784,
        columnNumber: 5
    }, this);
}
/* ── New: Circuit Pulse ──────────────────────────────── */ function CircuitPulseEffect() {
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 18
        }, (_, i)=>({
                id: i,
                y: random(5, 95),
                width: random(60, 180),
                x: random(0, 70),
                delay: random(0, 8),
                duration: random(2, 5),
                opacity: random(0.12, 0.35)
            })), []);
    const dots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 18
        }, (_, i)=>({
                id: i,
                y: lines[i]?.y ?? random(5, 95),
                lineWidth: lines[i]?.width ?? 120,
                x: lines[i]?.x ?? 0,
                delay: lines[i]?.delay ?? 0,
                duration: lines[i]?.duration ?? 3
            })), [
        lines
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: [
            lines.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "circuit-line",
                    style: {
                        top: `${l.y}%`,
                        left: `${l.x}%`,
                        width: `${l.width}px`,
                        opacity: l.opacity
                    }
                }, l.id, false, {
                    fileName: "[project]/components/ThemeEffectsLayer.tsx",
                    lineNumber: 819,
                    columnNumber: 9
                }, this)),
            dots.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "circuit-dot",
                    style: {
                        top: `${d.y}%`,
                        left: `${d.x}%`,
                        '--line-width': `${d.lineWidth}px`,
                        animationDelay: `${d.delay}s`,
                        animationDuration: `${d.duration}s`
                    }
                }, d.id, false, {
                    fileName: "[project]/components/ThemeEffectsLayer.tsx",
                    lineNumber: 831,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 817,
        columnNumber: 5
    }, this);
}
/* ── New: Checkered (NASCAR) ─────────────────────────── */ function CheckeredEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer checkered-overlay",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 850,
        columnNumber: 5
    }, this);
}
/* ── New: Meteor Streaks (Galaxy Rose / Space) ───────── */ function MeteorStreaksEffect() {
    const meteors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 18
        }, (_, i)=>({
                id: i,
                x: random(0, 80),
                y: random(0, 60),
                delay: random(0, 12),
                duration: random(1.5, 3.5),
                length: random(60, 180),
                opacity: random(0.3, 0.7),
                color: i % 2 === 0 ? 'rgba(249,168,212,0.8)' : 'rgba(167,139,250,0.7)'
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: meteors.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "meteor-streak",
                style: {
                    left: `${m.x}%`,
                    top: `${m.y}%`,
                    width: m.length,
                    color: m.color,
                    animationDelay: `${m.delay}s`,
                    animationDuration: `${m.duration}s`,
                    opacity: m.opacity
                }
            }, m.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 870,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 868,
        columnNumber: 5
    }, this);
}
/* ── New: Neural Network (Canvas) ───────────────────────── */ function NeuralNetworkEffect() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const NODE_COUNT = 18;
        const CONNECT_DIST = 230;
        const c = ctx;
        const nodes = Array.from({
            length: NODE_COUNT
        }, ()=>({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 4 + 3,
                pulse: Math.random() * Math.PI * 2
            }));
        const packets = [];
        let packetTimer = 0;
        let raf;
        let last = 0;
        const draw = (now)=>{
            const dt = Math.min(now - last, 50);
            last = now;
            packetTimer += dt;
            c.clearRect(0, 0, canvas.width, canvas.height);
            for (const n of nodes){
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += 0.02;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
            }
            if (packetTimer > 700) {
                packetTimer = 0;
                const from = Math.floor(Math.random() * NODE_COUNT);
                let best = -1;
                let bestD = Infinity;
                for(let i = 0; i < NODE_COUNT; i++){
                    if (i === from) continue;
                    const dx = nodes[i].x - nodes[from].x;
                    const dy = nodes[i].y - nodes[from].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECT_DIST && d < bestD) {
                        bestD = d;
                        best = i;
                    }
                }
                if (best >= 0) packets.push({
                    from,
                    to: best,
                    t: 0,
                    speed: 0.007 + Math.random() * 0.006
                });
            }
            for(let i = 0; i < NODE_COUNT; i++){
                for(let j = i + 1; j < NODE_COUNT; j++){
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECT_DIST) {
                        const alpha = (1 - d / CONNECT_DIST) * 0.28;
                        c.strokeStyle = `rgba(167,139,250,${alpha})`;
                        c.lineWidth = 1;
                        c.beginPath();
                        c.moveTo(nodes[i].x, nodes[i].y);
                        c.lineTo(nodes[j].x, nodes[j].y);
                        c.stroke();
                    }
                }
            }
            for(let i = packets.length - 1; i >= 0; i--){
                const p = packets[i];
                p.t += p.speed;
                if (p.t >= 1) {
                    packets.splice(i, 1);
                    continue;
                }
                const fn = nodes[p.from];
                const tn = nodes[p.to];
                const px = fn.x + (tn.x - fn.x) * p.t;
                const py = fn.y + (tn.y - fn.y) * p.t;
                c.beginPath();
                c.arc(px, py, 3, 0, Math.PI * 2);
                c.fillStyle = 'rgba(196,181,253,0.9)';
                c.fill();
            }
            for (const n of nodes){
                const glow = (Math.sin(n.pulse) + 1) / 2;
                c.beginPath();
                c.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                c.fillStyle = `rgba(139,92,246,${0.6 + glow * 0.4})`;
                c.fill();
                c.beginPath();
                c.arc(n.x, n.y, n.r + 5 * glow, 0, Math.PI * 2);
                c.strokeStyle = `rgba(167,139,250,${0.35 * glow})`;
                c.lineWidth = 1.5;
                c.stroke();
            }
            raf = requestAnimationFrame(draw);
        };
        raf = requestAnimationFrame(draw);
        const resize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        "aria-hidden": "true",
        style: {
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.65
        }
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 992,
        columnNumber: 5
    }, this);
}
/* ── New: Stained Glass Geometric Overlay ───────────────────────── */ function StainedGlassEffect() {
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const colors = [
            '#7c3aed',
            '#2563eb',
            '#0891b2',
            '#059669',
            '#d97706',
            '#dc2626',
            '#db2777'
        ];
        const shapes = [
            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
            'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
            'polygon(0% 25%, 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%)',
            'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)'
        ];
        return Array.from({
            length: 45
        }, (_, i)=>({
                id: i,
                x: i % 9 * 11.5 - 2,
                y: Math.floor(i / 9) * 22 - 5,
                color: colors[i % colors.length],
                opacity: 0.035 + i % 6 * 0.015,
                shape: shapes[i % shapes.length],
                duration: 3 + i % 5,
                delay: i % 7 * 0.4
            }));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        style: {
            overflow: 'hidden'
        },
        children: cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: `${cell.x}%`,
                    top: `${cell.y}%`,
                    width: '13%',
                    height: '25%',
                    background: cell.color,
                    opacity: cell.opacity,
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    clipPath: cell.shape,
                    animation: `stained-glass-shimmer ${cell.duration}s ease-in-out infinite`,
                    animationDelay: `${cell.delay}s`
                }
            }, cell.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1029,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 1027,
        columnNumber: 5
    }, this);
}
/* ── New: Animated Beams (Data Flow) ─────────────────── */ function AnimatedBeamsEffect() {
    const beams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: 0,
                top: '8%',
                width: '38%',
                speed: 9,
                delay: 0,
                opacity: 0.35,
                color: '#38bdf8'
            },
            {
                id: 1,
                top: '18%',
                width: '62%',
                speed: 13,
                delay: 2.5,
                opacity: 0.22,
                color: '#0ea5e9'
            },
            {
                id: 2,
                top: '31%',
                width: '48%',
                speed: 8,
                delay: 4.5,
                opacity: 0.40,
                color: '#38bdf8'
            },
            {
                id: 3,
                top: '44%',
                width: '72%',
                speed: 16,
                delay: 1.0,
                opacity: 0.18,
                color: '#7dd3fc'
            },
            {
                id: 4,
                top: '57%',
                width: '35%',
                speed: 11,
                delay: 3.0,
                opacity: 0.30,
                color: '#0ea5e9'
            },
            {
                id: 5,
                top: '68%',
                width: '55%',
                speed: 10,
                delay: 6.5,
                opacity: 0.25,
                color: '#38bdf8'
            },
            {
                id: 6,
                top: '79%',
                width: '28%',
                speed: 14,
                delay: 5.0,
                opacity: 0.20,
                color: '#7dd3fc'
            },
            {
                id: 7,
                top: '90%',
                width: '44%',
                speed: 12,
                delay: 7.5,
                opacity: 0.15,
                color: '#0ea5e9'
            }
        ], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: beams.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animated-beam",
                style: {
                    top: b.top,
                    width: b.width,
                    animationDuration: `${b.speed}s`,
                    animationDelay: `${b.delay}s`,
                    opacity: b.opacity,
                    ['--beam-color']: b.color
                }
            }, b.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1066,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 1064,
        columnNumber: 5
    }, this);
}
/* ── New: Screen Vignette (Terminal Amber / Circuit) ─── */ function ScreenVignetteEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-vignette",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 1086,
        columnNumber: 5
    }, this);
}
/* ── New: Space Meteor Streaks (white/blue for space) ── */ function SpaceMeteorEffect() {
    const meteors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 16
        }, (_, i)=>({
                id: i,
                x: random(0, 80),
                y: random(0, 65),
                delay: random(0, 14),
                duration: random(1.2, 3.0),
                length: random(55, 160),
                opacity: random(0.25, 0.65),
                color: [
                    'rgba(255,255,255,0.85)',
                    'rgba(165,180,252,0.75)',
                    'rgba(147,210,255,0.80)',
                    'rgba(216,220,255,0.70)'
                ][i % 4]
            })), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: meteors.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "meteor-streak",
                style: {
                    left: `${m.x}%`,
                    top: `${m.y}%`,
                    width: m.length,
                    color: m.color,
                    animationDelay: `${m.delay}s`,
                    animationDuration: `${m.duration}s`,
                    opacity: m.opacity
                }
            }, m.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1106,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 1104,
        columnNumber: 5
    }, this);
}
function ThemeEffectsLayer() {
    const { currentScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return null;
    const effect = currentScheme.backgroundEffect;
    const schemeKey = currentScheme.key;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            currentScheme.scanlines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScanlinesEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1137,
                columnNumber: 35
            }, this),
            effect === 'snow' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SnowEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1139,
                columnNumber: 38
            }, this),
            effect === 'stars' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarsEffectStable, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1140,
                columnNumber: 38
            }, this),
            effect === 'leaves' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeavesEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1141,
                columnNumber: 38
            }, this),
            effect === 'petals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PetalsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1142,
                columnNumber: 38
            }, this),
            effect === 'bats' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BatsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1143,
                columnNumber: 38
            }, this),
            effect === 'waves' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WavesEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1144,
                columnNumber: 38
            }, this),
            effect === 'pixels' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PixelsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1145,
                columnNumber: 38
            }, this),
            effect === 'sakura-petals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SakuraPetalsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1147,
                columnNumber: 38
            }, this),
            effect === 'aurora' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuroraEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1148,
                columnNumber: 38
            }, this),
            effect === 'bubbles' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BubblesEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1149,
                columnNumber: 38
            }, this),
            effect === 'orbs' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OrbsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1150,
                columnNumber: 38
            }, this),
            effect === 'embers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EmbersEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1151,
                columnNumber: 38
            }, this),
            effect === 'lightning-rain' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LightningRainEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1152,
                columnNumber: 38
            }, this),
            effect === 'rain' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RainEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1153,
                columnNumber: 38
            }, this),
            effect === 'fog' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FogEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1154,
                columnNumber: 38
            }, this),
            effect === 'field-lines' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FieldLinesEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1155,
                columnNumber: 38
            }, this),
            effect === 'hearts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeartsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1156,
                columnNumber: 38
            }, this),
            effect === 'shamrocks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShamrocksEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1157,
                columnNumber: 38
            }, this),
            effect === 'confetti' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ConfettiEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1158,
                columnNumber: 38
            }, this),
            effect === 'olympic-rings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(OlympicRingsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1159,
                columnNumber: 38
            }, this),
            effect === 'steam' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SteamEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1160,
                columnNumber: 38
            }, this),
            effect === 'data-packets' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataPacketsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1161,
                columnNumber: 38
            }, this),
            effect === 'torch' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TorchEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1162,
                columnNumber: 38
            }, this),
            effect === 'vaporwave-grid' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VaporwaveGridEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1163,
                columnNumber: 38
            }, this),
            effect === 'matrix-rain' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MatrixRainEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1164,
                columnNumber: 38
            }, this),
            effect === 'circuit-pulse' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CircuitPulseEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1165,
                columnNumber: 38
            }, this),
            effect === 'checkered' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckeredEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1166,
                columnNumber: 47
            }, this),
            effect === 'meteor-streaks' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MeteorStreaksEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1167,
                columnNumber: 47
            }, this),
            effect === 'neural-network' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NeuralNetworkEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1168,
                columnNumber: 47
            }, this),
            effect === 'stained-glass-overlay' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StainedGlassEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1169,
                columnNumber: 47
            }, this),
            effect === 'animated-beams' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedBeamsEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1170,
                columnNumber: 47
            }, this),
            schemeKey === 'space' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpaceMeteorEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1173,
                columnNumber: 33
            }, this),
            (schemeKey === 'terminal-amber' || schemeKey === 'circuit') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScreenVignetteEffect, {}, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 1176,
                columnNumber: 71
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/(dashboard)/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/layout/index.js [app-ssr] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DashboardSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DashboardHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeEffectsLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeEffectsLayer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const { Content } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"];
function DashboardLayout({ children }) {
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeEffectsLayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/(dashboard)/layout.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                style: {
                    minHeight: '100vh',
                    position: 'relative',
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        collapsed: collapsed,
                        onCollapse: setCollapsed
                    }, void 0, false, {
                        fileName: "[project]/app/(dashboard)/layout.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$layout$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                        style: {
                            background: 'transparent'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                collapsed: collapsed,
                                onToggle: ()=>setCollapsed(!collapsed)
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/layout.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Content, {
                                style: {
                                    background: 'var(--content-bg)',
                                    minHeight: 'calc(100vh - 64px)',
                                    transition: 'background-color 0.3s ease',
                                    position: 'relative',
                                    zIndex: 2
                                },
                                "data-testid": "main-content",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/app/(dashboard)/layout.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(dashboard)/layout.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(dashboard)/layout.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(dashboard)/layout.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4b71b8a9._.js.map