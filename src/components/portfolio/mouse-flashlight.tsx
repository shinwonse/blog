'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/utils/cn';

const MouseFlashlight = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			setMousePosition({
				x: event.clientX,
				y: event.clientY,
			});
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div
			className={cn(
				'pointer-events-none fixed inset-0 z-30 transition duration-300',
			)}
			style={{
				background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 112, 67, 0.08), transparent 80%)`,
			}}
		/>
	);
};

export default MouseFlashlight;

