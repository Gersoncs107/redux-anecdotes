import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    const value = event.target.value
    // We dispatch an action to set the filter in the state
    // The action is created by calling the action creator setFilter
    // which is imported from the filterReducer
    // We use the useDispatch hook to get the dispatch function
    // and then we call it with the action created by setFilter
    dispatch(setFilter(value))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter