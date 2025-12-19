# pokemon-information-viewer
A simple Pokémon Information Viewer
# Pokémon Information Viewer

A simple web application that allows users to search for a Pokémon by name or ID and view basic information retrieved from the public PokéAPI.

This project was created as part of a JavaScript assignment to practice consuming a public API, handling user input, and dynamically displaying data on a web page.

---

## Features

- Search for a Pokémon using its name or ID
- Fetches data from the PokéAPI
- Displays:
  - Pokémon name
  - Sprite image
  - Type(s)
  - Height
  - Weight
- Pokémon type badges for better visual clarity
- Enter key support for improved usability
- Clean card-based UI with a Pokémon-themed background

---

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- Fetch API
- PokéAPI

No frameworks or external libraries were used.

---

## Live Demo

Netlify URL:  
https://pokemon-information-viewer.netlify.app/

---

## Project Structure

pokemon-information-viewer/
- index.html
- style.css
- app.js
- README.md

---

## How It Works

1. The user enters a Pokémon name or ID into the input field.
2. When the Search button is clicked (or the Enter key is pressed), a request is sent to the PokéAPI.
3. The API responds with Pokémon data in JSON format.
4. JavaScript extracts the required fields and displays them dynamically on the page.

---

## API Reference

PokéAPI Documentation: https://pokeapi.co/  
Example endpoint:  
https://pokeapi.co/api/v2/pokemon/pikachu

---

## Deployment

This project is deployed using Netlify.

Steps:
1. Push the project to GitHub
2. Import the repository into Netlify
3. Use default build settings (no build command required)

---

## Assignment Context

This project demonstrates:
- API consumption using fetch()
- Handling user input in JavaScript
- Dynamic DOM manipulation
- Clean code structure and readability

---

## License

This project is for educational purposes only.  
Pokémon and Pokémon character names are trademarks of Nintendo.
