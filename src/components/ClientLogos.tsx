import styles from "./ClientLogos.module.css";

/* PLACEHOLDER: Replace the dummy company names and wordmarks below with real client logos before launch */
const clients = [
  { id: "cl-1", name: "NovaTech", color: "#6C4CF1" },
  { id: "cl-2", name: "EcoMart", color: "#22C55E" },
  { id: "cl-3", name: "FinFlow", color: "#FF6B57" },
  { id: "cl-4", name: "PlaySphere", color: "#0EA5E9" },
  { id: "cl-5", name: "UrbanPulse", color: "#F59E0B" },
  { id: "cl-6", name: "HealthLoop", color: "#EC4899" },
];

export default function ClientLogos() {
  return (
    <section className={styles.wrapper} aria-label="Trusted by clients">
      <p className={styles.label}>Trusted by fast-growing teams worldwide</p>
      {/* PLACEHOLDER: replace with real client logo SVGs/images before launch */}
      <div className={styles.logoRow}>
        {clients.map((client) => (
          <div key={client.id} className={styles.logoItem}>
            <span className={styles.wordmark} style={{ color: client.color }}>
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
