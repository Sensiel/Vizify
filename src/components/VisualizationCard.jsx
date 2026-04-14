export function VisualizationCard({ title, description }) {
  return (
    <article className="viz-card card-surface">
      <div className="viz-card-header">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <span className="placeholder-badge">Placeholder</span>
      </div>

      <div className="viz-placeholder">
        <div className="placeholder-frame">
          <span>Visualization container</span>
        </div>
      </div>

      <p className="implementation-note">
        {/* Dataset loading, D3 chart mount point, and linked interactions will be added here. */}
        Reserved for future data-driven rendering and interactive chart behavior.
      </p>
    </article>
  );
}
