'use client';

import * as React from 'react';

import { AddCircle, Delete, RemoveCircle } from '@mui/icons-material';
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';

import { Container } from '@mui/material';
import { ProductInCart } from '@/types';
import styles from '../page.module.css';
import { useCartStore } from '@/store/CartStore';
import { useMemo } from 'react';

export default function Cart() {
	const { cart, removeFromCart, decrementInCart, addToCart } = useCartStore();

	const columns = useMemo<GridColDef<ProductInCart>[]>(
		() => [
			{
				field: 'name',
				headerName: 'Product name',
				width: 500,
			},
			{
				field: 'color',
				headerName: 'Color',
				valueGetter: (_value, row) => row.color.name,
			},
			{
				field: 'size',
				headerName: 'Size',
			},
			{
				field: 'price',
				headerName: 'Price',
				type: 'number',
				valueGetter: (_value, row) => `${row.price}$`,
			},
			{
				field: 'amount',
				headerName: 'Amount',
				type: 'number',
			},
			{
				headerName: 'Quantity control',
				field: 'actions',
				type: 'actions',
				width: 200,
				getActions: (params) => [
					<GridActionsCellItem
						key="minus"
						icon={<RemoveCircle />}
						label="One less"
						onClick={() => {
							decrementInCart(params.row);
						}}
					/>,
					<GridActionsCellItem
						key="plus"
						icon={<AddCircle />}
						label="One more"
						onClick={() => {
							addToCart({
								product: params.row,
								selectedColor: params.row.color,
								selectedSize: params.row.size,
							});
						}}
					/>,
				],
			},
			{
				headerName: 'Removal',
				field: 'actions-remove',
				type: 'actions',
				width: 200,
				getActions: (params) => [
					<GridActionsCellItem
						key="delete"
						icon={<Delete />}
						label="Remove Product"
						onClick={() => {
							removeFromCart(params.row);
						}}
					/>,
				],
			},
		],
		[addToCart, decrementInCart, removeFromCart]
	);

	return (
		<div className={styles.productPage} style={{ height: '100%' }}>
			<div
				className={styles.productPage}
				style={{ display: 'flex', paddingTop: '20rem' }}
			>
				<Container maxWidth="xl">
					<DataGrid
						rows={cart}
						columns={columns}
						getRowId={(row) =>
							`${row.id};${row.color.id};${row.size}`
						}
					/>
				</Container>
			</div>
		</div>
	);
}
