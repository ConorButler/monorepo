import React from "react";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export default function GenericButton({
    colourScheme = "teal",
    disabled,
    children,
}) {
    return (
        <ChakraProvider>
            <Button colorScheme={colourScheme} disabled={disabled}>
                {children}
            </Button>
        </ChakraProvider>
    );
}
