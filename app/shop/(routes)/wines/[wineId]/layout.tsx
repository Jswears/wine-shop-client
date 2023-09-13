export default function WineDetailsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex items-center justify-center gap-7 bg-white p-7">
      {children}
    </div>
  );
}
