# Translating Print Farm Manager

The client is wired up with [react-i18next](https://react.i18next.com/). `src/locales/en.json`
is the source of truth for every user-facing string in the UI — it also doubles as the schema
that every other language file must match.

## Adding a new language

1. Copy `src/locales/en.json` to `src/locales/<code>.json` (e.g. `pl.json` for Polish), using the
   [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) language code.
2. Translate the **values** only — never rename or remove a key, and keep any `{{placeholder}}`
   tokens and `<0>...</0>` tags exactly as they appear (they're interpolation and rich-text markup
   substituted at render time).
3. Register the language in `src/i18n.js`:
   - Import the JSON file at the top: `import pl from './locales/pl.json';`
   - Add it to `resources`: `pl: { translation: pl },`
   - Add an entry to `SUPPORTED_LANGUAGES`: `{ code: 'pl', label: 'Polski' }`
4. That's it — the language switcher in Settings picks it up automatically.

## Key convention

Keys are `namespace.key`, kept flat (no more than two segments). Where a page has sub-sections,
the section name is folded into the key itself in camelCase (e.g. `settings.dispatchTitle`), not
nested a third level deep. Reuse `common.*` for words that repeat across many pages (buttons,
status words) instead of duplicating them per namespace.

## What not to translate

- Code identifiers, API field names, and URLs.
- Brand names (Prusa, Bambu, Elegoo, Klipper, OctoPrint, PayPal, …).
- Backend error messages — the server only replies in English for now.

## Pluralization

Keys that vary by count use i18next's plural suffixes, e.g. `jobCount_one` / `jobCount_other`.
Provide both forms; i18next picks the right one from the `count` value passed to `t()`.
