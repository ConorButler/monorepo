import React from "react";
import GenericButton from ".";

export default {
  title: "GenericButton",
};

export const basicButton = () => <GenericButton>Basic Button</GenericButton>;

export const coloredButton = () => (
  <>
    <GenericButton colourScheme="teal">Teal</GenericButton>
    <GenericButton colourScheme="pink">Pink</GenericButton>
  </>
);

export const disabledButton = () => (
  <GenericButton disabled>Disabled Button</GenericButton>
);
