import {
  Container,
  Title,
  Typography,
  GoalList,
  Card,
  Form,
  ProgressBar,
} from "./components";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import { useSelector } from "react-redux";

function App() {
  const { category } = useSelector((state) => state.goals);
  return (
    <>
      <Container>
        <Title />
        <Typography fontSize={24} bold marginTop={"36px"} marginBottom={"17px"}>
          List of{" "}
          <span style={{ textTransform: "capitalize" }}>{category}</span> Goals
        </Typography>

        <Container flexrow>
          <GoalList />
          <Container flexcol>
            <Card col>
              <Typography fontSize={24} bold>
                Goal Progress
              </Typography>
              <ProgressBar progress={"60%"} />
            </Card>
            <Form />
          </Container>
        </Container>
        <CategoriesList />
      </Container>
    </>
  );
}

export default App;
