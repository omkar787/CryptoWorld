import React from 'react'
import './Item.css'

export default function Item({data}) {
    return (
        <div className="item">
            <img className="image" src={(data)?data['data'].image.small:null} alt={""}/>
            <h1>{(data)?data['data'].name:null}</h1>

        </div>
    )
}
