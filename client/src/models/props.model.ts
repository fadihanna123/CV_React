export class MainFooterProps {
  constructor(payload?: any) {
    this.children = payload.children;
  }
  public children: JSX.Element;
}

export class MainHeaderProps {
  constructor(payload?: any) {
    this.children = payload.children;
  }
  public children: JSX.Element;
}

export class MenuProps {
  constructor(payload?: any) {
    this.children = payload.children;
  }
  public children: React.ReactNode;
}
