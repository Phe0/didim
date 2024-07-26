import { Entity } from "../entities/entity";

export interface Repository {
  create(value: Entity): Promise<Entity>;
  update(id: string, value: unknown): Promise<Entity>;
  get(id: string): Promise<Entity>;
}
