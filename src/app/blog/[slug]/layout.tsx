import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // offset navbar height
  return <section className="p-4 sm:p-10">{children}</section>;
}
