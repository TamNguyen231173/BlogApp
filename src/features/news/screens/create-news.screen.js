import React from "react";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import IonsIcon from "react-native-vector-icons/Ionicons";
import { Pressable, KeyboardAvoidingView } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextInputView } from "../../../components/utility/text-input.component";
import { ToggleButton } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import imageIcon from "../../../../assets/imageIcon";
import caplize from "../../../../assets/caplize";
import more from "../../../../assets/more";
import order from "../../../../assets/order";
import { Row } from "../../../components/utility/row.component";
import { ButtonDisabled } from "../../../components/utility/button-disabled.component";

const Container = styled(SafeArea)`
  padding: ${(props) => props.theme.space[4]};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(IonsIcon)`
  font-size: 20px;
`;

const ContainerAddImage = styled.View`
  width: 100%;
  height: 200px;
  border: 3px dashed ${(props) => props.theme.colors.ui.secondary};
  background-color: #eef1f4;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled(TextInputView).attrs({
  mode: "flat",
  outlineColor: "#c4c4c4",
})`
  font-size: 24px;
  color: ${(props) => props.theme.colors.text.black};
`;

const Footer = styled.View`
  width: 100%;
  padding-top: ${(props) => props.theme.space[3]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SvgView = styled(SvgXml)`
  font-size: 24px;
  margin-right: 24px;
`;

const Button = styled(ButtonDisabled)`
  width: 30%;
`;

const FormatTextContainer = styled(ToggleButton.Row)`
  position: absolute;
  top: -30px;
  left: 10px;
  elevation: 0.6;
  border-width: 0px;
`;

export const CreateNewsScreen = () => {
  const [value, setValue] = React.useState("left");

  return (
    <Container>
      <KeyboardAvoidingView>
        <ScrollView>
          <Header>
            <Icon name="arrow-back-outline" />
            <Text variant="textBodyBlack">Create News</Text>
            <Icon name="ellipsis-vertical-outline" />
          </Header>
          <Spacer position="top" size="medium">
            <Pressable>
              <ContainerAddImage>
                <Icon name="add-outline" size={30} />
                <Text variant="textBodyBlack">Add Cover Photo</Text>
              </ContainerAddImage>
            </Pressable>
          </Spacer>
          <Spacer position="top" size="medium">
            <InputContainer
              placeholder="News title"
              placeholderTextColor="#A0A3BD"
              style={{ paddingHorizontal: 0 }}
            />
          </Spacer>
          <Spacer position="top" size="medium">
            <InputContainer
              placeholder="Add News/Article"
              placeholderTextColor="#A0A3BD"
              style={{ paddingHorizontal: 0, fontSize: 16 }}
              multiline={true}
              numberOfLines={4}
            />
          </Spacer>
        </ScrollView>
        <Footer>
          <FormatTextContainer
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <ToggleButton icon="format-bold" value="bold" />
            <ToggleButton icon="format-italic" value="italic" />
            <ToggleButton icon="format-align-left" value="left" />
            <ToggleButton icon="format-align-center" value="center" />
            <ToggleButton icon="format-align-right" value="right" />
          </FormatTextContainer>
          <Row>
            <SvgView xml={caplize} />
            <SvgView xml={order} />
            <SvgView xml={imageIcon} />
            <SvgView xml={more} />
          </Row>
          <Button>
            <Text variant="buttonDisabledText">Publish</Text>
          </Button>
        </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
};
