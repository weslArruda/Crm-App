import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Fieldset, TextInput, Combobox } from '@mantine/core';
import RolesCombobox from '../Combobox/RolesCombobox';

function CreateUserModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Informações do novo usuário" centered>
                {/* Modal content */}
                    <TextInput label="Nome" placeholder="Digite o nome" />
                    <TextInput label="Último nome" placeholder="Digite o último nome" />
                    <TextInput label="Email" placeholder="Digite um email" />
                    <TextInput label="Username" placeholder="Digite um nome de usuario" />
                    <RolesCombobox />
                    <Button  mt={15}>Criar</Button>
            </Modal>

            <Button onClick={open}>Novo usuário</Button>
        </>
    );
}

export default CreateUserModal;