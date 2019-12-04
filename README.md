## Demo:

https://develliot.github.io/showcase

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

Removes all configuration from create-react-app

### `yarn deploy`

This will deploy the web page to git hub pages to:

https://develliot.github.io/showcase

## Project Structure

**Pages**

Pages are special components which are rendered for specific routes, they shouldn't contain any styles they should only contain other components

**Components**

Components are the main building blocks of the this application. Ideally each component should live in its own folder and contain an index file. This folder should also contain a styles file where styles have been separated out. Each component should contain its on tests folder for testing different states and snapshots for regression testing.

**Containers**

Containers are to be used to separate data from display, for example handling data from URL requests and selecting which display components to render

**Contexts**

Contexts are where shared state is stored

**Hooks**

Reusable behaviors, such as listening to dom events and returning values or, URL requests and returning values

**Utils**

General methods can be used across all other files.

**Theme**

In order to use standardized colours fonts and spacing, no magic numbers should be used in styles all value should derive from the theme as much as possible

**URLs**

When creating links and route all urls are stored in an object here, at the moment all urls are prefixed with '/showcase/' because of the way github pages handles routes. It's not idea but at least all the routes are correct and the header can identify what route is selected on first load.
