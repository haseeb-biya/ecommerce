import React from 'react';
import { Card } from '../card/card.component';
import './cardList.styles.scss';

export const CardList = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <Card />
                <Card />
                <Card />
                 <Card/>
            </div>
        </div>
    )
}