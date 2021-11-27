import { useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

const useScreenSize = () => {
  const [winWidth, setWindowWidth] = useState(0);

  useIsomorphicLayoutEffect(()=>{
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
      })
    }
  }, []);

  return [winWidth];
}

export default useScreenSize;