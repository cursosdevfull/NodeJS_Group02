import { Model } from 'mongoose';

export default class<T extends Model<any>, U> {
  private model: T;

  constructor(model: T) {
    this.model = model;
  }

  async getAll(filter: any = {}): Promise<U[]> {
    const items: U[] = await this.model.find(filter);
    return items;
  }

  async getById(id: string): Promise<U> {
    const item: U = await this.model.findById(id);
    return item;
  }

  async insert(item: U): Promise<U> {
    const itemInserted: U = await this.model.create(item);
    return itemInserted;
  }

  async update(id: string, item: U): Promise<U> {
    const itemUpdated: U = await this.model.findByIdAndUpdate(id, item, {
      new: true,
    });
    return itemUpdated;
  }

  async delete(id: string): Promise<U> {
    const itemDeleted: U = await this.model.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true }
    );
    return itemDeleted;
  }
}
