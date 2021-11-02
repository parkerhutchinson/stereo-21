import caseStudiesTransformer from "./components/case-study-slides";


const componentTransformerMap:{[transformer:string]: any} = {
  slides: (data:any) => caseStudiesTransformer(data)
}

export default componentTransformerMap;