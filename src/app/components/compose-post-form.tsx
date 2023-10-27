'use client'

import { useEffect, useRef } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const ComposePostForm = () => {
  const { pending } = useFormStatus()
  const alreadySent = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current === null) return
    if (pending && !alreadySent.current) {
      alreadySent.current = true
      textAreaRef.current.value = ''
      return
    }

    alreadySent.current = pending
  }, [pending])

  return (
    <>
      <textarea
        ref={textAreaRef}
        name="content"
        id=""
        cols={20}
        rows={5}
        className='w-full p-2 text-md outline-none bg-black placeholder-gray-500'
        placeholder='¿Qué está pasando?'
      >
        </textarea>
      <button type='submit' className='bg-blue-600 text-xs font-bold rounded-full px-5 py-2 self-end'>
      { pending ? 'Publicando' : 'Publicar'}
      </button>
    </>
  )
}

export default ComposePostForm
