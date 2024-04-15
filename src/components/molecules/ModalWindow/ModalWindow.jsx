import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

const ModalWindow = ({ title, modalText, show, onCancel, onDelete}) => {
    return (
        <Modal  show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalText}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onDelete}>
                    Delete project
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalWindow;
