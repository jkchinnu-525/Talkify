import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';
import './chat.css';
export default function Chat() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const endRef = useRef(null);
    const handleemoji = (e) => {
        setText((prev) => prev + e.emoji);
        setShow(false);
    }

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior:'smooth' });
    })
  return (
    <div className='chat'>
        <div className='top'>
            <div className='user'>
                <img src = "./avatar.png" alt = ""/>
                <div className='text'>
                    <span>Suga</span>
                    <p>Online</p>
                </div>
            </div>
            <div className='icons'>
                <img src = "./phone.png" alt = ""/>
                <img src = "./video.png" alt = ""/>
                <img src = "./info.png" alt = ""/>
            </div>
        </div>
        <div className='center'>
            <div className='message own'>
                <div className='texts'>
                    <p>Hello</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className='message'>
                <img src = "./avatar.png" alt = ""/>
                <div className='texts'>
                    <p>Hello</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className='message own'>
                <div className='texts'>
                    <img src = "https://cdn.pixabay.com/photo/2017/11/14/00/28/wormwood-some-competition-2947198_640.jpg" />
                    <p>Hello</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className='message'>
                <img src = "./avatar.png" alt = ""/>
                <div className='texts'>
                    <p>Hello</p>
                    <span>1 min ago</span>
                </div>
            </div>
            <div ref={endRef}></div>
        </div>
        <div className='bottom'>
            <div className='icons'>
                <img src = "./img.png" alt =""/>
                <img src = "./camera.png" alt =""/>
                <img src = "./mic.png" alt =""/>
            </div>
            <input value={text} type="text" placeholder="Type a message..." onChange={(e) => setText(e.target.value)}/>
            <div className='emoji'>
                <img src = "./emoji.png" alt = "" onClick={() => setShow((prev) => !prev)}/>
                <EmojiPicker className='view' open={show} onEmojiClick={handleemoji} />
            </div>
            <button className='sendbutton'>Send</button>
        </div>
    </div>
  )
}
