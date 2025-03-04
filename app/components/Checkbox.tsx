import { FaRegSquareCheck, FaSquareCheck } from "react-icons/fa6";
import "./checkbox.scss";

interface myType {
  label: string;
};

export default function Checkbox(props : myType) {
  
  return (
    <label className="checkbox-group">
      <input type="checkbox" />
      <FaRegSquareCheck />
      <FaSquareCheck />
      <span>{props.label}</span>
    </label>
  );
}
