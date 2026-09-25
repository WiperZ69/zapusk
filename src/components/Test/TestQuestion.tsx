import Button from '@/components/ui/Button'
import type { Question } from '@/types/test'

interface TestQuestionProps {
	question: Question
	questionNumber: number
	totalQuestions: number
	selectedAnswer: number | null
	onAnswerSelect: (answerIndex: number) => void
	onNext: () => void
	isLastQuestion: boolean
}

export default function TestQuestion({
	question,
	questionNumber,
	totalQuestions,
	selectedAnswer,
	onAnswerSelect,
	onNext,
	isLastQuestion,
}: TestQuestionProps) {
	return (
		<section className='relative mt-10 border-x-3 border-b-3 border-neon px-3.5 pb-5 pt-7 sm:mt-12 sm:px-6 sm:pb-8 sm:pt-10 md:px-7 md:pb-9'>
			<div className='absolute inset-x-0 top-0 flex -translate-y-1/2 items-center gap-2 sm:gap-3'>
				<div className='h-0.75 flex-1 bg-neon -mx-0.75' />

				<span className='shrink-0 px-1 font-impact text-4xl uppercase leading-none text-neon sm:text-5xl md:text-[48px] font-impact'>
					Тест
				</span>

				<div className='h-0.75 flex-1 bg-neon -mx-0.75' />
			</div>

			<div className='mb-3 text-[20px] font-bold sm:mb-4 sm:text-[32px] font-impact'>
				{questionNumber}/{totalQuestions}
			</div>

			<h2 className='mb-4 text-[20px] font-impact font-normal leading-[1.05] sm:text-2xl md:text-[26px] lg:text-[32px]'>
				{question.question}
			</h2>

			<div className='flex flex-col gap-1 md:gap-1.5'>
				{question.answers.map((answer, index) => {
					const isSelected = selectedAnswer === index

					return (
						<button
							key={answer.text}
							type='button'
							onClick={() => onAnswerSelect(index)}
							className={`flex w-full cursor-pointer items-start rounded-lg px-1 py-1 text-left text-[14px] leading-[1.08] transition-all duration-200 sm:px-2 sm:py-1.5 sm:text-lg sm:leading-[1.15] md:text-[20px] lg:text-[24px] ${
								isSelected
									? 'bg-neon/15 text-neon'
									: 'hover:translate-x-1 hover:bg-white/10'
							}`}
						>
							<span className='mr-1.5 shrink-0 font-bold sm:mr-2'>
								{index + 1}.
							</span>

							<span>{answer.text}</span>
						</button>
					)
				})}
			</div>

			<div className='mt-5 flex min-h-14 justify-end sm:mt-7'>
				{selectedAnswer !== null && (
					<Button onClick={onNext}>
						{isLastQuestion ? 'Завершить' : 'Далее'}
					</Button>
				)}
			</div>
		</section>
	)
}
