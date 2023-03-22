import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import IonsIcon from "react-native-vector-icons/Ionicons";
import forgotPasswordTitle from "../../../../assets/forgotPasswordTitle";
import { SvgXml } from "react-native-svg";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextInputView } from "../../../components/utility/text-input.component";

const Container = styled(ScrollView)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const Footer = styled.View`
  background-color: #0000000d;
  padding: 24px ${(props) => props.theme.space[3]};
`;

export const EmailViaScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const passwordReset = (email) => {
    
  };

  const handlePasswordReset = async () => {
    try {
      await passwordReset(email);
      console.log("Password reset email sent successfully");
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeArea>
      <Container>
        <IonsIcon name="arrow-back-outline" size={20} color="black" />
        <Spacer position="top" size="large">
          <SvgXml xml={forgotPasswordTitle} width={186} height={96} />
        </Spacer>
        <Text variant="body">
          Don’t worry! it happens. Please select the email or number associated
          with your account.
        </Text>
        <Spacer position="top" size="medium">
          <Text variant="caption">Email</Text>
          <TextInputView value={email} onChangeText={setEmail} />
        </Spacer>
      </Container>
      <Footer>
        <ButtonPrimary onPress={handlePasswordReset}>
          <Text variant="buttonText">Submit</Text>
        </ButtonPrimary>
      </Footer>
    </SafeArea>
  );
};
