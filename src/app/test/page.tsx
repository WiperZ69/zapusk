import Header from '@/components/Header/Header'
import Test from '@/components/Test/Test'

export default function TestPage() {
	return (
		<main className='min-h-screen bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-space-light)_0%,var(--color-space)_100%)]'>
			<Header />

			<div className='mx-auto w-full max-w-290 px-4 pb-12 sm:px-6 sm:pb-16 md:pb-20'>
				<h3 className='max-w-262.5 pt-6 text-3xl font-normal sm:pt-8 sm:text-4xl md:text-[46px] lg:text-[48px] font-impact'>
					Кто вы из «Космических Смешариков»?
				</h3>

				<Test />
			</div>
		</main>
	)
}
