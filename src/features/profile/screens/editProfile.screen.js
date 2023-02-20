import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

const Container = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const EditProfileScreen = () => {
  return (
    <Container>
      <Text>Edit Profile</Text>
    </Container>
  );
};
