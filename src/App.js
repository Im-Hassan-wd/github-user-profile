import { Routes, Route} from "react-router-dom"

// styles
import "./App.css"
// pages and components
import Home from "./pages/home/Home"
import Repository from "./pages/repository/Repository";
import Search from "./pages/search/Search"

// pages and components

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route>
          <Route index element={<Search />} />
          <Route path='/search' element={<Search />} />
          <Route path='/users/:id' element={<Repository />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;