export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverQuery: string;
  date: string;
  readTime: string;
  category: string;
  location: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
  featured: boolean;
}

const author = {
  name: "Elena Vasquez",
  avatar: "https://img.vibestack.site/s/woman%20traveler%20headshot%20studio%20lighting/200/200",
  bio: "Travel writer, photographer, and eternal wanderer. I've visited 47 countries and counting. My mission is to inspire others to explore the world with curiosity and respect."
};

export const posts: BlogPost[] = [
  {
    id: "santorini-golden-hour",
    title: "Chasing Golden Hour in Santorini",
    excerpt: "The whitewashed villages of Santorini glow like embers at sunset. Here's how to experience the island's most magical moments beyond the tourist crowds.",
    content: `There's a moment each evening in Santorini when the entire island seems to hold its breath. The sun dips toward the Aegean Sea, and suddenly every whitewashed wall, every blue dome, every winding cobblestone path is bathed in liquid gold.\n\nI arrived in Oia expecting the famous sunset crowds — and they were there, of course, hundreds of people jostling for position at the castle ruins. But the real magic of Santorini isn't found in the obvious spots.\n\n## Beyond the Crowds\n\nInstead of fighting for a spot at Oia Castle, I wandered down to Ammoudi Bay. The tiny fishing port sits 300 steps below the main village, and from its waterfront tavernas, the sunset is equally spectacular — but shared with only a handful of diners enjoying fresh-caught octopus and crisp Assyrtiko wine.\n\n## The Secret Morning Light\n\nWhile everyone sleeps off their sunset celebrations, the early morning light in Santorini is arguably even more beautiful. I woke at 5:30 AM to walk through Oia's empty streets. The soft pink dawn light on the caldera was breathtaking — and I had it entirely to myself.\n\n## Where to Stay\n\nI recommend staying in Imerovigli, the highest point on the caldera rim. It's quieter than Oia or Fira, but the views are unmatched. The Cave Suite at Astra Suites offered a private terrace where I watched the sunset every evening with a glass of Vinsanto.\n\n## Practical Tips\n\n- **Best months**: Late September to mid-October. Fewer crowds, warm seas, golden light.\n- **Getting around**: Rent an ATV. The island is small but buses are unreliable.\n- **Budget tip**: Visit the less-famous village of Pyrgos for equally stunning views and half the prices.\n- **Don't miss**: A boat tour to the volcanic hot springs at Nea Kameni.`,
    coverImage: "https://img.vibestack.site/s/santorini%20sunset%20golden%20hour/1600/900",
    coverQuery: "santorini sunset golden hour",
    date: "2025-11-15",
    readTime: "8 min read",
    category: "Europe",
    location: "Santorini, Greece",
    tags: ["Greece", "Islands", "Photography", "Sunset"],
    featured: true,
    author
  },
  {
    id: "kyoto-temple-trails",
    title: "Temple Trails & Tea Houses of Kyoto",
    excerpt: "Kyoto's ancient temples and hidden tea houses offer a window into Japan's soul. A week-long journey through the city's most serene corners.",
    content: `Kyoto is a city that rewards patience. In a country famous for bullet trains and neon-lit streets, this ancient capital moves at the pace of a tea ceremony — deliberate, graceful, and deeply intentional.\n\n## The Philosopher's Path\n\nI began my week walking the Philosopher's Path, a two-kilometer stone path that follows a cherry-tree-lined canal from Ginkaku-ji to Nanzen-ji. In late autumn, the maples along the path were ablaze with crimson and gold. Each temple along the way offered a different meditation on beauty.\n\n## Hidden Tea Houses\n\nThe real treasures of Kyoto are its tea houses, many hidden down narrow alleyways in the Higashiyama district. At Camellia Garden, a 200-year-old machiya townhouse, I experienced my first formal tea ceremony. The matcha was whisked to a perfect froth, served alongside a delicate wagashi sweet shaped like a maple leaf.\n\n## Fushimi Inari at Dawn\n\nEveryone visits Fushimi Inari Shrine, but few make the full hike to the summit. I started at 6 AM, passing through thousands of vermillion torii gates as morning mist curled through the bamboo groves. By the time I reached the top, the city of Kyoto spread below me like a watercolor painting.\n\n## Arashiyama's Bamboo Grove\n\nThe famous bamboo grove is magical but crowded by mid-morning. My tip: enter from the north side via Okochi Sanso Villa garden. The villa's gardens are stunning, and you'll walk through the bamboo grove in the opposite direction from most tourists.\n\n## Where to Eat\n\n- **Nishiki Market**: The "Kitchen of Kyoto" — try the tamagoyaki (rolled omelette) and pickled vegetables.\n- **Kikunoi**: A Michelin three-star kaiseki restaurant that's worth every yen.\n- **Ippudo Ramen**: For a casual, soul-warming bowl of tonkotsu ramen after a long day of temple-hopping.`,
    coverImage: "https://img.vibestack.site/s/kyoto%20temple%20autumn%20japan/1600/900",
    coverQuery: "kyoto temple autumn japan",
    date: "2025-10-28",
    readTime: "10 min read",
    category: "Asia",
    location: "Kyoto, Japan",
    tags: ["Japan", "Temples", "Culture", "Food"],
    featured: true,
    author
  },
  {
    id: "patagonia-end-of-world",
    title: "Patagonia: Hiking to the End of the World",
    excerpt: "Glaciers, granite towers, and guanacos — Patagonia's Torres del Paine is the ultimate adventure for hikers seeking raw, untamed wilderness.",
    content: `The wind in Patagonia doesn't just blow — it roars. Standing at the base of the Torres del Paine, three granite towers piercing a cobalt sky, I understood why this place is called the end of the world.\n\n## The W Trek\n\nI spent five days on the famous W Trek, a 80-kilometer route that winds through the heart of Torres del Paine National Park. Each day brought a completely different landscape: turquoise lakes, ancient glaciers, windswept pampas, and forests of lenga beech trees turning autumn gold.\n\n## Day 1: Grey Glacier\n\nThe trek begins with a boat ride across Lago Grey, where icebergs the size of houses float past in impossible shades of blue. The Grey Glacier itself is a wall of ice stretching 6 kilometers wide. Standing on the viewing platform, I could hear it groaning and cracking — a living, moving river of ice.\n\n## Day 3: The French Valley\n\nThe French Valley was the highlight of the entire trek. A steep climb through forest opens into a natural amphitheater of granite peaks. Avalanches thundered down the surrounding mountains every few minutes, sending plumes of snow into the air. I sat on a boulder for two hours, completely mesmerized.\n\n## Wildlife Encounters\n\nPatagonia's wildlife is remarkably unafraid of humans. I spotted guanacos (wild relatives of llamas) grazing within meters of the trail, Andean condors soaring overhead with their three-meter wingspans, and a gray fox that followed me for half a kilometer, apparently hoping I'd share my lunch.\n\n## Essential Gear\n\n- **Wind protection**: A hardshell jacket is non-negotiable. Winds regularly exceed 100 km/h.\n- **Layers**: Temperatures can swing 20°C in a single day.\n- **Trekking poles**: The terrain is rough and river crossings are frequent.\n- **Book early**: Refugios (mountain huts) fill up months in advance for peak season (December-February).`,
    coverImage: "https://img.vibestack.site/s/patagonia%20torres%20del%20paine%20mountains/1600/900",
    coverQuery: "patagonia torres del paine mountains",
    date: "2025-09-20",
    readTime: "9 min read",
    category: "South America",
    location: "Torres del Paine, Chile",
    tags: ["Hiking", "Adventure", "Nature", "Chile"],
    featured: false,
    author
  },
  {
    id: "marrakech-medina-magic",
    title: "Lost in the Medina: A Week in Marrakech",
    excerpt: "Spice-scented souks, rooftop riads, and the hypnotic call to prayer — Marrakech is a sensory overload in the best possible way.",
    content: `Nothing prepares you for Marrakech. Not the guidebooks, not the Instagram posts, not the well-meaning advice from friends who've been. The moment you step through the gates of the medina, you're swallowed whole by a city that assaults every sense simultaneously.\n\n## The Souks\n\nThe souks of Marrakech are a labyrinth — literally. I spent my first day hopelessly lost, which turned out to be the best thing that could have happened. Every wrong turn revealed something extraordinary: a courtyard filled with hand-painted ceramics, a tiny workshop where a man hammered intricate patterns into brass lanterns, a spice stall where pyramids of saffron and cumin glowed like jewels.\n\n## Riad Life\n\nI stayed at Riad Yasmine, a restored 19th-century townhouse hidden behind an unmarked door in the medina. Inside, a tiled courtyard with a plunge pool, rooms decorated with zellige tilework and carved cedar, and a rooftop terrace with views across the medina to the Atlas Mountains. Moroccan riads are the world's best-kept accommodation secret.\n\n## Jemaa el-Fnaa at Night\n\nThe main square transforms after dark into the world's most chaotic dinner party. Smoke rises from dozens of food stalls, storytellers gather crowds, musicians play gnawa rhythms, and snake charmers compete with henna artists for your attention. I ate lamb tagine at stall number 14 (the locals' favorite) and watched the spectacle unfold.\n\n## Day Trip to the Atlas Mountains\n\nA 90-minute drive from Marrakech, the Atlas Mountains feel like another world entirely. I hiked to the Berber village of Imlil, where terraced fields cling to steep mountainsides and the air smells of juniper and wild thyme. A local family invited me for mint tea and homemade bread — a reminder that Moroccan hospitality is legendary for good reason.\n\n## Tips for the Medina\n\n- **Navigation**: Download offline maps. GPS works in the medina, but street names don't.\n- **Bargaining**: Start at one-third the asking price and work up. It's expected and enjoyed.\n- **Dress code**: Cover shoulders and knees out of respect. A light scarf is invaluable.\n- **Best time**: March-May or September-November. Summer is brutally hot.`,
    coverImage: "https://img.vibestack.site/s/marrakech%20medina%20colorful%20market/1600/900",
    coverQuery: "marrakech medina colorful market",
    date: "2025-08-12",
    readTime: "11 min read",
    category: "Africa",
    location: "Marrakech, Morocco",
    tags: ["Morocco", "Culture", "Food", "Architecture"],
    featured: false,
    author
  },
  {
    id: "iceland-ring-road",
    title: "Driving Iceland's Ring Road in Winter",
    excerpt: "Northern lights, ice caves, and volcanic landscapes — driving Iceland's Route 1 in winter is an otherworldly experience for the adventurous.",
    content: `Most people drive Iceland's Ring Road in summer, when the days are endless and the roads are clear. I chose February — and it was the best travel decision I've ever made.\n\n## The Northern Lights\n\nOn my second night, camped near Vík, the sky erupted in green. The aurora borealis danced overhead for three hours, curtains of emerald light rippling across the stars. I stood in the snow, neck craned upward, tears streaming down my face. Some experiences are beyond words.\n\n## Crystal Ice Cave\n\nThe ice caves beneath Vatnajökull glacier are only accessible in winter, and they're worth the entire trip. Inside, the ice glows an impossible electric blue, sculpted by meltwater into cathedral-like chambers. Our guide told us the cave would be completely different in a week — these formations are constantly shifting.\n\n## Diamond Beach\n\nAt Jökulsárlón glacier lagoon, icebergs calve from the glacier and float out to sea. Some wash back onto the black sand beach, where they sit like enormous diamonds scattered on velvet. At sunrise, the ice catches the light and glows pink, gold, and blue.\n\n## Practical Winter Driving Tips\n\n- **Vehicle**: A 4WD is absolutely essential. I rented a Toyota Land Cruiser.\n- **Daylight**: Only 5-6 hours of daylight in February. Plan driving accordingly.\n- **Road conditions**: Check road.is every morning. Roads can close without warning.\n- **Emergency kit**: Carry extra food, water, blankets, and a fully charged phone.\n- **Fuel**: Fill up at every gas station. Distances between them can be 200+ km in the north.`,
    coverImage: "https://img.vibestack.site/s/iceland%20northern%20lights%20winter/1600/900",
    coverQuery: "iceland northern lights winter",
    date: "2025-07-05",
    readTime: "7 min read",
    category: "Europe",
    location: "Ring Road, Iceland",
    tags: ["Iceland", "Road Trip", "Winter", "Northern Lights"],
    featured: false,
    author
  },
  {
    id: "bali-rice-terraces",
    title: "Beyond the Beach: Bali's Hidden Interior",
    excerpt: "Forget the beach clubs — Bali's lush interior of rice terraces, sacred temples, and artisan villages is where the island's true spirit lives.",
    content: `Everyone comes to Bali for the beaches. I came for the rice terraces — and found something far more profound.\n\n## Tegallalang Rice Terraces\n\nThe terraces of Tegallalang cascade down a steep valley in emerald steps, each one a perfect mirror reflecting the sky. The Balinese subak irrigation system that feeds these terraces is over 1,000 years old and recognized by UNESCO. Walking along the narrow paths between paddies, with dragonflies darting overhead, I felt connected to something ancient and enduring.\n\n## Ubud's Art Scene\n\nUbud is Bali's cultural heart. I spent three days exploring its galleries, workshops, and performance spaces. At the Agung Rai Museum of Art, traditional Balinese paintings hang alongside contemporary works. In the evening, I watched a Kecak fire dance at the Ubud Palace — 50 men chanting in unison as dancers enacted scenes from the Ramayana.\n\n## Mount Batur Sunrise Trek\n\nThe 4 AM wake-up call was brutal, but watching the sun rise from the rim of an active volcano was transcendent. Lake Batur shimmered below, and on a clear day, you can see all the way to Lombok. Our guide cooked eggs in volcanic steam vents at the summit — the most memorable breakfast of my life.\n\n## Tirta Empul Water Temple\n\nAt this sacred spring temple, Balinese Hindus come to purify themselves in the holy waters. With permission, I joined the ritual, passing through a series of fountains, each one representing a different prayer. The water was ice-cold and the experience was deeply moving, regardless of one's personal beliefs.\n\n## Where to Stay in Ubud\n\n- **Budget**: Saren Indah Hotel — simple but clean, with a rice paddy view for $25/night.\n- **Mid-range**: Bisma Eight — infinity pool overlooking the jungle, stunning design.\n- **Splurge**: Four Seasons Sayan — a riverside resort that feels like a dream.`,
    coverImage: "https://img.vibestack.site/s/bali%20rice%20terraces%20green%20lush/1600/900",
    coverQuery: "bali rice terraces green lush",
    date: "2025-06-18",
    readTime: "9 min read",
    category: "Asia",
    location: "Ubud, Bali",
    tags: ["Bali", "Culture", "Nature", "Temples"],
    featured: false,
    author
  }
];

export const categories = ["All", "Europe", "Asia", "South America", "Africa"];

export function getPostById(id: string): BlogPost | undefined {
  return posts.find(p => p.id === id);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return posts;
  return posts.filter(p => p.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return posts.filter(p => p.featured);
}
