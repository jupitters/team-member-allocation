import React, { useState } from 'react'

const GroupedTeamMembers = ({employees, selectedTeam, setSelectedTeam}) => {

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

    const groupTeamMembers = () => {
        let teams = [];

        let teamMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = {team:'TeamA',members:teamMembers,collapsed:selectedTeam === 'TeamA'?false:true};
        teams.push(teamA);

        teamMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = {team:'TeamB',members:teamMembers,collapsed:selectedTeam === 'TeamB'?false:true};
        teams.push(teamB);

        teamMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = {team:'TeamC',members:teamMembers,collapsed:selectedTeam === 'TeamC'?false:true};
        teams.push(teamC);

        teamMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = {team:'TeamD',members:teamMembers,collapsed:selectedTeam === 'TeamD'?false:true};
        teams.push(teamD);
    }

  return (
    <main className='container'>
        <div className='row justify-content-center mt-3 mb-4'>
            <div className='col-8'>

            </div>
        </div>
    </main>
  )
}

export default GroupedTeamMembers