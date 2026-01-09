import { useRef, useEffect } from 'react';
import { useSnowfall } from '@/hooks/useGSAP';

const Snowfall = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useSnowfall(containerRef);

  return (
    <div
      ref={containerRef}
      className="snowfall-container"
      aria-hidden="true"
    />
  );
};

export default Snowfall;
