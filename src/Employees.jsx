import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';
import Teams from './Teams';

const Employees = ({employees, selectedTeam, handlerSelectTeams, handlerEmployeeCardClick}) => {

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
          <Teams selectedTeam={selectedTeam} handlerSelectTeams={handlerSelectTeams} />
        </div>
      </div>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <div className='card-collection'>
            {
              employees.map((employee) => (
                <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam?'card m-2 standout':'card m-2')} style={{cursor: "pointer"}} onClick={handlerEmployeeCardClick}>
                  {(employee.gender === 'female')? <img src={femaleProfile} className='card-img-top'/>:
                                                <img src={maleProfile} className='card-img-top' />}
                  <div className='card-body'>
                    <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                    <p className='card-text'><b>Designation:</b> {employee.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Employees