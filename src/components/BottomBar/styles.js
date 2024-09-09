import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppConfig from "../../AppConfig";

export const Bottom = styled.View`
  height: 55px;
  background: #ffffff;
  justify-content: space-between;
  flex-direction: row;
`;

export const BottomItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 50%;
  background: ${(props) => (props.active ? "#fff" : "#f7f7f7")};
  border-top-width: 4px;
  border-color: ${(props) => (props.active ? AppConfig.ColorTheme : "#f7f7f7")};
`;

export const Icon = styled(MaterialIcons).attrs({
  size: 20,
})`
  color: ${(props) => (props.active ? AppConfig.ColorTheme : "rgba(0,0,0,.4)")};
  margin-right: 10px;
`;

export const Label = styled.Text`
  color: ${(props) => (props.active ? AppConfig.ColorTheme : "rgba(0,0,0,.4)")};
  font-weight: ${(props) => (props.active ? "bold" : "500")};
  font-size: 15px;
`;
