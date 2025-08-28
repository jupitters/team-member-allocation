import React from 'react'
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMembers = ({employees, selectedTeam, handlerEmployeeCardClick}) => {
  return (
    employees.map((employee) => (
                    <TeamMemberCard handlerEmployeeCardClick={handlerEmployeeCardClick} selectedTeam={selectedTeam} employee={employee}/>
                  ))
  )
}

export default TeamMembers