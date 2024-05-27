import React from 'react';
import { useParams } from 'react-router-dom';
import { BsGripVertical } from 'react-icons/bs';
import { FaFileAlt } from 'react-icons/fa';
import AssignmentsControls from './AssignmentsControls';
import LessonControlButtons from '../Modules/LessonControlButtons';
import ModuleControlButtons from '../Modules/ModuleControlButtons';
import * as db from '../../Database';

export default function Assignments() {
  const { cid } = useParams(); // Get the course ID from the URL
  const assignments = db.assignments; // Get the assignments from the Database

  return (
    <div>
      <AssignmentsControls /><br /><br /><br /><br />
      <div id="wd-assignments">
        <ul id="wd-assignments-list" className="list-group rounded-0">
          <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              <strong>ASSIGNMENTS</strong>
              <ModuleControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
              {assignments
                .filter(assignment => assignment.course === cid)
                .map(assignment => (
                  <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-start-green">
                    <div className="pe-3">
                      <BsGripVertical className="me-2 fs-4" />
                    </div>
                    <div className="me-2 fs-4" style={{ color: 'green' }}>
                      <FaFileAlt />
                    </div>
                    <div className="flex-grow-1">
                      <a href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="text-decoration-none">
                        <h5 className="mb-1" style={{ color: 'black' }}><strong>{assignment.title}</strong></h5>
                      </a>
                      <p className="mb-1">
                        <span style={{ color: 'black' }}>Assignment ID: {assignment._id} | <strong>Not available until</strong> {assignment.availableDate} | <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts</span>
                      </p>
                    </div>
                    <LessonControlButtons />
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
