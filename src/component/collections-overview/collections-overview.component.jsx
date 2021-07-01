import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss';
import {PreviewComponent} from '../../component/preview-collection/preview-collection.component'
import { selectCollectionForPreview } from '../../redux/shop/shop.selectors' 

const CollectionOverview= ({ collections }) => (
    <div className="collection-preview">
        {collections
            .map(({id,...moreCollection}) => (
            <PreviewComponent id={id} {...moreCollection}/> 
        ))}   
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);