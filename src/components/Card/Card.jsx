import Typography from "../Typography/Typography";
import styles from "./Card.module.css";
import Checkbox from "../Checkbox/Checkbox";
import ActionButton from "../ActionButton/ActionButton";
import editIcon from "../../assets/icons/edit.svg";
import trashIcon from "../../assets/icons/trash.svg";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.goalName}>
        <Checkbox />
        <Typography fontSize={24}>Do the dishes.</Typography>
      </div>
      <div className={styles.actionButtons}>
        <ActionButton icon={editIcon} handleClick={() => null} />
        <ActionButton icon={trashIcon} handleClick={() => null} />
      </div>
    </div>
  );
}

export default Card;
