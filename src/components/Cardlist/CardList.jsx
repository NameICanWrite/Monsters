import React from 'react'
import Card from '../Card/Card'

import classes from './CardList.module.sass'

function CardList({ monsters }) {
    return (
        <h1 className={`${classes.hello} ${classes.card_list}`}>
            {
                monsters.map((monster, index) =>
                    <Card monster={monster} key={`monster:${index}`} />
                )
            }
        </h1>
    )
}

export default CardList
