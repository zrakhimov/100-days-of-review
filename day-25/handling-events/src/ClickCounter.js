const ClickCounter = ({ numClicks, onClick }) => {
  return (
    <button onClick={onClick} className="counter-button">
      {numClicks === 1 ? "bir" : numClicks} marta bosildi!
    </button>
  );
};

export default ClickCounter;
