import React from 'react';
import './about_us.styles.scss'
import  Container  from '@material-ui/core/Container'
import  Box  from '@material-ui/core/Box'

export const AboutPage = () => {
    return (
        <Container max-width="sm">
            <Box  spacing={5} color="text.primary" className="about_box">
                <h2 className="about_title">About us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                     like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Box>
        </Container>
    )
}