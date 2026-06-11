import type { Metadata } from "next";
import { TutorPage } from "./TutorPage";

export const metadata: Metadata = {
  // Hidden from search engines — discoverable only by people I share the URL with.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  title: "Mr Furness — Private Tutor",
  description:
    "Private maths and English tuition with a British primary school teacher.",
};

export default function Page() {
  return <TutorPage />;
}
