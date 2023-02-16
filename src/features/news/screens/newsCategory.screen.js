import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { tabs } from "../../home/screens/home.screen";
import { TabsView } from "../../../components/utility/tabsView.component";

export const NewsCategoryScreen = () => {
  return (
    <SafeArea>
      <TabsView tabs={tabs} />
    </SafeArea>
  );
};
