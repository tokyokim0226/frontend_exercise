# React Basics Notes
## Module 1

- **State** - The values of all variables your app is working with at any given point in time
- **Modules** - In JavaScript, a module is simply a file
  - Purpose is to have more modular code, where you can work with smaller files, and import and export them so that the apps you build are more customizable and have more composable parts
  - A module can be as simple as a single funciton in a separate file
  - To export a module:
  ```javascript
    export default function addTwo(a, b) {
        console.log(a + b);
    }

    //OR

    function addTwo(a, b) {
        console.log(a + b);
    }

    export default addTwo;
    ```
  - To import a module,
  ```javascript
    import addTwo from "./addTwo";
    ```

- Instead of using OOP, React uses 'composition'
- **Component-based architecture** - a design philosophy building software based on reusable components of code
  - **Reusable**
  - **Independent**
- React is a popular open-source JavaScript library for building user interfaces, particularly for **single-page applications (SPAs)** where you want a fast, interactive user experience
- **DOM** - logical tree-liek structure representing the HTML document
  - uses nodes to describe various parts of the document

- **Functional Compenents** - acts like a JavaScript function

#### JSX
- JSX syntax looks very similar to HTML
- Allows you to write JS code inside what looks like HTML elements
- **Important!** - first letter of a component name must be capitalized
  - lower-case componenets are treated as nomral HTML elements by React
  - need to capitalize components to distinguish JSX and HTML components
  - function name inside component must also be capitalized
- **Transpiling** - interpreting a programming language and translating it to a specific target language (transformation + compiling)
- **Transpiler** - takes a piece of code and transforms it into some other code
- Components - allow you to build more modular apps
- **Babel** - allows you to transpile JSX code (which cannot be understood by a browser) into plain JavaScript code (which can be understood by a browser).
