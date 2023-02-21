import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ScrollView } from "react-native";
import camera from "../../../../assets/camera";
import { TextInputView } from "../../../components/utility/text-input.component";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import IoncIcon from "react-native-vector-icons/Ionicons";
import {
  Container,
  Body,
  AddImageContainer,
  ImageView,
  CameraIcon,
  FormContainer,
  InputContainer,
  LabelText,
  Footer,
  ButtonContainer,
} from "../../auth/components/addProfile.style";

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EditProfileScreen = () => {
  return (
    <Container>
      <ScrollView>
        <Container>
          <Body>
            <Row>
              <IoncIcon name="close-outline" size={24} />
              <Text variant="textBodyBlack">Edit Profile</Text>
              <IoncIcon name="checkmark-outline" size={24} />
            </Row>
            <Spacer position="top" size="large">
              <AddImageContainer>
                <ImageView
                  source={{
                    uri: "https://i0.wp.com/lalovelee.com/wp-content/uploads/2019/04/sample-avatar-003.jpg?fit=300%2C300&ssl=1",
                  }}
                />
                <CameraIcon width={30} height={30} xml={camera} />
              </AddImageContainer>
            </Spacer>
            <FormContainer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Username</LabelText>
                  <TextInputView />
                </InputContainer>
              </Spacer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Full Name</LabelText>
                  <TextInputView />
                </InputContainer>
              </Spacer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Email Address</LabelText>
                  <TextInputView />
                </InputContainer>
              </Spacer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Phone Number</LabelText>
                  <TextInputView />
                </InputContainer>
              </Spacer>
            </FormContainer>
          </Body>
        </Container>
      </ScrollView>
    </Container>
  );
};
