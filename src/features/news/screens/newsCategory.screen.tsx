import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { TabsView } from "../../../components/utility/tabsView.component";
import styled from "styled-components/native";

const Container = styled(SafeArea)`
  padding: ${(props) => props.theme.space[3]};
`;

export const NewsCategoryScreen = () => {
  return (
    <Container>
      <TabsView />
    </Container>
  );
};
