import { useDispatch, useSelector } from "react-redux"
import { Task } from "../Task/Task"
import { IFilter, IInitialState, TTask } from "../../models/models";
import { DELETE_TASK, MEMORIZE_ONEDIT_ID, SET_ONEDIT_TASK, SET_ON_EDIT_FORM, } from "../../redux/actions";
import { useState } from "react";

export const DeskFC = () => {
  const dispatch = useDispatch();
  const { userValue, tasks } = useSelector(
    (state: {todo: IInitialState}) => state.todo
  )
  const { currentFilter } = useSelector(
    (state: {filter: IFilter}) => state.filter
  )
  const initialState = tasks.filter((t) => t.toLowerCase().includes(currentFilter))
  const { currentTasks, setCurrentTasks } = useState<TTask>(initialState);

  const handleEdit = (id: string) => {
    const item = tasks.find((item) => item.id === id);
    const action = {
      type: SET_ONEDIT_TASK,
      payload: {
        ...userValue,
        id: item?.id,
        task: item?.task,
        sum: item?.sum,
      },
    }
    const action2 = {
      type: SET_ON_EDIT_FORM,
    }
    const action3 = {
      type: MEMORIZE_ONEDIT_ID,
      payload: id,
    }
    dispatch(action);
    dispatch(action2);
    dispatch(action3);
  }

  const handleDelete = (id: string) => {
    const action = {
      type: DELETE_TASK,
      payload: tasks.filter((t) => t.id !== id),
    }
    dispatch(action);
  }

  return (
    <ul className="deskfc-wrapper">
      <h3>Functional Component</h3>
      {currentTasks.map((t) => (
        <Task key={t.id} item={t} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </ul>
  )
}
