import logo from './logo.svg';
import './App.css';

function App() {
  return (
   /*<><div className="App">
      <header className="App-header">
        <img src="https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png" className="App-logo" alt="logo" />
     </header>
      <p>
        This is Annie! Welcome to my portfolio landing page!
      </p>
        <a
          className="App-link"
          href="https://www.anniewen.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="custom-button">Visit my portfolio</button>
        </a>
    </div></>
  ); */
    <div className="App">
      <header className="App-header">
        <div className="content-container">
          <img src="https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png" className="App-logo" alt="logo" />
          <div className="text-container">
            <h1>
              Hey I'm Annie!
            </h1>
            <p>
            a product designer at UC San Diego. With the users' needs in mind, I create meaning pixel by pixel. 
            </p>
            <a
              className="App-link"
              href="https://www.anniewen.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="custom-button">Check out my work!</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
