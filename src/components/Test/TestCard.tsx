import Image from 'next/image'
import Link from 'next/link'

export default function TestCard() {
	return (
		<article className='relative overflow-hidden rounded-[32px] bg-[#24105c] px-5 py-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:px-8 sm:py-9 md:px-10 md:py-10'>
			<div className='flex flex-col items-center gap-7 md:flex-row md:items-center md:gap-10'>
				<div className='relative w-full shrink-0 md:w-[42%]'>
					<div className='overflow-hidden rounded-[28px]'>
						<Image
							src='/test-cover.png'
							alt='Тест «Кто вы из космических смешариков?»'
							width={800}
							height={700}
							priority
							className='h-auto w-full object-cover'
						/>
					</div>
				</div>

				<div className='flex flex-col items-center text-center md:items-start md:text-left'>
					<span className='mb-3 text-sm font-bold uppercase tracking-[0.15em] text-neon sm:text-base'>
						Космический тест
					</span>

					<h2 className='text-3xl font-black uppercase leading-[1.05] sm:text-4xl md:text-[42px]'>
						Кто вы из
						<br />
						«Космических Смешариков»?
					</h2>

					<p className='mt-5 max-w-[620px] text-base leading-[1.35] text-white/90 sm:text-lg md:text-xl'>
						Ответьте на 10 вопросов и узнайте, какой персонаж «Космических
						Смешариков» ближе всего вам по характеру.
					</p>

					<Link
						href='/test'
						className='mt-7 inline-flex rounded-full bg-neon px-8 py-3 text-base font-bold uppercase tracking-wide text-space transition-all duration-200 hover:scale-105 hover:brightness-110 active:scale-95 sm:px-10 sm:py-3.5 sm:text-lg'
					>
						Пройти тест
					</Link>
				</div>
			</div>
		</article>
	)
}
