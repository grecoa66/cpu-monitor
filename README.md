## Hello Datadog!

Thank you for taking the time to review my take home interview assessment.

To start this project, open 3 command shells:

- In the first shell, run yarn install to get all the dependencies needed for this project.After all dependencies are installed, run yarn server to start the express server.
- In the second shell, run yarn start to start the application development server.
  After those two processes are running the application will be available at http://localhost:3000.

---

If I was to spend more time on this project to productionalize it, I would concentrate on component abstraction and styling.

First, I would create a hook that abstracted the use of the useInterval hook in averageCpuChart.js to call the API. As the theoretical features of this application grow, I'm sure it would be beneficial to get the CPU load data from a hook so it can be used across several different components.

The next thing I would focus on is application styling. I didn't focus much on page layout, design, or UX/UI. I would invest time to explore all the options rechart.js has to offer in order to make the graph more visually appealing.

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn server`

Runs the `express` server, which serves the `cpu-load` endpoint.
