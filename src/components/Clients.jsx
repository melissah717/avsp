
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import clientData from '../components/clientData'


export default function Clients() {
    return (
        <>
            <h3>
                We have been proud to work with some of these amazing companies in the past:
            </h3>
            <ImageList variant="masonry" cols={3} gap={50}>
                {clientData.map((item) => (
                    <ImageListItem key={item.img} style={{ padding: '2rem', maxWidth: "100%"}}>
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