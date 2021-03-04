import Card from "./Cards";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="cards">
        <Card
          src="https://wallpapercave.com/uwp/uwp374924.jpeg"
          name="Dark"
          address="https://www.netflix.com/in/title/80100172"
          title="A Netflix Orignal Series"
        />
        <Card
          src="https://wallpapercave.com/uwp/uwp374924.jpeg"
          name="Dark"
          address="https://www.netflix.com/in/title/80100172"
          title="A Netflix Orignal Series"
        />
        <Card
          src="https://wallpapercave.com/uwp/uwp374924.jpeg"
          name="Dark"
          address="https://www.netflix.com/in/title/80100172"
          title="A Netflix Orignal Series"
        />
      </div>
    </div>
  );
}

export default App;
