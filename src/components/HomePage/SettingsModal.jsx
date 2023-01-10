import React, { useContext, useState } from "react";
import { Input, Modal } from "antd";
import PluginContext from "../../context/PluginContext";

export default function SettingsModal({ isActive, toggleModal }) {
  const [targetUrls, setTargetUrls] = useState("");
  const { updateApiListeners } = useContext(PluginContext);
  const inputHandler = (e) => {
    setTargetUrls(e.target.value);
  };
  const okHandler = () => {
    updateApiListeners(targetUrls);
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
      <Input onInput={inputHandler} />
    </Modal>
  );
}
