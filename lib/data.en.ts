import {
  paketWisata,
  openTrip,
  armadaMobil,
  armadaMotor,
  galeriItems,
  tourPrices,
  vehiclePrices,
} from "./data";
import type { Locale } from "./i18n";

type Paket = (typeof paketWisata)[number];
type OpenTrip = (typeof openTrip)[number];
type ArmadaMobil = (typeof armadaMobil)[number];
type ArmadaMotor = (typeof armadaMotor)[number];

const paketEn: Record<string, Record<string, unknown>> = {
  "one-day-south-banyuwangi": {
    title: "One Day Tour South Banyuwangi",
    shortTitle: "One Day South Banyuwangi",
    badge: "Exotic Nature & Beaches",
    duration: "1 Day (Full Day)",
    desc: "Explore the wonders of southern Banyuwangi in one day: the ancient De Djawatan forest, the crystal-clear Green Bay (Teluk Hijau), and the golden sunset of Pulau Merah Beach.",
    routes: [{ opsi: "Route", destinasi: "De Djawatan → Green Bay (Teluk Hijau) → Pulau Merah" }],
    highlights: [
      "Entrance tickets to all official attractions",
      "Clean and comfortable full-AC transport",
      "Station / airport / hotel pickup service",
      "Photo & video documentation during the trip",
      "Lunch, experienced driver & local guide",
    ],
    includes: [
      "Entrance tickets to De Djawatan, Green Bay & Pulau Merah",
      "Full-AC transport + fuel + driver",
      "Pickup within Banyuwangi Kota area",
      "1x lunch & mineral water",
      "Photo/video documentation",
      "Licensed local guide",
    ],
    excludes: ["Personal expenses", "Travel insurance", "Guide/driver tipping"],
    terms: [
      "Itinerary may adjust to field conditions",
      "30% deposit to confirm, balance due D-1",
      "Cancellation on D-1 incurs fees per policy",
      "Participants must maintain cleanliness & safety",
    ],
    gear: ["Comfortable clothing", "Sandals/hiking shoes", "Sunscreen", "Change of clothes", "Personal medicine"],
    meetingPoint: "Hotel / Station / Airport within Banyuwangi Kota",
    rundown: [
      { time: "07:00", activity: "Pickup at hotel / station / Banyuwangi airport" },
      { time: "08:30", activity: "Arrive at De Djawatan Forest, photos & exploration" },
      { time: "10:30", activity: "Drive to the Meru Betiri area" },
      { time: "13:00", activity: "Lunch with local Banyuwangi cuisine" },
      { time: "14:00", activity: "Enjoy Green Bay (Teluk Hijau)" },
      { time: "16:30", activity: "Golden hour sunset at Pulau Merah Beach" },
      { time: "19:00", activity: "Drop off back at hotel / station" },
    ],
    faq: [
      { q: "Can Green Bay be visited every day?", a: "Yes, subject to permits and Meru Betiri area conditions." },
      { q: "Are entrance tickets included?", a: "Yes, all destination entrance tickets are included." },
      { q: "What is the minimum number of participants?", a: "Private trip, departs according to your group size." },
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve the *One Day Tour South Banyuwangi* (Rp 450,000/person). Please share schedule availability. Thank you!",
  },
  "one-day-menjangan-baluran": {
    title: "One Day Tour Menjangan & Baluran",
    shortTitle: "One Day Menjangan & Baluran",
    badge: "Safari & Marine",
    duration: "1 Day (Full Day)",
    desc: "Combine snorkeling in the underwater paradise of Menjangan & Tabuhan Islands with a wild savanna safari in Baluran National Park in one full day.",
    routes: [{ opsi: "Route", destinasi: "Menjangan & Tabuhan Islands (Snorkeling) → Baluran National Park" }],
    highlights: [
      "Round-trip boat crossing",
      "Complete snorkeling set & life jacket",
      "Baluran National Park & conservation area tickets",
      "Underwater documentation, lunch & mineral water",
      "Full-AC transport, driver & local guide",
    ],
    includes: [
      "Round-trip boat Menjangan–Tabuhan",
      "Complete snorkeling gear & life jacket",
      "Baluran National Park & conservation tickets",
      "Full-AC transport + fuel + driver",
      "1x lunch & mineral water",
      "Photo/video documentation & guide",
    ],
    excludes: ["Personal expenses", "Travel insurance", "Guide/driver tipping"],
    terms: [
      "Itinerary may adjust to weather & field conditions",
      "30% deposit to confirm, balance due D-1",
      "Participants must follow guide instructions while snorkeling",
      "Cancellation on D-1 incurs fees per policy",
    ],
    gear: ["Swimwear", "Change of clothes", "Sunscreen", "Water sandals", "Personal medicine"],
    meetingPoint: "Hotel / Station / Airport within Banyuwangi Kota",
    rundown: [
      { time: "07:00", activity: "Pickup at hotel / station / Banyuwangi airport" },
      { time: "08:00", activity: "Head to the pier, snorkeling briefing & crossing" },
      { time: "09:00", activity: "Snorkeling at Menjangan Island" },
      { time: "12:00", activity: "Lunch & relax at Tabuhan Island" },
      { time: "14:00", activity: "Head to Baluran National Park gate" },
      { time: "15:00", activity: "Bekol Savanna safari & Bama Beach" },
      { time: "17:30", activity: "Drop off back at hotel / station" },
    ],
    faq: [
      { q: "Is snorkeling safe for beginners?", a: "Yes, accompanied by a guide and life jackets are provided." },
      { q: "Is snorkeling gear provided?", a: "Yes, a complete set is included in the package." },
      { q: "Are Baluran tickets included?", a: "Yes, Baluran National Park tickets are included." },
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve the *One Day Tour Menjangan & Baluran* (Rp 650,000/person). Please share schedule availability. Thank you!",
  },
  "2d1n": {
    title: "2 Days 1 Night Package (2D1N)",
    shortTitle: "2D1N Banyuwangi Package",
    badge: "Most Popular",
    duration: "2 Days 1 Night",
    desc: "A dream combination: witness the world-rare Blue Fire of Kawah Ijen, the shade of the ancient De Djawatan forest, the crystal panorama of Green Bay, and the magical sunset of Red Island.",
    routes: [
      { opsi: "Main Destinations", destinasi: "Kawah Ijen (Blue Fire), De Djawatan, Green Bay, Red Island (Pulau Merah)" },
    ],
    customNote: "Destinations can be adjusted to the agreement and pace of the participants.",
    highlights: [
      "Comfortable accommodation / hotel",
      "Official attraction tickets & Ijen permit",
      "Gas mask respirator & headlamp",
      "Full-AC transport + fuel & round-trip pickup",
      "Snorkeling gear & life jacket",
      "Trip documentation, meals, reliable driver & licensed guide",
    ],
    includes: [
      "1 night accommodation",
      "Attraction tickets & Ijen permit",
      "Gas mask respirator & headlamp",
      "Full-AC transport + fuel & pickup",
      "Snorkeling gear & life jacket",
      "3x meals, documentation, driver & guide",
    ],
    excludes: ["Personal expenses", "Travel insurance", "Guide/driver tipping"],
    terms: [
      "Itinerary may adjust to field conditions",
      "30% deposit to confirm, balance due D-1",
      "Participants must be fit for the Ijen hike",
      "Cancellation on D-1 incurs fees per policy",
    ],
    gear: ["Windbreaker jacket", "Trekking shoes", "Change of clothes", "Personal medicine"],
    meetingPoint: "Hotel / Station / Airport within Banyuwangi Kota",
    rundown: [
      { day: "Day 1", time: "08:00", activity: "Pickup & head to De Djawatan" },
      { day: "Day 1", time: "10:00", activity: "Explore De Djawatan Forest" },
      { day: "Day 1", time: "13:00", activity: "Lunch & drive south" },
      { day: "Day 1", time: "15:00", activity: "Green Bay (Teluk Hijau)" },
      { day: "Day 1", time: "17:30", activity: "Pulau Merah sunset & hotel check-in" },
      { day: "Day 2", time: "00:00", activity: "Depart for Paltuding Ijen" },
      { day: "Day 2", time: "02:00", activity: "Kawah Ijen trek & Blue Fire" },
      { day: "Day 2", time: "06:00", activity: "Turquoise lake sunrise" },
      { day: "Day 2", time: "09:30", activity: "Return to hotel & freshen up" },
      { day: "Day 2", time: "13:00", activity: "Souvenirs & drop off at airport/station" },
    ],
    faq: [
      { q: "Is accommodation included in the price?", a: "Yes, 1 night of accommodation is included." },
      { q: "Can destinations be customized?", a: "Yes, destinations can be adjusted by agreement with participants." },
      { q: "Is a gas mask provided?", a: "Yes, gas mask respirator & headlamp are provided." },
    ],
    waMessage:
      "Hello INDOTRANS! I am interested in the *2 Days 1 Night Package (2D1N)* (Rp 1,500,000/person). Please share date availability and accommodation details. Thank you!",
  },
  "3d2n": {
    title: "3 Days 2 Nights Package (3D2N)",
    shortTitle: "Ultimate 3D2N All-In",
    badge: "Best Value / Complete",
    duration: "3 Days 2 Nights",
    desc: "A complete, uncompromising holiday experience! Explore all of Banyuwangi's masterpieces: Ijen blue fire, Baluran savanna safari, the underwater paradise of Menjangan & Tabuhan, and the exotic southern beaches.",
    routes: [
      {
        opsi: "Complete Destinations",
        destinasi:
          "Kawah Ijen (Blue Fire), Baluran National Park, Menjangan & Tabuhan Islands (Snorkeling), De Djawatan, Green Island, Red Island",
      },
    ],
    highlights: [
      "2 nights in clean & comfortable star-rated hotels",
      "Boat & snorkeling permits for Menjangan & Tabuhan",
      "Complete snorkeling set, fins, mask & life jacket",
      "International-quality Ijen gas mask respirator",
      "Full-AC transport, fuel & free 24-hour pickup",
      "Photo/video documentation, scheduled meals, driver & licensed guide",
    ],
    includes: [
      "2 nights accommodation",
      "Menjangan–Tabuhan boat & snorkeling permits",
      "Complete snorkeling gear set",
      "Ijen gas mask respirator",
      "Full-AC transport, fuel & pickup",
      "7x meals, documentation, driver & guide",
    ],
    excludes: ["Personal expenses", "Travel insurance", "Guide/driver tipping"],
    terms: [
      "Itinerary may adjust to field conditions",
      "30% deposit to confirm, balance due D-1",
      "Participants must be fit for the Ijen hike",
      "Cancellation on D-1 incurs fees per policy",
    ],
    gear: ["Windbreaker jacket", "Trekking shoes", "Swimwear", "Change of clothes", "Personal medicine"],
    meetingPoint: "Hotel / Station / Airport within Banyuwangi Kota",
    rundown: [
      { day: "Day 1", time: "08:00", activity: "Pickup & head to De Djawatan" },
      { day: "Day 1", time: "13:00", activity: "Lunch & head to Green Island" },
      { day: "Day 1", time: "17:30", activity: "Pulau Merah sunset & hotel check-in" },
      { day: "Day 2", time: "07:00", activity: "Head to Baluran National Park" },
      { day: "Day 2", time: "09:00", activity: "Bekol Savanna & Bama Beach" },
      { day: "Day 2", time: "14:30", activity: "Snorkeling at Menjangan & Tabuhan Islands" },
      { day: "Day 2", time: "17:30", activity: "Return to hotel" },
      { day: "Day 3", time: "00:00", activity: "Depart for Paltuding Ijen" },
      { day: "Day 3", time: "04:00", activity: "Blue Fire & turquoise lake sunrise" },
      { day: "Day 3", time: "10:00", activity: "Return to hotel, breakfast & freshen up" },
      { day: "Day 3", time: "14:00", activity: "Souvenirs & drop off at airport/station" },
    ],
    faq: [
      { q: "Are all main destinations included?", a: "Yes, Ijen, Baluran, Menjangan, Tabuhan, Djawatan, Green Island & Pulau Merah are included." },
      { q: "Are 2 nights of accommodation included?", a: "Yes, 2 nights of accommodation are included." },
      { q: "Is it suitable for families?", a: "Yes, the itinerary can be adjusted to the participants' pace." },
    ],
    waMessage:
      "Hello INDOTRANS! I would like to book the *3 Days 2 Nights Package (3D2N) Best Value* (Rp 1,800,000/person). Please share promo offers and unit availability. Thank you!",
  },
};

const openTripEn: Record<string, Record<string, unknown>> = {
  "kawah-ijen": {
    title: "Midnight Open Trip Kawah Ijen Blue Fire",
    shortTitle: "Kawah Ijen Open Trip",
    badge: "Open Trip",
    duration: "8 – 10 Hours (Midnight)",
    desc: "Join other travelers to witness the Blue Fire of Kawah Ijen at a more economical price. Perfect for solo travelers and couples.",
    routes: [
      { opsi: "Route", destinasi: "Banyuwangi Kota → Paltuding → Kawah Ijen (Blue Fire & Sunrise Point)" },
    ],
    jadwal: "Departs daily — no minimum participants",
    highlights: [
      "Free gas mask respirator & headlamp",
      "Official permit & local guide",
      "Shared full-AC transport + fuel",
      "Pickup within Banyuwangi Kota",
      "Mineral water & hiking snacks",
    ],
    includes: [
      "Transport during the tour",
      "Kawah Ijen entrance ticket",
      "Gas mask respirator",
      "Headlamp/senter",
      "Driver as guide",
      "Mineral water & snack",
      "Pickup within Banyuwangi Kota",
    ],
    excludes: ["Personal expenses", "Insurance", "Guide/driver tipping"],
    terms: [
      "Itinerary may change due to field conditions",
      "30% deposit to confirm, balance due D-1",
      "Age limit 5–60 years in good health",
      "Price is for Indonesian citizens; foreigners pay +Rp 150,000",
    ],
    gear: ["Windbreaker jacket", "Trekking shoes", "Personal mask", "Gloves", "Personal medicine"],
    meetingPoint: "Meeting point Banyuwangi Kota (hotel/station in the city area)",
    rundown: [
      { time: "00:10", activity: "Pickup at hotel / station in Banyuwangi Kota" },
      { time: "00:30", activity: "Depart for Paltuding" },
      { time: "01:30", activity: "Arrive at Paltuding, ticket confirmation & health check" },
      { time: "02:00", activity: "Start trekking with guide to the crater rim" },
      { time: "04:00", activity: "Summit — witness Blue Fire / Sunrise Point" },
      { time: "06:00", activity: "Descend back to Paltuding" },
      { time: "08:00", activity: "Drop off back at hotel / station — trip ends" },
    ],
    faq: [
      { q: "Is the trip guaranteed to depart?", a: "Yes, it departs daily with no minimum participants." },
      { q: "Can solo travelers join?", a: "Yes, participants will be grouped with other travelers." },
      { q: "Is the price different for foreigners?", a: "Yes, foreigners pay +Rp 150,000 from the Indonesian price." },
    ],
    waMessage:
      "Hello INDOTRANS! I would like to join the *Kawah Ijen Open Trip* (Indonesian Rp 250,000 / Foreign Rp 400,000 per person). Please share the nearest departure schedule and remaining quota. Thank you!",
  },
  "baluran": {
    title: "Baluran National Park Safari Open Trip (Africa van Java)",
    shortTitle: "Baluran Open Trip",
    badge: "Open Trip",
    duration: "1 Day (Full Day)",
    desc: "Experience the African savanna sensation in East Java with a small group. Explore Bekol Savanna, Bama Beach, and the ancient mangrove forest.",
    routes: [
      { opsi: "Route", destinasi: "Baluran National Park Gate → Bekol Savanna → Bama Beach → Mangrove Forest" },
    ],
    jadwal: "Departs daily (min. 4 participants)",
    highlights: [
      "Official Baluran National Park ticket",
      "Shared full-AC transport + fuel",
      "Friendly & informative driver-guide",
      "Pickup within Banyuwangi Kota",
      "Cold mineral water during the trip",
    ],
    includes: [
      "Baluran National Park ticket",
      "Shared full-AC transport + fuel",
      "Driver cum guide",
      "Pickup within Banyuwangi Kota",
      "Mineral water",
    ],
    excludes: ["Personal expenses", "Insurance", "Lunch", "Guide/driver tipping"],
    terms: [
      "Itinerary may change due to field conditions",
      "30% deposit to confirm, balance due D-1",
      "Departs with a minimum of 4 participants",
      "Price is for Indonesian citizens; foreigners pay +Rp 150,000",
    ],
    gear: ["Comfortable clothing", "Hat & sunscreen", "Sandals/shoes", "Personal medicine"],
    meetingPoint: "Meeting point Banyuwangi Kota (hotel/station in the city area)",
    rundown: [
      { time: "08:00", activity: "Pickup at Banyuwangi meeting point" },
      { time: "09:30", activity: "Arrive at Baluran National Park gate" },
      { time: "10:30", activity: "Bekol Savanna safari & viewing tower" },
      { time: "12:00", activity: "Lunch with local Banyuwangi cuisine" },
      { time: "13:30", activity: "Bama Beach & mangrove trail" },
      { time: "17:30", activity: "Drop off Banyuwangi Kota" },
    ],
    faq: [
      { q: "Does the trip depart daily?", a: "Yes, with a minimum of 4 participants per departure." },
      { q: "Is the entrance ticket included?", a: "Yes, the Baluran National Park ticket is included." },
      { q: "Is the price different for foreigners?", a: "Yes, foreigners pay +Rp 150,000 from the Indonesian price." },
    ],
    waMessage:
      "Hello INDOTRANS! I would like to join the *Baluran Open Trip* (Indonesian Rp 300,000 / Foreign Rp 450,000 per person). Please share the nearest departure schedule and remaining quota. Thank you!",
  },
  "menjangan-tabuhan": {
    title: "Menjangan & Tabuhan Snorkeling Open Trip",
    shortTitle: "Menjangan Open Trip",
    badge: "Weekend Open Trip",
    duration: "1 Day (Full Day)",
    desc: "Share the experience of diving in the underwater paradise of Menjangan and relax on the white sand of uninhabited Tabuhan Island.",
    routes: [
      { opsi: "Route", destinasi: "Bangsring Pier → Menjangan Island (snorkeling) → Tabuhan Island" },
    ],
    jadwal: "Weekends only (Saturday & Sunday), min. 3 participants",
    highlights: [
      "Round-trip boat crossing",
      "Complete snorkeling set & life jacket",
      "Conservation area entrance ticket",
      "Underwater documentation & lunch",
      "Experienced snorkeling guide",
    ],
    includes: [
      "Round-trip boat Menjangan–Tabuhan",
      "Snorkeling gear & life jacket",
      "Conservation area entrance ticket",
      "Lunch & mineral water",
      "Underwater documentation & guide",
    ],
    excludes: ["Personal expenses", "Insurance", "Guide/driver tipping"],
    terms: [
      "Departures only on Saturday & Sunday",
      "Minimum 3 participants per departure",
      "30% deposit to confirm, balance due D-1",
      "Price is for Indonesian citizens; foreigners pay +Rp 150,000",
    ],
    gear: ["Swimwear", "Change of clothes", "Sunscreen", "Water sandals", "Personal medicine"],
    meetingPoint: "Meeting point Banyuwangi Kota (hotel/station in the city area)",
    rundown: [
      { time: "07:30", activity: "Pickup at Banyuwangi meeting point" },
      { time: "09:00", activity: "Cross to Menjangan Island, snorkeling" },
      { time: "12:00", activity: "Lunch & rest at Tabuhan Island" },
      { time: "14:00", activity: "Leisurely snorkeling & underwater photos" },
      { time: "16:00", activity: "Return to mainland Banyuwangi" },
      { time: "17:30", activity: "Drop off at meeting point" },
    ],
    faq: [
      { q: "When does this open trip depart?", a: "Weekends only (Saturday & Sunday)." },
      { q: "What is the minimum number of participants?", a: "Minimum 3 participants per departure." },
      { q: "Is the price different for foreigners?", a: "Yes, foreigners pay +Rp 150,000 from the Indonesian price." },
    ],
    waMessage:
      "Hello INDOTRANS! I would like to join the *Menjangan & Tabuhan Open Trip* (Indonesian Rp 325,000 / Foreign Rp 475,000 per person, weekend). Please share schedule and remaining quota. Thank you!",
  },
};

const armadaMobilEn: Record<string, Record<string, unknown>> = {
  alphard: {
    badge: "Ultra Luxury VIP",
    unit: "/ Day (All-In)",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "armchair", label: "Captain Seat" },
      { icon: "shield", label: "VIP Sunroof" },
    ],
    perks: [
      "Top-class comfort for officials & VIP guests",
      "Includes a professional, well-dressed driver + fuel",
      "Extra-soft suspension & super-silent cabin",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Toyota Alphard New Rental* (Rp 4,000,000/day). Please share unit availability and schedule. Thank you!",
  },
  fortuner: {
    badge: "Tough & Bold",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "mountain", label: "Ground Clearance" },
      { icon: "shield", label: "Safety Features" },
    ],
    perks: [
      "Powerful enough to conquer the Paltuding Ijen climb",
      "Bold & authoritative design for business trips",
      "Self Drive or with Driver options",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Toyota Fortuner VRZ Rental* (Rp 1,100,000/24 hours). Please share unit availability. Thank you!",
  },
  zenix: {
    badge: "Modern & Premium",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "zap", label: "Hybrid Engine" },
      { icon: "armchair", label: "Modern Cabin" },
    ],
    perks: [
      "Latest-generation Innova with fuel-efficient hybrid technology",
      "Quiet cabin, comfortable and luxurious TNGA suspension",
      "Advanced Toyota Safety Sense features",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Toyota Innova Zenix Rental* (Rp 850,000/24 hours). Please share unit availability. Thank you!",
  },
  reborn: {
    badge: "Family Favorite",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "briefcase", label: "4 Suitcases" },
      { icon: "fuel", label: "Fuel-Efficient Diesel" },
    ],
    perks: [
      "Most sought-after by travelers for family trips in Banyuwangi",
      "Max-cold double blower AC, spacious luggage",
      "Free pickup at train station / airport / hotel",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Toyota Innova Reborn Rental* (Rp 550,000/24 hours). Please share unit availability and driver options. Thank you!",
  },
  "hiace-premio": {
    badge: "VIP Group",
    unit: "/ Day (All-In)",
    specs: [
      { icon: "users", label: "12 – 14 Seats" },
      { icon: "armchair", label: "Reclining Seat" },
      { icon: "tv", label: "Karaoke & USB" },
    ],
    perks: [
      "Spacious cabin, soft reclining seats, and premium insulation",
      "Includes a friendly professional driver + fuel",
      "Ideal for corporate tour groups & large families",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *HiAce Premio Luxury Rental* (Rp 1,200,000/day). Please share unit availability and schedule. Thank you!",
  },
  "hiace-commuter": {
    badge: "Economical Group",
    unit: "/ Day (All-In)",
    specs: [
      { icon: "users", label: "15 Seats" },
      { icon: "snowflake", label: "Ducting AC" },
      { icon: "fuel", label: "Durable Diesel" },
    ],
    perks: [
      "Maximum capacity of up to 15 passengers",
      "Package includes an experienced driver + fuel",
      "The most economical choice for Banyuwangi tour groups",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *HiAce Commuter Rental* (Rp 1,000,000/day). Please share unit availability. Thank you!",
  },
  xpander: {
    badge: "Stylish & Spacious",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "mountain", label: "Ground Clearance" },
      { icon: "snowflake", label: "Soundproof Cabin" },
    ],
    perks: [
      "Modern sporty design with the most spacious cabin in its class",
      "Soft suspension, comfortable for intercity routes around Banyuwangi",
      "Easy self-drive requirements & lightning-fast confirmation",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Mitsubishi Xpander Rental* (Rp 450,000/24 hours). Please share unit availability. Thank you!",
  },
  veloz: {
    badge: "Modern Elegance",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "shield", label: "Electronic Brake" },
      { icon: "smartphone", label: "Wireless Charge" },
    ],
    perks: [
      "Premium features with electronic parking brake and luxurious interior",
      "Very agile in the city and on coastal tour routes",
      "Free pickup at Banyuwangi Kota / Ketapang Station",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Toyota All New Veloz Rental* (Rp 450,000/24 hours). Please share unit availability. Thank you!",
  },
  avanza: {
    badge: "Most Popular",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "fuel", label: "Very Fuel-Efficient" },
      { icon: "snowflake", label: "Cold AC" },
    ],
    perks: [
      "The ideal family car: economical, reliable, and powerful",
      "Evenly cold AC and flexible sofa-mode luggage",
      "Self drive or all-in package with driver",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Toyota All New Avanza Rental* (Rp 350,000/24 hours). Please share unit availability. Thank you!",
  },
  xenia: {
    badge: "Reliable & Economical",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "7 Seats" },
      { icon: "fuel", label: "Fuel-Efficient" },
      { icon: "snowflake", label: "Double Blower" },
    ],
    perks: [
      "An economical choice with a spacious and roomy cabin",
      "Prime condition, fragrant, and always cleaned regularly",
      "Free delivery to hotels or accommodations in Banyuwangi",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Daihatsu All New Xenia Rental* (Rp 350,000/24 hours). Please share unit availability. Thank you!",
  },
  brio: {
    badge: "Agile City Car",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "5 Seats" },
      { icon: "zap", label: "Agile & Powerful" },
      { icon: "fuel", label: "Very Economical" },
    ],
    perks: [
      "The most practical choice for solo travelers or couples",
      "Agile handling and very easy to maneuver on city streets",
      "Budget-friendly rental rate with Honda engine performance",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Honda Brio Rental* (Rp 300,000/24 hours). Please share unit availability. Thank you!",
  },
  agya: {
    badge: "Compact & Economical",
    unit: "/ 24 Hours",
    specs: [
      { icon: "users", label: "5 Seats" },
      { icon: "fuel", label: "Super Economical" },
      { icon: "snowflake", label: "Cold AC" },
    ],
    perks: [
      "Very fuel-efficient for getting around Banyuwangi",
      "Sporty and modern look with luggage space for 2 suitcases",
      "Perfect for a hassle-free budget holiday",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Toyota All New Agya Rental* (Rp 300,000/24 hours). Please share unit availability. Thank you!",
  },
};

