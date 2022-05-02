import { useState } from 'react';
import './App.css';
import Modal from "./components/Modal";


function App() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className="App">
      <h1> Hey, click on the button to open the modal.</h1>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
