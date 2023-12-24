import { useState } from 'react';

const colors = ['Red', 'Blue', 'Green', 'Yellow']; // Enum-like list of colors

const TambahPerahu = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    capacity: '',
    color: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here using the formData state
    console.log(formData);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '20px' }}>
      <form id="form" onsubmit={handleSubmit} style={{ width: '50vh', height: '50vh'}}>
        <div style={{ margin: '3' }}>
            <div className="mb-3">
                <label for="name" className="col-form-label">Name:</label>
                <input type="text" className="form-control" value={formData.name} onChange={handleChange} name="name"></input>
            </div>
            <div className="mb-3">
                <label for="kapasitas" className="col-form-label">Kapasitas: </label>
                <input type="number" className="form-control" value={formData.capacity} onChange={handleChange} name="kapasitas"></input>
            </div>
            <div className="mb-3">
                <label for="description" className="col-form-label">Description:</label>
                <textarea className="form-control" value={formData.description} onChange={handleChange} name="description"></textarea>
            </div>
            <label>Color: </label>
            <select name="color" value={formData.color} onChange={handleChange} style={{ color: 'black' }}>
                <option value="" disabled>
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
