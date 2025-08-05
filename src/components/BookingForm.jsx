import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookingForm() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', date: '', service: 'Masaje Relajante' });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); alert('¡Reserva enviada!'); setOpen(false); };

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-heading text-neutral-800 mb-6">Reserva tu sesión</h3>
        <button onClick={() => setOpen(true)} className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:opacity-90 transition">
          Reservar Cita
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.form onSubmit={handleSubmit} initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} transition={{ duration: 0.3 }} className="bg-white p-10 rounded-3xl shadow-soft w-11/12 max-w-md">
              <h4 className="text-2xl font-heading mb-6 text-neutral-800">Completa tus datos</h4>
              <div className="space-y-4">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre completo" required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                <input name="date" type="date" value={form.date} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Masaje Relajante</option>
                  <option>Terapia Facial</option>
                  <option>Aromaterapia</option>
                </select>
              </div>
              <div className="mt-8 flex justify-end space-x-4">
                <button type="button" onClick={() => setOpen(false)} className="px-6 py-3 font-medium rounded-lg">Cancelar</button>
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:opacity-90 transition">Enviar</button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
