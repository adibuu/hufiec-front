import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { infoModalActions } from "../store/slices/infoModalSlice";
import HtmlParser from "html-react-parser";

const InfoModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.infoModal);

  return (
    <>
      <Modal
        onClose={() => dispatch(infoModalActions.setInfoModal({ show: false }))}
        isOpen={modal.show}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>INFORMACJA</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modal.content}</ModalBody>
          <ModalFooter>
            <Button
              onClick={() =>
                dispatch(infoModalActions.setInfoModal({ show: false }))
              }
            >
              Zamknij
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InfoModal;
