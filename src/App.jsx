import {
  Container,
  Title,
  Typography,
  GoalList,
  Card,
  Form,
  ProgressBar,
} from "./components";

function App() {
  return (
    <>
      <Container>
        <Title />
        <Typography fontSize={24} bold marginTop={"36px"} marginBottom={"17px"}>
          List of Goals
        </Typography>

        <Container flexrow>
          <GoalList />
          <Container flexcol>
            <Card col>
              <Typography fontSize={24} bold>
                List of Goals
              </Typography>
              <ProgressBar progress={"60%"} />
            </Card>
            <Form />
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
