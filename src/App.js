
import './App.css';
import 'modern-normalize/modern-normalize.css';
import Profile from './components/Profile/socialProfile';
import user from './user.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      </header>
    </div>
  );
}

export default App;
