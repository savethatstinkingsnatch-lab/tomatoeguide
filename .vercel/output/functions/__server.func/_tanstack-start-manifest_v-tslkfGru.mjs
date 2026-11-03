//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-tslkfGru.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: ["/", "/book"],
		preloads: ["/assets/index-SBtEcPhm.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-SBtEcPhm.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-lnIJq0ya.js",
			"/assets/arrow-right-CFc-Y0Fl.js",
			"/assets/zone-picker-B83kvkC7.js",
			"/assets/store-BZlyUPIT.js"
		]
	},
	"/book": {
		filePath: "/workspace/src/routes/book.tsx",
		children: ["/book/$slug", "/book/"],
		preloads: [
			"/assets/book-kGOumsXR.js",
			"/assets/chapters-e8huBLIg.js",
			"/assets/zone-picker-B83kvkC7.js",
			"/assets/store-BZlyUPIT.js"
		]
	},
	"/book/$slug": {
		filePath: "/workspace/src/routes/book.$slug.tsx",
		children: void 0,
		preloads: ["/assets/book._slug-Dpi_1b-u.js", "/assets/arrow-right-CFc-Y0Fl.js"]
	},
	"/book/": {
		filePath: "/workspace/src/routes/book.index.tsx",
		children: void 0,
		preloads: ["/assets/book.index-BkmTVVHm.js"]
	}
} });
//#endregion
export { tsrStartManifest };
