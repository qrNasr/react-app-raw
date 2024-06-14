// App.jsx
// import three function components like below.
import { Header, Footer, Main,Food } from './Header';
import './App.css';

function App() {
  return (
    <div>
      {/* to render all componnenst, use div of fragment <></> */}
      <Header />
      <Main />
      <Footer />
      <Food />
      <Food />
    </div>
  );
}

export default App;
