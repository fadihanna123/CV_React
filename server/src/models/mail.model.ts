export class IMailData {
  constructor(
    public from: string,
    public to: string,
    public subject: string,
    public html: string
  ) {}
}
