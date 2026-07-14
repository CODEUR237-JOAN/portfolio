import React, { useMemo } from 'react';

const ParticlesBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 20 + 15}s`,
      delay: `${Math.random() * 15}s`,
      opacity: Math.random() * 0.15 + 0.05,
    }));
  }, []);

  return (
    <>
      <div className="mesh-gradient" />
      <div className="particles-container">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ParticlesBackground;
