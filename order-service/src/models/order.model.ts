import { Entity, model, property } from '@loopback/repository';

@model({settings: {'strict': false}})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  items: number[];

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}
