'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { questions } from '@/data/questions'
import { shuffleArray } from '@/utils/shuffle'
import { calculateScores, getWinner } from '@/utils/test'

import TestQuestion from './TestQuestion'

export default function Test() {
	const router = useRouter()

	// Флаг монтирования на клиенте — защита от hydration mismatch
	const [mounted, setMounted] = useState(false)

	const [currentQuestion, setCurrentQuestion] = useState(0)

	const [answers, setAnswers] = useState<(number | null)[]>(
		Array(questions.length).fill(null),
	)

	// Готовим вопросы синхронно. useMemo с [] — перемешивание один раз за жизнь компонента
	const shuffledQuestions = useMemo(
		() =>
			questions.map(question => ({
				...question,
				answers: shuffleArray(question.answers),
			})),
		[],
	)

	useEffect(() => {
		setMounted(true)
	}, [])

	// До монтирования рендерим ровно то же, что и на сервере — никаких mismatch
	if (!mounted) {
		return (
			<div className='flex min-h-[300px] items-center justify-center'>
				<span className='text-lg'>Загрузка теста...</span>
			</div>
		)
	}

	const question = shuffledQuestions[currentQuestion]
	const selectedAnswer = answers[currentQuestion]
	const isLastQuestion = currentQuestion === shuffledQuestions.length - 1

	const handleAnswerSelect = (answerIndex: number) => {
		setAnswers(prev => {
			const newAnswers = [...prev]

			newAnswers[currentQuestion] = answerIndex

			return newAnswers
		})
	}

	const handleNext = () => {
		if (selectedAnswer === null) return

		if (isLastQuestion) {
			const scores = calculateScores(shuffledQuestions, answers)
			const winner = getWinner(scores)

			try {
				sessionStorage.setItem(
					'test-result',
					JSON.stringify({
						answers,
						scores,
						winner: {
							id: winner[0],
							score: winner[1],
						},
					}),
				)
			} catch (e) {
				// Приватный режим Safari / заблокированный storage — не роняем переход
				console.warn('sessionStorage недоступен:', e)
			}

			router.push('/test/result')

			return
		}

		setCurrentQuestion(prev => prev + 1)
	}

	return (
		<TestQuestion
			question={question}
			questionNumber={currentQuestion + 1}
			totalQuestions={shuffledQuestions.length}
			selectedAnswer={selectedAnswer}
			onAnswerSelect={handleAnswerSelect}
			onNext={handleNext}
			isLastQuestion={isLastQuestion}
		/>
	)
}