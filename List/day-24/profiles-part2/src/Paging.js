function Paging({ currentPage, totalPages, setCurrentPage }) {
  let label = currentPage === totalPages ? "Previous" : "Next";

  const onClickHandler = () => {
    let newPage;

    if (currentPage === totalPages) {
      newPage = currentPage - 1;
    } else {
      newPage = currentPage + 1;
    }

    setCurrentPage(newPage);
  };

  return (
    <div>
      <button onClick={onClickHandler}>{label}</button>
    </div>
  );
}

export default Paging;
