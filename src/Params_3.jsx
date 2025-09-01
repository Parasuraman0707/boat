import React from 'react'
import { useParams } from 'react-router-dom'
import { smallhead } from './smallimage';

const Params_3 = () => {
    const p3 = useParams()
    console.log(p3);

    return (
        <>
            {smallhead.map((value3) => {
                if (value3.id == p3.id) {
                    return <img src={value3.mixed} />
                }
            })}
        </>
    )
}

export default Params_3