import React from 'react'
import { CountryItem } from './CountryItem'
import "./cards.css"

const Cards = () => {
  return (
    <div className='cards'>
        <h1>Explore these MAGNIFIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items' >
                    <CountryItem  
                    src="images/img-2.jpg"
                    text="Travel through the island of Bali in a Private cruise ship"
                    label="Adventure"
                    path="/reserves"
                    />
                    <CountryItem  
                    src="images/img-9.jpg"
                    text="Check out the hidden waterfall in the Amazon rain forest"
                    label="Tourism"
                    path="/reserves"
                    />
                </ul>

                 <ul className='cards__items' >
                    <CountryItem  
                    src="images/img-3.jpg"
                    text="Go on a tour in the Atlantic Ocean sailing Uncharted waters"
                    label="Cruising"
                    path="/reserves"
                    />
                    <CountryItem  
                    src="images/img-4.jpg"
                    text="Experience football on top of Himalayan Mountains on an island"
                    label="Luxury"
                    path="/reserves"
                    />
                     <CountryItem  
                    src="images/img-8.jpg"
                    text="Ride through the Sahara Desert on a guided camel or an off-road vehicle"
                    label="Expedition"
                    path="/sign-up"
                    />
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Cards 