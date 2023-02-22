import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { SafeArea } from "../../../components/utility/safe-area.component";
import hello from "../../../../assets/hello";
import { Text } from "../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Pressable, ToastAndroid } from "react-native";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import { ButtonDisabled } from "../../../components/utility/button-disabled.component";
import fb from "../../../../assets/fb";
import gg from "../../../../assets/gg";
import { TextInputView } from "../../../components/utility/text-input.component";
import firsebase from "../../../services/database/firebase";
import {
  ContainerView,
  InputContainer,
  Row,
  CheckboxContainer,
  CheckboxView,
  Col2,
  Footer,
} from "../components/login.style";

export const RegisterScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnChangePassword = (value) => {
    setPassword(value);
  };

  const handleRegister = async () => {
    if (!password || !email) {
      ToastAndroid.show("Please fill all the fields", ToastAndroid.SHORT);
      return;
    } else {
      try {
        await firsebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            console.log(userCredential);
            if (userCredential.reponse !== null) {
              navigation.navigate("AddProfile");
            }
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
            console.log("error: ", errorMessage);
            console.log("error code: ", errorCode);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeArea>
      <ContainerView>
        <SvgXml xml={hello} width={167} height={144} />
        <Text variant="loginCaption">Signup to get Started</Text>
        <Spacer position="top" size="large_xx">
          <InputContainer>
            <Text variant="caption">Email</Text>
            <TextInputView value={email} onChangeText={handleOnChangeEmail} />
          </InputContainer>
          <Spacer position="top" size="medium">
            <InputContainer>
              <Text variant="caption">Password</Text>
              <TextInputView
                value={password}
                onChangeText={handleOnChangePassword}
                secureTextEntry={!passwordVisible}
                right={
                  <TextInput.Icon
                    icon={passwordVisible ? "eye" : "eye-off"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
              />
            </InputContainer>
          </Spacer>
        </Spacer>
        <Spacer position="top" size="small">
          <Row>
            <CheckboxContainer>
              <CheckboxView
                uncheckedColor="#A0A3BD"
                color="#1877F2"
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Text variant="caption">Remember me</Text>
            </CheckboxContainer>
          </Row>
        </Spacer>
        <Spacer position="top" size="large">
          <ButtonPrimary onPress={handleRegister}>
            <Text variant="buttonText">Sign up</Text>
          </ButtonPrimary>
        </Spacer>
        <Spacer position="top" size="large">
          <Text variant="caption" style={{ textAlign: "center" }}>
            or continue with
          </Text>
        </Spacer>
        <Spacer position="top" size="large">
          <Row>
            <Col2>
              <ButtonDisabled>
                <Row>
                  <SvgXml xml={fb} width={21} height={21} />
                  <Spacer position="left" size="small" />
                  <Text variant="buttonDisabledText">Facebook</Text>
                </Row>
              </ButtonDisabled>
            </Col2>
            <Col2>
              <ButtonDisabled>
                <Row>
                  <SvgXml xml={gg} width={21} height={21} />
                  <Spacer position="left" size="small" />
                  <Text variant="buttonDisabledText">Google</Text>
                </Row>
              </ButtonDisabled>
            </Col2>
          </Row>
        </Spacer>
        <Spacer position="top" size="large">
          <Footer>
            <Text variant="caption" style={{ textAlign: "center" }}>
              don't have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Spacer position="left" size="small">
                <Text variant="caption" style={{ color: "#1877F2" }}>
                  Login
                </Text>
              </Spacer>
            </Pressable>
          </Footer>
        </Spacer>
      </ContainerView>
    </SafeArea>
  );
};
