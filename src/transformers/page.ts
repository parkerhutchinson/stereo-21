import {TypePageFields} from "../types/generated/TypePage";
import {TypeMetaFields} from "../types/generated/TypeMeta";
import transformImage from "./helpers/image";

interface Page {
  components: {
    componentId: string
    props: {[index:string]:any}
  }[]
  meta: {[index:string]:any}
}

interface Meta {
  image?: string,
  description: string,
  title: string
}

const metaTransformer = (meta:TypeMetaFields):Meta => {
  let image;
  
  if(typeof meta.image !== 'undefined') {
    image = transformImage(meta.image);
  }

  return {
    title: meta.title,
    description: meta.description,
    image: image && image
  };
}

const pageTransformer = (data:TypePageFields):Page => {

  const scopedComponents = data.components.map((component: any) => ({
    componentId: component.sys.contentType.sys.id,
    props: component.fields
  }))
  
  return {components: scopedComponents, meta: metaTransformer(data.meta.fields)}
} 

export default pageTransformer;