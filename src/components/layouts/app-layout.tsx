//Components
import { Box } from "@chakra-ui/react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children, ...rest }: AppLayoutProps) => {
  return (
    <Box h="100vh" m="0 auto">
      <Box m="0 auto" maxW="1480px" position="relative">
        {children}
      </Box>
    </Box>
  );
};
