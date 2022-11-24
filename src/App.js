
import './App.css';
import Comments from './components/Comments/Comment';
 
const data = {
    id: '1',
    date: new Date(),
    userTitle: 'Kitty cat',
    avatarUrl : 'https://placekitten.com/g/64/64',
    userText:'Learning React is awesome'

  }

function App() {
  return (
    <div className="App">
    <Comments userData = {data}/>
    </div>
  );
}

export default App;
