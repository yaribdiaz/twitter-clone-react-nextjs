'use client'

import React from 'react'
import Link from 'next/link'
import { IconMessageCircle, IconRepeat, IconHeart } from '@tabler/icons-react'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from '@nextui-org/react'

interface props {
  userFullName: string
  userName: string
  avatarUrl: string
  content: string
}

const PostCard = ({ userName, avatarUrl, userFullName, content }: { userFullName: string, userName: string, avatarUrl: string, content: string }) => {
  const [isFollowed, setIsFollowed] = React.useState(false)

  return (
    <Card className="w-full bg-transparent shadow-none hover:bg-slate-800/40 border-b border-gray-700 rounded-none cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-x-3" >
          <Link href={`/${userName}`}>
            <Avatar isBordered radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{ userFullName }</h4>
            <h5 className="text-small tracking-tight text-default-400">@{ userName }</h5>
          </div>
        </div>

      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-900">
        <p>
          { content }
        </p>
      </CardBody>
      <CardFooter className=" ">
        <div className='flex flex-row items-center flex-1 gap-5'>
          <div className='flex items-center gap-1'>
            <IconMessageCircle className='h-5 w-5'/>
            <label className='text-xs'> 1200 </label>
          </div>
          <div className='flex items-center gap-1'>
            <IconRepeat className='h-5 w-5'/>
            <label className='text-xs'> 142 </label>
          </div>
          <div className='flex items-center gap-1'>
            <IconHeart className='h-5 w-5'/>
            <label className='text-xs'> 140k </label>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default PostCard
