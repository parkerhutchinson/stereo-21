import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";

interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state: {colorScheme: {highlight}}} = useContext(GlobalContext);
  return (
    <>
      {props.children}
    </>
  )
}

export default Main;
