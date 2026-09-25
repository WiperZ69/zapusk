'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import Header from '@/components/Header/Header'
import ResultCard from '@/components/Result/ResultCard'
import Button from '@/components/ui/Button'
import { characters } from '@/data/characters'
import type { CharacterId } from '@/types/test'

interface TestResult {
	answers: (number | null)[]
	scores: Record<string, number>
	winner: {
		id: CharacterId
		score: number
	}
}

export default function TestResultPage() {
	const router = useRouter()

	const [result, setResult] = useState<TestResult | null>(null)

	useEffect(() => {
		const storedResult = sessionStorage.getItem('test-result')

		if (!storedResult) {
			return
		}

		setResult(JSON.parse(storedResult))
	}, [])

	if (!result) {
		return (
			<main className='min-h-screen bg-space'>
				<Header />

				<div className='flex min-h-[500px] items-center justify-center px-5'>
					<p className='text-xl'>Результат не найден</p>
				</div>
			</main>
		)
	}

	const character = characters.find(item => item.id === result.winner.id)

	if (!character) {
		return (
			<main className='min-h-screen bg-space'>
				<Header />

				<div className='flex min-h-[500px] items-center justify-center px-5'>
					<p className='text-xl'>Персонаж результата не найден</p>
				</div>
			</main>
		)
	}

	const handleRestart = () => {
		sessionStorage.removeItem('test-result')

		router.push('/test')
	}

	return (
		<main className='min-h-screen bg-[radial-gradient(50%_50%_at_50%_50%,var(--color-space-light)_0%,var(--color-space)_100%)]'>
			<Header />

			<div className='mx-auto w-full max-w-290 px-5 pb-16 sm:px-6 md:pb-20'>
				<h3 className='max-w-262.5 pt-6 text-3xl font-normal sm:pt-8 sm:text-4xl md:text-[46px] lg:text-[48px] font-impact'>
					Кто вы из «Космических Смешариков»?
				</h3>

				<ResultCard character={character} />

				<div className='mt-6 flex justify-center sm:mt-8'>
					<Button onClick={handleRestart}>Пройти тест заново</Button>
				</div>
			</div>
		</main>
	)
}
