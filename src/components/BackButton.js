import { Button } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";

const BackButton = (props) => (
  <Button
    variant="outline"
    shadow="sm"
    leftIcon={<AiOutlineRollback />}
    colorScheme="green"
    size={props.size}
    width={props.width}
    onClick={props.goBackClick}
  >
    Powrót
  </Button>
);

export default BackButton;
