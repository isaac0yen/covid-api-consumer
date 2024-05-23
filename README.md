# COVID-19 Nigeria Data App
## Please be aware that the API docs wasn't provided

This is a single-page React application that fetches and displays COVID-19 data for different states in Nigeria. The data is fetched from the open API at `https://covidnigeria.herokuapp.com/api` using Redux for state management.

## Directory Structure

```
my-covid-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── CovidData.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── package-lock.json
```

## Dependencies

- `react`: The core React library
- `react-dom`: React package for working with the DOM
- `react-redux`: Official React bindings for Redux
- `redux`: Predictable state container for JavaScript apps
- `redux-thunk`: Middleware for Redux that allows async actions

## Code Logic

### `src/index.js`

This is the entry point of the application. It renders the `App` component and provides the Redux store using the `Provider` component from `react-redux`.

### `src/redux/store.js`

This file creates the Redux store using the `createStore` function from Redux and applies the `thunk` middleware to handle asynchronous actions.

### `src/redux/reducer.js`

The reducer function handles three different action types: `FETCH_DATA_REQUEST`, `FETCH_DATA_SUCCESS`, and `FETCH_DATA_FAILURE`. These actions are used to update the state based on the status of the API request.

### `src/redux/actions.js`

This file defines the action creators for the three action types mentioned above, and an asynchronous `fetchData` action creator. The `fetchData` action creator dispatches the appropriate actions based on the API response.

### `src/components/CovidData.js`

This is the main component that fetches and displays the COVID-19 data. It uses the `useDispatch` and `useSelector` hooks from `react-redux` to dispatch the `fetchData` action and retrieve the data, loading, and error states from the Redux store.

The component renders a list of COVID-19 data for each state in Nigeria, displaying the state name, total confirmed cases, and total deaths. If the data is still being fetched, a "Loading..." message is shown. If there's an error, an error message is displayed.

### `src/App.js`

This component simply renders the `CovidData` component.

## Usage

1. Clone the repository or download the source code.
2. Navigate to the project directory: `cd my-covid-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application.

The application will fetch the COVID-19 data from the API and display it in the browser.
