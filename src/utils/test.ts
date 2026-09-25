import type { CharacterScore, Question } from '@/types/test'

export const createInitialScores = (): CharacterScore => ({
	krosh: 0,
	ezhik: 0,
	nyusha: 0,
	barash: 0,
	pandi: 0,
	'kar-karych': 0,
	kopatych: 0,
	losyash: 0,
	pin: 0,
	sovunya: 0,
})

export const calculateScores = (
	questions: Question[],
	answers: (number | null)[],
): CharacterScore => {
	const scores = createInitialScores()

	answers.forEach((answerIndex, questionIndex) => {
		if (answerIndex === null) return

		const answer = questions[questionIndex]?.answers[answerIndex]

		if (!answer) return

		Object.entries(answer.scores).forEach(([character, points]) => {
			const characterId = character as keyof CharacterScore

			scores[characterId] += points
		})
	})

	return scores
}

export const getWinner = (
	scores: CharacterScore,
): [keyof CharacterScore, number] => {
	const characters = Object.entries(scores) as [keyof CharacterScore, number][]

	return characters.reduce((winner, current) => {
		return current[1] > winner[1] ? current : winner
	})
}
