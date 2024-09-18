import Headers from "../components/Headers";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { mockDataTeam } from "../data/mockData";
import { useMemo, useRef, useCallback } from "react";

// eslint-disable-next-line react/prop-types
function Team({ theme }) {
  const darkTheme = "ag-theme-quartz-auto-dark";
  const lightTheme = "ag-theme-quartz";
  let selectedTheme;

  if (theme === "dim") {
    selectedTheme = darkTheme;
  } else if (theme === "light") {
    selectedTheme = lightTheme;
  }
  console.log(selectedTheme);

  const managerStyle = {
    backgroundColor: "rgba(255,0,0,0.2)",
  };
  const adminStyle = {
    backgroundColor: "rgba(0,0,255,0.2)",
  };
  const userStyle = {
    backgroundColor: "rgba(0,255,0,0.2)",
  };

  const columns = [
    { field: "id", flex: 0.5 },
    { field: "name", flex: 1, filter: true, editable: true },
    { field: "age", flex: 0.5, filter: true, editable: true },
    { field: "phone", flex: 1, filter: true, editable: true },
    { field: "email", flex: 1, filter: true, editable: true },
    {
      field: "access",
      flex: 1,
      valueFormatter: (p) => p.value.charAt(0).toUpperCase() + p.value.slice(1),
      filter: true,
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellStyle: (p) =>
        p.value === "manager" || p.value === "Manager"
          ? managerStyle
          : p.value === "admin" || p.value === "Admin"
          ? adminStyle
          : userStyle,
      cellEditorParams: { values: ["Manager", "Admin", "User"] },
    },
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
      <Headers title={"TEAM"} subtitle={"Managing the team members"} />
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
            rowData={mockDataTeam}
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

export default Team;
