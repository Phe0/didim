export namespace Fraction {
  export type Params = {
    name: string;
    percentage: number;
  };
}

export class Fraction {
  name: string;
  percentage: number;

  constructor({ name, percentage }: Fraction.Params) {
    this.name = name;
    this.percentage = percentage;
  }
}
