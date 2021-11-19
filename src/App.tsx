import "./App.css";
import Routing from "./components/routing/routing";
import "firebase/firestore";
import { useSelector } from "react-redux";
import { StoreStateInterface } from "./interfaces/storeStateInterface/storeStateInterface";
import * as _ from "lodash";
import Spinner from "./components/spinner/spinner";

const App = () => {
  const rolesList = useSelector((state: StoreStateInterface) => state ?? []);

  const isFetching = _.find(rolesList, (item) => {
    return !!item?.isFetching;
  });

  return (
    <div className="App">
      <Routing />

      {isFetching ? <Spinner /> : ""}
    </div>
  );
};

export default App;
