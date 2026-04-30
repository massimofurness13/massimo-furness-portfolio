export type Tag =
  | "Education"
  | "AI"
  | "Finance"
  | "Data"
  | "Real Estate"
  | "SaaS"
  | "Sports"
  | "Academic";

export type Status = "Public" | "Private" | "In progress";

export type Project = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  tags: Tag[];
  url: string;
  status: Status;
  year: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    id: "flashmind",
    index: "01",
    title: "FlashMind",
    blurb:
      "AI-powered flashcards with spaced repetition and dual-coding visuals.",
    tags: ["Education", "AI"],
    url: "https://github.com/massimofurness13/ai-flashcard-app",
    status: "Private",
    year: "2026",
    image: "/projects/flashmind.svg",
  },
  {
    id: "padel-jersey",
    index: "02",
    title: "Padel Jersey",
    blurb:
      "Multi-tenant padel court booking platform launching with Island Padel.",
    tags: ["SaaS", "Sports"],
    url: "#",
    status: "In progress",
    year: "2026",
    image: "/projects/padel-jersey.svg",
  },
  {
    id: "trading-dashboard",
    index: "03",
    title: "Trading Dashboard",
    blurb:
      "End-to-end trading system with custom front-end and back-end.",
    tags: ["Finance", "Data"],
    url: "https://github.com/massimofurness13/trading-dashboard",
    status: "Private",
    year: "2026",
    image: "/projects/trading-dashboard.svg",
  },
  {
    id: "medellin-land",
    index: "04",
    title: "Medellín Land Scorer",
    blurb:
      "Geospatial land-value scoring engine for Medellín.",
    tags: ["Real Estate", "Data"],
    url: "https://github.com/massimofurness13/medellin_land_scorer",
    status: "Private",
    year: "2026",
    image: "/projects/medellin-land.svg",
  },
  {
    id: "ptm-maths",
    index: "05",
    title: "PTM Maths Dashboard",
    blurb:
      "Interactive maths progress dashboard for PTM students.",
    tags: ["Education"],
    url: "https://github.com/massimofurness13/PTM_maths_dashboard",
    status: "Public",
    year: "2026",
    image: "/projects/ptm-maths.svg",
  },
  {
    id: "grade5-maths",
    index: "06",
    title: "Grade 5 Maths Dashboard",
    blurb:
      "Grade 5 maths curriculum tracker and practice hub.",
    tags: ["Education"],
    url: "https://github.com/massimofurness13/grade5-maths-dashboard",
    status: "Public",
    year: "2026",
    image: "/projects/grade5-maths.svg",
  },
  {
    id: "q-tracker",
    index: "07",
    title: "Q-Tracker",
    blurb: "Personal quantitative tracking tool.",
    tags: ["Data"],
    url: "https://github.com/massimofurness13/q-tracker",
    status: "Private",
    year: "2026",
    image: "/projects/q-tracker.svg",
  },
  {
    id: "msc-projects",
    index: "08",
    title: "MSc Projects",
    blurb: "Selected projects from MSc coursework.",
    tags: ["Academic"],
    url: "https://github.com/massimofurness13/MSc-Projects",
    status: "Public",
    year: "2023",
    image: "/projects/msc-projects.svg",
  },
];

export const FILTERS: ("All" | Tag)[] = [
  "All",
  "Education",
  "AI",
  "Finance",
  "Data",
  "Real Estate",
  "SaaS",
  "Sports",
  "Academic",
];

export function matchesFilter(project: Project, filter: "All" | Tag): boolean {
  if (filter === "All") return true;
  if (filter === "Education") {
    return project.tags.includes("Education") || project.tags.includes("AI");
  }
  return project.tags.includes(filter);
}
