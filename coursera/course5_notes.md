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

##### Building a Layyout
- How would you organize your code for a given structure of an application?
  - either 1) group by features or 2) group by file type
  - Don't nest folders too deep, keep things simple
  - Don't spend more than 5 mintues setting up a project
  - For a small project, you can keep it as simple as just adding a **components** folder and moving all your components into it
  

- **className** attribute in JSX syntax - since class is a reserved keyword in javascript, we must use className instead
- **Javascript object**  
  - variable that can contain many values
  - groups related data of different types
  - contains object properties
- **React props**
  - Pass data between components
  - Arguments are passed like HTML attributes
  - Uses the keyword **props** - props is an object in React
  - **props** can be defined as a parameter within a functional component
  - You can pass a prop to a component by adding an attribute too the compoonent being rendered (when it is rendered from its parent element), with the attribute's value becoming the value of the passed-in prop

**Ternary operator** - uses the ?
```jsx
let name = 'Bob';
name == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');

```
- a shorthand syntax that I can use as a replacement for the if statement


#### Function declaration vs Function expression
- **Function declaration** - starts the line with the keyword function
- **Function expression** - assign a function to a variable, uses = or =>.

##### Data Flow in React
- Only moves in one way (parent to child) via **props**
- A child component can't mutate or change its props - can onlyy read them and re-render/only consumed
- This ensures that data is moving from top to bottom through the component hierarchy
- also ensures that changes are transmitted through the system
- **props** belongs to the parent that renders the component
- **state** data belongs to the component itself
  - state is a data in a component that determines behavior
  - allows components to stay in sync with each otehr and ensures that your app behaves as intended 

```jsx
const [greet, setGreet] = React.useState("Hi");
// Here, greet is the state variable and setGreet is the state function (state function adds a `set` in front of the state variable name by convention)
//cannot use the state functiono directly
```

- **Lifting up a state** is when you move a state from a child component to a parent component so that other sibling omponents of the child component can also access the state.
- **Prop drilling** is a situation where you are passing data from a parent to a child component, then to a grandchild component, and so on, until it reaches a more distant component further down the component tree, where this data is required.
  - Props drilling simply means passing a prop through props objects through several layers of components. The more layers there are, the more repetitive and unnecessary this feels. There are various ways to deal with this, as you’ll learn in the lesson items that follow.

**Single page Applications**
- single page applications allow the user to interact with websites without downloading entire new webpages, which was the traditional method of loading webpages
  - instead, it rewrites the current webpage as the user interacts with it

**Assets**
- In react, assets can be things like images, styleheets, fonts, media files, or basically any file that's needed by your app at runtime
- in other words, assetes are all the files that your React app needs to have access to in order to work as intended
- Assets essential for application functionality are conventionally placed within the src folder for processing by build tools, while non-essential assets are typically stored in the public folder in React applications. 
  - This is just a convention, not a strict rule - but keep in mind that it is good development practice to do so
- In react, assets can be either:
  - 1) rendered by using the import statement and then calling it
  - 2) directly accessed without import by using the require() and placing the filepath directly inside.

**Bundling**
- Bundling is a process that takes all the imported files in an app and joins them into a single file, referred to as a **bundle**
- **webpack** - a module bundler
  - takes in various kind of files and bundles them together so that a browser can understand that bundle and work with it
  - webpack builds a dependency graph and bundles modules into one or more files that a browser can consume
