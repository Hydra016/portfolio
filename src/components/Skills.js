import React from 'react'
import { Fade } from "react-reveal";
import Boxes from './Boxes';
import SkillList from './SkillList';
import StrongSkillList from './StrongSkillList';

const Skills = () => {

  return (
    <Fade duration={1500}>
    <div id='skills-page' className='skills-container mobile-padding'>
      <h1 className='skills-heading'>My Skills</h1>
     <Boxes />
     <StrongSkillList />
     <SkillList />
      </div>
      </Fade> 
  )
}

export default Skills