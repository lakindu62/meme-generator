import React from "react"

export default function Controls(props) {














    return (
        <div className="p-10 flex items-center flex-col gap-10 relative">
            <div className="flex gap-10">
                <input className="p-2 rounded-xl bg-slate-900 border-[#96569f] border-2 "
                    type="text"
                    onChange={props.handleChange}
                    name="topText"
                    value={props.value.input01}


                />
                <input className="p-2 rounded-xl bg-slate-900 border-[#96569f] border-2 "
                    type="text"
                    onChange={props.handleChange}
                    name="bottomText"
                    value={props.value.input02}


                />
            </div>
            <div className="duration-700">
                <button
                    className="rounded-xl border-2 border-[#96569f] w-[30vw] p-1 bg-gradient-to-r from-purple-900 to bg-purple-500 duration-700 hover:w-[32vw]"
                    onClick={props.handleClick}
                >Get a New Meme Image
                </button>
            </div>
        </div>
    )
}