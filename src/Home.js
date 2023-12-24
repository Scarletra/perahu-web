import { useState } from "react";
import { useNavigate } from "react-router";
import './index.css';

function CardPerahu({ perahu }) {
    const navigate = useNavigate();

    return (
        <div className="card" style={{ width: '15rem', color: 'black'}}>
            <img src="https://img.freepik.com/premium-vector/toy-boat-with-striped-sails-vector-illustration-toy_901492-579.jpg?w=2000" className="card-img-top" alt="BOAT" />
            <div className="card-body">
                <h5 className="card-title">{perahu.name}</h5>
                <p className="card-text" style={{ color: 'black' }}>{perahu.description}</p>
                <p className="card-text" style={{ color: 'black' }}>{perahu.capacity}</p>
                <p className="card-text" style={{ color: 'black' }}>{perahu.color}</p>
                <button type="button" className="btn btn-outline-primary">Edit perahu</button>
            </div>
        </div>
    );
}

export default function Home({ kumpulanPerahu }) {
    const navigate = useNavigate();
  
    const tambahPerahu = () => {
      navigate('/tambah-perahu');
    };
  
    return (
      <div className="home">
        <button onClick={tambahPerahu}>Tambah perahu</button>
        <div className="kumpulanPerahu">
          {kumpulanPerahu.map((perahu) => (
            <CardPerahu perahu={perahu} key={perahu.id} />
          ))}
        </div>
      </div>
    );
  }