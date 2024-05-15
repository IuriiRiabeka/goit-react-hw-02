import "./Profilemodule.css";
const Profile = props => {
  return (
    <div className="profile-container">
      			<img className="profile-image" src={props.image} alt="profile photo" width="640px" />
      <h2 className="profile-name-text">{props.name}</h2>
      <p className="profile-tag-text">{props.tag}</p>
      <p className="profile-location">{props.location}</p>
      <ul className="profile-stats">
        <li className="profile-stats-followers"><span className="profile-stats-span-text">Followers</span><span>{ props.stats.followers}</span></li>
        <li className="profile-stats-views"><span className="profile-stats-span-text">Views</span><span>{ props.stats.views}</span></li>
        <li className="profile-stats-likes"><span className="profile-stats-span-text">Likes</span><span>{ props.stats.likes}</span></li>
      </ul>
    </div>
  );
};
export default Profile;