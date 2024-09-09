import styled from "styled-components/native";
import AppConfig from "../../AppConfig";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const Description = styled.Text`
  margin-bottom: 50px;
  text-align: center;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 55px;
  align-items: center;
  justify-content: center;
  background: ${AppConfig.ColorTheme};
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
