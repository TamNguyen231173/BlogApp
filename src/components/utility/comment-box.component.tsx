import React from "react";
import { Text } from "../typography/text.component";
import styled from "styled-components/native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Spacer } from "../spacer/spacer.component";
import { TextInputView } from "./text-input.component";
import { ButtonPrimary } from "./button-primary.component";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const RowFS = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

const Col = styled.View`
  flex-direction: column;
  width: 90%;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const NameUser = styled(Text)`
  font-size: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(IonIcons)`
  font-size: 20px;
`;


interface CommentBoxProps {
  avatar: string;
  name: string;
  comment: string;
  time: string;
  likes: string[];
}

export const CommentBox = (props: CommentBoxProps) => {
  return (
    <Container>
      <RowFS>
        <Avatar
          source={{
            uri: props.avatar,
          }}
        />
        <Col>
          <NameUser variant="amount">{props.name}</NameUser>
          <Text variant="body">{props.comment}</Text>
          <Row>
            <Text>{props.time}</Text>
            <Spacer position="right" size="medium" />
            <Row>
              <Icon name="heart-outline" size={20} color="#000" />
              <Spacer position="right" size="tiny" />
              <Text>{props.likes.length} likes</Text>
            </Row>
            <Spacer position="right" size="medium" />
            <Row>
              <Icon name="arrow-redo-outline" size={20} color="#000" />
              <Spacer position="right" size="tiny" />
              <Text>reply</Text>
            </Row>
          </Row>
        </Col>
      </RowFS>
     
    </Container>
  );
};
