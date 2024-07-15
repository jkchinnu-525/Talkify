import { useState } from 'react';
import { toast } from 'react-toastify';
import './login.css';
export default function Login() {
    const [avatar,setAvatar] = useState({
        file: null,
        url: ""
    });

    const handleAvatar = (e) => {
        if(e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        toast.success("Successfully logged in")
    }
  return (
    <div className='login'>
        <div className='item'>
            <h2>Welcome Back</h2>
            <form onSubmit={handleLogin}>
               <input type="text" placeholder='Email' name='email'/>
               <input type="password" placeholder='Password' name='password'/>
               <button>Log In</button>
            </form>
        </div>
        <div className='separator'></div>
        <div className='item'>
            <h2>Create An Account</h2>
            <form>
                <label htmlFor='file'>
                    <img src = {avatar.url || './avatar.png'} alt=""></img>
                    Upload an image
                </label>
                <input id='file' type='file' hidden onChange={handleAvatar}/>
               <input type="text" placeholder='Username' name='username'/>
               <input type="text" placeholder='Email' name='email'/>
               <input type="password" placeholder='Password' name='password'/>
               <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
}
