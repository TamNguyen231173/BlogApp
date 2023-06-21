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

const FooterContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 12px;
`;

const InputContainer = styled.View`
  width: 80%;
`;

const ButtonContainer = styled.View`
  width: 15%;
`;

interface CommentBoxProps {
  image: string;
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
            uri: props.image,
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
              <Text>{props.likes} likes</Text>
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
      <FooterContainer>
        <InputContainer>
          <TextInputView placeholder="Write a comment..." />
        </InputContainer>
        <ButtonContainer>
          <ButtonPrimary>
            <IonIcons name="send" size={20} color="#fff" />
          </ButtonPrimary>
        </ButtonContainer>
      </FooterContainer>
    </Container>
  );
};
