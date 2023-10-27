import PostCard from './post-card'
import { type Post } from '../types/posts'

const PostsList = ({ posts }: { posts: Post[] | null }) => {
  return (
    <>
      {
        posts?.map(post => {
          const { id, content } = post
          const { user_name: userName, name, avatar_url: avatarUrl } = post.users
          return (
          <PostCard
            key={id}
            userName={userName}
            userFullName={name}
            avatarUrl={avatarUrl}
            content={content}
          />
          )
        })
      }
    </>
  )
}

export default PostsList
