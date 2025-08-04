import { ele } from "../helpers.js";

export function renderArtistsInfo(data, parentElement) {
  const wrapperEle = ele("span", "playlist__artists");

  parentElement.append(wrapperEle);
}
