import { Product } from './Product';

export interface Purchase {
  purchaseId: string;
  date: string;
  total: number;
  items: Product[];
}
