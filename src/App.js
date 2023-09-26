import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';


function App() {
  return (
    <div className="app">
      <Sidebar/>
      {/* feed section */}
      <Feed/>
      {/* widgets section */}
      <Widgets/>
    </div>
  );
}

export default App;
