import React from 'react'

const TeamMembers = ({employees, selectedTeam, handlerEmployeeCardClick}) => {
  return (
    employees.map((employee) => (
                    <TeamMemberCard handlerEmployeeCardClick={handlerEmployeeCardClick} selectedTeam={selectedTeam} employee={employee}/>
                  ))
  )
}

export default TeamMembers