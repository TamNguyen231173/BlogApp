import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import IonsIcon from "react-native-vector-icons/Ionicons";
import forgotPasswordTitle from "../../../../assets/forgotPasswordTitle";
import { SvgXml } from "react-native-svg";
import { Card, RadioButton } from "react-native-paper";
import styled from "styled-components/native";
import messageVerify from "../../../../assets/messageVerify";
import emailVerify from "../../../../assets/emailVerify";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonPrimary } from "../../../components/utility/button-primary.component";

const Container = styled(ScrollView)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const CardContainer = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Col = styled.View`
  flex-direction: column;
`;

const Footer = styled.View`
  background-color: #0000000d;
  padding: 24px ${(props) => props.theme.space[3]};
`;

export const ForgotPasswordScreen = ({ navigation }) => {
  const [value, setValue] = React.useState("email");

  const handleSubmit = () => {
    if (value === "email") {
      navigation.navigate("EmailVia");
    } else {
      navigation.navigate("PhoneVia");
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
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <Spacer position="top" size="medium">
              <CardContainer>
                <Row>
                  <Row>
                    <SvgXml xml={emailVerify} width={64} height={64} />
                    <Spacer position="left" size="medium" />
                    <Col>
                      <Text>via Email:</Text>
                      <Text>example@youremail.com</Text>
                    </Col>
                  </Row>
                  <RadioButton value="email" />
                </Row>
              </CardContainer>
            </Spacer>
            <Spacer position="top" size="medium">
              <CardContainer>
                <Row>
                  <Row>
                    <SvgXml xml={messageVerify} width={64} height={64} />
                    <Spacer position="left" size="medium" />
                    <Col>
                      <Text>via SMS:</Text>
                      <Text>+62-8421-4512-2531</Text>
                    </Col>
                  </Row>
                  <RadioButton value="phone" />
                </Row>
              </CardContainer>
            </Spacer>
          </RadioButton.Group>
        </Spacer>
      </Container>
      <Footer>
        <ButtonPrimary onPress={handleSubmit}>
          <Text variant="buttonText">Submit</Text>
        </ButtonPrimary>
      </Footer>
    </SafeArea>
  );
};
