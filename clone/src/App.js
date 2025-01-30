import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';



function App() {
  return  (
    <div className="App">
      <div className='sideBar'>
        <div className='upper'>
          <div className='upperTop'><img src={gptLogo} alt='Logo' className='logo'></img><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img src={addBtn} alt='new chat' className='addBtn'></img>New Chat</button>
          <div className='upperBottom'>
            <button className='query'><img src={msgIcon} alt='Query'></img>What is programming?</button>
            <button className='query'><img src={msgIcon} alt='Query'></img>How to use an API?</button>
          </div>
        </div>
        <div className='lower'>
          <div className = 'listItems'><img src={home} alt='home' className='listItemsImg'></img>Home</div>
          <div className = 'listItems'><img src={saved} alt='saved' className='listItemsImg'></img>Saved</div>
          <div className = 'listItems'><img src={rocket} alt='rocket' className='listItemsImg'></img>Upgrade to Pro</div>
        </div>
      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;