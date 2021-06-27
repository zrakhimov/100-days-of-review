const ClickHeading = ({ numClicks }) => {
  if (numClicks === 0) {
    return null;
  }

  return <h1>Tugma {numClicks} marta bosildi</h1>;
};

export default ClickHeading;
