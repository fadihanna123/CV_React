export class MainFooterProps {
  constructor(other?: any) {
    this.children = other.children;
  }
  public children: JSX.Element;
}

export class MainHeaderProps {
  constructor(other?: any) {
    this.children = other.children;
  }
  public children: JSX.Element;
}

export class MenuProps {
  constructor(other?: any) {
    this.children = other.children;
  }
  public children: JSX.Element | JSX.Element[];
}
