import Card from "../Card/Card";
import GoalItem from "../GoalItem/GoalItem";
import styles from "./GoalList.module.css";

function GoalList() {
  return (
    <div className={styles.goalList}>
      {[0, 1, 2, 3].map((item, i) => (
        <Card key={`goal-${i}`}>
          <GoalItem />
        </Card>
      ))}
    </div>
  );
}

export default GoalList;
