import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { ControlledModal } from "./ControlledModal";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello World</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Hide Modal" : "ShowModal"}
      </button>
    </>
  );
}

export default App;
