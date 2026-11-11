import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prathamesh Langar — Developer & Builder",
  description: "I build thoughtful software across web development, cybersecurity, and local-first AI.",
  openGraph: { title: "Prathamesh Langar — Developer & Builder", description: "Understand the system. Build what matters.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}