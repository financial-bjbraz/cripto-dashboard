import { HttpDetail } from './httpdetail.model';
import { BaseEntity } from '../shared/_base-entity';

export class CalledApis implements BaseEntity{
    constructor(
      public details: Array<HttpDetail>,
      public total: number,
        public id?: number

    ){

    }
}
