import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
`;
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(113)}px;
  width: 100%;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.View`
  background-color: ${({ theme }) => theme.colors.background};

  width: 100%;
  padding: ${RFValue(15)}px;
  align-items: center;
  flex-direction: row;
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;
export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const Separator = styled.Text`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
