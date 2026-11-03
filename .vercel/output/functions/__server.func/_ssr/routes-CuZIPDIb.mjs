import { K as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useBookStore } from "./store-Cf3NPyan.mjs";
import { t as ZonePicker } from "./zone-picker-DSFBzNLQ.mjs";
import { i as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CuZIPDIb.js
var import_jsx_runtime = require_jsx_runtime();
function Cover() {
	const zone = useBookStore((s) => s.zone);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-dvh max-w-6xl lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "order-2 flex flex-col justify-center px-6 py-10 sm:px-10 lg:order-1 lg:px-14 lg:py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in max-w-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-tomato uppercase",
							children: "A garden companion"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-5xl leading-[0.95] font-medium tracking-tight text-ink sm:text-6xl",
							children: "The Tomato Book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-lg text-ink-soft",
							children: "by Jessica McIntosh"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg leading-relaxed text-ink-soft",
							children: "From seed tray to frost — how to grow tomatoes, pick the fruit, save the seed, and plant the neighbors that earn their keep."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "Eleven chapters. USDA zones 3–11. Your season, your dates."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/book/$slug",
								params: { slug: "begin" },
								className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-tomato px-5 font-display text-sm font-medium text-paper transition-transform duration-150 ease-out active:scale-[0.96]",
								children: ["Begin reading", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4",
									strokeWidth: 1.75
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/book",
								className: "inline-flex min-h-12 items-center justify-center rounded-md bg-paper-deep px-5 font-display text-sm font-medium text-ink transition-transform duration-150 ease-out active:scale-[0.96]",
								children: "Contents"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3 text-xs font-medium tracking-wide text-muted uppercase",
						children: ["Set your USDA zone", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-2 normal-case",
							children: ["currently ", zone]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZonePicker, { compact: true })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative order-1 h-64 sm:h-80 lg:order-2 lg:h-auto lg:min-h-dvh",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/cover.jpg",
					alt: "Ripe heirloom tomatoes on the vine in late-afternoon garden light",
					className: "absolute inset-0 h-full w-full object-cover"
				})
			})]
		})
	});
}
//#endregion
export { Cover as component };
