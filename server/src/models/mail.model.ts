export class IMailData {
  constructor(other?: any) {
    this.from = other.from;
    this.to = other.to;
    this.subject = other.subject;
    this.html = other.html;
  }
  public from: string;
  public to: string;
  public subject: string;
  public html: string;
}
