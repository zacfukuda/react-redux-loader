import React, { type ReactElement } from "react";
import Loader from "./features/loader/Loader";
import { useAppDispatch } from "./app/hooks";
import { turnOn, turnOff } from "./features/loader/loaderSlice";

export default function App(): ReactElement {
  const dispatch = useAppDispatch();

  function handleClick(): void {
    dispatch(turnOn());

    // imitating asyn fetch
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
