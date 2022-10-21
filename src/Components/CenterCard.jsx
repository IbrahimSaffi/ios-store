import React from 'react'

export default function CenterCard() {
    return (
        <div className="Outerview">
            <div className="title-section">
                <p className="sub-heading">
                    Limited time event
                </p>
                <p className="main-heading">
                    Don't miss these gaming events
                </p>
            </div>
            <div className="icon-section">
                {new Array(3).fill(0).map((row,i) =>
                    <div key={`row${i}`} className='icon-holder'>
                     {new Array(15).fill(0).map((icon,i)=>
                        <img key={`icon${i}`} className='icon' src={`https://loremflickr.com/640/480/nature,mountain,river,tree?random=${Math.floor(Math.random() * 100)}`} alt="" srcSet="" />
                     )}
                    </div>
                    )}
            </div>
        </div>
    )
}
