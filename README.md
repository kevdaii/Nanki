# Nanki - Flashcard App
![Nanki Logo](Assets/Logo/Nanki-logo-git.png)

# Bookmark
- [Was ist Anki?](#was-ist-anki)
- [FSRS-Algorithmus](#fsrs-algorithmus)
- [Anki Features](#anki-features)
- [Features Implemented in 'Nanki - Not Anki'](#features-implemented-in-nanki---not-anki)
- [Sources](#sources)
## Was ist Anki?
Anki ist eine Flashcard-Applikation, die wie im echten Leben Karteikarten zeigen und auf der Rückseite sich die Antwort befindet. Anki unterscheidet sich von anderen Flashcard-Applikationen, in dem es eine Sogenannte FSRS-Algorithmus verwendet.
## FSRS-Algorithmus
FSRS steht für Free Spaced Repetition Scheduler und ist eine Open Source-Algorithmus, die von Jarrett Ye entwickelt. Mithilfe diesem Algorithmus wird der optimale Zeitpunkt berechnet in dem man eine bestimmte Karte wiederholen muss. Anstatt jede einzelne Karte immer wieder zu wiederholen. Eruiert der Algorithmus, wann die Karte wiederholt werden muss, sodass es im Langzeitgedächtnis bleibt.
## Anki Features
- Card Creation
- Deck Creation
- Review
- Deck Presets
- Export/Import of Decks
- Synchronization
- Media Support
- Add-On Support
- Customization
## Features Implemented in 'Nanki - Not Anki'
- Deck Creation
- Card Creation
- Review
- Deck Presets
- FSRS Algorithmus
### Things I have learned
#### Linters
Linters liest den Code und warnt vor Fehlern und schlechten Muster, wie z.b.:

- Deklariert Variablen, die nicht benutzt werden.
- Falsch verwendete React-Hooks
- 'await' vergessen

Im Gegensatz zu TypeScript prueft es nicht Typen, sondern Muster und Regeln.

# Sources
- https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS
- https://apps.ankiweb.net/