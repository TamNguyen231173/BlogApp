import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import { SafeArea } from "../../../components/utility/safe-area.component";
import hello_text from "../../../../assets/hello_text";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components/native";
import { TextInput, Checkbox } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Pressable } from "react-native";
import { ButtonPrimary } from "../../../components/utility/button.component";
import { ButtonDisabled } from "../../../components/utility/button-disabled.component";
import fb from "../../../../assets/fb";
import gg from "../../../../assets/gg";
import { TextInputView } from "../../../components/utility/text-input.component";

const ContainerView = styled.View`
	flex: 1;
	padding: ${(props) => props.theme.space[4]};
`;

const InputContainer = styled.View``;

const Row = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const CheckboxContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

const CheckboxView = styled(Checkbox)`
	width: 20px;
	height: 20px;
`;

const ForgotPasswordText = styled.Text`
	color: ${(props) => props.theme.colors.ui.primary};
	line-height: 21px;
	letter-spacing: 0.12px;
`;

const Col2 = styled.View`
	width: 45%;
`;

export const LoginScreen = () => {
	const [checked, setChecked] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<SafeArea>
			<ContainerView>
				<SvgXml xml={hello_text} width={167} height={144} />
				<Text variant="loginCaption">
					Welcome back you've been missed
				</Text>
				<Spacer position="top" size="large_xx">
					<InputContainer>
						<Text variant="caption">Username</Text>
						<TextInputView />
					</InputContainer>
					<Spacer position="top" size="medium">
						<InputContainer>
							<Text variant="caption">Password</Text>
							<TextInputView
								secureTextEntry={passwordVisible}
								right={
									<TextInput.Icon
										icon={
											passwordVisible ? "eye" : "eye-off"
										}
										onPress={() =>
											setPasswordVisible(!passwordVisible)
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
						<Pressable>
							<ForgotPasswordText variant="caption">
								Forgot the Password ?
							</ForgotPasswordText>
						</Pressable>
					</Row>
				</Spacer>
				<Spacer position="top" size="large">
					<ButtonPrimary>
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
									<Text variant="buttonDisabledText">
										Facebook
									</Text>
								</Row>
							</ButtonDisabled>
						</Col2>
						<Col2>
							<ButtonDisabled>
								<Row>
									<SvgXml xml={gg} width={21} height={21} />
									<Spacer position="left" size="small" />
									<Text variant="buttonDisabledText">
										Google
									</Text>
								</Row>
							</ButtonDisabled>
						</Col2>
					</Row>
				</Spacer>
				<Spacer position="top" size="large">
					<Text variant="caption" style={{ textAlign: "center" }}>
						don't have an account ?
					</Text>
				</Spacer>
			</ContainerView>
		</SafeArea>
	);
};
