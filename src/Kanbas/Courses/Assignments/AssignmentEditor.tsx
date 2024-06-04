// src/Kanbas/Courses/Assignments/AssignmentEditor.tsx
import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { addAssignment, updateAssignment } from './reducer';
import { useSelector, useDispatch } from "react-redux";
// import * as db from '../../Database';

export default function AssignmentEditor() {
  // 如果 aid 存在，意味着这是一个编辑作业的操作。如果 aid 不存在，意味着这是一个创建新作业的操作。
  const { cid, aid } = useParams<{ cid: string; aid?: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isNew = !aid;
  const { assignments } = useSelector((state: any) => state.assignmentReducer); // get assignments from redux

  // 如果是新作业（即 isNew 为 true），assignment 将是一个空对象。如果是编辑现有作业（即 isNew 为 false），assignment 将是从 assignments 数组中找到的具有相应 aid 的作业对象。
  const assignment = isNew ? ({} as any) : (assignments.find((a:any) => a._id === aid) as any);

  const [title, setTitle] = useState(assignment?.title || '');
  const [description, setDescription] = useState(assignment?.description || '');
  const [points, setPoints] = useState(assignment?.points || '');
  const [dueDate, setDueDate] = useState(assignment?.dueDate || '');
  const [availableDate, setAvailableDate] = useState(assignment?.availableDate || '');

  const handleSave = () => {
    if (!cid) {
      console.error("Course ID is required");
      return;
    }

    const assignment = {
      _id: isNew ? new Date().getTime().toString() : aid,
      description,
      title,
      course: cid,
      points,
      dueDate,
      availableDate,
    };

    if (isNew) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <h2 className="mb-4">Assignment Editor</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
          <div className="col-sm-10">
            <input type="text" id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-description" className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <textarea id="wd-description" rows={5} value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
            <input type="number" id="wd-points" value={points} onChange={(e) => setPoints(e.target.value)} className="form-control" />
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
            <input type="datetime-local" id="wd-due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control mb-3" />
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <input type="datetime-local" id="wd-available-from" value={availableDate} onChange={(e) => setAvailableDate(e.target.value)} className="form-control mb-3" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input type="datetime-local" id="wd-available-until" defaultValue="2024-05-20T00:00" className="form-control mb-3" />
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary me-2" onClick={handleSave}>Save</button>
              <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
