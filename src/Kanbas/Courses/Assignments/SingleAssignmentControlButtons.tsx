import React, { useState } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import GreenCheckmark from './GreenCheckmark';
import { FaTrash } from 'react-icons/fa';

export default function SingleAssignmentControlButtons({ assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    deleteAssignment(assignmentId);
    setShowConfirm(false);
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={handleDeleteClick} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      {showConfirm && (
        <div className="confirm-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button className="btn btn-danger me-2" onClick={handleConfirm}>Yes</button>
          <button className="btn btn-secondary" onClick={handleCancel}>No</button>
        </div>
      )}
    </div>
  );
}
