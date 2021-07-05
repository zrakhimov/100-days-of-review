import { useEffect, useState } from 'react';

import './App.css';
import Loading from './Loading';
import Users from './Users';
import Warning from './Warning';

function App() {
  const [selected, setSelected] = useState(null);
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    setLoading(true);

    fetch(`https://reqres.in/api/users?delay=3&${retries}`)
      .then(res => {
        if(!res.ok) {
          throw new Error('unable to download users');
        }
        return res.json();
      })
      .then(result => {
        setUsers(result.data);
      })
      .catch(err => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [retries]);

  const handleSelect = (user) => setSelected(user);

  if(error) {
    return <Warning tryAgain={() => setRetries(retries + 1)}/>;
  }

  if(loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <Users users={users} onSelected={handleSelect}/>
      <div>
        {
          selected ?
            <span>{`${selected.first_name} ${selected.last_name}`}</span> :
            null
        }
      </div>
    </div>
  );
}

export default App;
