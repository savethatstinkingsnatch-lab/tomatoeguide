import { t as CHAPTERS } from "./chapters-CuS4xTBx.mjs";
import { K as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useBookStore, r as ZONES } from "./store-Cf3NPyan.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book.index-DboxIsRC.js
var import_jsx_runtime = require_jsx_runtime();
function Contents() {
	const zone = useBookStore((s) => s.zone);
	const info = ZONES[zone];
	const read = useBookStore((s) => s.read);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "px-5 py-10 sm:px-10 sm:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-tomato uppercase",
					children: "Contents"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl",
					children: "From seed to harvest"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-ink-soft",
					children: "A practical book for one crop. Set your zone, then read in order — or skip to companions, seed saving, or the harvest week you are in."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: [
						"You are in ",
						info.label,
						". Start indoors ",
						info.startIndoors,
						", transplant ",
						info.transplant,
						". Harvest ",
						info.harvest,
						"."
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-10 grid gap-4 sm:grid-cols-2",
			children: CHAPTERS.map((ch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/book/$slug",
				params: { slug: ch.slug },
				className: "group flex h-full flex-col overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)] transition-transform duration-150 ease-out active:scale-[0.99]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ch.image,
					alt: "",
					className: "art h-36 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-1 flex-col p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xs tabular-nums text-tomato",
							children: [ch.number, read.includes(ch.slug) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-muted",
								children: "Read"
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-xl font-medium text-ink group-hover:text-tomato",
							children: ch.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-ink-soft",
							children: ch.dek
						})
					]
				})]
			}) }, ch.slug))
		})]
	});
}
//#endregion
export { Contents as component };
