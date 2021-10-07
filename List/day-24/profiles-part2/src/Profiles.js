import ProfileCard from "./ProfileCard";

function Profiles({ users }) {
  return users.map((user) => {
    return <ProfileCard key={user.id} user={user} />;
  });
}

export default Profiles;