const armadaMotorEn: Record<string, Record<string, unknown>> = {
  nmax: {
    badge: "Maxi Touring",
    unit: "/ 24 Hours",
    specs: [
      { icon: "zap", label: "155cc Power" },
      { icon: "package", label: "Spacious Storage" },
      { icon: "smartphone", label: "Phone Charger" },
    ],
    perks: [
      "The strongest and most stable for the steep Paltuding Ijen climb",
      "Free 2 clean SNI helmets + 2 quality raincoats",
      "Equipped with a phone holder for Google Maps navigation",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Yamaha NMax 155 Rental* (Rp 110,000/24 hours). Please share unit availability. Thank you!",
  },
  pcx: {
    badge: "Luxury & Comfort",
    unit: "/ 24 Hours",
    specs: [
      { icon: "armchair", label: "Wide Soft Seat" },
      { icon: "shield", label: "Safe ABS Brake" },
      { icon: "key", label: "Smart Keyless" },
    ],
    perks: [
      "Relaxed riding position, fatigue-free for long distances",
      "Free 2 fragrant SNI helmets + emergency raincoat",
      "Free pickup within Banyuwangi Kota Station area",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Honda PCX 160 ABS Rental* (Rp 115,000/24 hours). Please share unit availability. Thank you!",
  },
  vario: {
    badge: "Sporty & Agile",
    unit: "/ 24 Hours",
    specs: [
      { icon: "zap", label: "Responsive Pull" },
      { icon: "fuel", label: "eSP+ Economical" },
      { icon: "package", label: "Helmet-In Storage" },
    ],
    perks: [
      "Agile for city culinary tours & beach trips",
      "Free 2 SNI helmets + 2 raincoats",
      "Fuel-efficient with excellent engine performance",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Honda Vario Rental* (Rp 95,000/24 hours). Please share unit availability. Thank you!",
  },
  stylo: {
    badge: "Retro Modern",
    unit: "/ 24 Hours",
    specs: [
      { icon: "sparkles", label: "Fashion Design" },
      { icon: "zap", label: "160cc Power" },
      { icon: "key", label: "Smart Key" },
    ],
    perks: [
      "The most stylish retro scooter for aesthetic holiday photos",
      "Powerful 160cc engine for uphill routes",
      "Free 2 retro SNI helmets + raincoat",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Honda Stylo 160 Rental* (Rp 110,000/24 hours). Please share unit availability. Thank you!",
  },
  scoopy: {
    badge: "Aesthetic Favorite",
    unit: "/ 24 Hours",
    specs: [
      { icon: "sparkles", label: "Unique Design" },
      { icon: "fuel", label: "Very Economical" },
      { icon: "smartphone", label: "USB Charger" },
    ],
    perks: [
      "Young people's favorite for leisurely city & beach rides",
      "Free 2 clean, fragrant SNI helmets + raincoat",
      "Light, easy to ride, and super fuel-efficient",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Honda Scoopy Rental* (Rp 85,000/24 hours). Please share unit availability. Thank you!",
  },
  beat: {
    badge: "Most Economical",
    unit: "/ 24 Hours",
    specs: [
      { icon: "fuel", label: "Economy Champion" },
      { icon: "zap", label: "Super Light" },
      { icon: "shield", label: "Combi Brake" },
    ],
    perks: [
      "The most economical choice for fast mobility in Banyuwangi",
      "Free 2 SNI helmets + complete raincoat",
      "On-time unit pickup/delivery to stations / accommodations",
    ],
    waMessage:
      "Hello INDOTRANS! I would like to reserve *Honda BeAT Rental* (Rp 75,000/24 hours). Please share unit availability. Thank you!",
  },
};

const galeriEn: Record<string, { title: string; desc: string }> = {
  "/images/destinasi/kawahijen.jpg": { title: "Kawah Ijen Blue Fire", desc: "Turquoise Acid Lake & World-Legendary Blue Fire" },
  "/images/destinasi/baluran.jpg": { title: "Bekol Savanna", desc: "The Wild Atmosphere of Africa van Java" },
  "/images/destinasi/djawatan.jpg": { title: "De Djawatan", desc: "The Mystical Lord of the Rings Forest" },
  "/images/destinasi/pulaumerah.jpg": { title: "Pulau Merah", desc: "Exotic Golden Hour Sunset" },
  "/images/destinasi/menjangan.jpg": { title: "Menjangan Island", desc: "Underwater Paradise of the Bali Strait" },
  "/images/destinasi/telukhijau.jpg": { title: "Green Bay", desc: "Hidden Crystal Beach" },
  "/images/destinasi/tabuhan.jpg": { title: "Tabuhan Island", desc: "Uninhabited White Sand Island" },
  "/images/destinasi/pantaibama.jpg": { title: "Bama Beach", desc: "Exotic Beach within Baluran Savanna" },
  "/images/destinasi/greenisland.jpg": { title: "Green Island", desc: "Turquoise Water & Panoramic Peak" },
  "/images/destinasi/alaspurwo.jpg": { title: "Alas Purwo", desc: "Ancient Forest & Wild Savanna" },
  "/images/destinasi/airterjunjagir.jpg": { title: "Jagir Waterfall", desc: "Exotic Tropical Forest Waterfall" },
};

export function getPaketWisata(locale: Locale): Paket[] {
  if (locale === "id") return paketWisata;
  return paketWisata.map((p) => ({ ...p, ...paketEn[p.slug] })) as unknown as Paket[];
}

export function getOpenTrip(locale: Locale): OpenTrip[] {
  if (locale === "id") return openTrip;
  return openTrip.map((p) => ({ ...p, ...openTripEn[p.slug] })) as unknown as OpenTrip[];
}

export function getArmadaMobil(locale: Locale): ArmadaMobil[] {
  if (locale === "id") return armadaMobil;
  return armadaMobil.map((u) => ({ ...u, ...armadaMobilEn[u.id] })) as unknown as ArmadaMobil[];
}

export function getArmadaMotor(locale: Locale): ArmadaMotor[] {
  if (locale === "id") return armadaMotor;
  return armadaMotor.map((u) => ({ ...u, ...armadaMotorEn[u.id] })) as unknown as ArmadaMotor[];
}

export function getGaleriItems(locale: Locale) {
  if (locale === "id") return galeriItems;
  return galeriItems.map((g) => ({ ...g, ...(galeriEn[g.image] ?? {}) }));
}

export function getTourPrices(locale: Locale) {
  if (locale === "id") return tourPrices;
  const names: Record<string, string> = {
    "one-day-south": "One Day Tour South Banyuwangi",
    "one-day-east": "One Day Tour Menjangan & Baluran",
    "2d1n": "2 Days 1 Night Package (2D1N)",
    "3d2n": "3 Days 2 Nights Package (3D2N) Best Value",
    "ot-ijen": "Kawah Ijen Open Trip",
    "ot-baluran": "Baluran Open Trip",
    "ot-menjangan": "Menjangan & Tabuhan Open Trip (Weekend)",
  };
  return Object.fromEntries(
    Object.entries(tourPrices).map(([k, v]) => [k, { ...v, name: names[k] ?? v.name }])
  );
}

export function getVehiclePrices(locale: Locale) {
  if (locale === "id") return vehiclePrices;
  const names: Record<string, string> = {
    alphard: "Toyota Alphard New",
    "hiace-premio": "Toyota HiAce Premio Luxury (14 Seats)",
    "fortuner-vrz": "Toyota Fortuner VRZ 4x4",
    "hiace-commuter": "Toyota HiAce Commuter (15 Seats)",
    zenix: "Toyota Innova Zenix Hybrid",
    "innova-reborn": "Toyota Innova Reborn",
    xpander: "Mitsubishi Xpander Cross",
    veloz: "Toyota All New Veloz",
    "avanza-facelift": "Toyota All New Avanza",
    xenia: "Daihatsu All New Xenia",
    brio: "Honda All New Brio RS",
    agya: "Toyota All New Agya GR",
    "pcx-160": "Honda PCX 160 ABS",
    "nmax-155": "Yamaha NMax 155 Connected",
    "stylo-160": "Honda Stylo 160",
    vario: "Honda Vario 160 / 125",
    "scoopy-smart": "Honda Scoopy Prestige",
    beat: "Honda BeAT FI eSP",
  };
  return Object.fromEntries(
    Object.entries(vehiclePrices).map(([k, v]) => [k, { ...v, name: names[k] ?? v.name }])
  );
}
