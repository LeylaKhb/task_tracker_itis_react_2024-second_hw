import Button from 'react-bootstrap/Button';

import {useState} from "react";
import { mockProjects } from './mockProjects';

import { Table, TableHead, TableCol, TableColActions } from './styled';
import ModalWindow from "../../molecules/ModalWindow";

const ProjectsTable = () => {
    const [modalWindowVisible, setModalWindowVisible] = useState(false)
    const [projectToDelete, setProjectToDelete] = useState(false)

    const onCancel = () => {
        setModalWindowVisible(false)
        setProjectToDelete(null)
    }

    const onDelete = () => {
        // удаление проекта
        setModalWindowVisible(false)
        setProjectToDelete(null)
    }

    function deleteProject(project) {
        setProjectToDelete(project);
        setModalWindowVisible(true);
    }

    return (
    <Table>
      <thead>
        <tr>
          <TableHead>id</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </tr>
      </thead>

      <tbody>
        {mockProjects.map(({ id, name, description }) => {
          return (
            <tr key={id}>
              <TableCol>{id}</TableCol>
              <TableCol>{name}</TableCol>
              <TableCol>{description}</TableCol>
              <TableColActions>
                <Button variant="primary" onClick={() => {}}>Edit</Button>
                <Button variant="warning" onClick={() => {}}>Show</Button>
                <Button variant="danger" onClick={() => deleteProject({ id, name, description })}>Delete</Button>
              </TableColActions>
            </tr>
          )
        })}
      </tbody>
        <ModalWindow title="Удаление проекта" show={modalWindowVisible} modalText={`Удалить проект 
        ${projectToDelete != null ? projectToDelete.name : ""}'`}
                     onCancel={onCancel} onDelete={onDelete} />
    </Table>
  )
}

export default ProjectsTable;
