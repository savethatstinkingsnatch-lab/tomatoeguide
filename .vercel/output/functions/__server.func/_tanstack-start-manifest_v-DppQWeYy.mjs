//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-DppQWeYy.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: ["/", "/book"],
		preloads: ["/assets/index-CQSujLXD.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-CQSujLXD.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-blr8iXza.js",
			"/assets/arrow-right-9lfagp6u.js",
			"/assets/zone-picker-DZTrYjW3.js",
			"/assets/store-eSTd2Dco.js"
		]
	},
	"/book": {
		filePath: "/workspace/src/routes/book.tsx",
		children: ["/book/$slug", "/book/"],
		preloads: [
			"/assets/book-BXFPFaSj.js",
			"/assets/chapters-CmPqMHc3.js",
			"/assets/zone-picker-DZTrYjW3.js",
			"/assets/store-eSTd2Dco.js"
		]
	},
	"/book/$slug": {
		filePath: "/workspace/src/routes/book.$slug.tsx",
		children: void 0,
		preloads: ["/assets/book._slug-tIIYGdBn.js", "/assets/arrow-right-9lfagp6u.js"]
	},
	"/book/": {
		filePath: "/workspace/src/routes/book.index.tsx",
		children: void 0,
		preloads: ["/assets/book.index-DaB84rY3.js"]
	}
} });
//#endregion
export { tsrStartManifest };
