import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import AuthButtonClient from './auth-button-client'

console.log('hola')

const AuthButtonServer = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  return <AuthButtonClient session = { session }/>
}

export default AuthButtonServer
