import { NextApiRequest, NextApiResponse } from 'next'

let comments = {}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query

  if (req.method === 'POST') {
    const { comment } = req.body
    if (!comments[slug]) {
      comments[slug] = []
    }
    comments[slug].push(comment)
    res.status(200).json({ message: 'Comment added successfully' })
  } else if (req.method === 'GET') {
    res.status(200).json({ comments: comments[slug] || [] })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
