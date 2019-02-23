import { DefaultCrudRepository } from '@loopback/repository';
import { Consumer } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ConsumerRepository extends DefaultCrudRepository<Consumer, typeof Consumer.prototype.id> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(Consumer, dataSource);
  }


}
