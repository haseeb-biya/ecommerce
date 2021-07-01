import React from 'react';
import Card from '../card/card.component';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import './cardList.styles.scss';

const CardList =({sections}) => {
        return (
            <div className="homepage">
                <div className="directory-menu">
                    {sections.map(({id, ...moreSectionProps}) => (
                        <Card key={id} {...moreSectionProps}/>
                    )) }
                </div>
            </div>
        )
}

const mapStateToProps = createStructuredSelector({ 
    sections:selectDirectorySections
}) 

export default connect(mapStateToProps)(CardList);