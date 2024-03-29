import Timer from "./Timer";
import { useDispatch} from "react-redux";
import { replay } from "../redux/wordsSlice";
import { MdReplay } from "react-icons/md";

export default function Navbar() {
  const dispatch = useDispatch()
  const handleClick = () => {
      dispatch(replay())
  }

  return (
    <div className="navbar">
      <Timer />
      <div className="navbar__content">
        <h1 className="title">Fastest Fingers</h1>
        <div className="replay">
            <button onClick={handleClick}><MdReplay/></button>
        </div>
      </div>
    </div>
  );
}