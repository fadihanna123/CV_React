export class MailData {
  constructor(other?: any) {
    this.fullname = other.fullname;
    this.mail = other.mail;
    this.msg = other.msg;
    this.phone = other.phone;
  }
  public fullname: string;
  public mail: string;
  public phone: string;
  public msg: string;
}
