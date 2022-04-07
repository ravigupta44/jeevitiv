import React from "react";
import "../Case/Case.css";
import { NestedGrid } from "../Case/MUIGrid";
import { SpeedDials2 } from "../Case/MUISpeedDial2";
import { ScrollDialog } from "../Case/MUIDialog";
import { SimpleSelectWhere } from "../Case/MUISelectWhere";
import { SimpleSelectWhat } from "../Case/MUISelectWhat";
import { SingleLineGridList } from "../Case/MUIGridList";

export default function Casestudy() {
  return (
    <div className="App">
      <h1>CASE STUDIES</h1>
      <h4>Gets Every Single Updates Here</h4>
      {/* <div id="hdr">
        <SimpleSelectWhere />
        <SimpleSelectWhat />
      </div> */}
      <SpeedDials2 />
      <NestedGrid />
      <ScrollDialog />
      {/* <SingleLineGridList /> */}
    </div>
  );
}
