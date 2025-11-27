export interface Post {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
  likes: number
  tags: string[]
}

export interface CreatePostData {
  title: string
  content: string
  author: string
  tags: string[]
}

export interface UpdatePostData {
  title: string
  content: string
  tags: string[]
}