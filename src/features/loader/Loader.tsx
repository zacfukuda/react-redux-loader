import React, { type ReactElement } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectLoadingbarStatus } from "./loaderSlice";
import "./loader.css";

export default function Loadingbar(): ReactElement | null {
  const status = useAppSelector(selectLoadingbarStatus);
  if (status) {
    return <div className="loader"></div>;
  } else {
    return null;
  }
}
