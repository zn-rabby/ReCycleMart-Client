export interface IProduct {
  _id: string;
  name: string;
  title: string;
  description: string;
  price: number;
  condition: "new" | "used" | "refurbished";
  images: string[];
  category:
    | "mobiles"
    | "electronics"
    | "vehicles"
    | "property"
    | "home"
    | "pets"
    | "cloths"
    | "sports";
  location: string;
  status: "available" | "sold";
  createdAt?: Date;
  updatedAt?: Date;
  contactNumber?: string;
  negotiable?: boolean;
  brand?: string;
  ratingCount?: number;
  stock: number;
}
