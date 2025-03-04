import { FaRegCircleCheck, FaCircleCheck } from "react-icons/fa6";
import "./checkbox.scss";

interface myType {
  label: string;
  name: string;
  checked: boolean;
};

export default function Radio(props : myType) {
  
  return (
    <label className="checkbox-group">
      <input type="radio" name={props.name}/>
      <FaRegCircleCheck />
      <FaCircleCheck />
      <span>{props.label}</span>
    </label>
  );
}
