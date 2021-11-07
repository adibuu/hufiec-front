import React from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { infoModalActions } from "../store/slices/infoModalSlice";
import HtmlParser from "html-react-parser";

const InfoModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.infoModal);

  return (
    <Modal
      onClose={() =>
        dispatch(infoModalActions.setInfoModal({ show: false, content: "" }))
      }
      isOpen={modal.show}
      isCentered
      size="xl"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="xl" color="primary.900" fontWeight="bold">
            INFORMACJA
          </Text>
        </ModalHeader>
        <ModalBody>{HtmlParser(modal.content)}</ModalBody>
        <ModalFooter>
          <Button
            onClick={() =>
              dispatch(
                infoModalActions.setInfoModal({ show: false, content: "" })
              )
            }
            _hover={{
              bgColor: "primary.600",
              color: "white",
            }}
            bgColor="primary.900"
            color="white"
            shadow="sm"
          >
            Zamknij
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;
