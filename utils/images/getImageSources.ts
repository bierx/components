// @ts-ignore
import get from 'g2a-utils/get';
import { ImageSource, ImageSourceData, ImageSourcesData } from './images.types';

export const IMAGE_SIZE_TYPE = {
  ORIGINAL: 'original',
  SMALL: 'small',
  MEDIUM: 'medium',
  THUMBNAIL: 'thumbnail',
  YOUTUBE: 'youtube',
  FULL_HD: 'fullhd'
} as const;

export type IMAGE_SIZE_TYPE = typeof IMAGE_SIZE_TYPE[keyof typeof IMAGE_SIZE_TYPE];

export const IMAGE_OBJECT_FIT = {
  DEFAULT: '',
  SCALE_DOWN: 'scale-down',
  COVER: 'cover',
  CONTAIN: 'contain'
} as const;

export type IMAGE_OBJECT_FIT = typeof IMAGE_OBJECT_FIT[keyof typeof IMAGE_OBJECT_FIT];

export function getImageSources(image?: ImageSourcesData, sourceName?: string) {
  const defaultSourceName = sourceName || image?.defaultSource;

  return get(image, 'sources', [])
    .filter(({ url, width }: { url: string, width: number }) => width && url)
    .reduce((imageSources: { defaultSource: string, sources: ImageSource[] }, sourceData: ImageSourceData) => {
      const source = {
        url: sourceData.url,
        width: sourceData.width,
        key: sourceData.name
      };

      return {
        defaultSource: sourceData.name === defaultSourceName ? sourceData.url : imageSources.defaultSource,
        sources: [...imageSources.sources, source]
      };
    }, {
      defaultSource: '',
      sources: []
    });
}