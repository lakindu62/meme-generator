import React from "react"



export default function MemeImage({ value , image }) {
    const { input01, input02 } = value
    console.log(image)


    return (
        <div className="flex justify-center relative">
            <span className="absolute top-7 font-black text-[40px] uppercase text font-outline-2">{input01}</span>
            <img className="h-[50vh]" src={image} />
            <span className="absolute bottom-8 font-black text-[40px] uppercase font-outline-2 ">{input02}</span>
        </div>
    )
}