import { IMAGE_SIZE_TYPE } from './getImageSources';

export interface ImageSourcesData {
  defaultSource: string,
  sources: ImageSourceData[],
  width: number,
  height: number
}

export interface ImageSourceData {
  name: string,
  url: string,
  width?: number
}

export interface ImageSource {
  url: string,
  width: number,
  key: IMAGE_SIZE_TYPE,
}