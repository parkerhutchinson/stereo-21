import {MutableRefObject} from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import {StyledRichText, StyledAsset, StyledAssetDescription, StyledCopy} from "./styles";

interface Props {
  body: any
  propRef?: any
  className?: string
  linkColor: string
  isNotBio: boolean
}

const RichText = (props:Props) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node:any) => {
        const { title, description, file } = node.data.target.fields;
        return <>
          <StyledAsset src={file.url} title={title} />
          {description && <StyledAssetDescription>{description}</StyledAssetDescription>}
        </>
      },

      [BLOCKS.PARAGRAPH]: (node:any, children:any) => {
        return <StyledCopy isNotBio={props.isNotBio}>{children}</StyledCopy>
      },
    }
  };
  return (
    <StyledRichText ref={props.propRef} className={props.className} linkColor={props.linkColor}>
      {documentToReactComponents(props.body, options)}
    </StyledRichText>
  )
}

export default RichText;