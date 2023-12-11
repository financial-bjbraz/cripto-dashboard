import { BaseEntity } from '../shared/_base-entity';

export class User implements BaseEntity{
    constructor(
        public id?: number,
        public accountNumber?: number,
        public mobileNumber?: string,
        public birthDate?: string,
        public name?: string,
        public cpf?: string,
        public financialOperationKey?: string,
        public email?: string,
    ){

    }
}

/**
{
    "cardName": null,
    "idempotencyKey": "df689981-6413-4622-8785-71804eaa6fec",
    "documentNumber": "49650416000144",
    "mobileNumber": "1131859600",
    "accountNumber": -1345037964,
    "birthDate": "1982-05-01",
    "dt_ref": 1588045407625,
    "phoneNumber": "1131859600",
    "firebaseId": "123",
    "name": "Guava F",
    "cpf": "49650416000144",
    "financialOperationKey": "4426620",
    "email": "contato@bjbraz.com.br"
}

 */
