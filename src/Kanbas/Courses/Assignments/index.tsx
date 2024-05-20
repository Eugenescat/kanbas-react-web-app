import { BsGripVertical } from 'react-icons/bs';
import { FaFileAlt } from 'react-icons/fa';
import AssignmentsControls from './AssignmentsControls';
import LessonControlButtons from '../Modules/LessonControlButtons';
import ModuleControlButtons from '../Modules/ModuleControlButtons';

export default function Assignments() {
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
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-start-green">
                <div className="pe-3">
                  <BsGripVertical className="me-2 fs-4" />
                </div>
                <div className="me-2 fs-4" style={{ color: 'green'}}><FaFileAlt /></div>
                <div className="flex-grow-1">
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">
                    <h5 className="mb-1" style={{ color: 'black' }}><strong>A1</strong></h5>
                  </a>
                  <p className="mb-1">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                  </p>
                </div>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-start-green">
                <div className="pe-3">
                  <BsGripVertical className="me-2 fs-4" />
                </div>
                <div className="me-2 fs-4" style={{ color: 'green'}}><FaFileAlt /></div>
                <div className="flex-grow-1">
                  <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-decoration-none">
                    <h5 className="mb-1" style={{ color: 'black' }}><strong>A2</strong></h5>
                  </a>
                  <p className="mb-1">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </p>
                </div>
                <LessonControlButtons />
              </li>
              <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center border-start-green">
                <div className="pe-3">
                  <BsGripVertical className="me-2 fs-4" />
                </div>
                <div className="me-2 fs-4" style={{ color: 'green'}}><FaFileAlt /></div>
                <div className="flex-grow-1">
                  <a href="#/Kanbas/Courses/1234/Assignments/124" className="text-decoration-none">
                    <h5 className="mb-1" style={{ color: 'black' }}><strong>A3</strong></h5>
                  </a>
                  <p className="mb-1">
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </p>
                </div>
                <LessonControlButtons />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
