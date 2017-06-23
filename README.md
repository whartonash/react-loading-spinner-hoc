# React Loading Spinner HOC


## Description

This repository contains an example of a higher-order component, withLoadingSpinner, written in React. It can be found in the `src/hoc` directory. A sample application using the HOC is also provided for the reader to see its use in a mock application.

The sample application renders a single App component which is wrapped in our withLoadingSpinner HOC. This causes an initial loading spinner to render until a dataLoader promise resolves and provides the data required by the UserProfile component, which will then be rendered.

The purpose of HOCs is to be able to abstracting reusable logic and make this available for multiple components to use. The withLoadingSpinner HOC in this repo could be used in the same way with any other component.


## Prerequisites

This project requires Node.js 4.x or higher.


## Installation

To install this sample application and its dependencies, you will need to clone this repository and run the `npm install` from its root directory

```shell
$ git clone https://github.com/ANDigital/personal-ashleywharton-react-loading-spinner-hoc
$ cd personal-ashleywharton-react-loading-spinner-hoc
$ npm install
```


## Starting the app

The app can be started by running the npm start command defined in the `package.json` file.

```shell
$ npm start
```

This should open your system's browser at `http://localhost:3000/`


## Possible Extensions

There are many ways the user could extend the work found in this repo. An initial step might be to add handling for an error state from the data loader function. From there the user could try implementing the withLoadingSpinner HOC with another component. To gain a true understanding of HOCs, the ultimate aim should be to write a custom one from scratch.


## References

The sample app in this repository was created with the `create-react-app` npm module from Facebook. Documentation on this can be found here: [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)