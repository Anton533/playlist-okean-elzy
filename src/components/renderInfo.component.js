import { ele } from "../helpers.js";
import { renderArtistsInfo } from "./renderArtistsInfo.component.js";

export function renderInfo(data, parentElement) {
  const infoEle = ele("div", "playlist__info-wrapper");

  renderSubtitle(infoEle);
  renderArtistsInfo(data, infoEle);

  parentElement.append(infoEle);
}

function renderSubtitle(parentElement) {
  const subtitleWrapperEle = ele("div", "playlist__subtitle-wrapper");
  parentElement.append(subtitleWrapperEle);
}
