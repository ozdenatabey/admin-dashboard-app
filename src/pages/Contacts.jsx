import Headers from "../components/Headers";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { mockDataContacts } from "../data/mockData";
import { useMemo, useRef, useCallback } from "react";

// eslint-disable-next-line react/prop-types
function Contacts({ theme }) {
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
    { field: "age", flex: 0.5, filter: true, editable: true },
    { field: "phone", flex: 1, filter: true, editable: true },
    { field: "address", flex: 1, filter: true, editable: true },
    { field: "city", flex: 1, filter: true, editable: true },
    { field: "zipCode", flex: 1, filter: true, editable: true },
    { field: "registrarId", flex: 1, filter: true, editable: true },
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

  return (
    <div>
      <Headers title={"CONTACTS"} subtitle={"List Of Contacts"} />
      <div className="m-7">
        <div className={selectedTheme} style={{ height: 480 }}>
          <div className="m-4">
            <span>Quick Filter:</span>
            <input
              className="bg-transparent/10 border border-transparent/30 p-2 ml-2 rounded-md"
              type="text"
              id="filter-text-box"
              placeholder="Filter anything"
              onInput={onFilterTextBoxChanged}
            />
          </div>
          <AgGridReact
            ref={gridRef}
            rowData={mockDataContacts}
            columnDefs={columns}
            pagination={pagination}
            suppressExcelExport={true}
            paginationPageSize={paginationPageSize}
            paginationPageSizeSelector={paginationPageSizeSelector}
            selection={selection}
          />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
