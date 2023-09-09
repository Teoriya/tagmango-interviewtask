import {useState} from 'react'

interface CommentsSectionProps {
    handleAddComment: (i:string) => void;
}

const AddComment = (props: CommentsSectionProps) => {
    const [comment, setComment] = useState("")
  return (
    <div>
        <h2>Add a Comment</h2>
      <input
        type="text"
        placeholder="Type your comment here"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={()=>props.handleAddComment(comment)}>Add Comment</button>
    </div>
  )
}

export default AddComment