import "./App.css";
import Profiles from "./Profiles";
import Paging from "./Paging";
import load from "./users";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    load(currentPage).then((result) => {
      setUsers(result.data);
      setCurrentPage(result.page);
      setTotalPages(result.total_pages);
    });
  }, [currentPage]);

  return (
    <div className="App">
      <Paging
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <Profiles users={users} />
    </div>
  );
}

export default App;
