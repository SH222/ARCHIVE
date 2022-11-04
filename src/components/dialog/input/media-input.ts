import { MediaData } from "./../dialog.js";
import { BaseComponent } from "./../../page/component.js";
export class MediaSectionInput extends BaseComponent<HTMLElement> implements MediaData {
  constructor() {
    super(`<div>
            <div class="form__container">
              <label for="title">TITLE</label>
              <input type="text" id="title">
            </div>
            <div class="form__container">
              <label for="url">URL</label>
              <input type="text" id="url">
            </div>
            <div class="form__container">
            <label for="text">TEXT</label>
            <textarea type="text" row="3" id="text"></textarea>
          </div>
          </div>`);
  }

  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
  get text(): string {
    const element = this.element.querySelector("#text")! as HTMLInputElement;
    return element.value;
  }
}
