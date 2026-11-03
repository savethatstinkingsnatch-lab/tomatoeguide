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
    note: "The cherry almost everyone should grow. Sets in cool weather and heat. Hybrid, so save fruit, not seed.",
  },
  {
    id: "early-girl",
    name: "Early Girl",
    type: "Slicer",
    habit: "Indeterminate",
    days: "50–62",
    bestZones: [3, 4, 5, 6],
    note: "Reliable first ripe fruit. Plant it beside a slower heirloom so you eat tomatoes in June and September.",
  },
  {
    id: "celebrity",
    name: "Celebrity",
    type: "Slicer",
    habit: "Determinate",
    days: "70–75",
    bestZones: [4, 5, 6, 7],
    note: "Disease package and a bush habit. Good for cages, short seasons, and gardeners who do not want to prune.",
  },
  {
    id: "roma",
    name: "Roma / San Marzano",
    type: "Paste",
    habit: "Determinate",
    days: "75–85",
    bestZones: [5, 6, 7, 8],
    note: "Dense flesh, few seeds, the sauce tomato. San Marzano wants a longer, warmer season than Roma.",
  },
  {
    id: "brandywine",
    name: "Brandywine",
    type: "Beefsteak",
    habit: "Indeterminate",
    days: "80–90",
    bestZones: [5, 6, 7, 8],
    note: "The flavor people mean when they say heirloom. Needs a long, even season and a strong stake.",
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
    note: "Bred to set fruit when nights stay hot. Pair with Solar Fire or Phoenix in zones 9–11.",
  },
  {
    id: "everglades",
    name: "Everglades",
    type: "Wild cherry",
    habit: "Indeterminate",
    days: "50–60",
    bestZones: [9, 10, 11],
    note: "Tiny, intense fruit that keeps going in humidity. A tropical workhorse, not a slicing tomato.",
  },
];

export function varietiesForZone(zone: ZoneId): Variety[] {
  const match = VARIETIES.filter((v) => v.bestZones.includes(zone));
  return match.length ? match : VARIETIES;
}
