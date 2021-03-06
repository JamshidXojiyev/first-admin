import { ModalBody, ModalTitle, Model, TitleBlock } from "./my-dialog.s";
import { ReactComponent as Close } from "../../assets/close.svg";
import MyButton from "../button/button";
import { IconButton } from "@material-ui/core";

function MyDialog({ isOpen, onClose, title, content }) {
  return (
    <Model
      hideBackdrop
      // disableEnforceFocus
      disableBackdropClick
      // style={{ position: 'initial' }}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <ModalTitle>
        <TitleBlock>
          {title}
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </TitleBlock>
      </ModalTitle>
      <ModalBody>{content}</ModalBody>
    </Model>
  );
}

export default MyDialog;
