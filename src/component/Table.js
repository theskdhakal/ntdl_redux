import React from "react";
import { useSelector } from "react-redux";

export const Table = () => {
  const { taskList } = useSelector((state) => state.dataList);

  const entryList = taskList.filter((item) => item.type === "entry");

  const badList = taskList.filter((item) => item.type === "bad");
  return (
    <div class="row mt-5 g-2">
      <div class="col-md-6">
        <h2 class="text-center">Entry List</h2>
        <hr />
        <table class="table table-striped table-hover ">
          <tbody id="task-list">
            {entryList.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr} hr(s)</td>

                <td class="text-end">
                  <button
                    // onClick={() => deleteBtn(item.id)}
                    class="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>{" "}
                  <button
                    // onClick={() => taskSwitcher(item.id, "bad")}
                    class="btn btn-success"
                  >
                    <i class="fa-solid fa-right-long"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="col-md-6">
        <h2 class="text-center">Bad List</h2>
        <hr />
        <table class="table table-striped table-hover">
          <tbody id="bad-list">
            {badList.map((item, i) => (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.task}</td>
                <td>{item.hr} hr(s)</td>

                <td class="text-end">
                  <button
                    // onClick={() => taskSwitcher(item.id, "entry")}
                    class="btn btn-warning"
                  >
                    <i class="fa-solid fa-left-long"></i>
                  </button>{" "}
                  <button
                    // onClick={() => deleteBtn(item.id)}
                    class="btn btn-danger"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
