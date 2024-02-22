import { useDispatch } from "react-redux";
import checkmark from "../../assets/icons/checkmark.svg";
import styles from "./Checkbox.module.css";
import { updateGoal } from "../../reducer/goalsSlice";

function Checkbox({ goal, checked }) {
  const dispatch = useDispatch();
  const handleCheckbox = (checked) => {
    dispatch(updateGoal({ ...goal, done: checked }));
  };
  return (
    <div className={checked ? styles.checkbox : styles.active}>
      <input
        type="checkbox"
        checked={goal.done}
        onChange={(e) => handleCheckbox(e.target.checked)}
      />
      <img src={checkmark} alt="checkmark" />
    </div>
  );
}

export default Checkbox;
