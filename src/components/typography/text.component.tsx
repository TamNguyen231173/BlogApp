import styled from "styled-components/native";
import { TextProps as NativeTextProps } from 'react-native';

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 0;
`;

const body = (theme) => ` 
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.regular};
`;

const error = (theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    color: ${theme.colors.text.primary};
    font-weight: ${theme.fontWeights.medium};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const title = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.bold};
`;

const loginCaption = (theme) => `
    font-size: 20px;
    width: 60%;
    line-height: 30px;
    letter-spacing: 0.12px;
    color: ${theme.colors.text.primary};
`;

const buttonText = (theme) => `
    font-family: ${theme.fonts.caption};
    color: ${theme.colors.text.white};
    font-size: ${theme.fontSizes.button};
    font-weight: ${theme.fontWeights.medium};
    line-height: 24px;
    letter-spacing: 0.12px;
    letter-spacing: 1px;
`;

const buttonDisabledText = (theme) => `
    font-family: ${theme.fonts.caption};
    color: ${theme.colors.text.button_text};
    font-size: ${theme.fontSizes.button};
    line-height: 24px;
`;

const smallText = (theme) => `
    font-family: ${theme.fonts.caption};
    color: ${theme.colors.text.primary};
    font-size: ${theme.fontSizes.small};
`;

const timeText = (theme) => `
    color: ${theme.colors.text.primary};
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontSizes.regular};
    line-height: 16px;
`;

const textBodyBlack = (theme) => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.black};
`;

const amount = (theme) => `
    font-family: ${theme.fonts.caption};
    color: ${theme.colors.text.black};
`;

const TitleTab = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.title};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.black};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
  title,
  loginCaption,
  buttonText,
  buttonDisabledText,
  smallText,
  timeText,
  textBodyBlack,
  amount,
  TitleTab,
};

interface TextProps extends NativeTextProps {
    variant?: keyof typeof variants;
}

export const Text = styled.Text<TextProps>`
    ${({ theme }) => defaultTextStyles(theme)}
    ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
