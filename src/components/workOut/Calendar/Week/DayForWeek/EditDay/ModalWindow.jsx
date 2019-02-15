import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const ModalWindow = ({ children }) => {
  return (
    <Modal trigger={<Button>Edit</Button>} closeIcon>
      <Header icon="edit" content="Редактирование" />
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default ModalWindow;
