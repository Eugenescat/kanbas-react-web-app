import React from 'react';
import { useParams } from 'react-router-dom';
import { FaSearch, FaFileImport, FaFileExport, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as db from '../../Database';

// Define TypeScript interfaces
interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
}

interface Assignment {
  _id: string;
  title: string;
  course: string;
  points?: string;
}

interface Grade {
  _id: string;
  student: string;
  assignment: string;
  grade: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export default function Grades() {
  const { cid } = useParams<{ cid: string }>(); // Get the course ID from the URL
  const enrollments: Enrollment[] = db.enrollments.filter(enrollment => enrollment.course === cid); // Get enrollments for the course
  const assignments: Assignment[] = db.assignments.filter(assignment => assignment.course === cid); // Get assignments for the course
  const users: User[] = db.users; // Get all users
  const grades: Grade[] = db.grades; // Get all grades

  // Get enrolled students
  const enrolledStudents: User[] = enrollments
    .map(enrollment => users.find(user => user._id === enrollment.user))
    .filter((user): user is User => user !== undefined); // Type guard to filter out undefined values

  // Helper function to get the grade for a student and assignment
  const getGrade = (studentId: string, assignmentId: string): string => {
    const grade = grades.find(grade => grade.student === studentId && grade.assignment === assignmentId);
    return grade ? grade.grade : 'N/A';
  };

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
              {assignments.map(assignment => (
                <th key={assignment._id}>{assignment.title}<br />Out of {assignment.points || 100}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map(student => (
              <tr key={student._id}>
                <td>{student.firstName} {student.lastName}</td>
                {assignments.map(assignment => (
                  <td key={assignment._id}>{getGrade(student._id, assignment._id)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
