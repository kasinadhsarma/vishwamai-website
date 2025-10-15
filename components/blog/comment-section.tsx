import { useState } from "react"

export default function CommentSection() {
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      setComments([...comments, comment])
      setComment("")
    }
  }

  return (
    <div className="comment-section">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-2 border rounded"
          placeholder="Write a comment..."
        />
        <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment mb-2 p-2 border rounded">
            {comment}
          </div>
        ))}
      </div>
    </div>
  )
}
