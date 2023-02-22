import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { tabs } from "../../home/screens/home.screen";
import { TabsView } from "../../../components/utility/tabsView.component";
import styled from "styled-components/native";

const Container = styled(SafeArea)`
  padding: ${(props) => props.theme.space[3]};
`;

export const NewsCategoryScreen = () => {
  return (
    <Container>
      <TabsView tabs={tabs} />
    </Container>
  );
};
