# React-Slinky-Modal

간단한 모달을 구현할 수 있는 라이브러리입니다.

## Installation

`npm install react-slinky-modal`

## User Guide

### Import

`import Modal from 'react-slinky-modal'`

### Use Library

```
    <Modal isModalOpen={/* 모달 오픈 여부 */} closeModal={/* 모달 닫기 함수 */}>
        {/* Modal contents */}
    </Modal>
```

### Example

```
import React, { useState } from "react";
import "./App.css";
import Modal from "react-slinky-modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button onClick={handleModalOpen}>Modal Open!</button>
      <Modal isModalOpen={isModalOpen} closeModal={handleModalClose}>
        <button onClick={handleModalClose}>Close Modal!</button>
      </Modal>
    </div>
  );
}

export default App;

```
