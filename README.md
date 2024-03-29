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

- [Book-Club](https://soft-sawine-e01bec.netlify.app/) or https://tinyurl.com/rnt-bookclub
  [![](https://github.com/Rianto-RNT/rnt-super-react/blob/development/book-club/src/assets/png/book-club-ui.png)](https://github.com/Rianto-RNT/rnt-super-react)

## API Usage

- Book Club API live demo 👉: https://rnt-book-club-json.herokuapp.com/api/v1/books

Check:

[API Documentation Postman](https://book-club-json.herokuapp.com/books)

[API Documentation Swagger](https://book-club-json.herokuapp.com/books)

for more info.

## Deployment

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
- [chocolatey](https://chocolatey.org/)

## NPM Packages

- [create-react-app](https://github.com/facebook/create-react-app)
- [styled-components](https://github.com/styled-components/styled-components)
- [formik](https://github.com/jaredpalmer/formik)
- [yup](https://github.com/jquense/yup)
- [react-transition-group](https://github.com/reactjs/react-transition-group)
- [lodash](https://github.com/lodash/lodash)
- [prettier](https://github.com/prettier/prettier)

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

- [figma-file](https://www.figma.com/file/MwZxjRaE0HcDKleUfypjwm/Project_3_Book_Club?node-id=3%3A19)
- Introduction to Book Club
- Setting up a local environment and creating a new React app
- Configuring our code editor and cleaning up default files
- Fetching data from an API
  - API Books data >>> https://rnt-book-club-json.herokuapp.com/api/v1/books
- Rendering the book as a React component
- Setup Book-Club API
- Deploy Book-Club API
- Implementing Book-club API endpoints to Book-club react
- Creating global styles and a header
- Selecting a book from the list
- Building a detail panel to show more book info
- Closing the panel and building a background shadow
- Adding animation to the panel
- Refactoring the book list's scrolling behavior
- Building a search component
- Refining the search feature

- Deploy Book-Club to Netlify

```sh
// open new terminal and run
$ cd book-club
$  npm run build

// 1) go to netlify account
// 2) in dashboard go to Site menu tab
// 3) Click Add new site
// 4) Choose Deploy Manualy
// 5) Drag and Drop folder build of book-club to netlify site
// 6) Wait until deployment complete
// 7) Done and congratulation! you can share link to the world
```

- Book-Club Assets

  | Item                                  | Link                                                                                         |
  | ------------------------------------- | -------------------------------------------------------------------------------------------- |
  | Figma                                 | [https://www.figma.com/file/MwZxjRaE0HcDKleUfypjwm/Project_3_Book_Club?node-id=3%3A19][pldb] |
  | Work Sans (weight: 600)               | [https://fonts.google.com/specimen/Work+Sans?preview.text_type=custom&query=work][plgh]      |
  | Libre Baskerville (style: 400 italic) | [https://fonts.google.com/specimen/Libre+Baskerville?query=libre+bask][plgd]                 |
  | API                                   | [https://rnt-book-club-json.herokuapp.com/api/v1/books][plod]                                |
  | Github Repo                           | [https://github.com/Rianto-RNT/rnt-super-react][plme]                                        |
  | Live Demo                             | [Coming soon][plga]                                                                          |

## Articles

- [Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [Math.hypot()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot)
- [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [TouchEvent](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [Keyframe-styled-component](https://styled-components.com/docs/api#keyframes)
- [Formik - useField() - Hook](https://formik.org/docs/api/useField)
- [javascript-promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [javascript-async-function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [javascript-response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
- [javascript-try-catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [react-transition-group/transition](https://reactcommunity.org/react-transition-group/transition)
- [transition-prop-timeout](https://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout)
- [react-useRef-hook](https://reactjs.org/docs/hooks-reference.html#useref)
- [lodash-function-throttle](https://lodash.com/docs/4.17.15#throttle)
- [wndow-scrolly](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)
- [react-cleaning-up-an-effect](https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect)
- [window.scroll()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll)
- [string.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [react-uncontrolled-components](https://reactjs.org/docs/uncontrolled-components.html)

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
