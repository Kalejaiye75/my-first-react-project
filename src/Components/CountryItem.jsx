import React from 'react'
import { Link } from 'react-router-dom'
import "./cards.css"

export const CountryItem = ({path, label, src, text}) => {
  return (
    <div>
        <li className='cards__item'>
            <Link className='cards__item__link' to={path}>
                <figure className='cards__item__pic-wrap' data-container={label}>
                    <img src={src} alt='Travel image' className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{text}</h5>
                </div>
            </Link>
        </li>
    </div>
  )
}
