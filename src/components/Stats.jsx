export default function Stats() {
  return (
    <section>
      <div className="section-container">
        <div className="stats-grid">
          {[
            { label: "DSA Problems", value: "700+" },
            { label: "Projects", value: "4+" },
            { label: "Technologies", value: "6+" },
            { label: "CGPA", value: "9.6" }
          ].map((s, i) => (
            <div className="card stat-card" key={i}>
              <h2>{s.value}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}