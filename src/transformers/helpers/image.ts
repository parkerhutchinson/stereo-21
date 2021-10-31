import * as Contentful from "contentful";

const transformImage = (asset:Contentful.Asset):string => {
  return asset.fields.file.url
}

export default transformImage;