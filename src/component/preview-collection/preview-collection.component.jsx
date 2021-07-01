import React from 'react'

import './preview-component.styles.scss';
import CollectionItem  from '../collection-item/collection-item.component'
import Box from '@material-ui/core/Box'

export const PreviewComponent = ({title,items}) => {
    return (
        <Box xs={12} className="collection-preview" px={{ xs: 3, sm: 10 }} py={{ xs:5, sm:10}}>
            <h1 className="title">{title.toUpperCase() }</h1>
            <div class="preview">
                {items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </Box>
    )
}

