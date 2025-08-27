import React from 'react'

const Teams = ({selectedTeam, handlerSelectTeams}) => {
  return (
    <select className='form-select form-select-lg' value={selectedTeam} onChange={handlerSelectTeams}>
        <option value='TeamA'>Team A</option>
        <option value='TeamB'>Team B</option>
        <option value='TeamC'>Team C</option>
        <option value='TeamD'>Team D</option>
    </select>
  )
}

export default Teams