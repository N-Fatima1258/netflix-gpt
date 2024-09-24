import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}
export default App;

/* 
-------redux toolkit
create a store
create a slice
added the slice to the store
provide the store to the root

*/
