import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export default function Button({
	children,
	className = '',
	...props
}: ButtonProps) {
	return (
		<button
			type='button'
			className={`cursor-pointer rounded-full bg-[#5830d7] px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95 sm:px-8 sm:py-3 sm:text-base md:px-10 md:py-3.5 md:text-lg ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}
