export const Login = ({ onClose }) => {
  
    const onSubmit = (data) => {
    console.log("envio de datos login",data);
    onClose();
  };

  return (
    <>
      {" "}
      <Modal
        show={true}
        onHide={onClose}
        centered
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton onClose={onClose}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLogin onSubmit={onSubmit} />
        </Modal.Body>
      </Modal>
    </>
  );
};
