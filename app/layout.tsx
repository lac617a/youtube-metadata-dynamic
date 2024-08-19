import "./globals.css";
import { generateMetadata as generateMetadataCustom } from "@/src/metadata";

export const generateMetadata = () => generateMetadataCustom();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
