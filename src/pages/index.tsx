import { Heading } from "@chakra-ui/react";
import FirstExample from "components/pages/home/FirstExample";
import SecondExample from "components/pages/home/SecondExample";
import { useApplicationContext } from "contexts/ApplicationContext";

export default function Page() {
  const { isMobile } = useApplicationContext();

  return (
    <>
      <Heading>Next Boilerplate!</Heading>
      <FirstExample />
      {isMobile ? <SecondExample /> : null}
    </>
  );
}
