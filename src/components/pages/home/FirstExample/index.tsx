import { Heading, Text } from "@chakra-ui/react";
import Button from "components/Button";
import { useApplicationContext } from "contexts/ApplicationContext";

export default function FirstExample() {
  const { isMobile } = useApplicationContext();

  return (
    <>
      <Heading size="lg">First Example!</Heading>
      <Button>
        <Text>Click me!</Text>
      </Button>
      {!isMobile ? (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
          consectetur nisi. Nulla euismod, nisl eget consectetur consectetur,
          nisi nisl aliquet nisi, euismod consectetur nisi nisl eget
          consectetur.
        </Text>
      ) : null}
    </>
  );
}
