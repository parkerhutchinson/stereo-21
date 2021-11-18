import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import {StyledBackground} from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";

interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state: {colorScheme: {bioBackgroundColor}}} = useContext(GlobalContext);
  return (
    <StyledBackground color={bioBackgroundColor}>
      {props.children}
    </StyledBackground>
  )
}

export default Main;
