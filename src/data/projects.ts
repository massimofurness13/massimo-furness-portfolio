export type Tag =
  | "Education"
  | "AI"
  | "Finance"
  | "Data"
  | "Real Estate"
  | "SaaS"
  | "Sports"
  | "Academic";

// "Live"        — clickable, opens a working app
// "Code"        — opens to public source on GitHub
// "Private"     — neither a live URL nor public source available yet
// "In progress" — being built, not ready to show
export type Status = "Live" | "Code" | "Private" | "In progress";

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
    url: "https://flashmind-35q4.onrender.com",
    status: "Live",
    year: "2026",
    image: "/projects/flashmind.png",
  },
  {
    id: "markmate",
    index: "02",
    title: "MarkMate",
    blurb:
      "AI marking assistant for UK primary teachers. Upload student work, get instant marks, misconceptions, and class-level analytics.",
    tags: ["Education", "AI"],
    url: "https://markmate-wmo0.onrender.com",
    status: "Live",
    year: "2026",
    image: "/projects/markmate.svg",
  },
  {
    id: "padel-jersey",
    index: "03",
    title: "Padel Jersey",
    blurb:
      "Padel court booking and player ranking system.",
    tags: ["SaaS", "Sports"],
    url: "#",
    status: "In progress",
    year: "2026",
    image: "/projects/padel-jersey.svg",
  },
  {
    id: "trading-dashboard",
    index: "04",
    title: "Trading Dashboard",
    blurb:
      "End-to-end trading system with custom front-end and back-end.",
    tags: ["Finance", "Data"],
    url: "https://trading-dashboard-j2wt.onrender.com",
    status: "Live",
    year: "2026",
    image: "/projects/trading-dashboard.png",
  },
  {
    id: "medellin-land",
    index: "05",
    title: "Medellín Land Scorer",
    blurb:
      "Geospatial land-value scoring engine for Medellín.",
    tags: ["Real Estate", "Data"],
    url: "https://github.com/massimofurness13/medellin_land_scorer",
    status: "Code",
    year: "2026",
    image: "/projects/medellin-land.svg",
  },
  {
    id: "ptm-maths",
    index: "06",
    title: "PTM Maths Dashboard",
    blurb:
      "Interactive maths progress dashboard for PTM students.",
    tags: ["Education"],
    url: "https://massimofurness13.github.io/PTM_maths_dashboard/",
    status: "Live",
    year: "2026",
    image: "/projects/ptm-maths.png",
  },
  {
    id: "grade5-maths",
    index: "07",
    title: "Grade 5 Maths Dashboard",
    blurb:
      "Grade 5 maths curriculum tracker and practice hub.",
    tags: ["Education"],
    url: "https://massimofurness13.github.io/grade5-maths-dashboard/",
    status: "Live",
    year: "2026",
    image: "/projects/grade5-maths.svg",
  },
  {
    id: "q-tracker",
    index: "08",
    title: "Q-Tracker",
    blurb: "Personal quantitative tracking tool.",
    tags: ["Data"],
    url: "#",
    status: "Private",
    year: "2026",
    image: "/projects/q-tracker.svg",
  },
  {
    id: "msc-projects",
    index: "09",
    title: "MSc Projects",
    blurb: "Selected projects from MSc coursework.",
    tags: ["Academic"],
    url: "https://github.com/massimofurness13/MSc-Projects",
    status: "Code",
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
