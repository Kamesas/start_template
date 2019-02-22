import React from "react";
import { Icon, Header, Modal } from "semantic-ui-react";

const ModalWindow = ({ children }) => {
  return (
    <Modal trigger={<Icon name="edit" color="green" size="large" />} closeIcon>
      <Header icon="edit" color="green" content="Редактирование" />
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default ModalWindow;
