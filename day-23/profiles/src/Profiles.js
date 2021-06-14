import ProfileCard from "./ProfileCard";

function Profiles({ users }) {
  return users.map((user) => {
    return <ProfileCard user={user} />;
  });
}

export default Profiles;
