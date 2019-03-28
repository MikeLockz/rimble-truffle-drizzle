import React from "react";
import {
  AccountData,
  ContractData,
  ContractForm
} from "drizzle-react-components";
import { ThemeProvider, Image, Flex, Box, Heading, Text } from "rimble-ui";
import theme from "./theme";

import logo from "./logo.png";

export default ({ accounts }) => (
  <ThemeProvider theme={theme} className="App">
    <Box width={"700px"} mx={"auto"}>
      <Flex flexDirection={"column"}>
        <Image src={logo} alt="drizzle-logo" width={183} height={155} />
        <Heading>Drizzle Examples</Heading>
        <Text.p>
          Examples of how to get started with Drizzle in various situations.
        </Text.p>
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading.h2>Active Account</Heading.h2>
        <AccountData accountIndex="0" units="ether" precision="3" />
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading.h2>SimpleStorage</Heading.h2>
        <Text.p>
          This shows a simple ContractData component with no arguments, along
          with a form to set its value.
        </Text.p>
        <AccountData accountIndex="0" units="ether" precision="3" />

        <Flex alignItems={"center"}>
          <Text fontWeight={3} bold>
            Stored Value:{" "}
          </Text>
          <ContractData contract="SimpleStorage" method="storedData" />
          <ContractForm contract="SimpleStorage" method="set" />
        </Flex>
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading.h2>TutorialToken</Heading.h2>
        <Text.p>
          Here we have a form with custom, friendly labels. Also note the token
          symbol will not display a loading indicator. We've suppressed it with
          the <code>hideIndicator</code> prop because we know this variable is
          constant.
        </Text.p>

        <Flex alignItems={"center"}>
          <Text fontWeight={3}>Total Supply: </Text>
          <ContractData
            contract="TutorialToken"
            method="totalSupply"
            methodArgs={[{ from: accounts[0] }]}
          />{" "}
          <ContractData
            contract="TutorialToken"
            method="symbol"
            hideIndicator
          />
        </Flex>

        <Flex alignItems={"center"}>
          <Text fontWeight={3}>My Balance: </Text>
          <ContractData
            contract="TutorialToken"
            method="balanceOf"
            methodArgs={[accounts[0]]}
          />
        </Flex>

        <Flex alignItems={"center"}>
          <Heading.h3>Send Tokens</Heading.h3>
          <ContractForm
            contract="TutorialToken"
            method="transfer"
            labels={["To Address", "Amount to Send"]}
          />
        </Flex>
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading.h2>ComplexStorage</Heading.h2>
        <Text.p>
          Finally this contract shows data types with additional considerations.
          Note in the code the strings below are converted from bytes to UTF-8
          strings and the device data struct is iterated as a list.
        </Text.p>

        <Flex alignItems={"center"}>
          <Text fontWeight={3}>String 1: </Text>
          <ContractData contract="ComplexStorage" method="string1" toUtf8 />
        </Flex>

        <Flex alignItems={"center"}>
          <Text fontWeight={3}>String 2: </Text>
          <ContractData contract="ComplexStorage" method="string2" toUtf8 />
        </Flex>

        <Flex alignItems={"center"}>
          <Text fontWeight={3}>Single Device Data: </Text>
          <ContractData contract="ComplexStorage" method="singleDD" />
        </Flex>
      </Flex>
    </Box>
  </ThemeProvider>
);
