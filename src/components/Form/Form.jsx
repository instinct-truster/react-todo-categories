import Button from "../Button/Button";
import Card from "../Card/Card";
import Typography from "../Typography/Typography";
import styles from "./Form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <Typography fontSize={24} bold>
        Add new Goal
      </Typography>
      <Card col>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Goal Name:</Typography>
          <input type="text" />
        </div>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Category:</Typography>
          <input type="text" />
        </div>
        <Button />
      </Card>
    </div>
  );
}

export default Form;
