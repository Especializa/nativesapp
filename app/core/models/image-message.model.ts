import { Message } from './message.model';

export class ImageMessage extends Message {
  public url: string = '';
  public thumbnail: string = '';

  /**
   * Method overriden
   * @returns String
   */
  public toString(): string {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `- Thumbnail: ${this.thumbnail}`;
  }
}
