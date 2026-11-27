import { expect, test } from 'vitest'
import type { Card } from '../types'
import { schedule } from './sm2'

const now = new Date('2026-11-27T10:00:00')

const newCard: Card = {
    id: 'c1',
    noteId: 'n1',
    deckId: 'd1',
    state: 'new',
    due: now,
    stability: 0,
    difficulty: 0,
    reps: 0,
    lapses: 0,
    lastReview: null,
    ease: 2.5,
}

test('neue Karte + Good --> in 1 Tag faellig', () => {
    const result = schedule(newCard, 3, now)
    expect(result.due).toEqual(new Date('2026-11-27T10:00:00'))
    expect(result.state).toBe('review')
    expect(result.reps).toBe(1)
})