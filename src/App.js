// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
const user_1 = {
  name: 'Jordan',
}

const user_2 = {
  name: 'Phillip'
}

const user_3 = {
  name: 'Kyle'
}

const user_4 = {
  name: 'Armando'
}

const user_5 = {
  name: 'Franklin'
}

function Button() {
  return (
    <button>
      Generate
    </button>
  );
}

export default function App() {
  return(
    <div>
      <h1>Welcome to our we app!</h1> 
      <Button />
      <h2>
        App builders:  { "\n"}
      </h2>
      <p>{user_1.name}</p>
      <p>{user_2.name}</p>
      <p>{user_3.name}</p>
      <p>{user_4.name}</p>
      <p>{user_5.name}</p>
    </div>

  )
}
