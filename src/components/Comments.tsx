import  { forwardRef, useState, useImperativeHandle } from 'react';

interface CommentsSectionProps {}

interface CommentsSectionMethods {
  addComment: (i:string) => void;
}

const CommentsSection = forwardRef<CommentsSectionMethods, CommentsSectionProps>(( props,ref) => {
console.log(props)
  const [comments, setComments] = useState<string[]>([]);
  const [_, setNewComment] = useState<string>('');

  const addNewComment = (input:string) => {
      setComments([...comments, input]);
      setNewComment('');
  };
  useImperativeHandle(ref, () => ({
    addComment: addNewComment,
  }));

  return (
      <div>
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}
      </div>
  );
});

export default CommentsSection;
