import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

interface Props {
  body: any
  name: string
}

const richTextBody = (props:Props) => {
  const {body, name} = props;
  return (
    <div>
      <h2>{name}</h2>
      {documentToReactComponents(body)}
    </div>
  )
}

export default richTextBody;