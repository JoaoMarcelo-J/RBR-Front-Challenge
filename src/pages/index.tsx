import { AppLayout } from "components/layouts";
import { Header } from "components/modules/header";
import { Home } from "components/pages/home";

import { useApplicationContext } from "contexts/ApplicationContext";

export default function Page() {
  const { isMobile } = useApplicationContext();

  return (
    <>
      <Header />
      <AppLayout>
        <Home />
      </AppLayout>
    </>
  );
}
