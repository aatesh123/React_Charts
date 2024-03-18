// AgGridComponent.jsx
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgGridComponent = () => {
  // Sample data for the grid
  const rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

  // Define column definitions for the grid
  const columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  // State to hold grid options
  const [gridOptions] = useState({
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: {
      sortable: true,
      resizable: true
    }
  });

  return (
    <div className="ag-theme-alpine" style={{ height: '300px', width: '600px' }}>
      <AgGridReact
        gridOptions={gridOptions}
      />
    </div>
  );
}

export default AgGridComponent;
