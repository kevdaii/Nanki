// Hilfstypen in Form von Union Types
// 1 = Again, 2 = Hard, 3 = Good, 4 = Easy
export type Rating = 1 | 2 | 3 | 4;

// new: noch nie gelernt
// learning: gerade zum ersten Mal am Lernen, kurze Abstände (Minuten)
// review: sitzt, wird in Tagen oder Wochen wiederholt
// relearning: war im Review, wurde aber vergessen (Again gedrückt)
export type CardState = 'new' | 'learning' | 'review' | 'relearning';

export type DeckPreset = {
    id:                 string;
    name:               string;
    newCardsPerDay:     number;
    maxReviewsPerDay:   number;
    desiredRetention:   number;  // zwischen 0 und 1, z. B. 0.9 = 90 %
}

export type Deck = {
    id:         string;
    name:       string;
    presetId:   string;
    createdAt:  Date;
}

export type Note = {
    id:         string;
    deckId:     string;
    front:      string;
    back:       string;
    createdAt:  Date;
}

export type Card = {
    id:     string;
    noteId: string;
    deckId: string;

    // Lernstand
    state:      CardState;
    due:        Date;           // wann ist die Karte wieder dran?
    stability:  number;         // FSRS: wie lange hält die Erinnerung (in Tagen)?
    difficulty: number;         // FSRS: wie schwer ist die Karte (1–10)?
    ease:       number;         // SM-2: Wachstumsfaktor, startet bei 2.5, minimal 1.3
    reps:       number;         // wie oft wurde sie schon wiederholt?
    lapses:     number;         // wie oft wurde sie vergessen?
    lastReview: Date | null;    // null = noch nie gelernt
}

export type ReviewLog = {
    id:             string;
    cardId:         string;
    rating:         Rating;
    reviewedAt:     Date;
    stateBefore:    CardState;
}