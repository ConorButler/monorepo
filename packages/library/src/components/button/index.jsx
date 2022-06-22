import React from "react";
import { Button } from "@chakra-ui/react";

export default function GenericButton({ colourScheme, disabled, children }) {
  return (
    <Button colorScheme={colourScheme} disabled={disabled}>
      {children}
    </Button>
  );
}
