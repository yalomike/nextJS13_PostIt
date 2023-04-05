'use client'


import Image from "next/image"
import Link from "next/link"

export default function Post({name, postTitle, avatar, id, comments, data}) {

    return (
        <div className="bg-white py-8 p-8 rounded-lg my-8">
            <div className="flex items-center gap-2">
            <Image
          className="rounded-full"
          width={40}
          height={40}   
          src={avatar}
          alt="avatar"
        />

                <h3 className="font-bold text-gray-700">{name}</h3>
            </div>
            <div className="my-8">
                <p className="break-all">{postTitle}</p>
            </div>
            <div className="flex gap-4 cursor-pointer items-center">
                <Link href={{pathname:`/post/${id}`}}>
     
                    <button className="text-sm font-bold text-red-500">{comments?.length} Comments</button>

                </Link>


            </div>  
        </div>
    )
}

