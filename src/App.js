import "./App.css";
import Feed from "./Components/Feed/Feed";
import SidebarLeft from "./Components/SidebarLeft/SidebarLeft";
import SidebarRight from "./Components/SidebarRight/SidebarRight";
import { Comments } from "./AllData/Comments";

function App() {
  return (
    <div className="app">
      {/* SidebarLeft */}
      <SidebarLeft />
      {/* Feed */}
      <Feed comments={Comments} />
      {/* SidebarRight */}
      <SidebarRight />
    </div>
  );
}

export default App;
