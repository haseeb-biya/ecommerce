import React from 'react';
import { Card } from '../card/card.component';
import './cardList.styles.scss';

class CardList extends React.Component {
    constructor() {
        super();
        this.state= {
            sections: [
                {
                    'title': 'Hats',
                    'id': '1',
                    'imageUrl':'https://i.ibb.co/cvpntL1/hats.png'
                },
                {
                    'title': 'Jackets',
                    'id': '2',
                    'imageUrl':'https://i.ibb.co/px2tCc3/jackets.png'
                },
                {
                    'title': 'sneakers',
                    'id': '3',
                    'imageUrl':'https://i.ibb.co/0jqHpnp/sneakers.png'
                },
                {
                    'title': 'womens',
                    'id': '4',
                    'imageUrl': 'https://i.ibb.co/GCCdy8t/womens.png',
                    'size':'large'
                },
                {
                    'title': 'mens',
                    'id': '5',
                    'imageUrl': 'https://i.ibb.co/R70vBrQ/mens.png',
                    'size':'large'
               },
           ] 
        }
    } 
    render() {
        return (
            <div className="homepage">
                <div className="directory-menu">
                    {this.state.sections.map(({ title, imageUrl,id,size}) => (
                        <Card  key={id} title={title} imageUrl={imageUrl} size={size}/>
                    )) }
                </div>
            </div>
        )
    }
}
export default CardList;