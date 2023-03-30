import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ScrollView } from "react-native";
import camera from "../../../../assets/camera";
import { TextInputView } from "../../../components/utility/text-input.component";
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
} from "../../auth/components/addProfile.style";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/selector";

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EditProfileScreen = ({ navigation }) => {
  const infoUser = useSelector(userSelector);
  const [username, setUsername] = useState(infoUser.name);
  const [email, setEmail] = useState(infoUser.email);

  const handleEditProfile = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <ScrollView>
        <Container>
          <Body>
            <Row>
              <Pressable
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <IoncIcon name="close-outline" size={24} />
              </Pressable>
              <Text variant="textBodyBlack">Edit Profile</Text>
              <Pressable onPress={handleEditProfile}>
                <IoncIcon name="checkmark-outline" size={24} />
              </Pressable>
            </Row>
            <Spacer position="top" size="large">
              <AddImageContainer>
                <ImageView
                  source={{
                    uri: infoUser.avatar,
                  }}
                />
                <CameraIcon width={30} height={30} xml={camera} />
              </AddImageContainer>
            </Spacer>
            <FormContainer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Username</LabelText>
                  <TextInputView value={username} onChangeText={setUsername} />
                </InputContainer>
              </Spacer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Email</LabelText>
                  <TextInputView value={email} onChangeText={setEmail} />
                </InputContainer>
              </Spacer>
            </FormContainer>
          </Body>
        </Container>
      </ScrollView>
    </Container>
  );
};
