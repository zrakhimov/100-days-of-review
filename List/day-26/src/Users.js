function Users({ users, onSelected }) {
  if(!Array.isArray(users)) {
    return null;
  }

  return (
    <div>
      {
        users.map(user => {
          const { id, avatar, first_name, last_name } = user;
          const name = `${first_name} ${last_name}`;
          return (
            <img
              key={id}
              src={avatar}
              alt={name}
              onClick={() => onSelected(user)}
              onMouseOver={() => onSelected(user)}
              onMouseOut={() => onSelected(null)}
            />
          );
        })
      }
    </div>
  );
}

export default Users;
