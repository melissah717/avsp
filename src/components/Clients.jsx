
import { Typography } from '@mui/material'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import clientData from '../components/clientData'


export default function Clients() {
    return (
        <>
            <Typography variant="h3" textAlign="center" sx={{paddingTop: '1rem'}}>
                AVSP has been proud to work with some of these amazing companies in the past:
            </Typography>
            <ImageList variant="masonry" cols={4} gap={20}>
                {clientData.map((item) => (
                    <ImageListItem key={item.img} style={{paddingTop: '30px'}}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy" 
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}