import "../styles/index.scss";
import "../pages/pagesStyles/pagesStyle.scss";

import type { AppProps } from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Toaster } from "../common/components/toaster/toaster";
import { getDummyRoles } from "../helpers/Tokens";
import { persistStore } from "redux-persist";
import { store } from "../redux/store";
import { useEffect } from "react";
import { useRouter } from "next/router";

// import { PersistGate } from "redux-persist/integration/react";

let prevPath = "/";
let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps, { roleInfo }: any) {
  const router = useRouter();
  //animation
  const addPath = () => {
    prevPath = currentPath;
  };

  let currentPath = router.pathname;
  // eslint-disable-next-line react-hooks/exhaustive-deps

  let localStorageRole;

  useEffect(() => {
    storePathValues();
    addPath();
    localStorageRole = getDummyRoles();

    // AppRefresh()
  }, [router.pathname]);

  function storePathValues() {
    const storage = globalThis?.sessionStorage;
    storage.setItem("prevPath", prevPath);
    storage.setItem("currentPath", currentPath);
  }
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <div className="warp-alert-notification flex justify-end ">
          <Toaster />
        </div>
        <Component {...pageProps} />
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default MyApp;
