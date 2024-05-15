import "./FriendList.css"

const FriendList =  ({friends }) => {
  return (
    <ul className="friends-list">
      {friends.map((FriendListItem)=>(
        <li key={FriendListItem.id} className="friends-card"><div>
          <img className="friend-avatar-image" src={FriendListItem.avatar} alt="Avatar" width="48" />
          <p className="friend-name-text">{FriendListItem.name}</p>
          <p className="friend-status">
            {FriendListItem.isOnline?(<span className="friend-status-online">Online</span>):(<span className="friend-status-offline">Offline</span>)}
          </p>
  </div>
  </li>))}
  </ul>)
};


export default FriendList