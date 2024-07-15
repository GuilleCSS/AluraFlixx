// src/pages/NuevoVideo.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NuevoVideo() {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');
  const [video, setVideo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoVideo = { titulo, categoria, imagen, video, descripcion };
    axios.post('http://localhost:3000/videos', nuevoVideo)
      .then(() => {
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
        setDescripcion('');
      })
      .catch(error => console.error('Error adding new video:', error));
  };

  return (
    <div className="page">
      <Header />
      <h2>Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="innovacion">Innovación</option>
            <option value="gestion">Gestión</option>
          </select>
        </div>
        <div className="form-group">
          <label>Imagen</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Video</label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <button type="submit">Guardar</button>
        <button type="button" onClick={() => {
          setTitulo('');
          setCategoria('');
          setImagen('');
          setVideo('');
          setDescripcion('');
        }}>Limpiar</button>
      </form>
      <Footer />
    </div>
  );
}

export default NuevoVideo;
