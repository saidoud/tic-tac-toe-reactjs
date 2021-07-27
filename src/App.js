import Game from "./components/Game/Game";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <a href="#default" className="logo">
          Tic Tac Toe
        </a>
      </header>
      {/* Tic Tac Toe Game */}
      <Game />

      {/* Footer */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
