import React from "react";
import { useRadio, Box, useColorModeValue } from "@chakra-ui/react";

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        color="white"
        bg={useColorModeValue("primary.300", "primary.900")}
        _checked={{
          bg: useColorModeValue("primary.900", "primary.200"),
          color: useColorModeValue("white", "primary.900"),
          borderColor: useColorModeValue("primary.300", "primary.900"),
        }}
        _hover={{
          bg: useColorModeValue("primary.900", "primary.200"),
          color: useColorModeValue("white", "primary.900"),
          borderColor: useColorModeValue("primary.300", "primary.900"),
        }}
        px={[1, 2]}
        py={[0, 1]}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
