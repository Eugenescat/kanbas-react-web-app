import { useParams, Link } from 'react-router-dom';
import * as db from '../../Database';

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get the course ID and assignment ID from the URL
  const assignments = db.assignments; // Get the assignments from the Database
  const assignment = assignments.find(a => a._id === aid); // Find the assignment by ID

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h2 className="mb-4">Assignment Editor</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
          <div className="col-sm-10">
            <input type="text" id="wd-name" defaultValue={assignment.title} className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea id="wd-description" rows={5} className="form-control">
              {assignment.description || 'No description provided.'}
            </textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
            <input type="number" id="wd-points" defaultValue={assignment.points} className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
          <div className="col-sm-10">
            <select id="wd-group" className="form-control">
              <option value="assignments">ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>
          <div className="col-sm-10">
            <select id="wd-display-grade-as" className="form-control">
              <option value="percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10">
            <div className="row">
              <div className="col-sm-12 mb-3">
                <select id="wd-submission-type" className="form-control">
                  <option value="online">Online</option>
                </select>
              </div>
              <div className="col-sm-12">
                <label className="form-label"><strong>Online Entry Options</strong></label>
                <div className="form-check">
                  <input type="checkbox" id="wd-text-entry" name="onlineEntry" value="textEntry" className="form-check-input" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-website-url" name="onlineEntry" value="websiteURL" className="form-check-input" defaultChecked />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-media-recordings" name="onlineEntry" value="mediaRecordings" className="form-check-input" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-student-annotation" name="onlineEntry" value="studentAnnotation" className="form-check-input" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-file-upload" name="onlineEntry" value="fileUploads" className="form-check-input" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">Assign to</label>
          <div className="col-sm-10">
            <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label"><strong>Assign to</strong></label>
            <input type="text" id="wd-assign-to" defaultValue="Everyone" className="form-control mb-3" />
            <label htmlFor="wd-due-date" className="form-label">Due</label>
            <input type="datetime-local" id="wd-due-date" defaultValue={assignment.dueDate} className="form-control mb-3" />
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <input type="datetime-local" id="wd-available-from" defaultValue={assignment.availableDate} className="form-control mb-3" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input type="datetime-local" id="wd-available-until" defaultValue="2024-05-20T00:00" className="form-control mb-3" />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary me-2">Save</Link>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
