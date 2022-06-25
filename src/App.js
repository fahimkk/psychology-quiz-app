import React from 'react';
import QuizSection from './components/QuizSection';
import SectionHeader from "./components/SectionHeader";
import {reactLocalStorage} from 'reactjs-localstorage';
import AppBar from './components/AppBar';



function App() {
  const [selectedSection, setSelectedSection] = React.useState(null);
  const [attendedSections, setAttendedSections] = React.useState([]);
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
  return (
    <div className='bg-gray-200 h-screen'>
      <AppBar/>
      <div>
        <SectionHeader
          onClick={setSelectedSection}
          selectedSection={selectedSection}
        />
        <div className='pt-10 border-t-2 border-gray-100 text-center'>
          {selectedSection ?
            <QuizSection
              section={selectedSection}
              attendedSections={attendedSections}
              setAttendedSections={setAttendedSections}
              updateData={updateData}
            />
            :
            <div className='mt-10'>
              <h1 className='text-4xl font-bold'>
                Welcome

              </h1>
              <div
                className='mt-5 text-blue-500 hover:text-blue-700 text-xl'
                onClick={()=>setSelectedSection('OverVisual')}
              >
                Start Quiz
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
