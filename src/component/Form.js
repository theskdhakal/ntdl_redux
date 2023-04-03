import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setFrmDt, setTaskList } from "../dataSlice";

export const Form = () => {
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFrmDt({ [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(setTaskList());
  };
  return (
    <form
      onSubmit={handleOnSubmit}
      className="border p-3 rounded shadow-lg bg-secondary"
    >
      <div className="row mt-3 g-2">
        <div className="col-md-6">
          <input
            onChange={handleOnChange}
            type="text"
            name="task"
            class="form-control task-input"
            required
            placeholder="Enter a task"
          />
        </div>
        <div className="col-md-3">
          <input
            onChange={handleOnChange}
            type="number"
            name="hr"
            class="form-control hrs-input"
            min="1"
            required
            placeholder="Enter no. of hours"
          />
        </div>

        <div className="col-md-3 text-center">
          <Button className="btn btn-success" type="submit" id="form-btn">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
