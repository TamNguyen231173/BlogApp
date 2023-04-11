import React, { useState, useEffect } from "react";
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
import {
  ContainerView,
  InputContainer,
  Row,
  CheckboxContainer,
  CheckboxView,
  Col2,
  Footer,
} from "../components/login.style";
import { useRegisterMutation } from "../../../redux/api/authService";
import { ScrollView } from "react-native-gesture-handler";
import { object, string, TypeOf } from "zod";

const registerSchema = object({
  name: string().min(1, "Full name is required").max(100),
  email: string()
    .min(1, "Email address is required")
    .email("Email Address is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.passwordConfirm, {
  path: ["passwordConfirm"],
  message: "Passwords do not match",
});

export type RegisterInput = TypeOf<typeof registerSchema>;

export const RegisterScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 👇 Calling the Register Mutation
  const [registerUser, { isLoading, isSuccess, error, isError, data }] =
    useRegisterMutation();

  // Handle register error
  const handleRegister = () => {
    const registerData: RegisterInput = {
      name,
      email,
      password,
      passwordConfirm,
    };

    const result = registerSchema.safeParse(registerData);
    if (result.success) {
      registerUser(registerData);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      ToastAndroid.show("Register success", ToastAndroid.SHORT);
      navigation.navigate("VerifyEmail", { email });
    }
  }, [isSuccess, isError]);

  return (
    <SafeArea>
      <ScrollView>
        <ContainerView>
          <SvgXml xml={hello} width={167} height={144} />
          <Text variant="loginCaption">Signup to get Started</Text>
          <Spacer position="top" size="large_xx">
            {/* Name input */}
            <InputContainer>
              <Text variant="caption">Name</Text>
              <TextInputView value={name} onChangeText={setName} />
            </InputContainer>
            {/* Email input */}
            <Spacer position="top" size="medium">
              <InputContainer>
                <Text variant="caption">Email</Text>
                <TextInputView value={email} onChangeText={setEmail} />
              </InputContainer>
            </Spacer>
            {/* Password input */}
            <Spacer position="top" size="medium">
              <InputContainer>
                <Text variant="caption">Password</Text>
                <TextInputView
                  value={password}
                  onChangeText={setPassword}
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
            {/* Password confirm input */}
            <Spacer position="top" size="medium">
              <InputContainer>
                <Text variant="caption">Password confirm</Text>
                <TextInputView
                  value={passwordConfirm}
                  onChangeText={setPasswordConfirm}
                  secureTextEntry={!passwordConfirmVisible}
                  right={
                    <TextInput.Icon
                      icon={passwordConfirmVisible ? "eye" : "eye-off"}
                      onPress={() =>
                        setPasswordConfirmVisible(!passwordConfirmVisible)
                      }
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
      </ScrollView>
    </SafeArea>
  );
};
