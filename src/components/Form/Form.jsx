import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Typography from "../Typography/Typography";
import styles from "./Form.module.css";

function Form() {
  const [goalData, setGoalData] = useState({ name: "", category: "" });
  return (
    <div className={styles.form}>
      <div className={styles.titleContainer}>
        <Typography fontSize={24} bold>
          Add new Goal
        </Typography>
      </div>
      <Card col>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Goal Name:</Typography>
          <input
            onChange={(e) => setGoalData({ ...goalData, name: e.target.value })}
            type="text"
          />
        </div>
        <div className={styles.inputContainer}>
          <Typography fontSize={16}>Category:</Typography>
          <Dropdown goalData={goalData} setGoalData={setGoalData} />
        </div>
        <Button />
      </Card>
    </div>
  );
}

export default Form;
