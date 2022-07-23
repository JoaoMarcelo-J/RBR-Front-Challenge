import { Button } from "@chakra-ui/react";

interface NavBarItemProps {
  content: string;
  onClick?: () => void;
}

export const NavBarItem = ({ content, onClick }: NavBarItemProps) => {
  return (
    <Button
      _hover={{ backgroundColor: "#3F2957", color: "#fff" }}
      variant="ghost"
      transition="background-color 0.2s , color 0.2s"
      color="#3F2957"
      borderRadius="0"
      onClick={onClick}
    >
      {content}
    </Button>
  );
};
