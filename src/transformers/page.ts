import {TypePageFields} from "../types/generated/TypePage";

const pageTransformer = (data:TypePageFields):any => {

  const scopedComponents = data.components.map((component: any) => ({
    componentId: component.sys.contentType.sys.id,
    props: component.fields
  }))
  
  return {components: scopedComponents, meta: data.meta}
} 

export default pageTransformer;