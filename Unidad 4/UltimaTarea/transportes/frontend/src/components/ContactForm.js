'use client';
import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');

  // Captura lo que el usuario escribe en cada input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Se ejecuta al presionar el botón Enviar
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setMsg('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';
      const response = await axios.post(`${apiUrl}/api/contacto`, formData);
      
      setSending(false);
      setMsg(response.data.message || 'Mensaje enviado con éxito');
      setFormData(initialForm); // Limpia el formulario
    } catch (error) {
      console.error(error);
      setSending(false);
      setMsg('Ocurrió un error al enviar el mensaje');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <p>
        <label>Nombre</label>
        <input 
          type="text" 
          name="nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
          required 
        />
      </p>
      <p>
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </p>
      <p>
        <label>Teléfono</label>
        <input 
          type="text" 
          name="telefono" 
          value={formData.telefono} 
          onChange={handleChange} 
        />
      </p>
      <p>
        <label>Mensaje</label>
        <textarea 
          name="mensaje" 
          value={formData.mensaje} 
          onChange={handleChange} 
          required
        ></textarea>
      </p>
      <p>
        <input type="submit" value={sending ? 'Enviando...' : 'Enviar'} disabled={sending} />
      </p>
      {sending && <p>Enviando correo...</p>}
      {msg && <p>{msg}</p>}
    </form>
  );
};

export default ContactForm;