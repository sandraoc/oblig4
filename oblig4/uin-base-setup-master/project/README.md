# Oppdatert 23.03.21 14:00

## Clone prosjekt

- I kommandolinja skriv git clone <https://github.com/mariuswallin/uin-base-setup.git> .
- Deretter skriv rm -rf .git for å slette gammelt GIT repo

## Installere React

I client ligger alt som hører til React.
Stå i mappen "client" i terminalen og skriv npm install eller yarn
Da skal i utgangspunktet alt du trenger bli installert
Se README.md der inne

## Installere Sanity

Når du skal lage prosjekt til Sanity så må du være inne i project (IKKE I CLIENT) mappen.
Følg anvisningen for å installere Sanity

## Du må sette rettigheter i Sanity Manage

(<https://manage.sanity.io/> => settings => api)

- Sørge for at localhost:PORT finnes i listen. Det er den porten du som React bruker (se i browseren du bruker)
- Vanligvis er det localhost:3000
- Trykk på Create token med "write" tilgang. Koden du får der må du lime inn i .env filen din

## Kopier .gitignore fra "client" mappen til sanity mappen
