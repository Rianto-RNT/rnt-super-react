<h1 align="center">
  <br>
  Zesty: Photography, MILKYMood: Tour Schedule, and Book Club: Find fine book. 
  <br>
</h1>

<h4 align="center"> Flexible Javascript with React.js, an open-source frontend framework. Create beautiful websites with user interface components, which is a built on top of <a href="https://reactjs.org/" target="_blank">React JS</a>.</h4>

 <p align="center">
 <a href="#deployed-version">Demo</a> •
  <a href="#api-usage">API Usage</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#installation">Installation</a> •
  <a href="#build-with">Build With</a> •
  <a href="#npm-packages">NPM Packages</a> •
  <a href="#demonstration">Demonstration</a> •
  <a href="#future-updates">Future Updates</a> • 
  <a href="#known-bugs">Known Bugs</a> • 
  <a href="#acknowledgement">Acknowledgement</a>
</p>

## Deployed Version

Live demo (Feel free to visit) 👉 :

- [Zesty](https://62d41759f047fa5ec85817e0--dapper-cendol-7d0b54.netlify.app/) or https://tinyurl.com/zesty-rnt-creative
   [![](https://github.com/Rianto-RNT/rnt-super-react/blob/development/rnt-zesty/src/assets/images/zesty-homepage.png)](https://github.com/Rianto-RNT/rnt-super-react)

- [milkymood](https://lambent-hotteok-00b7b0.netlify.app/) or https://tinyurl.com/rnt-milkymood
   [![](https://github.com/Rianto-RNT/rnt-super-react/blob/development/milkymood/src/assets/images/milky-mood-homepage.png)](https://github.com/Rianto-RNT/rnt-super-react)

## API Usage

Check:

[API Documentation Postman](https://documenter.getpostman.com/view/16994323/UVkiSJNz)

[API Documentation Swagger](https://app.swaggerhub.com/apis-docs/rnt-development-one/bootcamp-booking_api/1.0)

for more info.

## Deployment Zesty

The website is deployed with build into netlify. Below are the steps taken:

1. Create build folder

```sh
$ cd rnt-zesty
$ npm run build
```

2. Create netlify account
3. Go to dasboard > sites > dragdrop "build" folder into: "Drag and drop your site output folder here"
4. Wait for uploading
5. Netlify generate your site and address URL link.
   [![](https://github.com/Rianto-RNT/rnt-super-react/blob/development/rnt-zesty/src/assets/images/netlify-build-folder-upload-location.png)](https://github.com/Rianto-RNT/rnt-super-react)

## Installation

You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the dependencies by running

```sh
$ cd rnt-zesty
$ npm i
```

## Run App in Development

```sh
$ cd rnt-zesty
$ npm start
```

## Build With

- [Node.js](https://nodejs.org/en) - JS runtime environment
- [React](https://www.react.org/) - A JavaScript library for building user interfaces.
- [VSCode](https://code.visualstudio.com) - Free source-code editor made by Microsoft
- [Git](https://git-scm.com) - Open source distributed version control system
- [Netlify](https://www.netlify.com/) - Web developer platform that multiplies productivity.

## NPM Packages

- [create-react-app](https://github.com/facebook/create-react-app)
- [styled-components](https://github.com/styled-components/styled-components)
- [formik](https://github.com/jaredpalmer/formik)
- [yup](https://github.com/jquense/yup)

## Development Process

- Welcome to Intro to React.js
- Introducing React
- Introduction to Zesty
- Getting started with CodeSandbox
- Breaking down the App component

### 1) Zesty

- Building Zesty
- Creating a global state
- Intro to hooks and event handlers
- Updating the index position with an event handler
- Adding an index counter and refactoring HTML/CSS
- Creating a loading component
- Writing the loading logic
- Making our project responsive

### 2) MILKYMood

- Introduction to MilkyMood #1
  - Setup CRA
  - Setup prettierrc and prettierignore
  - setup index.html
- Introduction to Styled Components
  - Create App styles component
  - Implemanting GlobalStyle in app.js
  - Install fonts
  - Rename index.js to be index.jsx
  - Setup package.json file and line of code down below

```sh
"description": "",
"keywords": [],
"main": "src/index.jsx",
```

- Building the Header component
  - Create Component header index.jsx
  - Create styles component for header
  - Import Logo
  - Create Header Component
- Building the Footer component
  - Create Footer index
  - Create Footer styles
  - Implementing in App.js
- Building the Image component
  - Create Image Box index component
  - Create style component for image box
  - Implementing in app js file
- Using a matrix to slice the image into a puzzle
- Using hooks, event handlers, and maths to calculate the cursor distance
- Setting new positions for the image squares
- Changing the background color and glow animation based off of the image's status
- Adding responsive styles
  - Header responsive
  - Footer Responsive
  - App responsive
- Introduction to MilkyMood #2
- Creating a sign up button and modal window
  - Create index modal file
  - Create modal styles
  - Implementing in app
- Adding functionality to the modal window
  - Implementing Toggle Modal fuctionality
  - Close button in modal
  - Absolute Center reuseable code
- Creating a Basic Form
  - Form index file
  - Form style file
  - Modal inner
  - modal styles
- Refactoring the form to use Formik and Yup
  - index form refactor code using Formik and validation using Yup
- Refactoring the input fields to use Formik's Field hook
  - Form index refactor code more readable
- Styling the form and modal using styled components
  - form and modal inner styles and code refactor

### 3) Book Club

- Introduction to Book Club

## Articles

- [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [Math.hypot()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)
- [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Keyframe-styled-component](https://styled-components.com/docs/api#keyframes)
- [Formik - useField() - Hook](https://formik.org/docs/api/useField)

## Future Updates

- More Improvement

## Known Bugs

Feel free to email me at rianto.rnt@gmail.com if you run into any issues or have questions, ideas or concerns.
Please enjoy and feel free to share your opinion, constructive criticism, or comments about my work. Thank you! 🙂

## Route Structure

1. Zesty
   > /

# Acknowledgement

- This project is part of the online course I've taken at Udemy. Thanks to SuperHi! for creating this awesome course! Link to the course: [Intro to React.js](https://www.superhi.com/courses/intro-to-react-javascript)
