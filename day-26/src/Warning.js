export default function Warning({ tryAgain }) {
  return (
    <div>
      Error, unable to load data. <button onClick={tryAgain}>Try Again</button>
    </div>
  );
}
