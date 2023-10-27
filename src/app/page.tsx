import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import PostsList from './components/posts-list'
import { type Database } from './types/database'
import ComposePost from './components/compose-post'
import HeaderLayout from './components/header-layout'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: session } = await supabase.auth.getSession()

  if (session.session === null) redirect('/login')

  const { data: posts } = await supabase
    .from('posts')
    .select('*, users(name, avatar_url, user_name)')
    .order('created_at', { ascending: false })
  console.log(posts)
  return (
      <main className="min-h-screen flex flex-col items-center justify-between ">
        <HeaderLayout
          avatarUrl = { session?.session?.user?.user_metadata?.avatar_url }
          fullName = { session?.session?.user?.user_metadata?.full_name }
        />
        <section className='min-h-screen w-3/5 lg:w-2/5 mx-auto border-x border-white/70 '>
          <ComposePost
            avatarUrl={session?.session?.user?.user_metadata?.avatar_url}
          />
          {
            posts?.length === 0 ?
                (<p className='text-white mt-14 text-center font-bold'> Aún no hay posts</p>)
              :
                (<PostsList posts={posts}/>)
          }
        </section>
      </main>
  )
}
