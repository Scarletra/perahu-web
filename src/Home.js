import { useState } from "react";
import { useNavigate } from "react-router";
import './index.css';

function CardPerahu({ perahu }) {
    const navigate = useNavigate();

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="https://img.freepik.com/premium-vector/toy-boat-with-striped-sails-vector-illustration-toy_901492-579.jpg?w=2000" className="card-img-top" alt="BOAT" />
            <div className="card-body">
                <h5 className="card-title">{perahu.name}</h5>
                <p className="card-text">{perahu.description}</p>
                <button>Edit perahu</button>
            </div>
        </div>
    );
}

export default function Home({ kumpulanPerahu}) {
    return (
        <div className="home">
            <button onClick={() => {}}>Tambah perahu</button>
            <div className="kumpulanPerahu">
                {
                    kumpulanPerahu.map((perahu) => {
                        return <CardPerahu perahu={perahu} key={perahu.id} />;
                    })
                }
            </div>
        </div>
    );
}
