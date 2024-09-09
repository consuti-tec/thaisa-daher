import styled from "styled-components/native";
import AppConfig from "../../AppConfig";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${AppConfig.ColorTheme};
  align-items: center;
  justify-content: center;
`;

export const SplashImage = styled.Image`
  width: 100%;
  max-height: 100%;
`;
