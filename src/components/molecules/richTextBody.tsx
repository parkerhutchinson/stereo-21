import {MutableRefObject} from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  body: any
  propRef?: any
}

const richTextBody = (props:Props) => {
  return (
    <div ref={props.propRef}>
      {documentToReactComponents(props.body)}
    </div>
  )
}

export default richTextBody;