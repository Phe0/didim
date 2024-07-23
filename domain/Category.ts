export namespace Category {
  export type Params = {
    name: string;
  };
}

export class Category {
  name: string;
  constructor({ name }: Category.Params) {
    this.name = name;
  }
}
