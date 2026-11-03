import { i as __toESM } from "../_runtime.mjs";
import { t as CHAPTERS } from "./chapters-CuS4xTBx.mjs";
import { K as require_jsx_runtime, b as Link, g as Outlet, p as useRouterState, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useBookStore } from "./store-Cf3NPyan.mjs";
import { n as cn, t as ZonePicker } from "./zone-picker-DSFBzNLQ.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-DoqcJHzZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TableOfContents({ current, onNavigate }) {
	const read = useBookStore((s) => s.read);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Chapters",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "px-1 text-xs font-medium tracking-wide text-muted uppercase",
			children: "Contents"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "mt-3 flex flex-col gap-0.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/book",
				onClick: onNavigate,
				className: cn("flex min-h-11 items-center rounded-md px-3 text-sm transition-colors duration-150", current === void 0 ? "bg-paper-deep text-ink" : "text-ink-soft hover:bg-paper-deep/70 hover:text-ink"),
				children: "The book"
			}) }), CHAPTERS.map((ch) => {
				const done = read.includes(ch.slug);
				const active = current === ch.slug;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/book/$slug",
					params: { slug: ch.slug },
					onClick: onNavigate,
					className: cn("flex min-h-11 items-center gap-3 rounded-md px-3 text-sm transition-colors duration-150", active ? "bg-paper-deep text-ink" : "text-ink-soft hover:bg-paper-deep/70 hover:text-ink"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("w-6 font-display text-xs tabular-nums", active ? "text-tomato" : "text-muted"),
							children: ch.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 leading-snug",
							children: ch.title
						}),
						done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "size-1.5 rounded-full bg-tomato",
							"aria-hidden": true
						}) : null
					]
				}) }, ch.slug);
			})]
		})]
	});
}
function BookShell() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const slug = pathname.startsWith("/book/") ? pathname.slice(6) : void 0;
	const chapter = CHAPTERS.find((c) => c.slug === slug);
	const zone = useBookStore((s) => s.zone);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-6xl items-center gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "flex size-11 items-center justify-center rounded-md text-ink lg:hidden",
							"aria-label": open ? "Close contents" : "Open contents",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-5",
								strokeWidth: 1.75
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-base font-medium tracking-tight text-ink",
							children: "The Tomato Book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden truncate text-sm text-muted sm:block",
							children: chapter ? chapter.title : "Contents"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto rounded-md bg-paper-deep px-2.5 py-1 font-display text-xs font-medium tabular-nums text-sage",
							children: ["Zone ", zone]
						})
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-ink/30",
					"aria-label": "Close contents",
					onClick: () => setOpen(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "absolute top-0 left-0 flex h-full w-80 max-w-[88vw] flex-col gap-6 overflow-y-auto bg-paper p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, {
						current: slug,
						onNavigate: () => setOpen(false)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 px-1 text-xs font-medium tracking-wide text-muted uppercase",
						children: "Your zone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZonePicker, { compact: true })] })]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl lg:grid-cols-[16.5rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "sticky top-14 hidden h-[calc(100dvh-3.5rem)] overflow-y-auto border-r border-line p-6 lg:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { current: slug }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2 px-1 text-xs font-medium tracking-wide text-muted uppercase",
							children: "Your zone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZonePicker, { compact: true })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			})
		]
	});
}
var SplitComponent = BookShell;
//#endregion
export { SplitComponent as component };
