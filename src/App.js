import React from 'react';
import QuizSection from './components/QuizSection';
import SectionHeader from "./components/SectionHeader";
import {reactLocalStorage} from 'reactjs-localstorage';
import AppBar from './components/AppBar';



function App() {
  const [selectedSection, setSelectedSection] = React.useState("OverVisual");
  const [attendedSections, setAttendedSections] = React.useState({});
  const updateData = (result)=>{
    let data = reactLocalStorage.getObject('survayData');
    if(data && data[selectedSection]){
      data[selectedSection].push(result)
    }else{
      data = {
        [selectedSection]: [result]
      }
    }
    reactLocalStorage.setObject('survayData', data);
    data = reactLocalStorage.getObject('survayData');
    console.log("Total Data: ", data)
  }
  console.log("app: ", selectedSection)
  return (
    <div className='bg-gray-200 h-screen'>
      <AppBar/>
      <div>
        <SectionHeader
          onClick={setSelectedSection}
          selectedSection={selectedSection}
        />
        <div className='pt-10 py-14 border-t-2 bg-gray-200 border-gray-100 text-center'>
            <QuizSection
              section={selectedSection}
              attendedSections={attendedSections}
              setAttendedSections={setAttendedSections}
              updateData={updateData}
            />
        </div>
      </div>
    </div>
  );
}

export default App;
