import './App.css';
import SlideMenu from './components/slide-menu/slideMenu';
import HomeMid from './components/home-midle/homeMid';

function App() {
  return (
    <div className="App d-flex mx-5">
      <SlideMenu />
      <div className='vertical-diveder'></div>
      <HomeMid />
      <div className='vertical-diveder'></div>
    </div>
  );
}

export default App;
