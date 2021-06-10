import React, { Suspense } from 'react';

import loader from './../Loader.min.svg';

const PicturePerson = React.lazy(() => import('./picturePersons'));
const Flag = React.lazy(() => import('react-world-flags'));

const Persons = ({ persons, loading }) => {
    if (loading) {
        return <img className="img-fluid mx-auto mt-5 d-block" src={loader} alt="loading...." />
    }

    return (
        <div className="row">
            {persons.map((person, index) => (
                <div key={index} className="col-lg-6">
                    <div className="card m-3 p-1">
                        <div className="row">
                            <div className="col-sm-4">
                                <Suspense fallback={<img className="img-fluid mx-auto d-block" src={loader} alt="loading...." />}>
                                    <PicturePerson picPerson={person.picture.large} altPic={person.name.last} />
                                </Suspense>
                            </div>
                            <div className="col-sm-8 card-body pt-2 pb-0">
                                <div className="card-title d-flex justify-content-between">
                                    <h3>{person.name.first + " " + person.name.last}</h3>
                                    <Suspense fallback={<img className="img-thumbnail d-block" src={loader} style={{ width: "15%" }} alt="loading...." />}>
                                        <Flag code={person.nat} className="img-thumbnail" style={{ width: "15%" }} />
                                    </Suspense>
                                </div>
                                <div className="card-text">
                                    <p><span className="material-icons text-primary border">phone </span> {person.phone}</p>
                                    <p><span className="material-icons text-primary">email </span> {person.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
}

export default Persons;