import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
	return (
		<header className='rounded-b-3xl sm:rounded-b-4xl bg-[#efefef40] px-6 py-5'>
			<div className='mx-auto flex min-h-[58px] w-full max-w-[1160px] items-center justify-between gap-3 px-4 py-2 sm:min-h-[76px] sm:gap-6 sm:px-6 sm:py-3 md:min-h-[96px] md:gap-8 md:py-4'>
				<Link href={'/'}>
					<div className='flex items-center justify-between gap-2 sm:gap-4.5'>
						<Image
							src='/logo.png'
							alt=''
							width={50}
							height={50}
							className='size-8 md:size-13 shrink-0 h-auto'
							priority
						/>
						<div className='flex flex-col leading-none text-white'>
							<span className='font-impact text-xl md:text-[42px] uppercase tracking-[-0.02em]'>
								Запуск
							</span>
							<span className='mt-0 font-pinnacle text-[6px] sm:text-[14px] font-semibold md:tracking-[0.12em]'>
								школа актива
							</span>
						</div>
					</div>
				</Link>

				<Image
					src='/sponsors.svg'
					alt='Партнёры проекта'
					width={760}
					height={60}
					className='h-auto max-h-[28px] w-auto max-w-[65%] object-contain sm:max-h-[40px] md:max-h-[48px]'
				/>
			</div>
		</header>
	)
}
