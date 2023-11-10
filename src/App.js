import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './openai';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    text: 'Hi, I am ChatGPT',
    isBot: true,
  }]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      { text: input, isBot: false },
      { text: res, isBot: true }
    ])

  }
 
  return (
    <div className="App">
      <div className="sideBar">
            <div className="upperSide">
              <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo"/><span className="brand"/>ChatGPT</div>
              <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn"/>New Chat</button>
              <div className='uppersideBottom'>
                <button className='query'><img src={msgIcon} alt="query"/>What is programming? </button>
                <button className='query'><img src={msgIcon}  alt="query"/>How to use an API? </button>
              </div>
            </div>
            <div className='lowerSide'>
              <div className='listItems'><img src={home} alt='Home' className='listItemsImg'/>Home</div>
              <div className='listItems'><img src={saved} alt='Saved' className='listItemsImg'/>Saved</div>
              <div className='listItems'><img src={rocket} alt='Upgrade' className='listItemsImg'/>Upgrade to pro</div>

            </div>
      </div>
      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt=""/><p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={gptImgLogo} alt=""/><p className="txt">Lorem ipsum dolor sit amet. Sed tempora assumenda id molestias pariatur et quidem laborum. Est tenetur corporis et atque nobis sed iste necessitatibus aut nesciunt enim id quibusdam deserunt vel perspiciatis voluptatem. Eos inventore nisi et aliquid sequi ea quia corporis. Et perspiciatis voluptatem et dolore facere qui dolor iure id cumque omnis et internos nisi. Est aliquid error cum obcaecati sunt nam placeat nesciunt ab dicta sapiente et quia distinctio. Sit quisquam excepturi quo similique optio est molestias dolor ut voluptas iste ut doloribus sint eos accusantium error a consequatur dolores. Ut nesciunt magnam nam inventore veniam 33 similique magni non facilis magnam. Ut eius quia qui voluptatibus rerum et voluptas similique sit quidem fugit et aliquid debitis. Quo praesentium aliquam eum libero molestiae et ducimus distinctio est esse voluptatibus sed corporis fugiat et voluptatum odio eos dolorem assumenda. </p>
          </div>
          {messages.map((message, i) => {
            <div className={message.isBot?'chat bot':'xhat'}>
            <img className='chatImg' src={message.isBot?gptImgLogo:userIcon} alt=""/><p className="txt">{ message.text }</p>
          </div>
          })}
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}}/><button className='send' onClick={handleSend}><img src={sendBtn} alt="Send"/></button>
          </div>
          <p>ChatGPT may produce incorrect results</p>
        </div>

      </div>
    </div> 
  );
}

export default App;
