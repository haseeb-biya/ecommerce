const INITIAL_STATE = {
    sections:[
            {
                'title': 'Hats',
                'id': '1',
                'imageUrl': 'https://i.ibb.co/cvpntL1/hats.png',
                'linkUrl':'shop/hats'
            },
            {
                'title': 'Jackets',
                'id': '2',
                'imageUrl': 'https://i.ibb.co/px2tCc3/jackets.png',
                'linkUrl':'shop/jackets'
            },
            {
                'title': 'sneakers',
                'id': '3',
                'imageUrl': 'https://i.ibb.co/0jqHpnp/sneakers.png',
                'linkUrl':'shop/sneakers'
            },
            {
                'title': 'womens',
                'id': '4',
                'imageUrl': 'https://i.ibb.co/GCCdy8t/womens.png',
                'size': 'large',
                'linkUrl':'shop/womens'
            },
            {
                'title': 'mens',
                'id': '5',
                'imageUrl': 'https://i.ibb.co/R70vBrQ/mens.png',
                'size': 'large',
                'linkUrl':'shop/mens'
            },
        ] 
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.payload) {
        default:
            return state;
    }
}
export default directoryReducer;