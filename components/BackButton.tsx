'use client';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { Colors } from '@/styles/colors';
import { useRouter } from 'next/navigation';

export function BackButton() {
	const router = useRouter();

	return (
		<Button
			variant="outlined"
			startIcon={<ArrowBackIcon />}
			onClick={() => {
				router.back();
			}}
			sx={{
				borderColor: 'transparent',
				color: Colors.BLACK,
			}}
		>
			Go back
		</Button>
	);
}
