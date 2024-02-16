import { Container, Title, Typography, GoalList } from "./components";
import Card from "./components/Card/Card";
import ProgressBar from "./components/ProgressBar/ProgressBar";

function App() {
  return (
    <>
      <Container>
        <Title />
        <Typography fontSize={24} bold marginTop={"36px"} marginBottom={"17px"}>
          List of Goals
        </Typography>
        <Container flex>
          <GoalList />
          <Card col>
            <Typography fontSize={24} bold>
              List of Goals
            </Typography>
            <ProgressBar progress={"60%"} />
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default App;
