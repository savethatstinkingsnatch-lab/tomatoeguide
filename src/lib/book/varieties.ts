import type { Variety, ZoneId } from "./types";

export const VARIETIES: Variety[] = [
  {
    id: "stupice",
    name: "Stupice",
    type: "Early slicer",
    habit: "Indeterminate",
    days: "55–65",
    bestZones: [3, 4, 5],
    note: "Czech heirloom. Small red fruit that ripens when nothing else will. The cold-climate insurance plant.",
  },
  {
    id: "sungold",
    name: "Sun Gold",
    type: "Cherry",
    habit: "Indeterminate",
    days: "57–65",
    bestZones: [3, 4, 5, 6, 7, 8, 9, 10, 11],
    note: "The cherry almost everyone should grow. Sets in cool weather and heat. Hybrid. Great to grow, but saved seed will not grow true.",
  },
  {
    id: "early-girl",
    name: "Early Girl",
    type: "Slicer",
    habit: "Indeterminate",
    days: "50–62",
    bestZones: [3, 4, 5, 6],
    note: "Reliable first ripe fruit. Plant it beside a slower heirloom so you eat tomatoes in June and September. Hybrid. Great to grow, but saved seed will not grow true.",
  },
  {
    id: "celebrity",
    name: "Celebrity",
    type: "Slicer",
    habit: "Semi-determinate",
    days: "70–75",
    bestZones: [4, 5, 6, 7],
    note: "Disease package and a bush habit. Good for cages, short seasons, and gardeners who do not want to prune.",
  },
  {
    id: "roma",
    name: "Roma",
    type: "Paste",
    habit: "Determinate",
    days: "75–80",
    bestZones: [5, 6, 7, 8],
    note: "The classic sauce tomato. Open-pollinated, so you can save the seed.",
  },
  {
    id: "san-marzano",
    name: "San Marzano",
    type: "Paste",
    habit: "Indeterminate",
    days: "80–90",
    bestZones: [6, 7, 8, 9],
    note: "Long, rich sauce tomato. Needs a long warm season and a stake. Open-pollinated.",
  },
  {
    id: "brandywine",
    name: "Brandywine",
    type: "Beefsteak",
    habit: "Indeterminate",
    days: "80–90",
    bestZones: [5, 6, 7, 8],
    note: "The flavor people mean when they say heirloom. Needs a long, even season and a strong stake. Open-pollinated. It is a potato-leaf type that crosses more easily, so give it extra space if you save seed.",
  },
  {
    id: "cherokee",
    name: "Cherokee Purple",
    type: "Heirloom slicer",
    habit: "Indeterminate",
    days: "80–85",
    bestZones: [5, 6, 7, 8],
    note: "Dusky rose flesh, rich and smoky. Crack-prone if water swings. Save seed — it is open-pollinated.",
  },
  {
    id: "heatmaster",
    name: "Heatmaster",
    type: "Heat-set slicer",
    habit: "Determinate",
    days: "75",
    bestZones: [8, 9, 10, 11],
    note: "Bred to set fruit when nights stay hot. Pair with Solar Fire or Phoenix in zones 9–11. Hybrid. Do not save seed. Solar Fire and Phoenix are hybrids too.",
  },
  {
    id: "everglades",
    name: "Everglades",
    type: "Wild cherry",
    habit: "Indeterminate",
    days: "50–60",
    bestZones: [9, 10, 11],
    note: "Tiny, intense fruit that keeps going in humidity. A tropical workhorse, not a slicing tomato. Open-pollinated. Wild cherry types cross easily. Keep them 25 feet or more from other tomatoes if you save seed.",
  },
];

export function varietiesForZone(zone: ZoneId): Variety[] {
  const match = VARIETIES.filter((v) => v.bestZones.includes(zone));
  return match.length ? match : VARIETIES;
}
