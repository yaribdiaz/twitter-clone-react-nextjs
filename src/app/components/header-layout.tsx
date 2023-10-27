import { Avatar } from '@nextui-org/react'
import AuthButtonServer from './auth-button-server'

const HeaderLayout = ({ avatarUrl, fullName }: { avatarUrl: string, fullName: string }) => {
  return (
    <header className='flex items-center justify-between p-5 w-full h-16 border-b border-gray-800 bg-black/95 sticky top-0 z-50'>
      <div className='flex items-center gap-3'>
        <Avatar radius='full' size='sm' src={avatarUrl} className='w-10 h-10'/>
        <p className='font-bold '>{ fullName }</p>
      </div>
      <AuthButtonServer/>
    </header>
  )
}

export default HeaderLayout
