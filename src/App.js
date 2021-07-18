
import './App.css';
import 'modern-normalize/modern-normalize.css';
import Profile from './components/Profile/socialProfile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import Friends from './components/Friends/Friends';
import friends from './friends.json';
import transactions from './transactions.json';
import Transactions from './components/Transactions/Transactions'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
        {/* <Statistics title="Upload stats" stats={statisticalData} />; */}
        <Statistics stats={statisticalData} />
        <Friends friends={friends} />
        <Transactions transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
