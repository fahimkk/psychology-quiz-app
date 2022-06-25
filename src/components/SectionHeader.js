import * as React from 'react';

const HeaderItem = (props) =>{
  const setSection = ()=>{
    props.onClick(`${props.subTitle}${props.title}`)
  }
  return (
    <div
      className={`
      bg-gray-200 w-full pt-5 pb-5 border-gray-100 hover:bg-gray-300 
        ${props.border?'border-l-2':" "}
        ${props.border?'border-l-2':" "}
        ${props.selectedSection=== props.subTitle+props.title ? 'bg-gray-300': 'bg-gray-200 '}
      `}
      onClick={setSection}>
      <h1 className='md:text-lg text-sm font-light'>
        {`${props.subTitle} Responsive`}
      </h1>
    </div>
  );
}

const SubHeader = (props) =>{
  return (
    <div className={`
      w-full text-center pt-7 bg-gray-300 border-gray-100 ${props.border ? 'border-l-2':""}`}>
      <h1 className='text-lg font-bold'>{props.title}</h1>
      <div className='flex flex-row justify-center mt-7'>
          <HeaderItem
            title={props.title}
            onClick={props.onClick}
            subTitle={"Over"}
            selectedSection={props.selectedSection}
          /> 
          <HeaderItem
            title={props.title}
            onClick={props.onClick}
            subTitle={"Under"}
            border
            selectedSection={props.selectedSection}
          />
      </div>
    </div>
  );
}

const SectionHeader = (props) => {
  return (
    <div className='flex flex-row'>
      <SubHeader title = "Visual" onClick={props.onClick} selectedSection={props.selectedSection}/> 
      <SubHeader title = "Auditory" onClick={props.onClick} border selectedSection={props.selectedSection}/> 
    </div> 
  );
}

export default SectionHeader;
