import { TTask } from "../../models/models"

interface IItemProps {
  item: TTask;
  onEdit: (id: string) => void,
  onDelete: (id: string) => void,
}

export const Task = ({ item, onEdit, onDelete }: IItemProps) => {
  const { id, task, sum } = item;

  return (
    <li className="task">
        <h4 className="task-name">{task}</h4>
        <p className="task-sum">{sum}</p>
        <button onClick={() => onEdit(id)} className="btn edit-btn">&#9998;</button>
        <button onClick={() => onDelete(id)} className="btn delete-btn">&#10006;</button>
    </li>
  )
}
