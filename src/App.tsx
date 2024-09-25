import { container, mainContent } from "./styles/styles.css";
import { footerText, headerText, sideBarText } from "./data/layout-data";

import { ContentArea } from "./components/layout/content/ContentArea";
import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/header/Header";
import { SideBar } from "./components/layout/navigation/SideBar/SideBar";
import { useState } from "react";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={container}>
      <Header textModel={headerText} onToggleSidebar={toggleSidebar} />
      <div className={mainContent}>
        <SideBar
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          textModel={sideBarText}
        />
        <ContentArea />
      </div>
      <Footer textModel={footerText} />
    </div>
  );
};

export default App;
