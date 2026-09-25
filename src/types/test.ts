export type CharacterId =
	| 'krosh'
	| 'ezhik'
	| 'nyusha'
	| 'barash'
	| 'pandi'
	| 'kar-karych'
	| 'kopatych'
	| 'losyash'
	| 'pin'
	| 'sovunya'

export interface CharacterScore {
	krosh: number
	ezhik: number
	nyusha: number
	barash: number
	pandi: number
	'kar-karych': number
	kopatych: number
	losyash: number
	pin: number
	sovunya: number
}

export interface Answer {
	text: string
	scores: Partial<CharacterScore>
}

export interface Question {
	id: number
	question: string
	answers: Answer[]
}
