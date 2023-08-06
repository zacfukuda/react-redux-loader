import Loader from "./features/loader/Loader";
import { useAppDispatch } from "./app/hooks";
import { turnOn, turnOff } from "./features/loader/loaderSlice";

export default function App() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(turnOn());

    // imitating async function
    setTimeout(() => {
      dispatch(turnOff());
    }, 2000);
  }

  return (
    <div className="App">
      <Loader />
      <br />
      <button type="button" onClick={handleClick}>
        Load
      </button>
    </div>
  );
}
