export class Layout {
  rows: LayoutRow[] = [];
}

export class LayoutRow {
  constructor(public columns?: LayoutColumn[], public hasContainer: boolean = true) {
  }
}

export class LayoutColumn {
  classes: string[] = ['col'];

  constructor(public widget?: LayoutWidget) {
  }
}

export class LayoutWidget {
  constructor(public component?: string, public options?: {}) {
  }
}
