import { Avatar } from '@nextui-org/react'
import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import ComposePostForm from './compose-post-form'

const ComposePost = ({ avatarUrl }: { avatarUrl: string }) => {
  const addPost = async (formData: FormData) => {
    'use server'
    const content = formData.get('content')
    console.log(formData)
    if (content === null) return
    const supabase = createServerActionClient({ cookies })
    // ? Revisar si el usuario está autenticado
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('posts').insert({ content, user_id: user.id })
    formData.set('content', 'Chris')
    revalidatePath('/')
  }

  return (
    <form action={addPost} className='flex flex-1 flex-row space-x-4 gap-y-4 p-3 border-b border-gray-400'>
      <Avatar radius='full' size='md' src={avatarUrl} className='w-12 h-12'/>
      <div className='flex flex-1 flex-col gap-y-4'>
       <ComposePostForm/>
      </div>
    </form>
  )
}

export default ComposePost
