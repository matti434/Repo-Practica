import React from 'react'

export const Registro = () => {

  
  const onSubmit= () => {
    
  }

  return (
     <>
      <Modal
        show={true}
        onHide={onClose}
        centered
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ position: "relative", paddingTop: "10px" }}>
          <FormRegister onSubmit={onSubmit} />
        </Modal.Body>
      </Modal>
    </>
  )
}
