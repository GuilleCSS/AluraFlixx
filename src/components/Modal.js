// src/components/Modal.js
import React, { useState } from 'react';
import axios from 'axios';

function Modal({ video, onClose }) {
  const [titulo, setTitulo] = useState(video.titulo);
  const [categoria, setCategoria] = useState(video.categoria);
  const [imagen, setImagen] = useState(video.imagen);
  const [videoUrl, setVideoUrl] = useState(video.video);
  const [descripcion, setDescripcion] = useState(video.descripcion);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedVideo = { ...video, titulo, categoria, imagen, video: videoUrl, descripcion };
    axios.put(`http://localhost:3000/videos/${video.id}`, updatedVideo)
      .then(() => {
        onClose();
      })
      .catch(error => console.error('Error updating video:', error));
  };

  return (
    <div className="modal">
      <h2>Editar Card</h2>
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
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
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
        <button type="button" onClick={onClose}>Cerrar</button>
      </form>
    </div>
  );
}

export default Modal;
