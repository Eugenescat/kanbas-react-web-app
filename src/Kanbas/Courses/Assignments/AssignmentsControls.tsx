import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div className="input-group float-start" style={{ maxWidth: "300px" }}>
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ height: '100%' }}>
            <FaSearch />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
