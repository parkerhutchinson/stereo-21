import {useState, useEffect} from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";


const useKeycode = () => {
  const [keyName, setkeyName] = useState<any>('')
  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => {
        setkeyName(e.key)
      })
      window.addEventListener('keyup', () => {
        setkeyName('');
      })
    }
  })
  
  return [keyName]
}

export default useKeycode;