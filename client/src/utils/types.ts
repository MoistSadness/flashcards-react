export type Card = {
    id: string,
    deckID: string,
    title: string,
    answer: string,
}

export type Deck = {
    id: string,
    subjectID: string,
    title: string,
    description: string,
    cards: string[]
}

export type Subject = {
    id: string,
    title: string,
    description: string,
    decks: string[]
}