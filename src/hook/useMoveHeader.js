import { useEffect, useState } from 'react';

const useMoveUp = () => {
  const [height, setHeight] = useState(0);

  useEffect(() => {

    return () => {
      // window.removeEventListener('scroll')
    }

  }, [height]);
};
export default useMoveUp;
