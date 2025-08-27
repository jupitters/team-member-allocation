import React, { useState } from 'react'

const GroupedTeamMembers = ({employees, selectedTeam, setSelectedTeam}) => {

    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers());

    const groupTeamMembers = () => {
        let teams = [];

        let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
        let teamA = {team:'TeamA',members:teamAMembers,collapsed:selectedTeam === 'TeamA'?false:true};
        teams.push(teamA);

        let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
        let teamB = {team:'TeamB',members:teamBMembers,collapsed:selectedTeam === 'TeamB'?false:true};
        teams.push(teamB);

        let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
        let teamC = {team:'TeamC',members:teamCMembers,collapsed:selectedTeam === 'TeamC'?false:true};
        teams.push(teamC);

        let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
        let teamD = {team:'TeamD',members:teamDMembers,collapsed:selectedTeam === 'TeamD'?false:true};
        teams.push(teamD);

        return teams;
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