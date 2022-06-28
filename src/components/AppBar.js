import React from 'react'
import logo from "../assets/logo-small.png"; 

export default function AppBar() {
  return (
	<div
		className='flex flex-row bg-gray-500 w-full p-7 pl-10 '
	>
		<img src={logo} alt="Logo" className='w-auto'/>
	</div>
  )
}
