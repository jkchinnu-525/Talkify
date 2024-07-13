import './userinfo.css'

export default function UserInfo() {
  return (
    <div className='userinfo'>
        <div className='user'>
            <img src = './avatar.png' alt=''></img>
            <h3>Me JK</h3>
        </div>
        <div className='icons'>
            <img src="./more.png"></img>
            <img src="./video.png"></img>
            <img src="./edit.png"></img>
        </div>
    </div>
  )
}
