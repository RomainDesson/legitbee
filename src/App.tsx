import { HomePageContainer } from "./pages/HomePage/HomePage.container";
import { MoviesProvider } from "./contexts/MovieContext/context";

function App() {

  return (
      <MoviesProvider>
        <div className="App">
          <HomePageContainer />
        </div>
      </MoviesProvider>
  )
}

export default App
