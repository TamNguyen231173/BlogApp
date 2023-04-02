import React, { useState, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import { SafeArea } from "../../../components/utility/safe-area.component";
import hello_text from "../../../../assets/hello_text";
import { Text } from "../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Pressable, Alert, ScrollView } from "react-native";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import { ButtonDisabled } from "../../../components/utility/button-disabled.component";
import { TextInputView } from "../../../components/utility/text-input.component";
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
import fb from "../../../../assets/fb";
import gg from "../../../../assets/gg";
import { object, string, TypeOf } from "zod";
import { useLoginMutation } from "../../../redux/api/authService";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/selector";

const loginSchema = object({
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export type LoginInput = TypeOf<typeof loginSchema>;

export const LoginScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const infoUser = useSelector(userSelector);

  // Check if user already login
  useEffect(() => {
    if (infoUser) {
      navigation.navigate("Main");
    }
  }, [infoUser]);

  // Login mutation
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginMutation();

  // Handle login error
  const handleOnChangeEmail = (e: string) => {
    setEmail(e);
  };

  // Handle change password
  const handleOnChangePassword = (e: string) => {
    setPassword(e);
  };

  // Handle login user
  const handleLogin = () => {
    const loginData: LoginInput = {
      email: email,
      password: password,
    };

    const result = loginSchema.safeParse(loginData);

    if (result.success) {
      loginUser(loginData);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Main");
    }
  }, [isSuccess]);

  // Footer component
  const FooterComponent = () => {
    return (
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
    );
  };

  // Button sign in with gg fb component
  const ButtonSignInGGFB = () => {
    return (
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
    );
  };

  return (
    <SafeArea>
      <ScrollView>
        <ContainerView>
          <SvgXml xml={hello_text} width={167} height={144} />
          <Text variant="loginCaption">Welcome back you've been missed</Text>
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
            <ButtonSignInGGFB />
          </Spacer>
          <Spacer position="top" size="large">
            <FooterComponent />
          </Spacer>
        </ContainerView>
      </ScrollView>
    </SafeArea>
  );
};
