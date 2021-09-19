import React, { useEffect,useState } from 'react'
import './Container.css'
import Item from './Item'
import axios from 'axios'

export default function Container({search }) {
    const url = "https://api.coingecko.com/api/v3/coins/"
    const [data, setdata] = useState(null)

    useEffect(() => {
        const temp = url + search
        axios.get(temp)
            .then((response) => {
                console.log(response);
                setdata(response)
            })
    }, [search])

    // useEffect(() => {
    //     const temp = url + search
    //     axios.get(temp)
    //         .then((response) => {
    //             console.log(response);
    //             setdata(response)
    //         })

    //     return (
    //         <Item data={data}/> 
    //     )
    // }, [])

    return (
        <div className="container">
            <Item data={data} />
        </div>
    )
}
