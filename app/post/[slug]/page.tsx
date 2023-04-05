'use client'

import Post from "../../components/Post"
import {useQuery} from '@tanstack/react-query'
import axios from "axios"
import AddComment from "@/app/components/AddComment"
import Image from "next/image"


type URL = {
    params: {
        slug: string
    }
}

//Fetch all posts

const fetchDetails = async (slug: string) =>{
    const response = await axios.get(`/api/posts/${slug}`)
    return response.data
}


export default function PostDetail(url: URL) {
    

    const {data, isLoading} = useQuery({
        queryKey: ['detail-post'],
        queryFn: () => fetchDetails(url.params.slug),
    })
    if(isLoading) return 'Loading...'

    console.log(data.Comment)
    return (
        <>
        <div>
        <div className="flex items-center gap-4">
    </div>    
            <Post id={data?.id} name={data?.user.name} avatar={data?.user?.image} postTitle={data?.title} comments={data?.Comment}/>

            <AddComment id={data?.id} />
            {data?.Comment?.map((comment) => (
                
                <div key={comment.id} className="my-6 bg-white p-8 rounded-md">

                    <div>
                    <div className="flex items-center gap-2">
                        
            <Image
          className="rounded-full"
          width={40}
          height={40}   
          src={comment.user?.image}
          alt="avatar"
        />

                <h3 className="font-bold text-gray-700 px-2">{comment?.user?.name}</h3>
                <h3 className="font-bold text-gray-700 px-5"> ( {comment.createdAt} ) </h3>
            </div>
            <h3 className="py-4 text-gray-700 px-5">{comment.message}</h3>

                    </div>
                </div>
            ))}
        </div>

    
        </>
    )
}

    



