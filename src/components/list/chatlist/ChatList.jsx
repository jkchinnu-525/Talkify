import { useState } from 'react';
import './chatlist.css';

export default function ChatList() {
    const [add,setAdd] = useState(false);
  return (
    <div className='chatlist'>
        <div className='search'>
            <div className='searchbar'>
                <img src="./search.png" alt=""></img>
                <input type="text" placeholder='Search'></input>
            </div>
            <img onClick={() => setAdd((prev) => !prev)} src = {add ? "./minus.png" : "./plus.png"} alt='' className='plus'></img>
        </div>
        <div className='items'>
            <img src = './avatar.png' alt=""></img>
            <div className='texts'>
                <span className='span'>Jk & V</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        <div className='items'>
            <img src = './avatar.png' alt=""></img>
            <div className='texts'>
                <span className='span'>Jk & V</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        <div className='items'>
            <img src = './avatar.png' alt=""></img>
            <div className='texts'>
                <span className='span'>Jk & V</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        <div className='items'>
            <img src = './avatar.png' alt=""></img>
            <div className='texts'>
                <span className='span'>Jk & V</span>
                <p className='p'>Hello</p>
            </div>
        </div>
        <div className='items'>
            <img src = './avatar.png' alt=""></img>
            <div className='texts'>
                <span className='span'>Jk & V</span>
                <p className='p'>Hello</p>
            </div>
        </div>
    </div>
  )
}
