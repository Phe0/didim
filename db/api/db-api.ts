export interface DbAPI<TInsert, TSelect> {
  create(value: TInsert): Promise<TSelect>;
  update(id: string, value: Partial<TInsert>): Promise<TSelect | null>;
  getById(id: string): Promise<TSelect | null>;
}
