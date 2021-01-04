import React from "react";
import { storiesOf } from "@storybook/react";

import HomePageComponent from "../06/HomePageComponent";
import HomePageWithprovider from "../06/HomePageWithProvider";

storiesOf("HomePageComponenet", module)
  .addWithJSX("컨텍스트 예제 ", () => <HomePageComponent />)
  .addWithJSX("Provider예제", () => <HomePageWithprovider />);
