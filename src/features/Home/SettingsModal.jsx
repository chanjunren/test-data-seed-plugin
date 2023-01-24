import React, { useContext, useEffect, useState } from "react";
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
  };

  return (
    <Modal
      title="Settings Modal"
      centered
      closable={false}
      okType={"secondary"}
      open={isActive}
      onOk={okHandler}
      onCancel={toggleModal}
    >
      {pluginState.urls.map((url, idx) => {
        return (
          <div key={`plugin-saved-url-${idx}`}>
            <span>{url}</span>
            <Button onClick={() => removeApiListener(idx)}></Button>
          </div>
        );
      })}
      <Input onInput={inputHandler} value={currentInput} />
    </Modal>
  );
}
