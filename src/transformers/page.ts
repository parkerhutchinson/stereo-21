import { TypePageFields } from "../types/generated/TypePage";
import { TypeMetaFields } from "../types/generated/TypeMeta";
import transformImage from "./helpers/image";
import { DefaultPageContext } from "../context/page";
import componentTransformerMap from "./componentTransformerMap";

interface Meta {
  image?: string,
  description: string,
  title: string
}

const metaTransformer = (meta: TypeMetaFields): Meta => {
  let image;

  if (typeof meta.image !== 'undefined') {
    image = transformImage(meta.image);
  }

  return {
    title: meta.title,
    description: meta.description,
    image: image && image
  };
}

const pageTransformer = (data: TypePageFields): DefaultPageContext => {
  // create components that can be parsed by discrete templates.
  let scopedComponents = data.components.map((component: any) => ({
    componentId: component.sys.contentType.sys.id,
    props: component.fields
  }))
  
  scopedComponents = scopedComponents.map((
    component: { 
      componentId: string, 
      props: { [props: string]: any } 
    }) => {
    const { componentId, props } = component;
    console.log(componentId)
    return {
      componentId,
      props: typeof componentTransformerMap[componentId] !== 'undefined' ?
        componentTransformerMap[componentId](props) :
        props
    }
  })
  return {
    components: scopedComponents,
    meta: metaTransformer(data.meta.fields)
  }
}

export default pageTransformer;