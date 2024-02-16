import Checkbox from "../Checkbox/Checkbox";
import Typography from "../Typography/Typography";
import ActionButton from "../ActionButton/ActionButton";
import styles from "./GoalItem.module.css";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";

function GoalItem() {
  return (
    <>
      <div className={styles.goalName}>
        <Checkbox />
        <Typography fontSize={24}>Do the dishes.</Typography>
      </div>
      <div className={styles.actionButtons}>
        <ActionButton icon={editIcon} handleClick={() => null} />
        <ActionButton icon={trashIcon} handleClick={() => null} />
      </div>
    </>
  );
}

export default GoalItem;
