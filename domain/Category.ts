export interface CategoryType {
  name: string;
}

export class Category {
  name: string;
  constructor({ name }: CategoryType) {
    this.name = name;
  }
}
