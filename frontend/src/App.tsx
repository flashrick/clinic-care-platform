import { useEffect, useState } from "react";

type HealthData = {
  status: string;
  service: string;
};

function App() {
  const [health, setHealth] = useState<HealthData | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch("/health/");
        if (!response.ok) {
          throw new Error("Health endpoint did not return success.");
        }
        const data = (await response.json()) as HealthData;
        setHealth(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown health check error.");
      }
    };

    void checkHealth();
  }, []);

  return (
    <main className="app-shell font-body">
      <div className="grain" aria-hidden="true" />
      <section className="hero-panel">
        <p className="kicker">Sprint 1 Baseline</p>
        <h1 className="headline font-display">Clinic Care Platform</h1>
        <p className="subhead">
          Backend and frontend scaffolding is ready with PostgreSQL configuration and live
          health status.
        </p>

        <div className="status-grid">
          <article className="status-card">
            <h2>Backend</h2>
            <p>Django + DRF scaffold</p>
          </article>
          <article className="status-card">
            <h2>Frontend</h2>
            <p>Vite + React + TypeScript scaffold</p>
          </article>
          <article className="status-card">
            <h2>Database</h2>
            <p>PostgreSQL wired via environment variables</p>
          </article>
        </div>

        <div className="health-row">
          <span className="label">/health</span>
          {health ? (
            <span className="badge badge-success badge-lg">
              {health.status} · {health.service}
            </span>
          ) : error ? (
            <span className="badge badge-error badge-lg">{error}</span>
          ) : (
            <span className="badge badge-info badge-lg">Checking backend...</span>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
