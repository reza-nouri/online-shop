// types/product.ts
// تعریف نوع Attribute
export interface Attribute {
  name: string;
  value: string;
}

// تعریف نوع Category
export interface Category {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  name: string;
  Products: Product[] | null;
}

// تعریف نوع اصلی Product
export interface Product {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  tags: string[];
  attributes: Attribute[];
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inMainPage: boolean;
  categoryID: number;
  Category: Category | null;
  review: Review[];
}

// یا به صورت کامل‌تر با استفاده از Generic و Partial برای عملیات CRUD
export interface BaseEntity {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
}

export interface ProductEntity extends BaseEntity {
  tags: string[];
  attributes: Attribute[];
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inMainPage: boolean;
  categoryID: number;
  Category: CategoryEntity | null;
}

export interface CategoryEntity extends BaseEntity {
  name: string;
  Products: ProductEntity[] | null;
}

export interface Review {
  id: number;
  name: string;
  email: string;
  comment: string;
}
