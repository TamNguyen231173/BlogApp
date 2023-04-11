import React, { useState, useEffect } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import IonsIcon from "react-native-vector-icons/Ionicons";
import vertificationTitle from "../../../../assets/vertificationTitle";
import { SvgXml } from "react-native-svg";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  useVerifyEmailMutation,
  useResendVerificationEmailMutation,
} from "../../../redux/api";
import { object, string, TypeOf } from "zod";
import OTPInput from "../../../components/OTP/OTPInput";

const Container = styled(ScrollView)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const Footer = styled.View`
  background-color: #0000000d;
  padding: 24px ${(props) => props.theme.space[3]};
`;

const ResendCodeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const ButtonSend = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;

const verificationCodeSchema = object({
  verificationCode: string().min(1, "Verification code is required"),
});

export type VerificationCodeInput = TypeOf<typeof verificationCodeSchema>;

export const VerifyEmailScreen = ({ navigation, route = {} }) => {
  const { email } = route.params;
  const [verifyEmail, { isLoading, isError, error, isSuccess, data }] =
    useVerifyEmailMutation();
  const [resendVerificationEmail] = useResendVerificationEmailMutation();
  const [code, setCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;

  const handleSubmit = async () => {
    const verificationCodeInput: VerificationCodeInput = {
      verificationCode: code,
    };
    const isValid = verificationCodeSchema.safeParse(verificationCodeInput);
    if (isValid.success) {
      await verifyEmail(verificationCodeInput.verificationCode);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate("Login");
    }
  }, [isSuccess]);

  // Handle resend verification code
  const handleResend = async () => {
    const response = await resendVerificationEmail(email);
    console.log("response resend code", response);
  };

  // ===== Timing for resend verification code section =====
  // Resend timer
  const [timeLeft, setTimeLeft] = useState(null);
  const [activeResend, setActiveResend] = useState(false);
  let resendTimerInterval = null;

  // Calculate time left
  const calculateTimeLeft = (finalTime: any) => {
    const difference = finalTime - +new Date();
    if (difference > 0) {
      return Math.floor(difference / 1000);
    } else {
      setTimeLeft(0);
      clearInterval(resendTimerInterval);
      setActiveResend(true);
    }
  };

  // Trigger timer
  const triggerTimer = (targetTimeInSeconds = 30) => {
    const finalTime = +new Date() + targetTimeInSeconds * 1000;
    setTimeLeft(calculateTimeLeft(finalTime));
    resendTimerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(finalTime));
    }, 1000);
  };

  useEffect(() => {
    triggerTimer();

    return () => {
      clearInterval(resendTimerInterval);
    };
  }, []);

  // ===== End of timing for resend verification code section =====

  // Navigate back
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeArea>
      <Container>
        <IonsIcon
          name="arrow-back-outline"
          size={20}
          color="black"
          onPress={handleBack}
        />
        <Spacer position="top" size="large">
          <SvgXml xml={vertificationTitle} width={186} height={96} />
        </Spacer>
        <Text variant="body">Enter the OTP sent to {email}</Text>
        <Spacer position="top" size="medium">
          <OTPInput
            code={code}
            setCode={setCode}
            maximumLength={maximumCodeLength}
            setIsPinReady={setIsPinReady}
          />
        </Spacer>
        <ResendCodeContainer>
          <Text variant="body">
            Resend code in
            {(!activeResend && (
              <Text variant="error"> {timeLeft} seconds</Text>
            )) || (
              <Text
                variant="body"
                style={{ color: "#0000EE" }}
                onPress={handleResend}
              >
                {" "}
                Resend
              </Text>
            )}
          </Text>
        </ResendCodeContainer>
      </Container>
      <Footer>
        <ButtonPrimary onPress={handleSubmit} disabled={!isPinReady}>
          <Text variant="buttonText">Verify</Text>
        </ButtonPrimary>
      </Footer>
    </SafeArea>
  );
};
