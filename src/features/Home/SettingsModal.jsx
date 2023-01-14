import React, { useContext, useState } from "react";
import { Button, Input, Modal } from "antd";
import PluginContext from "../../context/PluginContext";

export default function SettingsModal({ isActive, toggleModal }) {
  const { addApiListener, removeApiListener, pluginState } =
    useContext(PluginContext);
  const [currentInput, setCurrentInput] = useState("");
  const inputHandler = (e) => {
    setCurrentInput(e.target.value);
  };
  const okHandler = () => {
    addApiListener(currentInput);
    setCurrentInput("");
    toggleModal();
  };

  return (
    <Modal
      title="Settings Modal"
      centered
      open={isActive}
      onOk={okHandler}
      onCancel={toggleModal}
    >
      {pluginState.urls.map((url) => {
        return (
          <div>
            <span>{url}</span>
            <Button onClick={removeApiListener}></Button>
          </div>
        );
      })}
      <Input onInput={inputHandler} value={currentInput} />
    </Modal>
  );
}
