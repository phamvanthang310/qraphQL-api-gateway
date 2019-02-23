import { Entity, model, property } from '@loopback/repository';

@model({settings: {'strict': false}})
export class Consumer extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  orders: number[];

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Consumer>) {
    super(data);
  }
}
