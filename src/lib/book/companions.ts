import type { Companion } from "./types";

export const COMPANIONS: Companion[] = [
  {
    id: "basil",
    name: "Basil",
    latin: "Ocimum basilicum",
    kind: "help",
    role: "Defense priming",
    why: "Basil volatiles help tomato plants switch on wound-response genes faster after pest attack. They also share the same sun and water rhythm, so the pairing is easy to manage.",
    how: "Plant one basil for every tomato, 12 inches off the stem, on the sunniest side. Let some plants flower to feed hoverflies and bees.",
    evidence:
      "A 2024 peer-reviewed study found basil volatiles primed tomato defense signaling. The old claim that basil sweetens fruit has not held up in tasting trials.",
    image: "/images/basil-marigold.jpg",
  },
  {
    id: "marigold",
    name: "French marigold",
    latin: "Tagetes patula",
    kind: "help",
    role: "Nematodes and whitefly",
    why: "Roots produce alpha-terthienyl, which is toxic to root-knot nematodes. The scent also confuses whiteflies. This is one of the few companion claims with field data behind it.",
    how: "For nematodes, grow a dense marigold cover the season before tomatoes, then turn it in. Same-year edging still helps with flying pests. Use French types, not African.",
    evidence:
      "University trials show real nematode suppression when marigolds are grown as a prior cover crop. Interplanting the same season is weaker, but not wasted.",
    image: "/images/basil-marigold.jpg",
  },
  {
    id: "nasturtium",
    name: "Nasturtium",
    latin: "Tropaeolum majus",
    kind: "help",
    role: "Trap crop",
    why: "Aphids and some beetles prefer nasturtium. They pull pressure off the tomatoes and the flowers feed pollinators at ground level.",
    how: "Trail them along the bed edge, not through the tomato canopy. Pull heavily infested stems so the trap does not become a nursery.",
    evidence:
      "Classic trap-crop practice. Works when you inspect and remove pest-loaded growth, not when you ignore the plants.",
    image: "/images/nasturtium.jpg",
  },
  {
    id: "borage",
    name: "Borage",
    latin: "Borago officinalis",
    kind: "help",
    role: "Pollinators",
    why: "Blue flowers are a magnet for bees. Anecdote says it deters tomato hornworm moths; the reliable benefit is more pollinator traffic in the bed.",
    how: "Tuck one or two plants at the ends of a row. They self-sow. Cut back if they shade young tomatoes.",
    evidence:
      "Strong as an insectary plant. Hornworm-repellent claims are traditional, not well tested.",
  },
  {
    id: "alliums",
    name: "Garlic, chives, onions",
    latin: "Allium spp.",
    kind: "help",
    role: "Edge planting",
    why: "Sulfur compounds may confuse aphids and spider mites. They occupy a different root zone, so they do not fight tomatoes for space.",
    how: "Line the bed with chives or tuck garlic between plants. Do not crowd the tomato stem.",
    evidence:
      "Garden-scale pest control is modest. Harmless, useful as a living border, not a silver bullet.",
  },
  {
    id: "carrot",
    name: "Carrots",
    latin: "Daucus carota",
    kind: "help",
    role: "Space and soil",
    why: "Carrots root deeper and finish before tomatoes fill the bed. The pairing uses vertical soil space without much competition.",
    how: "Sow carrots between newly transplanted tomatoes. Harvest the roots as the tomato canopy closes.",
    evidence:
      "A space-efficiency pairing more than a chemical one. Works in small gardens.",
  },
  {
    id: "lettuce",
    name: "Lettuce",
    latin: "Lactuca sativa",
    kind: "help",
    role: "Living mulch",
    why: "Lettuce shades the soil early, keeps weeds down, and is cut before tomatoes need the room. Cool-season leaves love the later shade of the vines.",
    how: "Transplant lettuce the same week as tomatoes. Harvest as soon as heads size up.",
    evidence:
      "Practical intercropping. No special chemistry — just good timing.",
  },
  {
    id: "herbs",
    name: "Dill, calendula, parsley",
    latin: "Insectary herbs",
    kind: "help",
    role: "Beneficial insects",
    why: "Umbel and daisy flowers feed parasitic wasps and hoverflies that hunt hornworms and aphids.",
    how: "Grow a small insectary patch at the bed’s end. Use young dill; pull it before it gets huge.",
    evidence:
      "Flowering insectaries are well supported. Mature dill can inhibit tomatoes, so keep it young or at a distance.",
  },
  {
    id: "potato",
    name: "Potatoes",
    latin: "Solanum tuberosum",
    kind: "avoid",
    role: "Shared disease",
    why: "Same family, same blight pathogens, same nematodes. A connected host population lets early and late blight move faster.",
    how: "Separate beds, and do not follow tomatoes with potatoes in rotation — wait three to four years between nightshades.",
    evidence:
      "The strongest “do not pair” rule. Not chemistry. Epidemiology.",
  },
  {
    id: "fennel",
    name: "Fennel",
    latin: "Foeniculum vulgare",
    kind: "avoid",
    role: "Allelopathy",
    why: "Fennel roots release compounds that stunt nearby vegetables, tomatoes included. It is a poor neighbor in any mixed bed.",
    how: "Grow fennel in its own pot or a distant corner. Do not let it seed through the tomato patch.",
    evidence:
      "Documented allelopathy. One of two companions that do real chemical harm.",
  },
  {
    id: "walnut",
    name: "Black walnut",
    latin: "Juglans nigra",
    kind: "avoid",
    role: "Juglone toxicity",
    why: "Roots, leaves, and hulls leak juglone. Tomatoes and other nightshades are especially sensitive. Wilt is often fatal.",
    how: "Keep tomatoes 50–80 feet from a mature trunk. Do not compost walnut leaves into tomato beds.",
    evidence:
      "The clearest chemical antagonist. Extension services treat this as settled.",
  },
  {
    id: "corn",
    name: "Corn",
    latin: "Zea mays",
    kind: "avoid",
    role: "Shared pest",
    why: "Tomato fruitworm and corn earworm are the same moth (Helicoverpa zea). Corn also throws shade on plants that want full sun.",
    how: "Plant in separate parts of the garden. If you grow both, time them so peak moth flights are not feeding two crops at once.",
    evidence:
      "Shared pest plus competition. Keep them apart.",
  },
  {
    id: "brassica",
    name: "Cabbage family",
    latin: "Brassica spp.",
    kind: "avoid",
    role: "Competition",
    why: "Broccoli, cabbage, kale, and cauliflower are heavy feeders and can slow tomatoes when packed in the same bed. They also pull in their own aphid complexes.",
    how: "Give brassicas their own row, or grow them in the cool season and tomatoes in the warm one.",
    evidence:
      "Mostly competition, not a toxin. Space or season-separate them.",
  },
];
