
// Header.j
export function Header() {
  return (
    <header>
      <h1>My web site</h1>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p>&copy; 2022 My web site</p>
      {/* use js code in brackets to render date */}
      {/* to use js code in return statment use {} */}
      <p>&copy;{new Date().getFullYear()} your website</p>
      <p> The time is {Date.now()}</p>
    </footer>
  );
}

export function Main() {
  return (
    <main>
      <h2>Welcome to my web site</h2>
      <p>This is a sample web site.</p>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </main>
  );
}
// use js in React with HTML
export function Food() {
    const food1 = ["Orange", "Mango", "Kiwi"];
    const food2 = "Apple";
    const food3 = "Banana";

    return (
      <div>
        <h2>My favorite foods</h2>
        <ul>
          <li>{food1[0]}</li>
          <li>{food1[1]}</li>
          <li>{food1[2]}</li>
          <li>{food2}</li>
          <li>{food3}</li>
        </ul>
      </div>
    );
  }

// you can create Footer.jsx, Main.jsx components and import them in App.jsx
// export default App; is used to export the App component as the
// default export of the module. This allows other modules to import the App component
// using a default import statement, such as import App from './App';.
// Without the default keyword, the App component would need to be imported using a named
// import statement, such as import { App } from './App';.
// The default export is useful when you want to export a single component or value from a
// module, and you want to make it easy for other modules to import it.
// In this case, the App component is the main entry point of the application, so it
// makes sense to export it as the default export.
// This way, other modules can import the App component and use it as the root component
// of the application.
// For example, in the index.js file, you could import the App component like this:
// import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// This would render the App component to the DOM element with the id "root".
// Without the default export, you would need to import the App component like this:
// import { App } from './App';
// ReactDOM.render(<App />, document.getElementById('root'));
// As you can see, the default export makes it easier to import the App component.
// It's a small but useful convention that can make your code more readable and
// maintainable.
// In summary, the default export is a way to export a single component or value from a
// module, making it easy for other modules to import it. It's a useful convention that
// can make your code more readable and maintainable.
// In this case, the App component is the main entry point of the application, so it
// makes sense to export it as the default export.
// This way, other modules can import the App component and use it as the root component
// of the application.
