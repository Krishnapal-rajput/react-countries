# Country Details App

This is a React application that displays information about various countries, including their flags, populations, regions, capitals, and more. Users can click on a country card to view detailed information about that country.

## Features

- Display a list of countries with their flags and basic information.
- Click on a country card to view detailed information.
- Show native name, population, region, subregion, capital, top-level domain, currencies, and languages.
- Display neighboring countries as links to their respective details.
- Responsive design with support for light and dark themes.

## Technologies Used

- React
- React Router
- CSS
- Fetch API

## Live Demo

You can check out a live demo of the application on [Netlify](https://krishnas-react-rest-countries-api.netlify.app/)(stable).
You can check out a live demo of the application on [Netlify](https://krishnas-react-rest-country-api.netlify.app/).

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Krishnapal-rajput/country-details-app.git
2. Navigate to the project directory: 
    ```bash
    cd country-details-app
3. Install the dependencies:
    ```bash
    npm install
4. Start the development server:
    ```bash
    npm start
5. Open your browser and go to <code>http://localhost:3000</code> to view the app.

### Usage
The homepage displays a grid of country cards.
Click on any country card to see more details about that country.
Use the back button to return to the list of countries.

### Components
<b>CountryCard:</b> Displays basic information about a country.
<b>CountryDetail:</b> Shows detailed information for a selected country.
<b>CountryCardShimmer:</b> A loading placeholder while fetching country data.

### Styling
The application includes basic styling for light and dark themes. You can toggle themes using the <code>UseTheme</code> hook.

### API
Data is fetched from the <a href="https://rescountries.com/v3.1/all">REST Countries API</a> to retrieve country information.

### Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for any enhancements or bugs.

### License
This project is licensed under the MIT License - see the <a href="./LICENSE">LICENSE</a> file for details.