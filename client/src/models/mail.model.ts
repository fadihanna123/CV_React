export class MailData {
  constructor(payload?: any) {
    this.fullname = payload.fullname;
    this.mail = payload.mail;
    this.msg = payload.msg;
    this.phone = payload.phone;
  }
  public fullname: string;
  public mail: string;
  public phone: string;
  public msg: string;
}
