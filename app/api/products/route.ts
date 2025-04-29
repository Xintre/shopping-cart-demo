import products from '@/data/products.json';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: Request) {
	console.log('User downloaded list of products');
	return Response.json(products);
}
