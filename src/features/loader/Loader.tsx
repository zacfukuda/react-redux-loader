import { useAppSelector } from "../../app/hooks";
import { selectLoadingbarStatus } from "./loaderSlice";
import "./loader.css";

export default function Loadingbar() {
  const status = useAppSelector(selectLoadingbarStatus);
  if (status === 1) {
    return <div className="loader"></div>;
  } else {
    return null;
  }
}
