import { K as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useBookStore, i as ZONE_IDS, r as ZONES } from "./store-Cf3NPyan.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/zone-picker-DSFBzNLQ.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ZonePicker({ compact = false }) {
	const zone = useBookStore((s) => s.zone);
	const setZone = useBookStore((s) => s.setZone);
	const info = ZONES[zone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col", compact ? "gap-3" : "gap-5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5",
			children: ZONE_IDS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneChip, {
				id,
				selected: id === zone,
				onSelect: setZone,
				compact
			}, id))
		}), !compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-sm font-medium tracking-wide text-tomato",
					children: [info.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 text-muted",
						children: ["Winter min ", info.tempRange]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-xl font-medium text-ink",
					children: info.seasonDays
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-relaxed text-ink-soft",
					children: info.regions
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Last spring frost",
							value: info.lastFrost
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "First fall frost",
							value: info.firstFrost
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Start seeds indoors",
							value: info.startIndoors
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Transplant outdoors",
							value: info.transplant
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Harvest",
							value: info.harvest
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							label: "Varieties that finish",
							value: info.varietyAdvice
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 border-t border-line pt-4 text-sm leading-relaxed text-ink-soft",
					children: info.notes
				})
			]
		}) : null]
	});
}
function ZoneChip({ id, selected, onSelect, compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => onSelect(id),
		"aria-pressed": selected,
		className: cn("min-h-11 min-w-11 rounded-md px-2.5 font-display text-sm font-medium tabular-nums transition-[background-color,color,transform] duration-150 ease-out active:scale-[0.96]", compact ? "min-h-10 min-w-10 text-xs" : "min-h-11", selected ? "bg-tomato text-paper" : "bg-paper-deep text-ink-soft hover:bg-line hover:text-ink"),
		children: id
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs font-medium tracking-wide text-muted uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-sm leading-snug text-ink",
		children: value
	})] });
}
//#endregion
export { cn as n, ZonePicker as t };
