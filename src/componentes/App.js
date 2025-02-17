import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario'
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resumen from './Resumen';
import Resultado from './Resultado';

class App extends Component {
  state = {
    resultado: undefined,
    datos: undefined
  }

  resultadoTotal = (marca,plan,anio) => {
    //agregar base de 2000
    let resultado = 2000;
    //obtener la diferencia de años y 
    const diferencia = obtenerDiferenciaAnio(anio);
    //por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;
    //americano 15% asiatico 5% europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;
    //El plan del auto, el basico incrementa el valor 20% y cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan)
    //dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    return resultado;
  };

  cotizarSeguro = (datos) => {
    const { marca, plan, anio } = datos;
    
    let resultado = this.resultadoTotal(marca,plan,anio)

    //Crear objeto para el resumen
    const datosAuto = {
      marca: marca,
      plan: plan,
      anio: anio
    };

    //Ya tenemos el costo
    this.setState({
      resultado: resultado,
      datos: datosAuto
    });
  };

  render() {
    return (
      <div className="contenedor">
        <Header titulo='Cotizador de Seguro de auto' />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />

          <Resumen
            datos={this.state.datos}
            resultado={this.state.resultado}
          />

          <Resultado
            resultado={this.state.resultado}
          />
        </div>

      </div>
    );
  };
}

export default App;


