import { Address } from '../models/Address';
export interface Building {
    id: number,
    slug: string,
    name: string,
    address: Address
}