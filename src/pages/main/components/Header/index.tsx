import React from "react";
import {Button, Modal} from "antd";
import {AddModal} from "@pages/main/components/AddModal";
import "@shared/styles/headers.scss";
import {useHeaderHook} from "@pages/main/hooks";

export const Headers: React.FC = () => {

  const {showModal, closeModal, isModalOpen} = useHeaderHook();

  return (
    <header className={"container"}>
      <h1>Users list</h1>
      <Button color="cyan" onClick={showModal} variant="solid">
        Create
      </Button>
      <Modal
        title="Add user"
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null}
      >
        <AddModal onClose={closeModal}/>
      </Modal>
    </header>
  );
};