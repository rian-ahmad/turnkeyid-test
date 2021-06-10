import React from 'react';
import Flag from 'react-world-flags';
import loader from './Loader.min.svg'

const Persons = ({ persons, loading }) => {
    if (loading) {
        return <img className="img-fluid mx-auto d-block" src={loader} alt="loading...." />
    }

    return (
        <div className="row">
            {persons.map((person, index) => (
                <div key={index} className="col-lg-6">
                    <div className="card mb-2">
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="card-img-top" src={person.picture.large} alt={person.name.last} />
                            </div>
                            <div className="col-sm-8 card-body">
                                <div className="card-title d-flex justify-content-between">
                                    <h3>{person.name.first + " " + person.name.last}</h3>
                                    <Flag code={person.nat} className="img-thumbnail" style={{ width: "15%" }} />
                                </div>
                                <div className="card-text">
                                    <p><i className="fas fa-phone-alt"></i> {person.phone}</p>
                                    <p><i className="fas fa-envelope"></i> {person.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}

export default Persons;