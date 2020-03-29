import React, { Component } from 'react';
import { primeraMayuscula } from '../helper';

class Resumen extends Component {
    render() {
        const { datos } = this.props
        return (
            <div>
                {/* if (!marca || !anio || !plan) return null; */}
                {/* Es los mismo que: this.props.datos && */}
                {datos &&
                    <div className="resumen">
                        <h2>Resumen de Cotización</h2>
                        <li>Marca: {primeraMayuscula(datos.marca)}</li>
                        <li>Plan: {primeraMayuscula(datos.plan)}</li>
                        <li>Año del auto: {datos.anio}</li>
                    </div>
                }
            </div>
        );
    };
};

export default Resumen;