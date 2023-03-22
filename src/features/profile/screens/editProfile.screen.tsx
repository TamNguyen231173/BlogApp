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

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const EditProfileScreen = ({ navigation }) => {
  const [avatar, setAvatar] = useState(infoUser.avatar);
  const [username, setUsername] = useState(infoUser.username);
  const [fullname, setFullname] = useState(infoUser.fullname);
  const [phone, setPhone] = useState(infoUser.phone);
  const [address, setAddress] = useState(infoUser.address);

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
                    uri: "https://images.unsplash.com/photo-1677013417649-eee3690e56e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
                  <LabelText variant="caption">Full Name</LabelText>
                  <TextInputView value={fullname} onChangeText={setFullname} />
                </InputContainer>
              </Spacer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Address</LabelText>
                  <TextInputView value={address} onChangeText={setAddress} />
                </InputContainer>
              </Spacer>
              <Spacer position="top" size="large">
                <InputContainer>
                  <LabelText variant="caption">Phone Number</LabelText>
                  <TextInputView value={phone} onChangeText={setPhone} />
                </InputContainer>
              </Spacer>
            </FormContainer>
          </Body>
        </Container>
      </ScrollView>
    </Container>
  );
};
