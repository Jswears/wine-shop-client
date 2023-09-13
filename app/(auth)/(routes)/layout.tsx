export default function AuthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-12 h-screen flex">{children}</div>;
}
