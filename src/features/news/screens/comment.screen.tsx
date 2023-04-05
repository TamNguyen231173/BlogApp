import React from "react";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Spacer } from "../../../components/spacer/spacer.component";
import { CommentBox } from "../../../components/utility/comment-box.component";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Block = styled.View``;

export const CommentScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <IonIcons
          name="arrow-back"
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text variant="textBodyBlack">Comments</Text>
        <Block />
      </Header>
      <Spacer position="bottom" size="large" />
      <CommentBox />
    </Container>
  );
};
