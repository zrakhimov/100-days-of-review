import "./UserProfile.css";

function UserProfile({ name, email }) {
  return (
    <div className="user-info">
      <h2 className="profile-name">{name}</h2>
      <h3 className="profile-email">
        <a href={`mailto:${email}`}>{name}</a>
      </h3>
    </div>
  );
}

export default UserProfile;
