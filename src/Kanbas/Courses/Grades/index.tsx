import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileImport, FaFileExport, FaFilter } from 'react-icons/fa';

export default function Grades() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Grades</h2>
        <div>
          <button className="btn btn-secondary me-2">
            <FaFileImport className="me-2" />
            Import
          </button>
          <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport className="me-2" />
              Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Export as CSV</a></li>
              <li><a className="dropdown-item" href="#">Export as PDF</a></li>
            </ul>
          </div>
          <button className="btn btn-secondary ms-2">
            <FaFilter />
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="search-students" className="form-label">Student Names</label>
            <div className="input-group">
                <span className="input-group-text"><FaSearch /></span>
                <input type="text" id="search-students" className="form-control" placeholder="Search Students" />
            </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="search-assignments" className="form-label">Assignment Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" id="search-assignments" className="form-control" placeholder="Search Assignments" />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start mb-3">
        <button className="btn btn-secondary">
          <FaFilter className="me-2" />
          Apply Filters
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP<br />Out of 100</th>
              <th>A2 HTML<br />Out of 100</th>
              <th>A3 CSS<br />Out of 100</th>
              <th>A4 BOOTSTRAP<br />Out of 100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td>Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>92.18%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Samreen Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td><input type="text" className="form-control w-50" defaultValue="88.03%"/></td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td>Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
