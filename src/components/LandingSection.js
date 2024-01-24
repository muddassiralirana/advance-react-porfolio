import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Muddassir!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}>
      <VStack spacing={4}>
        {/* <Avatar src="https://i.pravatar.cc/150?img=7" size="2x1"/> */}
        <Avatar src="https://media.licdn.com/dms/image/D4D03AQECChdLjnxoIw/profile-displayphoto-shrink_800_800/0/1705249353869?e=1711584000&v=beta&t=Z6Ef4_RVDQOdrWhc8vocKZFtYh93DuhSEWeOuADP0-g" width="150px" height="150px" size="2x1"/>

        <Heading size="md" >{greeting}</Heading>
      </VStack>
      <VStack spacing={6}>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>  
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
