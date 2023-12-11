import { BaseEntity } from '../shared/_base-entity';

export class Token implements BaseEntity{
    constructor(
        public id?: number,
        public access_token?: String,
        public token_type?: String,
        public scope?: String,
        public counterAmount?: String,
        public jti?: String,
        public expires_in?: number,
        public token?:String
    ){

    }
}
