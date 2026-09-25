import Header from '@/components/Header/Header'
import TestCard from '@/components/Test/TestCard'

export default function HomePage() {
	return (
		<main className='min-h-screen bg-[radial-gradient(circle_at_50%_75%,var(--color-space-light)_0%,var(--color-space)_100%)]'>
			<Header />

			<div className='mx-auto w-full max-w-[1160px] px-4 pb-12 sm:px-6 sm:pb-16 md:pb-20'>
				<section className='px-2 py-7 text-center sm:px-0 sm:py-12 md:py-20'>
					<h1 className='font-impact text-3xl uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-6xl'>
						Космос уже ждёт тебя
					</h1>

					<p className='mx-auto mt-4 max-w-[760px] text-base leading-[1.35] text-white/80 sm:mt-5 sm:text-xl md:text-2xl'>
						Исследуй неизвестные миры, отправляйся навстречу приключениям и
						узнай, кто из «Космических Смешариков» тебе ближе всего.
					</p>
				</section>

				<section>
					<TestCard />
				</section>
			</div>
		</main>
	)
}
