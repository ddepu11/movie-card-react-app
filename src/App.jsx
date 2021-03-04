import Card from "./Cards";
import Navbar from "./Navbar";
import movies from "./movie-data";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="cards">
        {movies.map((movie) => (
          <Card
            src={movie.src}
            name={movie.name}
            address={movie.address}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
