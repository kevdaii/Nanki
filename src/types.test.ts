import { expect, test } from 'vitest'
import type { Card, Deck, DeckPreset, Note } from './types'

test('Beispiel-Daten passen zusammen', () => {
    const preset: DeckPreset = { id: "123abs", name: "Basic", newCardsPerDay: 10, maxReviewsPerDay: 100, desiredRetention: 0.9 };
    const deck: Deck = { id: "abc123", name: "deutsch", presetId: "123abs", createdAt: new Date('2026-11-26')};
    const note: Note = { id: "arsdoiun3", deckId: "abc123", front: "House", back: "Haus", createdAt: new Date('2026-11-26') };
    const card: Card = { id: "123rsa", deckId: "abc123", noteId: "arsdoiun3", state: "new", due: new Date('2026-11-27'), stability: 0, difficulty: 0, reps: 0, lapses: 0, lastReview: null};

    expect(card.noteId).toBe(note.id)
    expect(note.deckId).toBe(deck.id)
    expect(deck.presetId).toBe(preset.id)
    expect(card.deckId).toBe(deck.id)
})