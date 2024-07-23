import { SelectFinancialDetails } from "@/db/schemas/financial-details";
import { Domain } from "./domain";

export namespace FinancialDetails {
  export type Params = {
    id: number;
    income: number | null;
  };
}

export class FinancialDetails implements Domain {
  id: number;
  income: number | null;

  constructor({ id, income }: FinancialDetails.Params) {
    this.id = id;
    this.income = income;
  }

  toInsert<InsertFinancialDetails>() {
    return {
      id: this.id,
      income: this.income,
    } as InsertFinancialDetails;
  }

  static fromSelect(select: SelectFinancialDetails): FinancialDetails {
    return new FinancialDetails({
      id: select.id,
      income: select.income ? parseFloat(select.income) : null,
    });
  }
}
