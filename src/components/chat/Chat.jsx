import EmojiPicker from 'emoji-picker-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { useChatStore } from '../../lib/chatStore';
import { db } from '../../lib/firebase';
import './chat.css';
export default function Chat() {
    const [chat, setChat] = useState();
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const endRef = useRef(null);
    const { chatId } = useChatStore();
    const handleemoji = (e) => {
        setText((prev) => prev + e.emoji);
        setShow(false);
    }

    useEffect(() => {
        endRef.current.scrollIntoView({ behavior:'smooth' });
    },[]);
    useEffect(() => {
        const unSub = onSnapshot(doc(db,'chats',chatId), (res) => {
            setChat(res.data());
        });
        return () => unSub();
    },[chatId]);
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
            { chat?.messages?.map((message) => (
                <div className='message own' key={message?.createAt}>
                    <div className='texts'>
                        {message.img && <img src = {message.img} />}
                        <p>{message.text}</p>
                        {/* <span>{message.createAt}</span> */}
                    </div>
                </div>
            ))}
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
