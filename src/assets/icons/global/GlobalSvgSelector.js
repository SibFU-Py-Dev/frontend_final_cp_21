import React from 'react';


export const GlobalSvgSelector = ({id}) => {
    switch (id) {
        case 'arrow_right':
            return (
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 14L8 7.5L0.999999 1" stroke="#EB5815" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        case 'plus':
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7.99999C2 7.44771 2.44772 6.99999 3 6.99999H13C13.5523 6.99999 14 7.44771 14 7.99999V7.99999C14 8.55228 13.5523 8.99999 13 8.99999H3C2.44772 8.99999 2 8.55228 2 7.99999V7.99999Z" fill="#009FDA"/>
                    <path d="M7.99988 14C7.44759 14 6.99988 13.5523 6.99988 13V3C6.99988 2.44772 7.44759 2 7.99988 2V2C8.55216 2 8.99988 2.44772 8.99988 3V13C8.99988 13.5523 8.55216 14 7.99988 14V14Z" fill="#009FDA"/>
                </svg>
            );
        default:
            return null;
    }
};
