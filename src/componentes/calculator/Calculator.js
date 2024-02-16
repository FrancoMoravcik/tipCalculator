import './Calculator.css';

import Result from '../result/Result.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


const Calculator = () => {

    // eslint-disable-next-line no-lone-blocks
    {/*

     - Que se active el btn RESET solo despues de tener los resultados 

    */}

    // estado para Bill
    const [bill, setBill] = useState('0');

    const handleChange = (e) => {
        const inputValue = e.target.value
        const numMaxBill = inputValue.slice(0, 13)

        setBill(numMaxBill);
    }

    // Estado para numero de personas
    const [people, setPeople] = useState('0');

    const handleChangePeople = (e) => {
        const inputValue = e.target.value
        const numMaxPeople = inputValue.slice(0, 2)

        setPeople(numMaxPeople);
    }

    // Estado para el porcentaje 
    const [percentage, setPercentage] = useState('');

    const handleChangePercentage = (e) => {
        const inputValue = e.target.value
        const numMaxPercentage = inputValue.slice(0, 2)

        setPercentage(numMaxPercentage);
    }

    const handlePercentageButtonClick = (e) => {
        const selectedPercentage = parseFloat(e.target.value)
        setPercentage(selectedPercentage);
    }


    // Cálculo de los totales
    let totalPerson = 0;
    let totalPropinaPerson = 0;
    if (bill !== '0' && people !== '0') {
        totalPerson = (bill / people).toFixed(2);
    }

    if (bill !== '0' && people !== '0' && percentage !== '') {
        totalPropinaPerson = (((bill * percentage) / 100) / people).toFixed(2);
    }

    return (
        <main className='main-container-calculator'>
            <h1 className='h1'>SPLI <br></br> TTER</h1>

            <section className='section-main-calculator'>
                <div>


                    <div className='div-section-calculator'>
                        <p className='p-div-values'>Bill</p>
                        <label className="input-container">
                            <FontAwesomeIcon className='icon' icon={faDollar} />
                            <input
                                className='input-number'
                                min='0'
                                type="number"
                                value={bill}
                                onChange={handleChange}
                                style={{ width: `${(bill.length * 8) + 100}px`, textAlign: 'right' }}
                                step={10}
                            />
                        </label>
                    </div>

                    <div className='div-section-calculator'>
                        <p className='p-div-values'>Select Tip %</p>
                        <div className='div-btn-percetange'>
                            <input type='button' value='5%' className='btn-percentage'
                                onClick={handlePercentageButtonClick}
                            ></input>
                            <input type='button' value='10%' className='btn-percentage'
                                onClick={handlePercentageButtonClick}
                            ></input>
                            <input type='button' value='18%' className='btn-percentage'
                                onClick={handlePercentageButtonClick}
                            ></input>
                            <input type='button' value='25%' className='btn-percentage'
                                onClick={handlePercentageButtonClick}
                            ></input>
                            <input type='button' value='30%' className='btn-percentage'
                                onClick={handlePercentageButtonClick}
                            ></input>
                            <input
                                className='input-custom'
                                type='number'
                                placeholder='custom'
                                onChange={handleChangePercentage}
                                min={1}
                                value={percentage}
                            >
                            </input>
                        </div>

                    </div>

                    <div className='div-section-calculator'>
                        <p className='p-div-values'>Number of People</p>
                        <label className="input-container">
                            <FontAwesomeIcon className='icon' icon={faUser} />
                            <input
                                className='input-number'
                                max='50'
                                min='2'
                                type="number"
                                value={people}
                                onChange={handleChangePeople}
                                style={{ width: `${(bill.length * 8) + 100}px`, textAlign: 'right' }}
                            />
                        </label>
                    </div>
                </div>

                <div>
                    <Result resultados={[totalPerson, totalPropinaPerson]}></Result>

                </div>
            </section>

            <footer>
                <p className='p-footer'>Challenge by <a href='https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX'>Frontend Mentor</a>. Coded by <a href='https://github.com/FrancoMoravcik?tab=repositories'>Franco Moravcik</a></p>
            </footer>
        </main>
    )
}

export default Calculator;