import React, { useRef } from 'react';
import reactLogo from '../assets/react.svg';
import CommentsSection from './Comments';
import AddComment from './AddComment';

interface CommentsSectionMethods {
    addComment: (i:string) => void;
  }

const ParentComponent: React.FC = () => {
  const commentsSectionRef = useRef<CommentsSectionMethods | null>(null);

  console.log("render")
  const handleAddComment = (i:string) => {
    if (commentsSectionRef.current) {
      commentsSectionRef.current.addComment(i);
    }
  };

  return (
    <div>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <CommentsSection ref={commentsSectionRef} />
      <AddComment handleAddComment={handleAddComment} />
    </div>
  );
};

export default ParentComponent;
