import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
 
  Route,
  
} from "react-router-dom";
import Studentlist from './Studentlist';
import AttendenceList from './AttendenceList';
import Addattendence from './Addattendence';

function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">

          <Topbar/>
          <div className='container-fluid'>
         
            
              <Routes>
                <Route path="/Dashboard" element={<Dashboard/>} ></Route>
               <Route path="/studentList" element={<Studentlist/>}> </Route> 
                <Route path="/student/:id" element={<AttendenceList/>}> </Route>
                <Route path="/Add-attendence/:id" element={<Addattendence/>}> </Route>   
              </Routes>
             
          </div>
        </div>
      
      </div>
    </div>
    </BrowserRouter>
  );

}

export default App;