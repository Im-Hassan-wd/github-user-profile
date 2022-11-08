import { Routes, Route, Navigate, useLocation} from "react-router-dom"

// styles
import "./App.css"
import NotFound from "./pages/404/NotFound";
// pages and components
import Home from "./pages/home/Home"
import Repository from "./pages/repository/Repository";
import Search from "./pages/search/Search"

// pages and components

function App() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />

        <Route>
          <Route index element={<Search />} />
          <Route path='/search' element={<Search />} />
          <Route path={'/search' + queryString} element={<Search />} />
          <Route path='/:name/:id' element={<Repository />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
  
}
export default App;