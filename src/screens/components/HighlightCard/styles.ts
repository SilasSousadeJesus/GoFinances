import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;
export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.sucess};
  font-size: ${RFValue(32)}px;
`;
export const Footer = styled.View``;
export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 38px;
`;
export const LastTransact = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;
