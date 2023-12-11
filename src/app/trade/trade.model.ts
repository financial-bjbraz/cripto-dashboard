import { BaseEntity } from '../shared/_base-entity';

export const enum Status{
    'CREATED',
    'PROCESSING',
    'COMPLETED',
    'CANCELED',
    'ERROR'
}

export class Trade implements BaseEntity{
    constructor(
        public id?: number,
        public baseSymbol?: String,
        public counterSymbol?: String,
        public baseAmount?: number,
        public counterAmount?: number,
        public createdAt?: any,
        public updatedAt?: any,
        public status?: Status
    ){

    }
}