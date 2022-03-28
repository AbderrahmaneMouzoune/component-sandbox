import React from 'react'
import './Card.scss'

function Card() {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-header_title">Lorem ipsum</h5>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </span>
            </div>
            <div className="card-body">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, voluptates repellendus non quasi doloribus ratione,
                    officiis laudantium unde iusto consequatur debitis, impedit
                    nemo repudiandae minus nam commodi aperiam laboriosam
                    labore?
                </p>
            </div>
            <div className="card-footer">
                <p>Copyright Abderrahmane Mouzoune©</p>
            </div>
        </div>
    )
}

export default Card
