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

const Container = styled(SafeArea)`
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

export const ForgotPasswordScreen = () => {
  const [value, setValue] = React.useState("email");

  return (
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
  );
};
