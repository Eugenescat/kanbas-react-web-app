import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <BsPlus className="fs-4" />
    </div>
  );
}
