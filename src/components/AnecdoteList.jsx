import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification, clearNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === 'ALL' || filter === '') {
      return anecdotes
    }
    return anecdotes.filter(a => 
      a.content.toLowerCase().includes(filter.toLowerCase())
    )
  })
  
  const dispatch = useDispatch()
  
  const vote = (anecdote) => {

    dispatch(voteAnecdote(anecdote.id)) 
    dispatch(setNotification(`you voted '${anecdote.content}'`))
    
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }

  return (
    <div>
        {anecdotes
        .slice()                            
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              {/* CORREÇÃO: Passe o objeto anedota para a função auxiliar */}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList