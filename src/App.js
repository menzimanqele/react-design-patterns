import { SplitScreen } from "./SplitScreen";
function App() {
  
  function LeftHandComponent({ name }) {
    return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
  }
  function RightHandComponent({ message }) {
    return <p style={{ backgroundColor: "red" }}>{message}</p>;
  }
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name={"Menzi Manqele"} />
      <RightHandComponent message={"You have won the Lotto"} />
    </SplitScreen>
  );
}

export default App;
