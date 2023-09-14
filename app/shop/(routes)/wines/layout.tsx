export default function WinesPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen mt-12">{children}</div>;
}
