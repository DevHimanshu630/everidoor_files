import Content from "./Components/Content/Content";
import Dashboard from "./Components/Dashboard/Dashboard";
import Playlist from "./Components/Playlist/Playlist";
import { Routes , Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={ <Dashboard/>}/>
      <Route path="/content" element={ <Content/>}/>
      <Route path="/playlist" element={ <Playlist/>}/>
    </Routes>
  );
}

export default App;
