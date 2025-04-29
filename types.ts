export type ProductColor = { id: string; name: string; image: string };

export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	availableSizes: string[];
	colors: ProductColor[];
	images: string[];
};

export type ProductInCart = Product & {
	color: ProductColor;
	size: string;
	amount: number;
};
