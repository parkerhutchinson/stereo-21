import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  body: any
}

const richTextBody = (props:Props) => {
  const {body} = props;
  return <>{documentToReactComponents(body)}</>
}

export default richTextBody;