import React from 'react';

const PicturePersons = ({ picPerson, altPic }) => {
    return (
        <img className="card-img-top" src={picPerson} alt={altPic} />
    );
}

export default PicturePersons;