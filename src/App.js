import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React :D
        </a>
      </header>
      <body>

        <h1> {user.name} </h1>

        <img
            className='avatar'
            src={user.imageUrl}
            alt='kitty'
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />

      </body>
    </div>
  );
}

const user = {
  name: 'Gael Perez',
  imageUrl: 'https://pbs.twimg.com/profile_images/1267883771828682753/-VN1yMAs_400x400.jpg',
  imageSize: 200,
};



export default App;
