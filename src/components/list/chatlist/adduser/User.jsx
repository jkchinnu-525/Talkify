import './user.css'

export default function User() {
    return (
        <div className='addUser'>
            <form>
                <input type='text' placeholder='username' name='username'></input>
                <button>Search</button>
            </form>
            <div className='user'>
                <div className='detail'>
                    <img src = './avatar.png' alt=""/>
                    <spna>This is JK</spna>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}