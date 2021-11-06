import { Button } from "@chakra-ui/react";
import { AiOutlineRollback } from "react-icons/ai";

const BackButton = (props) => (
  <Button
    variant="outline"
    shadow="md"
    leftIcon={<AiOutlineRollback />}
    color="primary.800"
    borderColor="primary.800"
    _hover={{
      bgColor: "primary.700",
      color: "white",
      borderColor: "primary.700",
    }}
    size={props.size}
    width={props.width}
    onClick={props.goBackClick}
  >
    Powrót
  </Button>
);

export default BackButton;
