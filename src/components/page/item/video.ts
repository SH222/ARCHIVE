import { BaseComponent } from "./../component.js";
export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string, text: string) {
    super(`<section class="video">
            <div class="video__player">
              <iframe class="video__iframe"></iframe>
            </div>
            <h3 class="page-item__title video__title"></h3>
            <p class="page-item__text video__text"></p>
          </section>`);

    const iframe = this.element.querySelector(".video__iframe")! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);

    const videoTitle = this.element.querySelector(".video__title")! as HTMLHeadingElement;
    videoTitle.textContent = title;

    const videoText = this.element.querySelector(".video__text")! as HTMLHeadingElement;
    videoText.textContent = text;
  }

  // 사용자가 유튜브 url을 가져오는 경우의 수
  // 1. 주소창 url 복사
  // https://www.youtube.com/watch?v=KblqlOYag5M
  // 2. 동영상 url 복사
  // https://youtu.be/QRjP2bKz77c
  // -> id를 추출하여 임베디드형 url 만들기 -> https://www.youtube.com/embed/8f2RkZqv1CA

  private convertToEmbeddedURL(url: string): string {
    // video id 추출
    // 정규표현식 Regex 사용 ***
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    // video id 리턴
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// <iframe
//   width="784"
//   height="441"
//   src="https://www.youtube.com/embed/8f2RkZqv1CA"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
