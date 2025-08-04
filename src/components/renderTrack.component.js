import { ele } from "../helpers.js";

export function renderTrack(data, parentElement) {
  const trackEle = ele("li", "track");
  const imageEle = ele("img", "track__cover");
  const infoEle = ele("div", "track__info");
  const titleEle = ele("span", "track__title");
  const artistNameEle = ele("span", "track__artist-name");
  const nameEle = ele("span", "track__name");
  const audioEle = ele("audio", "track__audio");

  imageEle.src = data.coverImageUrl;
  artistNameEle.innerHTML = `${data.artistName} - `;
  nameEle.innerText = `${data.title}`;
  audioEle.controls = true;
  audioEle.src = data.fileUrl;

  titleEle.append(artistNameEle, nameEle);
  infoEle.append(titleEle, audioEle);
  trackEle.append(imageEle, infoEle);
  parentElement.append(trackEle);

  return audioEle;
}
