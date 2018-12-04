import { UserModel } from './UserModel';

export class ResponseModel {
    constructor(
        public page: number,
        public per_page: number,
        public total: number,
        public total_pages: number,
        public data: UserModel[]
    ) {}
}
