import React, { useState } from 'react'

const Sync = () => {
    const [state, setstate] = useState({
        s_no: "",
        profile: "",
        Name: "",
        age: "",
        gender: "",
        phone_No: "",
    });

    const [details, setdetails] = useState([]);
    const [details1, setdetails1] = useState([null]);

    const register = [
        {
            label: "serial_no", name: "s_no", type: "text"
        },
        {
            label: "serial_no", name: "profile", type: "text"
        },
        {
            label: "serial_no", name: "Name", type: "text"
        },
        {
            label: "serial_no", name: "age", type: "number"
        },
        {
            label: "serial_no", name: "gender", type: "text"
        },
        {
            label: "serial_no", name: "phone_No", type: "number"
        },
    ]

    return (
        <div className='sync_await'>

        </div>
    )
}

export default Sync