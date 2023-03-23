'use client'

import Post from "../../components/Post"
import {useQuery} from '@tanstack/react-query'
import axios from "axios"
import AddComments from "@/app/components/AddComments"
import ToggleComments from "../../dashboard/ToggleComments"
import { useState } from "react"




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
    
    const [toggle, setToggle] = useState(false)

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
<button onClick={(e) => {setToggle(true)}} className="text-sm font-bold text-red-500">Comments</button>
    </div>    
            <Post id={data?.id} name={data?.user.name} avatar={data?.user?.image} postTitle={data?.title} comments={data?.Comment}/>

            <AddComments id={data?.id} />
        </div>

    
    {toggle && <ToggleComments Comment={data?.Comment} setToggle={setToggle}/>}
        </>
    )
}

    



