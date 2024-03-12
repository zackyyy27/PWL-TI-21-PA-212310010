import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function DataFormulir() {
  const [formData, setFormData] = useState({
    npm: '',
    firstName: '',
    middleName: '',
    lastName: '',
    birthdate: ''
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
    <h1 style={{ textAlign: 'center' }}>Data Formulir</h1>
    <div style={{ padding: '20px' }}>
    <Form onSubmit={handleSubmit} style={{ border: '1px solid #ced4da', padding: '20px', borderRadius: '10px' }}>
        <Form.Group className="mb-3" controlId="formNPM">
          <Form.Label>NPM</Form.Label>
          <Form.Control
            type="number" placeholder="Enter NPM" name="npm"value={formData.npm}onChange={handleChange} maxLength="10" required />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text" placeholder="Enter First Name" name="firstName"value={formData.firstName} onChange={handleChange} required />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text" placeholder="Enter Middle Name" name="middleName"value={formData.middleName} onChange={handleChange} />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text" placeholder="Enter Last Name" name="lastName"value={formData.lastName} onChange={handleChange} required />
          </Form.Group>

        <Form.Group className="mb-3" controlId="formBirthdate">
          <Form.Label>Birthdate</Form.Label>
          <Form.Control
            type="date" placeholder="Enter Birthdate"name="birthdate"value={formData.birthdate}onChange={handleChange} required/>
          </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Informasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NPM: {formData.npm}</p>
          <p>Nama Lengkap: {formData.firstName} {formData.middleName} {formData.lastName}</p>
          <p>Umur: {formData.birthdate && calculateAge(formData.birthdate)} tahun</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Selesai
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DataFormulir;
