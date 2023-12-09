import React from 'react'
import Card from './Card'


function Foreground() {

    // const ref = useRef(null);
    const data = [
        {
            desc: "This is the contenet of File 1 containing nothing and passing data through item.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "This is the contenet of File 1 containing nothing and passing data through item.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
        },
        {
            desc: "This is the contenet of File 1 containing nothing and passing data through item.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
        }, 
    ];
    return (
        <div className='fixed z-[3] w-full h-full top-0 left-0 flex gap-5 flex-wrap p-5'>
            {data.map((item, index)=>(
                <Card data={item}/>
            ))}
        </div>

    )
}

export default Foreground