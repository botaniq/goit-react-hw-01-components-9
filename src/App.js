
import './App.css';
import 'modern-normalize/modern-normalize.css';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import Friends from './components/Friends/FriendsList';
import friends from './friends.json';
import transactions from './transactions.json';
import Transactions from './components/Transactions/Transactions'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile avatar={user.avatar} name={user.name} tag={user.tag} location={user.location} stats={user.stats}  />
        {/* <Statistics title="Upload stats" stats={statisticalData} />; */}
        <Statistics title="Upload stats" stats={statisticalData} />
        <Friends friends={friends} />
        <Transactions transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
