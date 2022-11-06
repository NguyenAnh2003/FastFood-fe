import { useEffect, useState } from 'react';

const useResize = () => {
  const [size, setSize] = useState({
    width: 1025,
    height: undefined,
  });

  useEffect(() => {
    const handleSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleSize);

    return () => {
      window.removeEventListener('resize', handleSize);
    };

  }, [size]);

  return size;
};

export default useResize;
