import './Result.css'

const Result = ({ resultados }) => {

  let [totalPerson, totalPropinaPerson] = resultados;

  const noResults = 0

  return (
    <main className='main-container-result'>
      <div className='div-container-main-result'>
        <div className='div-monto-person'>
          <p className='p-div-monto'>Tip Amount <br></br><span className='span-div-monto'>/ person</span></p>
          <h3 className='h3-div-monto'>
            ${isNaN(totalPropinaPerson) ? noResults : totalPropinaPerson}
          </h3>
        </div>
        <div className='div-monto-person'>
          <p className='p-div-monto'>Total <br></br><span className='span-div-monto'>/ person</span></p>
          <h3 className='h3-div-monto'>
            ${isNaN(totalPerson) ? noResults : totalPerson}
          </h3>
        </div>
      </div>

    </main>
  )
}

export default Result;