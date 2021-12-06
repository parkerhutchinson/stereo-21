import {MutableRefObject} from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {StyledRichText} from "./styles";

interface Props {
  body: any
  propRef?: any
  className?: string
}

const RichText = (props:Props) => {
  return (
    <StyledRichText ref={props.propRef} className={props.className}>
      {documentToReactComponents(props.body)}
    </StyledRichText>
  )
}

export default RichText;