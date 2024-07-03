import React from 'react';
import "../scss/_tabPanelItems.scss"
import PropTypes from "prop-types";

const TabPanelItems = ({title, text, things}) => {
    return (
        <div className="TabPanel__items">
            <div className="item__foundation">
                <h2 className="item__foundation--title">{title}”</h2>
                <p className="item__foundation--text">{text}</p>
            </div>
            <p className="item__things">{things}</p>
        </div>
    );
};

TabPanelItems.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    things: PropTypes.string.isRequired,
};
export default TabPanelItems;