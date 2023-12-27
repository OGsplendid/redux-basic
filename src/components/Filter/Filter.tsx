import { useDispatch } from "react-redux"
// import { IFilter } from "../../models/models";
import { SET_CURRENT_FILTER } from "../../redux/actions";

export const Filter = () => {
    const dispatch = useDispatch();
    // const { currentFilter } = useSelector(
    //     (state: {filter: IFilter}) => state.filter
    // )

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const valueLowercased = value.toLocaleLowerCase();
        const action = {
            type: SET_CURRENT_FILTER,
            payload: valueLowercased,
        }
        console.log(valueLowercased)
        dispatch(action);
    }

  return (
    <div className="filter-wrapper">
        <h3>Filter</h3>
        <input onInput={handleFilter} className="filter" name="filter" type="text" placeholder="Start to type..." />
    </div>
  )
}
