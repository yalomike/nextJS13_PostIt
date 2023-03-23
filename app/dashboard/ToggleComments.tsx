'use client'



export default function ToggleComments({ data, id, Comment, viewComment, setToggle}) {
    console.log(data)

    return (
        <div onClick={(e) => {setToggle(false)}} className="fixed bg-black/50 w-full h-full z-20 left-0 top-0">
            <div className="absolute bg-white top-1/2 left-1/3 transform -translate-x1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
                <h2 className="text-xl text-center">
                    {Comment?.id}
                    
                </h2>
                <button onClick={viewComment} className="bg-red-600 text-sm text-white py-2 px-4">Delete Post</button>
            </div>
        </div>
    )
}

