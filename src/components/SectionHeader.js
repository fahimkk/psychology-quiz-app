import * as React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { SECTIONS } from '../constants/questions';

const HeaderItem = (props) =>{
  const setSection = ()=>{
    props.onClick(props.subTitle)
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
const SubHeaderCopy = (props) =>{
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
  const [title, setTitle] = React.useState("Visual")
  const [subTitle, setSubTitle] = React.useState("Over")
  const defalutSection = SECTIONS[0]
  React.useEffect(()=>{
    if(title && subTitle){
      props.onClick(`${subTitle}${title}`)
    }
  },[title, subTitle])

  const onChangeTitle = (val) => {
    setTitle(val.value)
  }
  const onChangeSubTitle = (val) =>{
    setSubTitle(val)
  }
  return (
    <div className={`
      w-full text-center pt-7 bg-gray-50 border-gray-100 ${props.border ? 'border-l-2':""}`}>
      <div className='flex flex-row justify-center'>
        <div className='w-3/4 md:w-1/2'>
        <Dropdown
          options={SECTIONS}
          value={defalutSection}
          onChange={onChangeTitle}
          placeholder="Select an option"
        />
        </div>
      </div>
      <div className='flex flex-row justify-center mt-7'>
          <HeaderItem
            title={title}
            onClick={onChangeSubTitle}
            subTitle={"Over"}
            selectedSection={props.selectedSection}
          /> 
          <HeaderItem
            title={title}
            onClick={onChangeSubTitle}
            subTitle={"Under"}
            border
            selectedSection={props.selectedSection}
          />
      </div>
    </div>
  );
}

export default SectionHeader;
