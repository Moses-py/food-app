import React from "react";
import { Input, InputFieldContainer } from "./styles/styles";

const InputField = () => {
  return (
    <InputFieldContainer>
      <Input
        type="text"
        placeholder={`Search any food, Recipe, Ingredient etc...`}
      />
    </InputFieldContainer>
  );
};

export default InputField;
