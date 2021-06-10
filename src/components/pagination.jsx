import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Pagination = ({ personsPerPage, totalPersons, paginate }) => {
    const pageNumbers = [];

    // get totalPersons per perPageNumbers and set pagination navigation
    for (let i = 1; i <= Math.ceil(totalPersons / personsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Navbar fixed="bottom" bg="light">
            <Container className="justify-content-around">
                <Nav variant="pills" className="pagination" defaultActiveKey="2.1" aria-label="Page navigation persons">
                    {pageNumbers.map((number, index) => (
                        <Nav.Item key={index} className="page-item">
                            <Nav.Link className="page-link m-1 px-3"
                                eventKey={`2.${number}`}
                                onClick={() => paginate(number)}
                            >
                                {number}
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Pagination;