# High Alpha Front-End Exercise

## Context

You are a front-end engineer at Klowd. Klowd is an infrastructure management platform that gives you visibility into all of your applications running in any cloud or on-prem environment. Klowd's primary functionality is to show a user a list of their running applications and information about those applications. However, the product team recently decided to move forward with a plan to allow users to also create applications from the same UI.

![alt text](https://github.com/highalpha/frontend-exercise/blob/master/assets/product_screen_1.png "Exercise")

## Goals

### Fix an existing bug

Some customers have recently reported a bug that causes the page to 'crash' and not work. Customers say that when they attempt to load the app, they don't see any app information.

#### Requirements

- Find the bug in the UI code that is causing the applications to fail to render
- Fix the bug such that the same issue does not occur again

### Implement ability to create an application

As noted in the context for this exercise, the product team wishes to give users the ability to create applications from the same UI they are using today. The first step towards achieving this functionality is to create a form for users to enter the information necessary to make an application as well as save it to our database.

#### Requirements

- Use the product screens found in the `assets` directory for visual direction. The ux/ui for adding applications should follow the design provided in those product screens.

- Use the API's endpoint for adding applications `POST /applications`.

- Make sure that the user can't save the application until all required fields are present.

- Refresh the application list when a new application is created so the user sees their new application right away.

## Optional

Along with the requirements listed above, you may also wish to add things that go beyond the requested updates. Some ideas for things you may (but are not required) to use/add are:

- Redux - for the management of applications data

- Setup a css pre-compiler such as Sass

- Add a loading indicator for any asynchronous request

- Utilize latest ES6/ES7 features

- Implement UI sort feature for the applications list

- Tests

## How To Get Started

Follow the steps below to start working on this exercise:

1. Create a fork of this repo into your own account on Github

2. Clone your fork to your local machine

3. Make sure you are in the project directory in your terminal of choice

### Run the server

1. Change to the server directory

```bash
# From the project root
cd ./server
```

2. Install server dependencies

```bash
npm install
```

3. Run server

```bash
npm run start
```

4. The mock Klowd server should now be running at http://127.0.0.1:3001

### Run the UI

1. Change to the UI directory

```bash
# From the project root
cd ./ui
```

2. Install dependencies

```bash
npm install
```

3. Run the UI development server
```bash
npm run start
```

4. You should be able to view the UI in your browser at http://localhost:3000. Any update you make in the UI project should auto-refresh in your browser (with a few exceptions).

## Notes

- To run this project, you will need both node and npm on your local machine.
  - It is probably best to have the latest version of each installed.

- This project was seeded using [create-react-app](https://github.com/facebook/create-react-app), so feel free to use any of their documentation to help understand the UI project's setup.

- As alluded to above, this project uses React and it would be good to have a solid understanding of React, React hooks and pure components.

## Submission

To submit your final work, follow the instructions [here](https://gist.github.com/Chaser324/ce0505fbed06b947d962#submitting) and create a pull request to merge your branch back into our repo.

## Questions

Like with any real-world problem, there may be issues you run into outside the bounds of this exercise, or maybe even issues with the example codebase itself. If you have any issues or questions, feel free to contact me at ahester@highalpha.com.
