import React from 'react';
import Tilty from 'react-tilty';
import brain from './brain.png';
import './Logo.css';

 
const Logo = () => {
  return (
    <div className='ma4 mt0'>
    	<Tilty className='Tilt br2 shadow-2' reverse axis='x' scale={1.25} perspective={900} reset={true}>
  			<div className='pa3'>
  				<img 
  				alt='logo' src={brain}/>
  			</div>
		</Tilty>
    </div>
  );
};
 
export default Logo;