import { useDispatch, useSelector } from "react-redux";
import { IInitialState, IOnEdit } from "../../models/models";
import { ADD_TASK, CANCEL_EDIT_TASK, MODIFY_TASK, SET_INITIAL_FORM, SET_USER_VALUE } from "../../redux/actions";

export const InputForm = () => {
  const dispatch = useDispatch();
  const { userValue, tasks } = useSelector(
    (state: {todo: IInitialState}) => state.todo
  )
  const { onEdit, onEditId } = useSelector(
    (state: {inputs: IOnEdit}) => state.inputs
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    const action = {
      type: SET_USER_VALUE,
      payload: {
        ...userValue,
        id: String(Math.random() * 1000),
        [name]: value,
      }
    }
    dispatch(action);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userValue.task || !userValue.sum) return;
    if (tasks.some((t) => t.task === userValue.task)) return;
    const action = {
      type: ADD_TASK,
    }
    dispatch(action);
  }

  const handleCancel = () => {
    const action = {
      type: CANCEL_EDIT_TASK
    }
    const action2 = {
      type: SET_INITIAL_FORM,
    }
    dispatch(action);
    dispatch(action2);
  }

  const handleModify = () => {
    const itemIndex = tasks.findIndex((t) => t.id === onEditId);
    const modified = {
      id: onEditId,
      task: userValue.task,
      sum: userValue.sum,
    }
    const copy = [...tasks];
    copy.splice(itemIndex, 1, modified);
    const action = {
      type: MODIFY_TASK,
      payload: copy,
    }
    const action2 = {
      type: SET_INITIAL_FORM,
    }
    dispatch(action);
    dispatch(action2);
  }

  return (
    <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleInputChange} className="input-name" type="text" name="task" value={userValue.task} required />
            <input onChange={handleInputChange} className="input-sum" type="number" name="sum" value={userValue.sum} required />
            {!onEdit && <button className="save-btn" type="submit">Save</button>}
            {onEdit && (
              <>
                <button onClick={handleModify} className="modification-btn" type="button">Save</button>
                <button onClick={handleCancel} className="cancel-btn" type="button">Cancel</button>
              </>
              )}
        </form>
    </div>
  )
}
