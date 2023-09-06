export default function WineDetailsPage({
  params,
}: {
  params: { wine: string };
}) {
  return <div>My Wine {params.wine}</div>;
}
