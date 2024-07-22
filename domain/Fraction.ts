export interface FractionType {
  name: string;
  percentage: number;
}

export class Fraction implements FractionType {
  name: string;
  percentage: number;

  constructor({ name, percentage }: FractionType) {
    this.name = name;
    this.percentage = percentage;
  }
}
