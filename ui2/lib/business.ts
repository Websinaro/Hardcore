// Central company + demo content. Replace DEMO values once the client provides real data.
export const business = {
  name: "HARD CORE",
  tagline: "Infrastructure",
  pageTitle: "HARD CORE | Infrastructure",
  themeColor: "#077DF7",
  phones: [
    { label: "+91 73562 11153", href: "tel:+917356211153" },
    { label: "+91 63835 62692", href: "tel:+916383562692" },
  ],
  hours: [
    { days: "Monday – Saturday", time: "09:00 AM – 06:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  website: "https://www.vkard.pro/hard-core",
  // email, address, WhatsApp number: not confirmed — intentionally omitted.
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How it works" },
  { href: "#why", label: "Why us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Areas" },
  { href: "#contact", label: "Contact" },
];

export const services = [
  { id: "metal", title: "Metal Scrap", desc: "Iron, steel, copper and more.", image: "/images/metal.svg" },
  { id: "plastic", title: "Plastic Scrap", desc: "Bottles, containers and more.", image: "/images/plastic.svg" },
  { id: "paper", title: "Paper Scrap", desc: "Books, cartons and more.", image: "/images/paper.svg" },
  { id: "ewaste", title: "E-Waste", desc: "Old electronics and appliances.", image: "/images/ewaste.svg" },
] as const;

export const scrapTypes = ["Metal scrap", "Plastic scrap", "Paper scrap", "E-waste", "Mixed / other"];

export const steps = [
  { title: "Book online", desc: "Fill in the short form with your details." },
  { title: "We contact you", desc: "Our team reaches out to confirm." },
  { title: "Pickup scheduled", desc: "Choose a time that suits you." },
  { title: "Get paid", desc: "Receive payment for your scrap." },
];

export const reasons = ["Clear, fair pricing", "Quick and reliable service", "Eco-friendly recycling", "Professional team"];

// DEMO content — not real customers.
export const reviews = [
  { name: "Customer name", text: "Demo review: replace this with a real customer testimonial.", rating: 5 },
  { name: "Customer name", text: "Demo review: a second placeholder to show the carousel.", rating: 5 },
  { name: "Customer name", text: "Demo review: a third placeholder for layout purposes.", rating: 5 },
];

// DEMO — real service areas to be confirmed by the client.
export const areas = ["Service areas to be confirmed"];
