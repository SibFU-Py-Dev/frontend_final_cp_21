import React from 'react';


export const GlobalSvgSelectorKov = ({id}) => {
    switch (id) {
        case 'test':
            return (
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.67982 9.17982C3.90712 8.40712 4.81883 7.14973 5.79343 7.64397L7.45466 8.4864C7.72773 8.62488 8.05045 8.62488 8.32351 8.4864L9.98474 7.64397C10.9593 7.14974 11.871 8.40712 11.0984 9.17982L8.56827 11.7099C8.19317 12.085 7.585 12.085 7.2099 11.7099L4.67982 9.17982Z" fill="white"/>
                </svg>
            );

        default:
            return null;
    }
};
