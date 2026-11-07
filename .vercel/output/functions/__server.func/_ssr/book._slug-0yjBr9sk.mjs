import { i as __toESM } from "../_runtime.mjs";
import { n as adjacentChapters, r as chapterBySlug } from "./chapters-B9kfkuqD.mjs";
import { K as require_jsx_runtime, b as Link, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useBookStore, n as PHASE_LABEL, r as ZONES, t as MONTHS } from "./store-Cf3NPyan.mjs";
import { n as cn, t as ZonePicker } from "./zone-picker-DSFBzNLQ.mjs";
import { a as ArrowLeft, i as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-DM7mzhnf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book._slug-0yjBr9sk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SeasonCalendar() {
	const zone = useBookStore((s) => s.zone);
	const info = ZONES[zone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-muted uppercase",
					children: "Season at a glance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-1 font-display text-lg font-medium text-ink",
					children: [
						"Zone ",
						zone,
						" tomato year"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-xs text-right text-sm text-ink-soft",
					children: info.harvestAdvice
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-4 gap-1.5 sm:grid-cols-6 lg:grid-cols-12",
				children: MONTHS.map((month, i) => {
					const phase = info.months[i];
					const style = PHASE_LABEL[phase];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("month-cell flex min-h-16 flex-col items-center justify-center rounded-md px-1 py-2 text-center", style.className),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xs font-medium",
							children: month
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 text-xs leading-tight opacity-90",
							children: style.label
						})]
					}, month);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted",
				children: Object.entries(PHASE_LABEL).map(([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("size-2.5 rounded-sm", value.className),
						"aria-hidden": true
					}), value.label]
				}, key))
			})
		]
	});
}
var COMPANIONS = [
	{
		id: "basil",
		name: "Basil",
		latin: "Ocimum basilicum",
		kind: "help",
		role: "Defense priming",
		why: "Basil volatiles help tomato plants switch on wound-response genes faster after pest attack. They also share the same sun and water rhythm, so the pairing is easy to manage.",
		how: "Plant one basil for every tomato, 12 inches off the stem, on the sunniest side. Let some plants flower to feed hoverflies and bees.",
		evidence: "A 2024 peer-reviewed study found basil volatiles primed tomato defense signaling. The old claim that basil sweetens fruit has not held up in tasting trials.",
		image: "/images/basil-marigold.jpg"
	},
	{
		id: "marigold",
		name: "French marigold",
		latin: "Tagetes patula",
		kind: "help",
		role: "Nematodes and whitefly",
		why: "Roots produce alpha-terthienyl, which is toxic to root-knot nematodes. The scent also confuses whiteflies. This is one of the few companion claims with field data behind it.",
		how: "For nematodes, grow a dense marigold cover the season before tomatoes, then turn it in. Same-year edging still helps with flying pests. Use French types, not African.",
		evidence: "University trials show real nematode suppression when marigolds are grown as a prior cover crop. Interplanting the same season is weaker, but not wasted.",
		image: "/images/basil-marigold.jpg"
	},
	{
		id: "nasturtium",
		name: "Nasturtium",
		latin: "Tropaeolum majus",
		kind: "help",
		role: "Trap crop",
		why: "Aphids and some beetles prefer nasturtium. They pull pressure off the tomatoes and the flowers feed pollinators at ground level.",
		how: "Trail them along the bed edge, not through the tomato canopy. Pull heavily infested stems so the trap does not become a nursery.",
		evidence: "Classic trap-crop practice. Works when you inspect and remove pest-loaded growth, not when you ignore the plants.",
		image: "/images/nasturtium.jpg"
	},
	{
		id: "borage",
		name: "Borage",
		latin: "Borago officinalis",
		kind: "help",
		role: "Pollinators",
		why: "Blue flowers are a magnet for bees. Anecdote says it deters tomato hornworm moths; the reliable benefit is more pollinator traffic in the bed.",
		how: "Tuck one or two plants at the ends of a row. They self-sow. Cut back if they shade young tomatoes.",
		evidence: "Strong as an insectary plant. Hornworm-repellent claims are traditional, not well tested."
	},
	{
		id: "alliums",
		name: "Garlic, chives, onions",
		latin: "Allium spp.",
		kind: "help",
		role: "Edge planting",
		why: "Sulfur compounds may confuse aphids and spider mites. They occupy a different root zone, so they do not fight tomatoes for space.",
		how: "Line the bed with chives or tuck garlic between plants. Do not crowd the tomato stem.",
		evidence: "Garden-scale pest control is modest. Harmless, useful as a living border, not a silver bullet."
	},
	{
		id: "carrot",
		name: "Carrots",
		latin: "Daucus carota",
		kind: "help",
		role: "Space and soil",
		why: "Carrots root deeper and finish before tomatoes fill the bed. The pairing uses vertical soil space without much competition.",
		how: "Sow carrots between newly transplanted tomatoes. Harvest the roots as the tomato canopy closes.",
		evidence: "A space-efficiency pairing more than a chemical one. Works in small gardens."
	},
	{
		id: "lettuce",
		name: "Lettuce",
		latin: "Lactuca sativa",
		kind: "help",
		role: "Living mulch",
		why: "Lettuce shades the soil early, keeps weeds down, and is cut before tomatoes need the room. Cool-season leaves love the later shade of the vines.",
		how: "Transplant lettuce the same week as tomatoes. Harvest as soon as heads size up.",
		evidence: "Practical intercropping. No special chemistry — just good timing."
	},
	{
		id: "herbs",
		name: "Dill, calendula, parsley",
		latin: "Insectary herbs",
		kind: "help",
		role: "Beneficial insects",
		why: "Umbel and daisy flowers feed parasitic wasps and hoverflies that hunt hornworms and aphids.",
		how: "Grow a small insectary patch at the bed’s end. Use young dill; pull it before it gets huge.",
		evidence: "Flowering insectaries are well supported. Mature dill can inhibit tomatoes, so keep it young or at a distance."
	},
	{
		id: "potato",
		name: "Potatoes",
		latin: "Solanum tuberosum",
		kind: "avoid",
		role: "Shared disease",
		why: "Same family, same blight pathogens, same nematodes. A connected host population lets early and late blight move faster.",
		how: "Separate beds, and do not follow tomatoes with potatoes in rotation — wait three to four years between nightshades.",
		evidence: "The strongest “do not pair” rule. Not chemistry. Epidemiology."
	},
	{
		id: "fennel",
		name: "Fennel",
		latin: "Foeniculum vulgare",
		kind: "avoid",
		role: "Allelopathy",
		why: "Fennel roots release compounds that stunt nearby vegetables, tomatoes included. It is a poor neighbor in any mixed bed.",
		how: "Grow fennel in its own pot or a distant corner. Do not let it seed through the tomato patch.",
		evidence: "Documented allelopathy. One of two companions that do real chemical harm."
	},
	{
		id: "walnut",
		name: "Black walnut",
		latin: "Juglans nigra",
		kind: "avoid",
		role: "Juglone toxicity",
		why: "Roots, leaves, and hulls leak juglone. Tomatoes and other nightshades are especially sensitive. Wilt is often fatal.",
		how: "Keep tomatoes 50–80 feet from a mature trunk. Do not compost walnut leaves into tomato beds.",
		evidence: "The clearest chemical antagonist. Extension services treat this as settled."
	},
	{
		id: "corn",
		name: "Corn",
		latin: "Zea mays",
		kind: "avoid",
		role: "Shared pest",
		why: "Tomato fruitworm and corn earworm are the same moth (Helicoverpa zea). Corn also throws shade on plants that want full sun.",
		how: "Plant in separate parts of the garden. If you grow both, time them so peak moth flights are not feeding two crops at once.",
		evidence: "Shared pest plus competition. Keep them apart."
	},
	{
		id: "brassica",
		name: "Cabbage family",
		latin: "Brassica spp.",
		kind: "avoid",
		role: "Competition",
		why: "Broccoli, cabbage, kale, and cauliflower are heavy feeders and can slow tomatoes when packed in the same bed. They also pull in their own aphid complexes.",
		how: "Give brassicas their own row, or grow them in the cool season and tomatoes in the warm one.",
		evidence: "Mostly competition, not a toxin. Space or season-separate them."
	}
];
function CompanionsPanel() {
	const [tab, setTab] = (0, import_react.useState)("help");
	const list = COMPANIONS.filter((c) => c.kind === tab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-1 rounded-lg bg-paper-deep p-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
			active: tab === "help",
			onClick: () => setTab("help"),
			children: "Plant with tomatoes"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabButton, {
			active: tab === "avoid",
			onClick: () => setTab("avoid"),
			children: "Keep apart"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-5 grid gap-4 sm:grid-cols-2",
		children: list.map((plant) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-col overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]",
			children: [plant.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: plant.image,
				alt: "",
				className: "art h-36 w-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-20 items-end bg-paper-deep px-5 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-3xl text-sage/40",
					children: plant.name[0]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col gap-2 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-wide text-tomato uppercase",
						children: plant.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-medium text-ink",
						children: plant.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm italic text-muted",
						children: plant.latin
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-ink-soft",
						children: plant.why
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm leading-relaxed text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "In the bed. "
						}), plant.how]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto border-t border-line pt-3 text-xs leading-relaxed text-muted",
						children: plant.evidence
					})
				]
			})]
		}, plant.id))
	})] });
}
function TabButton({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-11 flex-1 rounded-md px-3 font-display text-sm font-medium transition-colors duration-150", active ? "bg-raised text-ink shadow-[var(--shadow-border)]" : "text-ink-soft"),
		children
	});
}
var VARIETIES = [
	{
		id: "stupice",
		name: "Stupice",
		type: "Early slicer",
		habit: "Indeterminate",
		days: "55–65",
		bestZones: [
			3,
			4,
			5
		],
		note: "Czech heirloom. Small red fruit that ripens when nothing else will. The cold-climate insurance plant."
	},
	{
		id: "sungold",
		name: "Sun Gold",
		type: "Cherry",
		habit: "Indeterminate",
		days: "57–65",
		bestZones: [
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11
		],
		note: "The cherry almost everyone should grow. Sets in cool weather and heat. Hybrid. Great to grow, but saved seed will not grow true."
	},
	{
		id: "early-girl",
		name: "Early Girl",
		type: "Slicer",
		habit: "Indeterminate",
		days: "50–62",
		bestZones: [
			3,
			4,
			5,
			6
		],
		note: "Reliable first ripe fruit. Plant it beside a slower heirloom so you eat tomatoes in June and September. Hybrid. Great to grow, but saved seed will not grow true."
	},
	{
		id: "celebrity",
		name: "Celebrity",
		type: "Slicer",
		habit: "Semi-determinate",
		days: "70–75",
		bestZones: [
			4,
			5,
			6,
			7
		],
		note: "Disease package and a bush habit. Good for cages, short seasons, and gardeners who do not want to prune."
	},
	{
		id: "roma",
		name: "Roma",
		type: "Paste",
		habit: "Determinate",
		days: "75–80",
		bestZones: [
			5,
			6,
			7,
			8
		],
		note: "The classic sauce tomato. Open-pollinated, so you can save the seed."
	},
	{
		id: "san-marzano",
		name: "San Marzano",
		type: "Paste",
		habit: "Indeterminate",
		days: "80–90",
		bestZones: [
			6,
			7,
			8,
			9
		],
		note: "Long, rich sauce tomato. Needs a long warm season and a stake. Open-pollinated."
	},
	{
		id: "brandywine",
		name: "Brandywine",
		type: "Beefsteak",
		habit: "Indeterminate",
		days: "80–90",
		bestZones: [
			5,
			6,
			7,
			8
		],
		note: "The flavor people mean when they say heirloom. Needs a long, even season and a strong stake. Open-pollinated. It is a potato-leaf type that crosses more easily, so give it extra space if you save seed."
	},
	{
		id: "cherokee",
		name: "Cherokee Purple",
		type: "Heirloom slicer",
		habit: "Indeterminate",
		days: "80–85",
		bestZones: [
			5,
			6,
			7,
			8
		],
		note: "Dusky rose flesh, rich and smoky. Crack-prone if water swings. Save seed — it is open-pollinated."
	},
	{
		id: "heatmaster",
		name: "Heatmaster",
		type: "Heat-set slicer",
		habit: "Determinate",
		days: "75",
		bestZones: [
			8,
			9,
			10,
			11
		],
		note: "Bred to set fruit when nights stay hot. Pair with Solar Fire or Phoenix in zones 9–11. Hybrid. Do not save seed. Solar Fire and Phoenix are hybrids too."
	},
	{
		id: "everglades",
		name: "Everglades",
		type: "Wild cherry",
		habit: "Indeterminate",
		days: "50–60",
		bestZones: [
			9,
			10,
			11
		],
		note: "Tiny, intense fruit that keeps going in humidity. A tropical workhorse, not a slicing tomato. Open-pollinated. Wild cherry types cross easily. Keep them 25 feet or more from other tomatoes if you save seed."
	}
];
function varietiesForZone(zone) {
	const match = VARIETIES.filter((v) => v.bestZones.includes(zone));
	return match.length ? match : VARIETIES;
}
function VarietiesPanel() {
	const zone = useBookStore((s) => s.zone);
	const list = varietiesForZone(zone);
	const advice = ZONES[zone].varietyAdvice;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mb-4 rounded-lg bg-sage/10 px-4 py-3 text-sm leading-relaxed text-leaf",
		children: [
			"For zone ",
			zone,
			": ",
			advice
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "border-b border-line text-xs tracking-wide text-muted uppercase",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: "Variety"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "hidden px-4 py-3 font-medium sm:table-cell",
						children: "Type"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: "Days"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "hidden px-4 py-3 font-medium md:table-cell",
						children: "Habit"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-line last:border-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-medium text-ink",
								children: v.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs leading-relaxed text-ink-soft",
								children: v.note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted sm:hidden",
								children: [
									v.type,
									" · ",
									v.habit
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "hidden px-4 py-3 text-ink-soft sm:table-cell",
						children: v.type
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 tabular-nums text-ink",
						children: v.days
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "hidden px-4 py-3 text-ink-soft md:table-cell",
						children: v.habit
					})
				]
			}, v.id)) })]
		})
	})] });
}
var SEED_STEPS = [
	{
		title: "Choose the right fruit",
		body: "Save seed only from open-pollinated or heirloom plants — not F1 hybrids, which will not come true. Pick the best fruit on the healthiest plant: fully ripe, even overripe, never green. One excellent tomato is better than a bowl of average ones."
	},
	{
		title: "Scoop the gel",
		body: "Cut the tomato across the equator, not stem to blossom. Squeeze or scoop the seed gel into a clean jar. Keep varieties in separate jars. Add a splash of water — about a quarter cup — so the mash can ferment."
	},
	{
		title: "Ferment two to three days",
		body: "Cover loosely with a cloth. Set the jar at room temperature, 70–80°F, out of sun and away from food, because it smells and draws fruit flies. Stir once a day. A thin film of mold is normal; it is the gel coat breaking down, and it reduces some seed-borne diseases. Stop at two to three days. Longer fermentation cuts germination. Wash your hands after. Only save seed from healthy plants. Some tomato diseases travel inside the seed."
	},
	{
		title: "Rinse until the water runs clear",
		body: "Add water, let viable seeds sink, and pour off mold, pulp, and floaters. Repeat. Rub remaining pulp in a strainer under a slow tap. Good seed feels gritty, not slimy."
	},
	{
		title: "Dry thoroughly",
		body: "Spread seeds in a single layer on a ceramic plate, coffee filter, or screen — not paper towel, which glues itself to wet seed. Dry 7–14 days in moving air, away from sun and ovens. Stir daily. They are done when they snap, not bend."
	},
	{
		title: "Label at once",
		body: "Variety, year, and where the plant grew. You will not remember in March. Use a pencil on kraft envelopes; ink can bleed if a jar sweats."
	}
];
var STORAGE_RULES = [
	{
		title: "Cool",
		detail: "A spare refrigerator (about 40°F) is ideal. A dark closet beats a kitchen counter. Avoid garages and sheds, where temperature swings."
	},
	{
		title: "Dry",
		detail: "Target well under 50% relative humidity. Put envelopes inside an airtight jar with a silica gel packet. Incomplete drying is the usual reason seed molds in storage."
	},
	{
		title: "Dark",
		detail: "Light ages seed. Opaque jars or a closed box in the fridge keep germination higher for longer."
	},
	{
		title: "Stable",
		detail: "Do not freeze unless seed is bone-dry and vacuum-sealed; condensation on thaw can ruin a batch. Do not store in the door of the fridge, where it warms every time you open it."
	}
];
function SeedSteps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "flex flex-col gap-4",
		children: SEED_STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "grid grid-cols-[auto_1fr] gap-4 rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl font-medium tabular-nums text-tomato",
				children: String(i + 1).padStart(2, "0")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-medium text-ink",
				children: step.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-ink-soft",
				children: step.body
			})] })]
		}, step.title))
	});
}
function StorageGuide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: STORAGE_RULES.map((rule) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-medium text-tomato",
				children: rule.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-ink-soft",
				children: rule.detail
			})]
		}, rule.title))
	});
}
function ChapterBody({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "prose-book flex flex-col gap-6",
		children: blocks.map((block, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, { block }, i))
	});
}
function BlockView({ block }) {
	const zone = useBookStore((s) => s.zone);
	const info = ZONES[zone];
	switch (block.type) {
		case "p": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-base leading-relaxed text-ink-soft",
			children: block.text
		});
		case "h2": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-4 font-display text-2xl font-medium tracking-tight text-ink",
			children: block.text
		});
		case "h3": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-xl font-medium text-ink",
			children: block.text
		});
		case "quote": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
			className: "border-l-2 border-tomato pl-5 font-display text-xl leading-snug font-medium text-ink",
			children: block.text
		});
		case "callout": {
			const zoneBody = block.tone === "tip" && block.title.includes("harvest window") ? `${info.harvestAdvice} ${block.body}` : block.body;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: block.tone === "warn" ? "rounded-xl border border-tomato/20 bg-tomato/10 p-5" : "rounded-xl bg-sage/10 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: block.tone === "warn" ? "text-xs font-medium tracking-wide text-tomato uppercase" : "text-xs font-medium tracking-wide text-sage uppercase",
						children: block.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-lg font-medium text-ink",
						children: block.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink-soft",
						children: zoneBody
					})
				]
			});
		}
		case "steps": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "flex flex-col gap-4",
			children: block.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid grid-cols-[auto_1fr] gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl font-medium tabular-nums text-tomato",
					children: String(i + 1).padStart(2, "0")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-medium text-ink",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-base leading-relaxed text-ink-soft",
					children: item.body
				})] })]
			}, item.title))
		});
		case "dl": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
			className: "flex flex-col divide-y divide-line overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]",
			children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-display font-medium text-ink",
					children: item.term
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "text-sm leading-relaxed text-ink-soft",
					children: item.def
				})]
			}, item.term))
		});
		case "figure": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "overflow-hidden rounded-xl bg-raised shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: block.src,
				alt: block.alt,
				className: "art w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "px-5 py-3 text-sm leading-relaxed text-muted",
				children: block.caption
			})]
		});
		case "zonePanel": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZonePicker, {});
		case "calendar": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeasonCalendar, {});
		case "companions": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionsPanel, {});
		case "varieties": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VarietiesPanel, {});
		case "seedSteps": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeedSteps, {});
		case "storageGuide": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StorageGuide, {});
	}
}
function ChapterPage() {
	const { slug } = Route.useParams();
	const chapter = chapterBySlug(slug);
	const markRead = useBookStore((s) => s.markRead);
	const zone = useBookStore((s) => s.zone);
	const info = ZONES[zone];
	(0, import_react.useEffect)(() => {
		if (chapter) markRead(chapter.slug);
	}, [chapter, markRead]);
	if (!chapter) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-medium text-ink",
			children: "That chapter is not in this book"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/book",
			className: "mt-4 inline-flex min-h-11 items-center text-tomato",
			children: "Return to contents"
		})]
	});
	const { prev, next } = adjacentChapters(chapter.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: chapter.image,
				alt: chapter.imageAlt,
				className: "h-56 w-full object-cover sm:h-72 lg:h-80"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "sr-only",
				children: chapter.imageAlt
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-5 pt-8 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-xs font-medium tracking-widest text-tomato uppercase",
					children: [
						"Chapter ",
						chapter.number,
						" · ",
						chapter.kicker
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl",
					children: chapter.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-ink-soft",
					children: chapter.dek
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 rounded-md bg-paper-deep px-3 py-2 text-sm text-ink-soft",
					children: [
						"Zone ",
						zone,
						": transplant ",
						info.transplant,
						". Harvest ",
						info.harvest,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterBody, { blocks: chapter.blocks })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-14 flex items-stretch gap-3 border-t border-line pt-8",
					"aria-label": "Adjacent chapters",
					children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book/$slug",
						params: { slug: prev.slug },
						className: "flex min-h-14 min-w-0 flex-1 items-center gap-2 rounded-md bg-paper-deep px-4 py-3 transition-transform duration-150 ease-out active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-4 shrink-0 text-tomato",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Previous"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-display text-sm font-medium text-ink",
								children: prev.title
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/book/$slug",
						params: { slug: next.slug },
						className: "flex min-h-14 min-w-0 flex-1 items-center justify-end gap-2 rounded-md bg-paper-deep px-4 py-3 text-right transition-transform duration-150 ease-out active:scale-[0.96]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Next"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block truncate font-display text-sm font-medium text-ink",
								children: next.title
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4 shrink-0 text-tomato",
							strokeWidth: 1.75
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/book",
						className: "flex min-h-14 flex-1 items-center justify-end rounded-md bg-tomato px-4 py-3 font-display text-sm font-medium text-paper",
						children: "Back to contents"
					})]
				})
			]
		})]
	});
}
//#endregion
export { ChapterPage as component };
