import Sidebar from './Sidebar'
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';

function App() {
  return (
    //BEM Naming convention!!!!
    <div className="app">

      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      
    </div>
  );
}

export default App;
