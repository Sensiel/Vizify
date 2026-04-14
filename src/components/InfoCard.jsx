export function InfoCard({ title, body }) {
  return (
    <article className="info-card card-surface">
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}
