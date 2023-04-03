import "./App.css";
import { Form } from "./component/Form";
import { Table } from "./component/Table";

function App() {
  return (
    <div className="wrapper ">
      <div className="container">
        {/* <title>   */}

        <div className="row ">
          <div className="col text-center mt-5">
            <h1>NOT TO DO LIST</h1>
          </div>
        </div>

        {/* form area  */}
        <Form />

        {/* table area  */}
        <Table />

        {/* total hrs area  */}
        <div className="row fw-bold">
          <div className="col">
            <p>The total hrs allocated for this week is 0</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
