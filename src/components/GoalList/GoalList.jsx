import Card from "../Card/Card";
import GoalItem from "../GoalItem/GoalItem";
import Typography from "../Typography/Typography";
import styles from "./GoalList.module.css";
import { useSelector } from "react-redux";

function GoalList() {
  const { goals, category } = useSelector((state) => state.goals);
  const displayedGoals = goals.filter((goal) => goal.category === category);
  return (
    <>
      <div className={styles.goalList}>
        {displayedGoals.length > 0 ? (
          displayedGoals.map((goal) => (
            <Card key={goal.id}>
              <GoalItem goal={goal} />
            </Card>
          ))
        ) : (
          <Typography>Currently no goals remain</Typography>
        )}
      </div>
    </>
  );
}

export default GoalList;
