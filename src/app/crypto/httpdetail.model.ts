import { BaseEntity } from '../shared/_base-entity';

export class HttpDetail implements BaseEntity{
    constructor(
      public code: string,
      public total: number,
      public percentil: number,
      public percentilFormatted: string,
      public id?: number
    ){

    }
}
