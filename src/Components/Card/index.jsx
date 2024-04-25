import './styles.css'

import favouriteIcon from './ic-favourite.svg'
import { useState } from 'react'

export function Card({ name, description, price, discount, picture, weight, stock }) {
    const discountPrice = price - (price * discount) / 100
    return (
        <div className='card'>
            {!!discount && (
                <div className='card__stiker card__stiker_type_top-left '>
                    <span className='card__discount'> - {discount} % </span>
                </div>
            )}
            <div className='card__stiker card__stiker_type_top-right'>
                <img className='card__favourite-icon' src={favouriteIcon} alt='Добавить в избранное' />
            </div>
            <a className='card__link' href='#!'>
                <img className='card__image' src={picture} alt={description} />
                <div className='card__info'>
                    {!!discount && <span className='card__old-price'>{price} $</span>}
                    <span className={!!discount ? 'card__price card__price_type_discount' : 'card__price'}>
                        {discountPrice} $
                    </span>

                    {/* <span className='card__weight'>{weight}</span> */}
                    {/* <span className='card__count'>{stock}</span> */}
                    <p className='card__name'>{name}</p>
                </div>
            </a>
            <button className='card__cart btn btn_type_primary'> В корзину</button>
        </div>
    )
}
