import { useState } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";
const useScreenSize = () => {
  const [winWidth, setWindowWidth] = useState(0);

  useIsomorphicLayoutEffect(()=>{
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', (e) => {
        console.log(window.innerWidth)
        setWindowWidth(window.innerWidth)
      })
    }
  }, [])


  return [winWidth];
}

export default useScreenSize;