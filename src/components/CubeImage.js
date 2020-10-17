import React, { useRef, useEffect } from 'react';
import { cubeSVG } from 'sr-visualizer';

function CubeImage({ eventId = '333', alg = null, size = 150 }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const svg = root.firstChild;
    if (svg) {
      root.removeChild(svg);
    }

    const cubeSize = {
      '222': 2,
      '333': 3,
      '333oh': 3,
      '333bf': 3,
      '333fm': 3,
      '444': 4,
      '555': 5,
      '666': 6,
      '777': 7,
    }[eventId];

    if (cubeSize === undefined) return;

    cubeSVG(rootRef.current, {
      height: size,
      width: size,
      viewportRotations: [
        [1, 34],
        [0, -34],
      ],
      algorithm: alg,
      colorScheme: {
        0: '#FFFFFF',
        1: '#EE0000',
        2: '#00D800',
        3: '#FEFE00',
        4: '#FFA100',
        5: '#0000F2',
      },
      cubeSize,
    });
  }, [eventId, alg, size]);

  return <div ref={rootRef} />;
}

export default CubeImage;
