import React from "react";
import "../vistas/styles/TablaVentas.css"; // Importamos el archivo de estilos

const TablaEgresos = () => {
  return (
    <div className="tabla-container">
        <h3>Egresos</h3>
      <table className="tabla-productos">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Producto Vendido</th>
            <th>Descripción</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Botones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>$</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TablaEgresos;
