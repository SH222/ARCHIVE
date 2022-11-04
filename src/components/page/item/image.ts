import { BaseComponent } from "./../component.js";
export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string, text: string) {
    super(`<section class="image">
          <div class="image__holder">
          <img class="image__thumbnail">
          </div>
          <h2 class="page-item__title image__title"></h2>
          <p class="page-item__text image__text"></p>
        </section>`);

    const imageElement = this.element.querySelector(".image__thumbnail")! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(".image__title")! as HTMLParagraphElement;
    titleElement.textContent = title;

    const textElement = this.element.querySelector(".image__text")! as HTMLParagraphElement;
    textElement.textContent = text;
  }
}
