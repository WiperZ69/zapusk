import Image from 'next/image'

import type { Character } from '@/data/characters'

interface ResultCardProps {
	character: Character
}

export default function ResultCard({ character }: ResultCardProps) {
	return (
		<section className='relative mt-10 border-x-3 border-b-3 border-neon px-3.5 pb-6 pt-8 sm:mt-16 sm:px-8 sm:pb-10 sm:pt-12 md:px-10'>
			<div className='absolute inset-x-0 top-0 flex -translate-y-1/2 items-center gap-3'>
				<div className='h-0.75 flex-1 bg-neon -mx-0.75' />

				<span className='shrink-0 px-1 font-impact text-4xl uppercase leading-none text-neon sm:text-5xl md:text-[48px] font-impact'>
					Тест
				</span>

				<div className='h-0.75 flex-1 bg-neon -mx-0.75' />
			</div>

			<div className='flex flex-col items-center'>
				<div className='relative w-full max-w-[270px] overflow-hidden rounded-[22px] sm:max-w-[360px] sm:rounded-[28px]'>
					<Image
						src={character.image}
						alt={character.name}
						width={720}
						height={620}
						priority
						className='h-auto w-full object-cover'
					/>
				</div>

				<h2 className='mt-4 text-center font-impact text-3xl text-neon sm:mt-5 sm:text-4xl md:text-[38px]'>
					{character.name}
				</h2>

				<div className='mt-3 max-w-[1000px] text-center text-[14px] leading-[1.3] sm:text-lg md:text-[22px]'>
					{character.description.split('\n\n').map((paragraph, index) => (
						<p key={index} className={index > 0 ? 'mt-4' : undefined}>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</section>
	)
}
