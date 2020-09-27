import { getRepository, Repository } from 'typeorm';

export type ObjectType<T> = { new (): T };

export default class GenericRepository<T> {
  private entity: ObjectType<T>;

  constructor(entity: ObjectType<T>) {
    this.entity = entity;
  }

  async getAll(
    where: any = {},
    relations: string[] = [],
    order: any = {}
  ): Promise<any> {
    // connection
    // entityManager
    // getRepository
    const repository: Repository<T> = getRepository<T>(this.entity);
    const records = await repository.find({
      where,
      relations,
      order,
    });

    return records.length > 0 ? records : null;
  }

  async getByPage(
    page: number,
    pageSize: number,
    where: any = {},
    relations: string[] = [],
    order: any = {}
  ): Promise<any> {
    const repository: Repository<T> = getRepository<T>(this.entity);
    const [records, totalRecords] = await repository.findAndCount({
      where,
      order,
      relations,
      skip: page * pageSize,
      take: pageSize,
    });

    return [records, totalRecords];
  }

  async getById(id: number, relations: string[] = []): Promise<any> {
    const repository: Repository<T> = getRepository<T>(this.entity);
    const record = await repository.findOne(id, { relations });

    return record ? record : null;
  }

  async insert(record: T): Promise<any> {
    const repository: Repository<T> = getRepository<T>(this.entity);
    const recordInserted: T = await repository.save(record);

    return recordInserted;
  }

  async update(
    record: T,
    where: any = {},
    relations: string[] = []
  ): Promise<any> {
    const repository: Repository<T> = getRepository<T>(this.entity);
    const recordUpdated = await repository.findOne({ where, relations });

    for (const prop in record) {
      if (recordUpdated[prop]) {
        recordUpdated[prop] = record[prop];
      }
    }

    await repository.save(recordUpdated);
    return recordUpdated ? recordUpdated : null;
  }

  async delete(id: number): Promise<any> {
    const repository: Repository<T> = getRepository<T>(this.entity);
    const recordDeleted: any = await repository.findOne(id);

    if (recordDeleted) {
      await repository.delete(id);
      return recordDeleted;
    }

    return null;
  }
}
