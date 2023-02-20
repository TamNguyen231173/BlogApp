import React from "react";
import { Text } from "../../components/typography/text.component";
import styled from "styled-components/native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Spacer } from "../../components/spacer/spacer.component";
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

export const CommentBox = () => {
  return (
    <Container>
      <RowFS>
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1676873261959-173b91552b0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
          }}
        />
        <Col>
          <NameUser variant="amount">Wilson Franci</NameUser>
          <Text variant="body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <Row>
            <Text>4w</Text>
            <Spacer position="right" size="medium" />
            <Row>
              <Icon name="heart-outline" size={20} color="#000" />
              <Spacer position="right" size="tiny" />
              <Text>125 likes</Text>
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
