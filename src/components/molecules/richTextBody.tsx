import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  body: any
}

const richTextBody = (props:Props) => {
  return (
    <>
      {documentToReactComponents(props.body)}
    </>
  )
}

export default richTextBody;