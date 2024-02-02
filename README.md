
# Getting Started with Create React App

A simple React application for managing tasks. Users can add new tasks, mark tasks as completed, delete tasks, and filter tasks based on completion status.

## Features

- **Add New Tasks:** Users can add new tasks to the list by typing the task in the input field and clicking the "Add Task" button.

- **Mark Tasks as Completed:** Users can mark tasks as completed by checking the checkbox next to each task. Completed tasks are visually distinguished with a strikethrough.

- **Delete Tasks:** Users can delete tasks by clicking the "Delete" button next to each task.

- **Filter Tasks:** Users can filter tasks to view only completed tasks, active tasks, or all tasks using the filter buttons.

## State Management

The application uses React state to manage the list of tasks and the input for adding new tasks. State updates are handled appropriately when tasks are added, marked as completed, or deleted.

- **tasks (state):** Manages the list of tasks.

- **newTask (state):** Manages the input for adding new tasks.

- **addTask:** Function to add a new task to the list.

- **toggleTaskCompletion:** Function to mark a task as completed.

- **deleteTask:** Function to delete a task.

- **filter (state):** Manages the filter option (all, completed, active).

- **showAllTasks:** Function to show all tasks.

- **showCompletedTasks:** Function to show only completed tasks.

- **showActiveTasks:** Function to show only active tasks.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/task-management-app.git

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
