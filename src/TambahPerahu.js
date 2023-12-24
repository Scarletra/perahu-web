import { useState } from 'react';
import { postFetch } from './useFetch';
import { useNavigate } from "react-router";
const colors = ["RED",
"ORANGE",
"YELLOW",
"GREEN",
"BLUE",
"INDIGO",
"VIOLET",
"WHITE",
"BLACK"
]

const TambahPerahu = () => {

  const navigate = useNavigate();
  const [namaPerahu, setNama] = useState('')
  const [kapasitasPerahu, setKapasitas] = useState(5)
  const [deskripsiPerahu, setDeskripsi] = useState('')
  const [warnaPerahu, setWarna] = useState('ORANGE')
  const [isSailing, setStatus] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const perahu = {name: namaPerahu, capacity: kapasitasPerahu, description: deskripsiPerahu, color: warnaPerahu, is_sailing: isSailing}
    postFetch(perahu)
    navigate('/')
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '20px' }}>
      <form id="form" onSubmit={handleSubmit} style={{ width: '50vh', height: '50vh'}}>
        <div style={{ margin: '3' }}>
            <div className="mb-3">
                <label for="name" className="col-form-label">Name:</label>
                <input type="text" required className="form-control" value={namaPerahu} onChange={(e) => setNama(e.target.value)} name="name"></input>
            </div>
            <div className="mb-3">
                <label for="capacity" className="col-form-label">Kapasitas: </label>
                <input type="number" required className="form-control" value={kapasitasPerahu} onChange={(e) => setKapasitas(e.target.value)} name="capacity"></input>
            </div>
            <div className="mb-3">
                <label for="description" className="col-form-label">Description:</label>
                <textarea className="form-control" required value={deskripsiPerahu} onChange={(e) => setDeskripsi(e.target.value)} name="description"></textarea>
            </div>
            <label>Color: </label>
            <select name="color" value={warnaPerahu} onChange={(e) => setWarna(e.target.value)} style={{ color: 'black' }}>
                <option value="" disabled >
                Select a color
                </option>
                {colors.map((color) => (
                <option key={color} value={color} style={{ color: 'black' }}>
                    {color}
                </option>
                ))}
            </select>
        </div>
        <button type="submit" class="btn btn-outline-light m-3">Submit</button>
      </form>
    </div>
  );
};

export default TambahPerahu;
