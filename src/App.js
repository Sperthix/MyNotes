import Tasks from "./components/Tasks/Tasks";
import List from "./components/SideList/List";
import SideListProvider from "./context/sideList-provider";

function App() {
  return (
    <div>
        <SideListProvider>
            <Tasks />
            <List />
            </SideListProvider>
    </div>
  );
}

export default App;
