import React from "react";

import { Bottom, BottomItem, Icon, Label } from "./styles";

const BottomBar = ({ active, navigation }) => {
  return (
    <Bottom>
      <BottomItem
        active={active === "Portal"}
        onPress={() => navigation.navigate("Portal")}
      >
        <Icon name="web" active={active === "Portal"} />
        <Label active={active === "Portal"}>Portal</Label>
      </BottomItem>
      <BottomItem
        active={active === "Painel"}
        onPress={() => navigation.navigate("Painel")}
      >
        <Icon name="view-dashboard-outline" active={active === "Painel"} />
        <Label active={active === "Painel"}>Painel</Label>
      </BottomItem>
    </Bottom>
  );
};

export default BottomBar;
