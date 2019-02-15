import React from "react";
import { Icon, Header, Modal } from "semantic-ui-react";

const AddNewValue = ({ children }) => {
  return (
    <Modal trigger={<Icon name="add" color="green" size="big" />} closeIcon>
      <Header icon="add" color="green" content="Добавить новою запись" />
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default AddNewValue;
