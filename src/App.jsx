import { Container, Title, Typography, GoalList } from "./components";

function App() {
  return (
    <>
      <Container>
        <Title />
        <Typography fontSize={24} bold marginTop={"36px"}>
          List of Goals
        </Typography>
        <GoalList />
      </Container>
    </>
  );
}

export default App;
