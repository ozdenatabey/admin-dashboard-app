import Headers from "../components/Headers";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import { mockDataTeam } from "../data/mockData";

function Team() {
  const columns = [
    { name: "id", header: "ID", minWidth: 60 },
    { name: "name", header: "Name" },
    { name: "age", header: "Age", minWidth: 70 },
    { name: "phone", header: "Phone", minWidth: 120 },
    { name: "email", header: "Email", minWidth: 220 },
    { name: "accessLevel", header: "Access Level" },
  ];

  const gridStyle = { minHeight: 550 };

  return (
    <div>
      <Headers title={"TEAM"} subtitle={"Managing the team members"} />
      <ReactDataGrid
        checkboxColumn="true"
        className="m-8"
        idProperty="id"
        columns={columns}
        dataSource={mockDataTeam}
        style={gridStyle}
      />
    </div>
  );
}

export default Team;
