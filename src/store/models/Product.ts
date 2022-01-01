export interface Product {
  price: number;
  name: string;
  category: Category;
  type: string;
  brand: string;
  year: number;
  description: string;
  code: string;
  image: string;
  stock: number;
  amount?: number;
  favourite?: boolean;
}

export enum Category {
  MONITOR = 'Monitor',
  COMPONENT = 'Component',
  EQUIPMENT = 'Equipment',
  OTHER = 'Other',
  CHOOSE = 'Choose category',
  CHOOSE_BRAND = 'Choose brand',
  DESKTOP = 'Desktop PC',
  LAPTOP = 'Laptop',
}

export const CHOOSE_CATEGORY = Category.CHOOSE;
export const CHOOSE_BRAND = Category.CHOOSE_BRAND;

export const categories: Category[] = [
  Category.COMPONENT,
  Category.MONITOR,
  Category.EQUIPMENT,
  Category.DESKTOP,
  Category.LAPTOP,
  Category.OTHER,
];
