export function SectionShell({ id, title, subtitle, className = "", children }) {
  const sectionClassName = ["content-section", className].filter(Boolean).join(" ");

  return (
    <section id={id} className={sectionClassName}>
      {(title || subtitle) && (
        <div className="section-heading">
          {title && <h2>{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
