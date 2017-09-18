import { Chat } from './chat.model';
import { Contact } from './contact.model';
import { SentStatus } from './sent-status.model';

export class Message {
  public id?: number;
  public text: string = '';
  public chat: Chat;
  public sender: Contact;
  public readonly created: number = Date.now();
  public sent: SentStatus;

  public toString(): string {
    const { created, text } = this;
    return `Message created at: ${created} - Text: ${text}`;
  }
}
