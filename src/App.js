import './App.css';
import Sidebar from './Components/Sidebar';
import Inbox from './Components/Inbox';
import FriendsList from './Components/FriendsList';
import Messenger from './Components/Messenger';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Inbox/>
      <FriendsList/>
      <Messenger/>
    </div>
  );
}

export default App;
