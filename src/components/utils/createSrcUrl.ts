import { base } from '$app/paths';

export function createProductImgSrcUrl(photo: string) {
  if (photo === '') return undefined;
  return `${base}/images/products/${photo}`;
}
