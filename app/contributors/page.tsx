import ContributorComponent from "./components/ContributorComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contributors",
    languages: {
      "en-US": "/en-US",
    },
  },

  title: "Contributors | Noterious",
  description:
    "Meet the amazing team behind Noterious—full-stack developers, AI/ML experts, and web creators contributing their skills to make studying smarter and easier.",

  keywords: [
    "Noterious",
    "Contributors",
    "Full Stack Web Developer",
    "AI/ML Developer",
    "Web Developer",
    "Developer Team",
    "Study Tools",
    "Online Notes",
    "Exam Preparation",
    "Student Resources",
  ],

  robots: "index, follow",

  openGraph: {
    title: "Contributors | Noterious",
    description:
      "Discover the talented individuals behind Noterious. Learn about each contributor’s role and how they’ve helped shape this all-in-one study platform.",
    url: `${process.env.NEXTAUTH_URL}/contributors`,
    type: "website",
    siteName: "Noterious",
    images: [
      {
        url: "/OG/opengraph-contributors.png",
        width: 1200,
        height: 630,
        alt: "Noterious Contributors Page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "notesbuddy.in",
    creator: "@Ramxcodes",
    title: "Contributors | Noterious",
    description:
      "Get to know the developers, AI/ML experts, and web creators who’ve made Noterious a reality. Check out their unique contributions!",
  },
};

export default function Page() {
  return (
    <>
      <ContributorComponent />
    </>
  );
}
