import { Box } from "@chakra-ui/react";
import { AppLayout } from "components/layouts";
import { Footer } from "components/modules/footer";
import { Header } from "components/modules/header";
import { Home } from "components/pages/home";

export default function Page() {
  return (
    <Box>
      <Header />
      <AppLayout>
        <Home />
        <Footer />
      </AppLayout>
    </Box>
  );
}
