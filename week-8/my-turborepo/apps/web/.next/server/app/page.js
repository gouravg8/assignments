const CHUNK_PUBLIC_PATH = "server/app/page.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/08b5e_987941._.js");
runtime.loadChunk("server/chunks/ssr/[project]__d5bf20._.js");
runtime.getOrInstantiateRuntimeModule("[project]/apps/web/.next-internal/server/app/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { COMPONENT_0 => \"[project]/apps/web/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/apps/web/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
