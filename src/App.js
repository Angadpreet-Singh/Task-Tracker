import {useState } from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import TaskApp from "./components/TaskApp";
function App() {
  const[showAddTask,setShowAddTask]=useState(false)
  return (
    <Router>
      <div className="container">
          <Header addTasktoggle={()=>setShowAddTask(!showAddTask)} isAddTask={showAddTask}/>
          <Routes>
          <Route path="/" element={<TaskApp showAddTask={showAddTask} />} />  
          <Route path="/about" element={<About/>} />
          </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
