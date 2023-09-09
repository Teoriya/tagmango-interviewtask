import {useState} from 'react'

interface CommentsSectionProps {
    handleAddComment: (i:string) => void;
}

const MENTIONABLE_NAMES = ["Sidhant", "tagmango" , "Aayush", "Krishna"]

const AddComment = (props: CommentsSectionProps) => {
    const [comment, setComment] = useState("");
    const spaceDelimitedComment = comment.split(" ");
    const lastWord = spaceDelimitedComment[spaceDelimitedComment.length-1];
    const [displayMentionList, setDisplayMentionList] = useState(false);

    let commentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.split(" ")[e.target.value.split(" ").length-1].startsWith("@")){
          setDisplayMentionList(true);
        }
        else
          setDisplayMentionList(false);

        setComment(e.target.value);
    }
  return (
    <div>
        <h2>Add a Comment</h2>
      <input
        type="text"
        placeholder="Type your comment here"
        value={comment}
        onChange={commentChange}
      /><ul>
        {displayMentionList && 
        MENTIONABLE_NAMES.map(name => {
          if(name.toLowerCase().startsWith(lastWord.substring(1).toLowerCase()))
          return <li key={name} onClick={() => setComment(`${comment.split(lastWord)[0]}@${name}`)}>{name}</li>
        })}
      </ul>
      <button onClick={()=>{props.handleAddComment(comment);setComment("");setDisplayMentionList(false)}}>Add Comment</button>
    </div>
  )
}

export default AddComment