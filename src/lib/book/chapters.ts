import type { Chapter } from "./types";

export const CHAPTERS: Chapter[] = [
  {
    slug: "begin",
    number: "01",
    title: "Before You Begin",
    kicker: "The plant",
    dek: "What a tomato asks of you, and what it will give back if you meet it halfway.",
    image: "/images/growing.jpg",
    imageAlt: "A fruiting tomato plant tied to a wooden stake in summer light",
    blocks: [
      {
        type: "p",
        text: "A tomato is a tropical perennial that we treat as a summer annual. It wants heat, all-day sun, even moisture, and a soil that drains. Given those, it is generous. Denied them, it sulks — blossom drop, bland fruit, blight that runs up the stem in a wet week.",
      },
      {
        type: "p",
        text: "This book walks the whole cycle: choosing a climate window, starting seed, planting, tending, keeping company in the bed, picking fruit, then saving and storing seed so next year’s plants are yours. Dates flex with your USDA hardiness zone. Set that zone once; the chapters will speak to it.",
      },
      {
        type: "h2",
        text: "What the plant needs",
      },
      {
        type: "dl",
        items: [
          {
            term: "Light",
            def: "Six to eight hours of direct sun. Morning sun dries leaves and matters more than a scorching afternoon. In zones 9–11, light afternoon shade in midsummer is a kindness.",
          },
          {
            term: "Heat",
            def: "Germinate at 70–80°F. Transplant when soil is 60°F and nights hold above 50°F. Fruit set stalls above about 90°F days and 75°F nights.",
          },
          {
            term: "Water",
            def: "Deep, infrequent, at the soil — not on the leaves. Roughly one to one and a half inches a week, more in heat and in containers. Swings in moisture crack fruit and invite blossom-end rot.",
          },
          {
            term: "Soil",
            def: "Loose, fertile, well drained, pH 6.0–6.8. Tomatoes are heavy feeders that still hate wet feet. Compost is the usual amendment; fresh manure is not.",
          },
          {
            term: "Air and support",
            def: "Off the ground. Cages, stakes, or a Florida weave keep fruit clean and leaves dry. Crowding is the fast road to fungal disease.",
          },
        ],
      },
      {
        type: "quote",
        text: "Start with the climate you have, not the variety you admired in a catalog. A 90-day beefsteak in a 90-day season is a bet you will lose on a cold June.",
      },
      {
        type: "h2",
        text: "How to use this book",
      },
      {
        type: "p",
        text: "Read it through once in winter. Return to the climate chapter when you order seed, the planting chapter the week of transplant, and the seed chapters when the best fruit is on the board. Your selected zone travels with you; planting and harvest windows update on the page.",
      },
      {
        type: "callout",
        tone: "tip",
        kicker: "A note on zones",
        title: "USDA zones measure winter cold, not tomato weather",
        body: "The map is built from average annual minimum temperature. It is a useful proxy for season length, not a frost-date oracle. Your last spring frost and first fall frost — plus soil temperature — decide when to plant and when to pick. Local extension data beats a zone number when they disagree.",
      },
    ],
  },
  {
    slug: "stay-safe",
    number: "02",
    title: "Stay Safe",
    kicker: "Before you cook or forage",
    dek: "The fruit you planted is food. The leaves, the wild look-alikes, and a sealed jar are not.",
    image: "/images/pests.jpg",
    imageAlt: "A close view of a tomato leaf in the garden",
    blocks: [
      {
        type: "p",
        text: "Most of this book is about growing. This page is about not getting hurt. Read it once, then keep it in mind when you prune, can, or walk a weedy edge.",
      },
      {
        type: "dl",
        items: [
          {
            term: "Leaves and stems",
            def: "Tomato leaves, stems, and very green fruit have natural chemicals that can upset your stomach. Do not eat the leaves. Keep pets and small kids from chewing the plants. Some people get itchy skin from the leaves, so gloves help.",
          },
          {
            term: "Canning",
            def: "Tomatoes are not acidic enough to can safely by themselves. The USDA says to add 2 tablespoons of bottled lemon juice or 1/2 teaspoon of citric acid to each quart jar, or 1 tablespoon of lemon juice or 1/4 teaspoon of citric acid to each pint. Only use tested recipes from the USDA, the National Center for Home Food Preservation, or your extension office. Botulism can kill.",
          },
          {
            term: "Wild look-alikes",
            def: "Wild nightshades like black nightshade, bittersweet nightshade, horsenettle, and jimsonweed have berries or pods that can look tomato-like. Never eat a wild tomato you did not plant.",
          },
          {
            term: "Black walnut",
            def: "Black walnut trees poison tomatoes. Plant at least 50 feet away.",
          },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        kicker: "Canning",
        title: "Do not invent a recipe",
        body: "A sealed jar of tomatoes that was not acidified and processed by a tested method can grow botulism. That toxin can kill. Use bottled lemon juice or citric acid in the amounts above, and follow a current USDA or extension recipe.",
      },
    ],
  },
  {
    slug: "climate",
    number: "03",
    title: "Climate and Zones",
    kicker: "When to plant, when to pick",
    dek: "Match the crop to your frost dates. Tomatoes do not forgive a cold soil or a surprise September freeze.",
    image: "/images/climate.jpg",
    imageAlt: "A spring vegetable garden with frost cloth over young beds at dawn",
    blocks: [
      {
        type: "p",
        text: "Tomatoes are a warm-season crop. You start seed indoors six to eight weeks before the average last spring frost, set plants out after that frost when the soil has warmed, and you pick until the first fall frost — or until heat shuts the flowers down, in the South and the desert.",
      },
      {
        type: "p",
        text: "Choose your USDA zone below. The calendar, planting window, and harvest notes throughout the book follow it. Dates are averages; a late nor’easter or a warm March will move them.",
      },
      { type: "zonePanel" },
      { type: "calendar" },
      {
        type: "h2",
        text: "How to read the windows",
      },
      {
        type: "p",
        text: "Start indoors means sowing into trays under lights or in a bright, warm window. Transplant means the plants leave the house — soil 60°F, nights reliably above 50°F, forecast clear of frost. Harvest is ripe fruit on the plant, not the day you set it out. Count “days to maturity” on a seed packet from transplant, not from sowing.",
      },
      {
        type: "h3",
        text: "Cold climates, zones 3–5",
      },
      {
        type: "p",
        text: "Short seasons reward early varieties, black plastic to warm soil, and a cover for the first two weeks outside. Determinate plants finish a crop before September. If you love heirlooms, grow one, and grow an early cherry beside it so you eat tomatoes either way.",
      },
      {
        type: "h3",
        text: "The middle of the country, zones 6–7",
      },
      {
        type: "p",
        text: "This is tomato country. You can ripen Brandywine and still have a sauce crop. The work is even water, pruning for airflow, and a blight-aware rotation. Do not plant tomatoes where potatoes, peppers, or eggplants grew last year.",
      },
      {
        type: "h3",
        text: "Heat, zones 8–11",
      },
      {
        type: "p",
        text: "Frost is a rumor. The enemy is a run of 95°F days with 78°F nights, which aborts pollen. Plant a spring crop early, accept a midsummer lull, and set a second crop in late summer for fall. Heat-set varieties exist for this reason. Shade cloth from 11 to 4 in July is not cheating.",
      },
      {
        type: "callout",
        tone: "warn",
        kicker: "Do not rush the soil",
        title: "A calendar date is not a soil temperature",
        body: "A tomato set into 50°F mud will sit, turn purple, and lose weeks you cannot get back. Use a cheap soil thermometer. Sixty degrees at planting depth, measured in the morning, is the gate.",
      },
    ],
  },
  {
    slug: "varieties",
    number: "04",
    title: "Choosing Varieties",
    kicker: "The right plant for the season you have",
    dek: "Habit, days to maturity, and whether the seed will come true — those three decisions shape the year.",
    image: "/images/varieties.jpg",
    imageAlt: "A still life of mixed heirloom tomatoes on a wooden table",
    blocks: [
      {
        type: "p",
        text: "Catalogs sell a dream. Your frost-free stretch sells a constraint. Pick variety the way you pick a coat: for the weather, then for taste.",
      },
      {
        type: "h2",
        text: "Determinate or indeterminate",
      },
      {
        type: "dl",
        items: [
          {
            term: "Determinate (bush)",
            def: "Grows to a set height, sets a concentrated crop, then mostly stops. Easier in cages and short seasons. The sauce tomato’s usual habit. Little or no sucker pruning.",
          },
          {
            term: "Indeterminate (vining)",
            def: "Grows until frost. Fruit ripens in waves all season. Needs a tall stake or trellis and regular tying. Most cherries and famous heirlooms are this type.",
          },
        ],
      },
      {
        type: "h2",
        text: "Fruit types",
      },
      {
        type: "p",
        text: "Cherries and grapes ripen first and keep setting in weather that stalls large fruit. Slicers are the sandwiches. Beefsteaks are the show, and they want a long, even season. Paste tomatoes (Roma, San Marzano, Amish Paste) have dense flesh and few seeds — they are also the easiest fruits from which to save seed, because there is less gel to ferment.",
      },
      {
        type: "h2",
        text: "Hybrids and heirlooms",
      },
      {
        type: "p",
        text: "An F1 hybrid (Early Girl, Sun Gold, Celebrity) is a cross. Vigor and disease resistance are the point. Saved seed from an F1 will not match the parent. An heirloom or other open-pollinated variety breeds true if it was not crossed in the garden. Tomatoes mostly pollinate themselves, but bees can still cross them. For seed saving, keep different varieties at least 10 feet apart. Potato-leaf types like Brandywine and tiny wild cherry types like Everglades cross more easily, so keep them 25 feet or more apart, or tie a mesh bag over a flower cluster before it opens and save seed only from those fruits.",
      },
      { type: "varieties" },
      {
        type: "callout",
        tone: "tip",
        kicker: "A small list beats a long one",
        title: "Grow four plants well",
        body: "One early, one cherry, one paste, one flavor heirloom. That mix covers June through frost and gives you fruit for the table, the jar, and the seed envelope.",
      },
    ],
  },
  {
    slug: "starting",
    number: "05",
    title: "Starting from Seed",
    kicker: "Six to eight weeks before last frost",
    dek: "Stocky, unhurried seedlings beat leggy ones every time. Light and warmth do most of the work.",
    image: "/images/seedlings.jpg",
    imageAlt: "Tomato seedlings in a wooden tray in morning window light",
    blocks: [
      {
        type: "p",
        text: "Direct-sowing tomatoes outdoors is a gamble except in the warmest zones. Start them inside. The packet’s “days to maturity” clock starts when the plant goes in the ground, so those indoor weeks are extra — they are how a 70-day variety ripens in a 90-day season.",
      },
      {
        type: "steps",
        items: [
          {
            title: "Sow on time",
            body: "Count back 6–8 weeks from your last frost (see Climate). Sowing in January in zone 5 makes lanky plants that stall after transplant. Better a little late than a month early.",
          },
          {
            title: "Use a fine, sterile mix",
            body: "Seed-starting mix, not garden soil. Moisten it so it holds together when squeezed, then fills a tray of 2-inch cells. Sow two seeds a quarter-inch deep. Label the row.",
          },
          {
            title: "Keep them warm until they rise",
            body: "70–80°F at the root. A heat mat under the tray is the usual tool. Germination in 5–8 days. Remove the mat once they are up; cool nights (60–65°F) make stockier stems.",
          },
          {
            title: "Light, close and long",
            body: "A south window is rarely enough. Hang shop lights or a full-spectrum bar 2–3 inches above the leaves, 14–16 hours a day. Raise the lights as the plants grow. Stretching means the light is too far or too short.",
          },
          {
            title: "Thin, then pot up",
            body: "Snip the weaker seedling at soil line. When true leaves are on and roots fill the cell, move each plant into a 3–4 inch pot. Bury the stem up to the first leaves; it will root along the buried stalk.",
          },
          {
            title: "Harden off for a week",
            body: "The week before transplant, take plants outside for a few hours in shade, then more sun each day, and finally a night out if it stays above 50°F. Skip this and the first hot afternoon will scorch them.",
          },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        kicker: "Water",
        title: "Bottom-water, then let the surface dull",
        body: "Sit cells in a tray of water until the mix darkens, then drain. Constant wet plus cool air is damping-off weather. A small fan on low, aimed past the seedlings, toughens stems and keeps fungus down.",
      },
    ],
  },
  {
    slug: "planting",
    number: "06",
    title: "Soil, Site, and Planting",
    kicker: "The day they go out",
    dek: "Bury the stem, give them sun, and do not crowd. Most later trouble starts here.",
    image: "/images/planting.jpg",
    imageAlt: "A tomato seedling being planted into dark garden soil",
    blocks: [
      {
        type: "p",
        text: "Pick the sunniest, most open ground you have. Avoid the drip line of black walnut. Do not plant where tomatoes, potatoes, peppers, or eggplants grew in the last three years if you can help it — the wilts and blights live in that soil.",
      },
      {
        type: "h2",
        text: "Prepare the bed",
      },
      {
        type: "p",
        text: "Work two to three inches of finished compost into the top eight inches. Skip fresh manure. If a soil test says pH is under 6.0, add lime in the fall, not the morning of planting. A handful of balanced organic fertilizer in the hole is plenty; high nitrogen now makes leaf at the expense of fruit.",
      },
      {
        type: "h2",
        text: "How to set the plant",
      },
      {
        type: "steps",
        items: [
          {
            title: "Wait for the conditions",
            body: "Last frost behind you, soil 60°F, a cloudy afternoon or evening so the plant does not wilt its first hour. Water the pot an hour before so the root ball slides out intact.",
          },
          {
            title: "Plant deep, or in a trench",
            body: "Pinch off the lower leaves. Lay a lanky plant on its side in a shallow trench and bend the top up, or drop a stocky one into a hole so only the top cluster of leaves sits above grade. Fill, firm, water in.",
          },
          {
            title: "Space them",
            body: "Determinate: 18–24 inches. Indeterminate: 24–36 inches, more if you will not prune. Rows 3–4 feet apart. Air is medicine.",
          },
          {
            title: "Stake the day you plant",
            body: "A cage, a 6–8 foot stake, or a Florida-weave trellis goes in now, not when the plant is already sprawling. Tying later breaks roots.",
          },
        ],
      },
      {
        type: "callout",
        tone: "tip",
        kicker: "Containers",
        title: "Five gallons is the floor",
        body: "A cherry in a 5-gallon pot can work. A beefsteak wants 10–15. Use a potting mix, not garden soil. Pots dry fast: you will water daily in July. A determinate or patio type is the kinder choice for a balcony.",
      },
    ],
  },
  {
    slug: "care",
    number: "07",
    title: "Care Through the Season",
    kicker: "Water, prune, feed, repeat",
    dek: "Even moisture and dry leaves. That is most of the job.",
    image: "/images/growing.jpg",
    imageAlt: "A tall tomato plant heavy with ripening fruit",
    blocks: [
      {
        type: "p",
        text: "After transplant the plant wants to grow roots for two weeks. Do not drown it, do not starve it, and do not pinch it yet. Once it is off and running, the rhythm is simple: water deep, mulch, tie new growth, and keep the lower stem clean.",
      },
      {
        type: "h2",
        text: "Water",
      },
      {
        type: "p",
        text: "One to one and a half inches a week, in one or two soakings, at the base. Drip line or a soaker hose under mulch is the clean method. Overhead watering at night is how early blight finds you. Inconsistent water is how fruit splits and how blossom-end rot — a calcium-transport problem, not usually a lack of lime — shows up on the first big tomatoes.",
      },
      {
        type: "h2",
        text: "Mulch",
      },
      {
        type: "p",
        text: "Once the soil is warm, a two-inch mulch of straw, shredded leaves, or untreated grass clippings holds moisture and stops rain from splashing soil onto leaves. Do not mulch a cold bed in April; you will keep the soil cold.",
      },
      {
        type: "h2",
        text: "Pruning and tying",
      },
      {
        type: "p",
        text: "Determinate plants: leave them alone except to pull leaves that touch the soil. Indeterminate plants: choose one to three main stems. Suckers — the shoots in the leaf crotches — can be pinched when they are small. Over-pruning in high sun sunscalds fruit. Tie stems with soft twine every 8–12 inches of growth.",
      },
      {
        type: "h2",
        text: "Feeding",
      },
      {
        type: "p",
        text: "If the bed was composted, a side-dress of compost or a low-nitrogen tomato fertilizer at first fruit set is enough. Yellow lower leaves on an otherwise strong plant are often age, not hunger. Pale new growth and no flowers is nitrogen without phosphorus and potassium — ease off the lawn-style feed.",
      },
      {
        type: "callout",
        tone: "warn",
        kicker: "Heat",
        title: "Blossom drop is weather, not a failing",
        body: "When days exceed ~90°F and nights stay above ~75°F, pollen goes sterile and flowers abort. Keep water even, add afternoon shade in hot zones, and wait. Flowers will return when nights cool. Do not over-fertilize to “fix” it.",
      },
    ],
  },
  {
    slug: "companions",
    number: "08",
    title: "Companion Plants",
    kicker: "Who belongs in the bed",
    dek: "A few neighbors earn their keep. A few do real harm. The rest are folklore with a pretty chart.",
    image: "/images/companions.jpg",
    imageAlt: "Tomatoes growing with basil, marigolds, and nasturtiums",
    blocks: [
      {
        type: "p",
        text: "Companion planting is a mix of chemistry, pest ecology, and wishful thinking. What holds up for tomatoes is short: basil nearby to prime defenses, French marigolds as a nematode cover, flowers that feed the wasps that hunt hornworms, and a hard no to potatoes, fennel, corn, and black walnut.",
      },
      {
        type: "p",
        text: "Flavor claims — “basil makes tomatoes sweeter” — have been tested and have not shown up in the fruit. Plant basil anyway. It is a good neighbor, and you will eat it.",
      },
      { type: "companions" },
      {
        type: "callout",
        tone: "tip",
        kicker: "Rotation",
        title: "Companions are not a substitute for rotation",
        body: "Move tomatoes (and their nightshade cousins) to new ground every three to four years. Marigolds help nematodes most when they occupy that ground the season before, not as a single ruff around this year’s cage.",
      },
    ],
  },
  {
    slug: "trouble",
    number: "09",
    title: "Pests and Trouble",
    kicker: "See it early",
    dek: "Most disasters are a week of ignored leaves. Walk the row twice a week.",
    image: "/images/pests.jpg",
    imageAlt: "A ladybug on a dewy tomato leaf",
    blocks: [
      {
        type: "p",
        text: "A healthy, well-spaced plant shrugs off a lot. What it cannot shrug off is wet foliage, a hornworm you did not pick, or blight moving in from last year’s vines. Hand-picking and sanitation outperform most sprays in a home garden.",
      },
      {
        type: "dl",
        items: [
          {
            term: "Hornworms",
            def: "Fat green caterpillars that strip a stem overnight. Look for dark droppings, then the worm. Hand-pick into soapy water. If you see white cocoons on its back, leave it — braconid wasps are already in the bed.",
          },
          {
            term: "Aphids and whiteflies",
            def: "Blast with water, then soap if needed. Nasturtiums as a trap help. Avoid broad insecticides that kill the hoverflies and lady beetles you want.",
          },
          {
            term: "Early blight",
            def: "Target-spot lesions on lower leaves, working up. Mulch, water at the soil, prune the bottom foot of leaves, and do not compost diseased vines. Resistant hybrids help in humid zones.",
          },
          {
            term: "Late blight",
            def: "A cool, wet-weather killer of tomatoes and potatoes. Greasy lesions, white fuzz, collapse. Remove plants in a bag. This is why those two crops do not share a bed.",
          },
          {
            term: "Blossom-end rot",
            def: "A leathery black patch on the bottom of the first fruit. Calcium cannot move when water is erratic. Even out irrigation; do not lime in a panic unless a test says pH is low.",
          },
          {
            term: "Cracking and catfacing",
            def: "Rain after drought splits skins. Mulch and steady water. Catfacing is cold at bloom — ugly shoulders, still good to eat. Save seed from smooth fruit if you are keeping a line.",
          },
        ],
      },
      {
        type: "callout",
        tone: "warn",
        kicker: "End of season",
        title: "Do not leave the vines",
        body: "Pull plants after the last fruit. Diseased foliage does not belong in the compost you will spread on next year’s tomato ground. Burn, bag, or hot-compost only if your pile truly cooks.",
      },
    ],
  },
  {
    slug: "harvest",
    number: "10",
    title: "Harvest",
    kicker: "Pick for flavor, then beat the frost",
    dek: "Ripe is a color and a give, not a date on the packet.",
    image: "/images/harvest.jpg",
    imageAlt: "A basket of mixed ripe tomatoes on a wooden table",
    blocks: [
      {
        type: "p",
        text: "A tomato is ready when it has taken its mature color — red, rose, gold, purple-brown — and yields slightly at the shoulder. Twist with the calyx on, or snip the stem. Pulling hard tears the truss and costs you the next fruit.",
      },
      {
        type: "h2",
        text: "When to pick",
      },
      {
        type: "p",
        text: "Flavor peaks on the plant if nights are in the 60s. In a heat wave, pick at first full color and finish on the counter; fruit left in 95°F sun goes mealy. In a cold snap, pick at the “breaker” stage — a blush at the blossom end — and ripen indoors. Tomatoes do not need light to ripen; they need time and a little ethylene. A paper bag with an apple hurries a green one. A windowsill is tradition, not a requirement.",
      },
      {
        type: "h2",
        text: "Storing fruit (not seed)",
      },
      {
        type: "p",
        text: "Never refrigerate a ripe tomato if you can help it; cold wrecks aroma. Keep them in a single layer, stem down, at room temperature, and eat within a few days. Split or damaged fruit goes to sauce the same day.",
      },
      {
        type: "h2",
        text: "The last week",
      },
      {
        type: "p",
        text: "When the forecast shows a frost, pick everything with a hint of color, then the mature greens. Pull the whole plant and hang it in a garage if you like; fruit will continue to color. Leave a few of the very best ripe fruits on the board — those are the ones whose seed you will save.",
      },
      {
        type: "callout",
        tone: "tip",
        kicker: "Your harvest window",
        title: "It closes with the first hard frost",
        body: "Green fruit will ripen off the vine. Frost-bitten fruit will not. If nights are heading into the 30s, pick first, ask questions later.",
      },
    ],
  },
  {
    slug: "saving-seed",
    number: "11",
    title: "Harvesting Seeds",
    kicker: "Ferment, rinse, dry",
    dek: "Tomato seed is wet seed. The gel around it is a germination inhibitor. Fermentation is how you take that gel off and keep a cleaner, longer-lived seed.",
    image: "/images/seed-harvest.jpg",
    imageAlt: "A sliced tomato with seed gel on a wooden board beside a jar",
    blocks: [
      {
        type: "p",
        text: "Saving tomato seed is the most satisfying hour of the year if you grow open-pollinated plants. You are not just putting next spring in a jar. You are keeping a line that already liked your soil, your water, your pests.",
      },
      {
        type: "p",
        text: "You can rinse and dry without fermenting. Those seeds will often sprout next spring. Clean, well-dried seed can keep fine even without fermenting. Fermenting makes the seed cleaner and helps remove some diseases that ride on the seed. Ferment two to three days. It is the method seed savers use because it works.",
      },
      { type: "seedSteps" },
      {
        type: "callout",
        tone: "warn",
        kicker: "Hybrids",
        title: "Do not save Sun Gold and expect Sun Gold",
        body: "F1 hybrids (the packet will say hybrid or F1) are a one-year plant. The fruit is still excellent. The seed is a genetic shuffle. Save heirlooms and other open-pollinated named varieties if you want the same tomato next year.",
      },
      {
        type: "p",
        text: "Tomatoes mostly pollinate themselves, but bees can still cross them. For seed saving, keep different varieties at least 10 feet apart. Potato-leaf types like Brandywine and tiny wild cherry types like Everglades cross more easily, so keep them 25 feet or more apart, or tie a mesh bag over a flower cluster before it opens and save seed only from those fruits.",
      },
    ],
  },
  {
    slug: "storing-seed",
    number: "12",
    title: "Storing Seeds",
    kicker: "Cool, dry, dark, named",
    dek: "Properly dried tomato seed keeps four to six years easily, and can sprout at ten. The enemies are moisture, heat, and an unlabeled envelope.",
    image: "/images/storage.jpg",
    imageAlt: "Kraft seed envelopes and a jar of dried tomato seeds on linen",
    blocks: [
      {
        type: "p",
        text: "Once the seeds snap between your fingers they are ready for winter. Move them off the plate the day they are dry; they can take up kitchen humidity if they sit out.",
      },
      { type: "storageGuide" },
      {
        type: "h2",
        text: "How long they last",
      },
      {
        type: "p",
        text: "Well-fermented, fully dry seed stored cool and dry germinates strongly for four to six years. At eight to ten years you may still get 50 percent. Unfermented seed, or seed stored in a warm cupboard, is a one- to two-year proposition. Use the oldest envelopes first. Each summer, replace what you sowed with a fresh lot from your best fruit.",
      },
      {
        type: "h2",
        text: "A germination test in March",
      },
      {
        type: "p",
        text: "Ten seeds in a damp paper towel, inside a loosely closed bag, on top of the fridge. Count sprouts at day seven and day fourteen. Eight or more is a full sowing rate. Four to seven: sow thick and thin. Under four: use the backup packet.",
      },
      {
        type: "h2",
        text: "The year as a circle",
      },
      {
        type: "p",
        text: "You started with a zone and a last frost date. You started seed in the weeks before it, planted after it, picked until the first freeze, and you put the best of that fruit back in a jar. Next year the plants will already know your garden. That is the whole book.",
      },
      {
        type: "quote",
        text: "Label the envelope as if a stranger had to sow it. One day that stranger will be you, in March, holding a cup of coffee and a tray.",
      },
    ],
  },
  {
    slug: "glossary",
    number: "13",
    title: "Glossary",
    kicker: "Words the book uses",
    dek: "Short definitions. If a word shows up in a chapter, it should be here.",
    image: "/images/varieties.jpg",
    imageAlt: "A still life of several kinds of ripe tomatoes",
    blocks: [
      {
        type: "dl",
        items: [
          {
            term: "Determinate",
            def: "A bush tomato that ripens its crop all at once.",
          },
          {
            term: "Indeterminate",
            def: "A vining tomato that keeps growing and fruiting until frost.",
          },
          {
            term: "Open-pollinated (OP)",
            def: "Seed that grows true to its parent.",
          },
          {
            term: "Heirloom",
            def: "An old open-pollinated variety passed down for generations.",
          },
          {
            term: "F1 hybrid",
            def: "A cross of two parents. Saved seed won't grow true.",
          },
          {
            term: "Sucker",
            def: "A side shoot that grows in the joint between a leaf and the stem.",
          },
          {
            term: "Blossom-end rot",
            def: "A black, leathery patch on the bottom of the fruit, caused by uneven watering.",
          },
          {
            term: "Fermentation",
            def: "Letting seed gel sit a few days so it breaks down and cleans the seed.",
          },
          {
            term: "Harden off",
            def: "Slowly getting indoor seedlings used to the outdoors.",
          },
          {
            term: "Frost date",
            def: "The average date of the last spring frost or first fall frost.",
          },
          {
            term: "Breaker stage",
            def: "The first blush of color on a green fruit.",
          },
        ],
      },
    ],
  },
  {
    slug: "about",
    number: "14",
    title: "About and Disclaimer",
    kicker: "The Education Revolution",
    dek: "Who wrote this, and what it is not.",
    image: "/images/cover.jpg",
    imageAlt: "Ripe tomatoes on the vine in late-afternoon light",
    blocks: [
      {
        type: "p",
        text: "This pocket guide is for learning. Gardens, weather, and people differ. Check with your local county extension office for advice in your area. Follow only tested canning recipes. Never eat a wild plant you cannot identify for certain.",
      },
      {
        type: "p",
        text: "Blue and the Awesome Dudes are not responsible for injury, illness, or crop loss. Part of The Education Revolution pocket guide series.",
      },
    ],
  },
];

export function chapterBySlug(slug: string): Chapter | undefined {
  return CHAPTERS.find((c) => c.slug === slug);
}

export function chapterIndex(slug: string): number {
  return CHAPTERS.findIndex((c) => c.slug === slug);
}

export function adjacentChapters(slug: string): {
  prev?: Chapter;
  next?: Chapter;
} {
  const i = chapterIndex(slug);
  if (i < 0) return {};
  return {
    prev: CHAPTERS[i - 1],
    next: CHAPTERS[i + 1],
  };
}
