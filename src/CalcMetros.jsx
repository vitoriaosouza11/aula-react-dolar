import './CalcMetros.css'
import { TbRulerMeasure } from "react-icons/tb";
 
function CalcMetros() {
 
    const calcular = (function () {
        const centimetros = document.getElementById("centimetros").value
        const total = centimetros / 100
        alert("o valor convertido para centímetros é " + total + " metros")
    })
 
    return (
        <>
            <form className='w-25 m-auto pt-5 pb-5'>
               
                <div className="form-group mb-3">
                    <label htmlFor="centimetros">Valor em Centímetros para Metros</label>
                    <input type="text" className="form-control" id="centimetros" />
                </div>
                <button type="button" onClick={calcular} className="btn btn-primary w-100"><TbRulerMeasure size={33} color="white" /> Calcular</button>
            </form>
 
        </>
    )
}
 
export default CalcMetros;