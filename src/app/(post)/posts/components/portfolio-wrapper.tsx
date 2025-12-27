'use client';

import type { ReactNode } from 'react';
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

interface PortfolioWrapperProps {
	children: ReactNode;
}

const PortfolioWrapper = ({ children }: PortfolioWrapperProps) => {
	return (
		<div
			className={cn(
				'portfolio-theme relative min-h-screen bg-stone-900 leading-relaxed text-stone-400 antialiased',
			)}
		>
			<MouseFlashlight />
			<div className={cn('noise-overlay')} />
			<div
				className={cn(
					'mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24',
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default PortfolioWrapper;

