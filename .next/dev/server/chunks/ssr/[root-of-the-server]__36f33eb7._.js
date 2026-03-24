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
'use client';
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
            lineNumber: 103,
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
                lineNumber: 111,
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
                        lineNumber: 128,
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
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 127,
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
                        lineNumber: 141,
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
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            }, dept, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 140,
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
                        lineNumber: 159,
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
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            }, dt, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardSidebar.tsx",
        lineNumber: 126,
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
                    lineNumber: 182,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 181,
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
                            lineNumber: 189,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 189,
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
                            lineNumber: 190,
                            columnNumber: 55
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 190,
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
                            lineNumber: 191,
                            columnNumber: 69
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 191,
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
                            lineNumber: 192,
                            columnNumber: 63
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardSidebar.tsx",
        lineNumber: 180,
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
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-47c60ffea24c6ef2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                                    level: 5,
                                    style: {
                                        margin: 0,
                                        fontSize: 16,
                                        color: 'var(--sidebar-text)'
                                    },
                                    children: "RDM Lighthouse"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardSidebar.tsx",
                                    lineNumber: 221,
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
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DashboardSidebar.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DashboardSidebar.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 211,
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
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 229,
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
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 243,
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
                                        lineNumber: 253,
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
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 250,
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
                                                    lineNumber: 290,
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
                                                    lineNumber: 291,
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
                                                    lineNumber: 293,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DashboardSidebar.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardSidebar.tsx",
                                        lineNumber: 269,
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
                                        lineNumber: 303,
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
                                                    lineNumber: 326,
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
                                                    lineNumber: 327,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DashboardSidebar.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardSidebar.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DashboardSidebar.tsx",
                                lineNumber: 268,
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
                            lineNumber: 337,
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
                            lineNumber: 346,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardSidebar.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardSidebar.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "47c60ffea24c6ef2",
                children: ".ant-layout-sider{background:var(--sidebar-bg)!important}.ant-layout-sider .ant-menu{background:0 0!important}.ant-layout-sider .ant-menu-item{color:var(--sidebar-text)!important;border-radius:8px!important;margin:4px 8px!important;transition:all .2s!important}.ant-layout-sider .ant-menu-item:hover{background:var(--sidebar-hover)!important}.ant-layout-sider .ant-menu-item-selected{background:var(--sidebar-active)!important;color:#fff!important}.ant-layout-sider .ant-menu-item-selected:after{display:none!important}.ant-layout-sider .ant-menu-item .anticon{color:inherit!important}.ant-layout-sider-trigger{background:var(--sidebar-hover)!important;color:var(--sidebar-text)!important}.ant-layout-sider .ant-input-affix-wrapper{background:var(--sidebar-hover)!important;border-color:var(--sidebar-border)!important}.ant-layout-sider .ant-input-affix-wrapper .ant-input{color:var(--sidebar-text)!important;background:0 0!important}.ant-layout-sider .ant-input-affix-wrapper .ant-input::placeholder,.ant-layout-sider .ant-input-affix-wrapper .ant-input-clear-icon{color:var(--sidebar-text-muted)!important}.sidebar-clickable-link{opacity:.85;transition:opacity .2s,color .2s}.sidebar-clickable-link:hover{opacity:1;color:#3b82f6!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DashboardSidebar.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
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
        sidebarActive: 'rgba(59, 130, 246, 0.3)',
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
        sidebarActive: 'rgba(22, 163, 74, 0.3)',
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
        sidebarActive: 'rgba(249, 115, 22, 0.3)',
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
        sidebarActive: 'rgba(99, 102, 241, 0.3)',
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
        sidebarActive: 'rgba(244, 63, 94, 0.3)',
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
        sidebarActive: 'rgba(68, 64, 60, 0.15)',
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
        sidebarActive: 'rgba(96, 165, 250, 0.3)',
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
        sidebarActive: 'rgba(236, 72, 153, 0.3)',
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
        sidebarActive: 'rgba(245, 158, 11, 0.3)',
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
        sidebarActive: 'rgba(217, 119, 6, 0.3)',
        backgroundEffect: 'leaves',
        cardStyle: 'default',
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
        sidebarActive: 'rgba(0, 255, 245, 0.2)',
        backgroundEffect: 'none',
        cardStyle: 'neon',
        scanlines: true,
        glowColor: '#00fff5'
    },
    {
        key: 'space',
        name: 'Space',
        emoji: '🌌',
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
        sidebarActive: 'rgba(124, 58, 237, 0.3)',
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
        sidebarActive: 'rgba(249, 115, 22, 0.3)',
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
        sidebarActive: 'rgba(0, 255, 65, 0.2)',
        backgroundEffect: 'pixels',
        cardStyle: 'neon',
        scanlines: true,
        glowColor: '#00ff41',
        fontOverride: "'Press Start 2P', monospace"
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedMode = localStorage.getItem('colorMode');
        const savedScheme = localStorage.getItem('colorScheme');
        const mode = savedMode && (savedMode === 'light' || savedMode === 'dark') ? savedMode : 'light';
        const scheme = savedScheme && COLOR_SCHEMES.find((s)=>s.key === savedScheme) ? savedScheme : 'ocean-blue';
        setColorMode(mode);
        setColorSchemeState(scheme);
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
    // Use dark antd algorithm when: dark mode is on, OR the theme forces dark bg
    const useDarkAlgorithm = colorMode === 'dark' || currentScheme.forceDark;
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
            lineNumber: 285,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ThemeProvider.tsx",
        lineNumber: 284,
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
    special: 'Special'
};
const CATEGORY_EMOJIS = {
    all: '🎨',
    classic: '🖼️',
    seasonal: '🌿',
    special: '⚡'
};
function DashboardHeader({ collapsed, onToggle }) {
    const { colorMode, colorScheme, toggleColorMode, setColorScheme, currentScheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [themeModalOpen, setThemeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const hasGlow = !!currentScheme.glowColor;
    const hasFont = !!currentScheme.fontOverride;
    const btnStyle = {
        background: 'rgba(255, 255, 255, 0.15)',
        color: 'var(--header-text)'
    };
    const btnHover = (e, hover)=>{
        e.currentTarget.style.background = hover ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)';
    };
    const filteredSchemes = activeCategory === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"] : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"].filter((s)=>s.category === activeCategory);
    const userMenuItems = [
        {
            key: 'toggle-mode',
            icon: colorMode === 'light' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MoonOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonOutlined$3e$__["MoonOutlined"], {}, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 53,
                columnNumber: 37
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SunOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SunOutlined$3e$__["SunOutlined"], {}, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 53,
                columnNumber: 56
            }, this),
            label: colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode',
            onClick: toggleColorMode
        },
        {
            type: 'divider'
        },
        {
            key: 'theme',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BgColorsOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BgColorsOutlined$3e$__["BgColorsOutlined"], {}, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            label: 'Theme',
            onClick: ()=>setThemeModalOpen(true)
        },
        {
            key: 'settings',
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SettingOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SettingOutlined$3e$__["SettingOutlined"], {}, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            label: 'Settings',
            disabled: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            currentScheme.scanlines && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanlines-overlay",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                className: "flex items-center justify-between px-6 sticky top-0 z-50 animate-gradient",
                style: {
                    background: 'var(--header-bg)',
                    borderBottom: 'none',
                    height: 64,
                    padding: '0 24px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
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
                                    lineNumber: 94,
                                    columnNumber: 26
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MenuFoldOutlined$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuFoldOutlined$3e$__["MenuFoldOutlined"], {
                                    style: {
                                        fontSize: 18
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 94,
                                    columnNumber: 76
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardHeader.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                strong: true,
                                className: hasGlow ? 'neon-glow' : '',
                                style: {
                                    fontSize: hasFont ? 11 : 16,
                                    color: hasGlow ? 'var(--glow-color)' : 'var(--header-text)',
                                    fontFamily: hasFont ? 'var(--theme-font)' : undefined,
                                    letterSpacing: hasFont ? '0.04em' : undefined,
                                    lineHeight: hasFont ? '1.6' : undefined
                                },
                                children: "Reference Data Management"
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardHeader.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DashboardHeader.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$dropdown$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dropdown$3e$__["Dropdown"], {
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
                                    lineNumber: 118,
                                    columnNumber: 21
                                }, void 0),
                                style: {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    cursor: 'pointer'
                                },
                                "data-testid": "avatar-user"
                            }, void 0, false, {
                                fileName: "[project]/components/DashboardHeader.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardHeader.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardHeader.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$modal$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                title: "Choose a Theme",
                open: themeModalOpen,
                onCancel: ()=>setThemeModalOpen(false),
                footer: null,
                width: 580,
                "data-testid": "modal-theme-picker",
                styles: {
                    body: {
                        padding: 0
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        minHeight: 340
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: 120,
                                borderRight: '1px solid var(--border-color, #e2e8f0)',
                                paddingTop: 12,
                                paddingBottom: 12,
                                flexShrink: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2
                            },
                            children: [
                                'all',
                                'classic',
                                'seasonal',
                                'special'
                            ].map((cat)=>{
                                const isActive = activeCategory === cat;
                                const count = cat === 'all' ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"].length : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOR_SCHEMES"].filter((s)=>s.category === cat).length;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveCategory(cat),
                                    "data-testid": `button-category-${cat}`,
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 3,
                                        padding: '10px 8px',
                                        margin: '0 8px',
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
                                                fontSize: 18,
                                                lineHeight: 1
                                            },
                                            children: CATEGORY_EMOJIS[cat]
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 175,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 11
                                            },
                                            children: CATEGORY_LABELS[cat]
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: 10,
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
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cat, true, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardHeader.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                overflowY: 'auto',
                                padding: '12px 16px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4
                            },
                            "data-testid": "theme-scheme-list",
                            children: filteredSchemes.map((scheme)=>{
                                const isSelected = colorScheme === scheme.key;
                                const isFlat = scheme.flatHeader || scheme.cardStyle === 'flat';
                                const swatchBg = isFlat ? scheme.gradientStart : `linear-gradient(135deg, ${scheme.gradientStart} 0%, ${scheme.gradientMid} 50%, ${scheme.gradientEnd} 100%)`;
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
                                        padding: '9px 12px',
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
                                                width: 44,
                                                height: 26,
                                                borderRadius: isFlat ? 3 : 5,
                                                background: swatchBg,
                                                flexShrink: 0,
                                                boxShadow: scheme.glowColor ? `0 0 7px ${scheme.glowColor}, 0 2px 5px rgba(0,0,0,0.3)` : '0 2px 5px rgba(0,0,0,0.18)',
                                                border: scheme.cardStyle === 'neon' ? `1px solid ${scheme.primaryAccent}` : undefined
                                            },
                                            "data-testid": `swatch-${scheme.key}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader.tsx",
                                            lineNumber: 224,
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
                                            lineNumber: 238,
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
                                            lineNumber: 242,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, scheme.key, true, {
                                    fileName: "[project]/components/DashboardHeader.tsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/DashboardHeader.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DashboardHeader.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DashboardHeader.tsx",
                lineNumber: 127,
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
function SnowEffect() {
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
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function StarsEffect() {
    const particles = useParticles(110);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer",
        "aria-hidden": "true",
        children: particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "star",
                style: {
                    left: `${p.x}%`,
                    top: `${random(0, 100)}%`,
                    width: p.size * 0.35,
                    height: p.size * 0.35,
                    animationDelay: `${p.delay}s`,
                    animationDuration: `${p.duration * 0.6}s`,
                    opacity: p.opacity
                }
            }, p.id, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 59,
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
                lineNumber: 95,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 93,
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
                lineNumber: 118,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 116,
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
                lineNumber: 141,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 139,
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
                lineNumber: 182,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 180,
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
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wave wave-2"
            }, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wave wave-3"
            }, void 0, false, {
                fileName: "[project]/components/ThemeEffectsLayer.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
function PixelsEffect() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-effect-layer pixels-layer",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 213,
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
    if (effect === 'snow') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SnowEffect, {}, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 226,
        columnNumber: 33
    }, this);
    if (effect === 'stars') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarsEffectStable, {}, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 227,
        columnNumber: 34
    }, this);
    if (effect === 'leaves') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LeavesEffect, {}, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 228,
        columnNumber: 35
    }, this);
    if (effect === 'petals') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PetalsEffect, {}, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 229,
        columnNumber: 35
    }, this);
    if (effect === 'bats') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BatsEffect, {}, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 230,
        columnNumber: 33
    }, this);
    if (effect === 'waves') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WavesEffect, {}, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 231,
        columnNumber: 34
    }, this);
    if (effect === 'pixels') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PixelsEffect, {}, void 0, false, {
        fileName: "[project]/components/ThemeEffectsLayer.tsx",
        lineNumber: 232,
        columnNumber: 35
    }, this);
    return null;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__36f33eb7._.js.map