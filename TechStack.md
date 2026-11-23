# Bookmark
- [[##Empfohlener Tech Stack]]
- [[##Alternativen]]
- [[##Kernkomponenten]]
- [[##Offene Fragen]]
- [[#Sources]]
## Empfohlener Tech Stack
Für den Einstieg eine **Web-App mit TypeScript, local-first**. So sieht man schnell Ergebnisse, und Backend und Synchronisation können später ergänzt werden.

| Schicht                    | Wahl                                   | Begründung                                                                 |
| -------------------------- | -------------------------------------- | -------------------------------------------------------------------------- |
| Frontend                   | **React + Vite** (oder **SvelteKit**)  | Schnelles Setup, große Community. Anki selbst nutzt intern Svelte.         |
| Sprache                    | **TypeScript**                         | Typen helfen beim Datenmodell (Deck, Note, Card, Review).                  |
| Datenbank                  | **SQLite** (über **Drizzle ORM**)      | Anki speichert ebenfalls alles in SQLite. Leichtgewichtig, kein Server.   |
| Backend (optional, später) | **Hono** oder **Fastify** auf Node     | Erst nötig für Synchronisation oder Login.                                 |
| Styling                    | **Tailwind CSS**                       | Schnell eine brauchbare UI.                                                |
| Tests                      | **Vitest**                             | Wichtig, um den FSRS-Algorithmus abzusichern.                              |
## Alternativen
- **Desktop-App (wie das echte Anki):** **Tauri** (Rust-Backend + Web-Frontend) + SQLite. Gut, um Rust zu lernen. Der Kern von Anki ist ebenfalls in Rust geschrieben.
- **Mobile-App:** **Expo (React Native)** oder **Flutter**.
- **Kotlin / JetBrains:** **Compose Multiplatform**, eine Codebasis für Desktop, Android und iOS.
- **Klassische Full-Stack-Übung:** **Next.js** + **PostgreSQL** + Authentifizierung. Fokus auf Server, Datenbank und Deployment.
## Kernkomponenten
Diese Teile sind unabhängig vom gewählten Stack.
### Datenmodell
- `Deck`: Sammlung von Karten, verweist auf ein Deck Preset
- `DeckPreset`: Einstellungen wie neue Karten pro Tag, Wiederholungen pro Tag, gewünschte Retention
- `Note`: der eigentliche Inhalt (Vorderseite / Rückseite)
- `Card`: die abgefragte Karte mit FSRS-Zustand (Stability, Difficulty, Fälligkeitsdatum, State)
- `ReviewLog`: jede einzelne Antwort (Bewertung, Zeitpunkt), Grundlage für FSRS
### Scheduling-Algorithmus
- Ziel ist **FSRS** (siehe [[Nanki - 'Not Anki'#FSRS-Algorithmus]]).
- Optional als Zwischenschritt zuerst **SM-2** umsetzen. Er ist einfach und gut dokumentiert und hilft, das Prinzip von Spaced Repetition zu verstehen.
- Als Übung FSRS selbst implementieren, statt eine Library (z. B. `ts-fsrs`) zu verwenden. Die Library kann aber zum Vergleichen in Tests dienen.
### Review-Ansicht
Karte zeigen → umdrehen → bewerten (**Again / Hard / Good / Easy**) → nächste fällige Karte.
### Mögliche Erweiterungen
- Import von `.apkg`-Dateien (ein ZIP-Archiv mit einer SQLite-Datenbank)
- Synchronisation über ein eigenes Backend
- Media Support (Bilder, Audio)
## Offene Fragen
- Welche Sprachen sind bereits bekannt, und soll eine neue gelernt werden?
- Zielplattform: Browser, Desktop oder Mobile?
- Lernschwerpunkt: Frontend/UI, Backend/Datenbanken oder Algorithmen?
# Sources
- https://github.com/open-spaced-repetition/awesome-fsrs/wiki/ABC-of-FSRS
- https://github.com/open-spaced-repetition/ts-fsrs
- https://github.com/ankitects/anki
- https://tauri.app/
- https://orm.drizzle.team/
