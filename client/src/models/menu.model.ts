export class Menu {
  constructor(payload?: any) {
    this.id = payload.id;
    this.title = payload.title;
    this.path = payload.path;
    this.classname = payload.classname;
    this.pathroute = payload.pathroute;
  }
  public id: number;
  public title: string;
  public path: string;
  public classname: string;
  public pathroute: string;
}
