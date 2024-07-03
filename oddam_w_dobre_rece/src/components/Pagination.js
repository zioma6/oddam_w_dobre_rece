
import React from 'react';
import PropTypes from 'prop-types';
import "../scss/_pagination.scss"


const Pagination = ({ currentPage, pageCount, onPageChange }) => (
    <div className="pagination">
        {[...Array(pageCount)].map((_, index) => (
            <button
                key={index}
                onClick={() => onPageChange(index)}
                className={currentPage === index ? 'active' : ''}
            >
                {index + 1}
            </button>
        ))}
    </div>
);

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    pageCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
