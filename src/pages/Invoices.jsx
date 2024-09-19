import Headers from "../components/Headers";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { mockDataInvoices } from "../data/mockData";
import { useMemo, useRef, useCallback } from "react";

// eslint-disable-next-line react/prop-types
function Invoices({ theme }) {
  const darkTheme = "ag-theme-quartz-auto-dark";
  const lightTheme = "ag-theme-quartz";
  let selectedTheme;

  if (theme === "dim") {
    selectedTheme = darkTheme;
  } else if (theme === "light") {
    selectedTheme = lightTheme;
  }

  const columns = [
    { field: "id", flex: 0.5 },
    { field: "name", flex: 1, filter: true, editable: true },
    { field: "email", flex: 1, filter: true, editable: true },
    {
      field: "cost",
      flex: 0.5,
      filter: true,
      editable: true,
      valueFormatter: (p) => "$ " + p.value.toLocaleString(),
    },
    { field: "phone", flex: 1, filter: true, editable: true },
    { field: "date", flex: 1, filter: true, editable: true },
  ];

  const selection = useMemo(() => {
    return { mode: "multiRow" };
  }, []);

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [10, 20, 50, 100];

  const gridRef = useRef();
  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setGridOption(
      "quickFilterText",
      document.getElementById("filter-text-box").value
    );
  }, []);

  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      minWidth: 100,
      flex: 1,
    };
  }, []);

  const onBtnExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv();
  }, []);

  return (
    <div>
      <Headers title={"INVOICES"} subtitle={"List Of Invoices"} />
      <div className="m-7">
        <div className={selectedTheme} style={{ height: 480 }}>
          <div className="flex justify-between m-4">
            <div>
              <span>Quick Filter:</span>
              <input
                className="bg-transparent/10 border border-transparent/30 p-2 ml-2 rounded-md"
                type="text"
                id="filter-text-box"
                placeholder="Filter anything"
                onInput={onFilterTextBoxChanged}
              />
            </div>
            <button
              className="btn btn-primary btn-outline btn-sm"
              onClick={onBtnExport}
            >
              Export CSV
            </button>
          </div>
          <AgGridReact
            defaultColDef={defaultColDef}
            suppressExcelExport={true}
            ref={gridRef}
            rowData={mockDataInvoices}
            columnDefs={columns}
            pagination={pagination}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
            selection={selection}
          />
        </div>
      </div>
    </div>
  );
}

export default Invoices;
