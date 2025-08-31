import React from 'react';
import './pagination.scss';

const Pagination = () => {
    return (
        <div className='pagination_wrapper'>
           <div className='pagination'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>...</div>
            <div>9</div>
            </div>
        </div>
    );
};

export default Pagination;