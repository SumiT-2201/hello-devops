import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    'React',
    'Vite',
    'Docker',
    'Docker Compose',
    'AWS Amplify',
    'Kubernetes'
  ];

  return (
    <div className="dashboard-card">
      <header className="header">
        <h1>DevOps Demo Application</h1>
        <p className="message">Hello from my DevOps application!</p>
      </header>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-label">Status</div>
          <div className="info-value badge-status">
            <span className="status-dot"></span>
            Running
          </div>
        </div>

        <div className="info-card">
          <div className="info-label">Version</div>
          <div className="info-value">1.0.0</div>
        </div>

        <div className="info-card">
          <div className="info-label">Environment</div>
          <div className="info-value">Production</div>
        </div>
      </div>

      <section className="tech-section">
        <h3>Technology Stack</h3>
        <div className="tech-tags">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <footer className="time-section">
        <span>Current Browser Time:</span>
        <span className="time-value">{time}</span>
      </footer>
    </div>
  );
}

export default App;
