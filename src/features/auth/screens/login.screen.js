import React, { useState, useContext } from "react";
import { SvgXml } from "react-native-svg";
import { SafeArea } from "../../../components/utility/safe-area.component";
import hello_text from "../../../../assets/hello_text";
import { Text } from "../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Pressable, ToastAndroid } from "react-native";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import { ButtonDisabled } from "../../../components/utility/button-disabled.component";
import fb from "../../../../assets/fb";
import gg from "../../../../assets/gg";
import { TextInputView } from "../../../components/utility/text-input.component";
import AxiosInstance from "../../../components/utility/AxiosInstance.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ContainerView,
  InputContainer,
  Row,
  CheckboxContainer,
  CheckboxView,
  ForgotPasswordText,
  Col2,
  Footer,
} from "../components/login.style";
import { NewsContext } from "../../../services/news/news.context";

export const LoginScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogin, setInfoUser } = useContext(NewsContext);

  const handleOnChangeUsername = (e) => {
    setUsername(e);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e);
  };

  const handleLogin = async () => {
    try {
      const response = await AxiosInstance().post("/auth/login", {
        email: username,
        password: password,
      });
      if (response.error == false) {
        console.log(response.data.token);
        await AsyncStorage.setItem("token", response.data.token);
        ToastAndroid.show("Login Success", ToastAndroid.SHORT);
        setIsLogin(true);
        setInfoUser(response.data.user);
        navigation.navigate("Main");
      } else {
        ToastAndroid.show("Login failed", ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeArea>
      <ContainerView>
        <SvgXml xml={hello_text} width={167} height={144} />
        <Text variant="loginCaption">Welcome back you've been missed</Text>
        <Spacer position="top" size="large_xx">
          <InputContainer>
            <Text variant="caption">Username</Text>
            <TextInputView onChangeText={handleOnChangeUsername} />
          </InputContainer>
          <Spacer position="top" size="medium">
            <InputContainer>
              <Text variant="caption">Password</Text>
              <TextInputView
                secureTextEntry={!passwordVisible}
                onChangeText={handleOnChangePassword}
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
            <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
              <ForgotPasswordText variant="caption">
                Forgot the Password ?
              </ForgotPasswordText>
            </Pressable>
          </Row>
        </Spacer>
        <Spacer position="top" size="large">
          <ButtonPrimary onPress={handleLogin}>
            <Text variant="buttonText">Login</Text>
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
            <Spacer position="left" size="small">
              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text variant="caption" style={{ color: "#1877F2" }}>
                  Sign up
                </Text>
              </Pressable>
            </Spacer>
          </Footer>
        </Spacer>
      </ContainerView>
    </SafeArea>
  );
};
