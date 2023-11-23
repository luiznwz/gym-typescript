import Navbar from "@/scenes/navbar";
import { useState } from "react";

enum SelectedPage {
  Home = "home",
  Beneficts = "beneficts ",
  OurClasses = "ourclasses",
  Contact = "contactus",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
