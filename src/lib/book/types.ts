export type ZoneId = 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type MonthPhase =
  | "frost"
  | "start"
  | "plant"
  | "grow"
  | "harvest"
  | "heat";

export type ZoneInfo = {
  id: ZoneId;
  label: string;
  tempRange: string;
  lastFrost: string;
  firstFrost: string;
  startIndoors: string;
  transplant: string;
  harvest: string;
  seasonDays: string;
  regions: string;
  notes: string;
  varietyAdvice: string;
  harvestAdvice: string;
  months: MonthPhase[];
};

export type Companion = {
  id: string;
  name: string;
  latin: string;
  kind: "help" | "avoid";
  role: string;
  why: string;
  how: string;
  evidence: string;
  image?: string;
};

export type Variety = {
  id: string;
  name: string;
  type: string;
  habit: "Determinate" | "Indeterminate" | "Semi-determinate" | "Either";
  days: string;
  bestZones: ZoneId[];
  note: string;
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "callout"; kicker: string; title: string; body: string; tone?: "tip" | "warn" }
  | { type: "steps"; items: { title: string; body: string }[] }
  | { type: "dl"; items: { term: string; def: string }[] }
  | { type: "figure"; src: string; alt: string; caption: string }
  | { type: "zonePanel" }
  | { type: "calendar" }
  | { type: "companions" }
  | { type: "varieties" }
  | { type: "seedSteps" }
  | { type: "storageGuide" };

export type Chapter = {
  slug: string;
  number: string;
  title: string;
  kicker: string;
  dek: string;
  image: string;
  imageAlt: string;
  blocks: Block[];
};
