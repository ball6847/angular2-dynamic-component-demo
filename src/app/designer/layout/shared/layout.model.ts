export class Layout {
  rows: LayoutRow[] = [];
}

export class LayoutRow {
  public active: boolean = false;

  constructor(public columns?: LayoutColumn[], public hasContainer: boolean = true) {
  }
}

export class LayoutColumn {
  classes: string[] = ['col-3'];

  constructor(public widget?: LayoutWidget) {
  }
}

export class LayoutWidget {
  active: boolean = false;
  constructor(public component?: string, public options?: {}) {
  }
}
