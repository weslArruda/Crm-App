'use client'

import ColorSchemeToggle from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { NavLink, Badge, Group, Anchor, Breadcrumbs, Avatar, Menu, rem, UnstyledButton, Fieldset, TextInput, Table, Modal, Button, ActionIcon, Autocomplete, NativeSelect, Select, MultiSelect, Stack, Flex } from '@mantine/core';
import { IconCircleOff, IconLayoutDashboard, IconArrowsLeftRight, IconMessageCircle, IconPhoto, IconSettings, IconTrash, IconArchive, IconUserCode, IconAdjustments, IconAccessPoint, IconStatusChange, IconPencil, IconSearch } from '@tabler/icons-react';
import Image from 'next/image'
import CreateUserModal from '@/components/Overlays/Modal';
import UsersTable from '@/components/Tables/UsersTable';
import UsersTableApi from '@/components/Tables/UsersTableApi';

// const elements = [
//     { id: 6, salario: 12.011, cargo: 'Ti', name: 'Weslley', status: 'Ativo' },
//     { id: 7, salario: 14.007, cargo: 'Ti', name: 'Emerson', status: 'Ativo' },
//     { id: 39, salario: 88.906, cargo: 'Ti', name: 'Vinnicius', status: 'Inativo' },
//     { id: 56, salario: 137.33, cargo: 'Vendedor', name: 'Jubliscleiton', status: 'Inativo' },
//     { id: 58, salario: 140.12, cargo: 'Supervisor', name: 'Betoneira', status: 'Ativo' },
    
    
// ];

// const cargos = ['Vendedor', 'Supervisor', 'Ti', 'Gerente', 'Backoffice'];
// const nomes = elements.map(element => element.name);
const items = [
    { title: 'Users', href: '#' }
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));

const elements = [];
const cargos = ['Supervisor', 'Vendedor', 'Ti', 'Gerente'];
const nomes = ['Betoneira', 'Jubliscleiton', 'Weslley', 'Emerson', 'Vinnicius'];

for (let i = 1; i <= 100; i++) {
    const element = {
        id: i,
        salario: (Math.random() * 100000).toFixed(2),
        cargo: cargos[Math.floor(Math.random() * cargos.length)],
        name: nomes[Math.floor(Math.random() * nomes.length)],
        status: Math.random() > 0.5 ? 'Ativo' : 'Inativo'
    };
    elements.push(element);
}

const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
        <Table.Td>{element.id}</Table.Td>
        <Table.Td>{element.name}</Table.Td>
        <Table.Td>{element.cargo}</Table.Td>
        <Table.Td>{element.salario}</Table.Td>
        <Table.Td>{element.status}</Table.Td>
        <Table.Td>
            <Group>

                <ActionIcon variant="default">
                    <IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>

                <ActionIcon variant="default">
                    <IconStatusChange style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>

                <ActionIcon variant="default" style={{ background: 'var(--mantine-color-red-9)' }}>
                    <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
                </ActionIcon>

            </Group>
        </Table.Td>
    </Table.Tr>
));

export default function UsersCreatePage() {
    return (
        <>
            {/* header */}
            <Group justify='space-between' p={10}>
                <Group justify='flex-end'>
                    <Image src={'/icons8-toucan-48.png'} alt='tes' width={48} height={48} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </Group>
                <Group>
                    <Breadcrumbs>{items}</Breadcrumbs>
                    {/* <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
                        {items}
                    </Breadcrumbs> */}
                </Group>

                <Group>
                    <ColorSchemeToggle />

                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <UnstyledButton>
                                <Avatar radius="xl" />
                            </UnstyledButton>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
                                Settings
                            </Menu.Item>
                            <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                                Messages
                            </Menu.Item>
                            <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
                                Gallery
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item
                                leftSection={<IconArrowsLeftRight style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Transfer my data
                            </Menu.Item>
                            <Menu.Item
                                color="red"
                                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Delete my account
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>

            </Group>
            <Flex gap='md'>
                {/* Sidebar left */}
                <Stack>
                    <NavLink
                        href=""
                        label="Dashboard"
                        leftSection={<IconLayoutDashboard size="1rem" stroke={1.5} />}
                    >

                        <NavLink label="Geral" href="/Dashboard/Geral" />
                        <NavLink label="Proposals" href="/Dashboard/Proposals" />
                        <NavLink label="Sellers" href="/Dashboard/Sellers" />
                    </NavLink>

                    <NavLink
                        href="#required-for-focus"
                        label="Sales"
                        leftSection={<IconArchive size="1rem" stroke={1.5} />}
                        childrenOffset={18}
                    >

                        <NavLink label="Register a new proposal" href="/Sales/Create" />
                        <NavLink label="Proposal progress" href="/Sales/Progress" />
                        <NavLink label="View proposals" href="/Sales/View" />
                    </NavLink>

                    <NavLink
                        href="#required-for-focus"
                        label="Users"
                        leftSection={<IconUserCode size="1rem" stroke={1.5} />}
                        childrenOffset={18}
                        variant='filled'
                        opened
                        active
                    >
                    </NavLink>

                    <NavLink
                        href="#required-for-focus"
                        label="Disabled"
                        leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
                        disabled />

                    <NavLink
                        href="#required-for-focus"
                        label="Notifications"
                        description="Additional information"
                        leftSection={
                            <Badge size="xs" color="red" circle>
                                9
                            </Badge>
                        }
                    />

                </Stack>
                {/* Page content */}
                <Flex justify='flex-end' direction='column' w='85%'>
                    {/* <Autocomplete
                        placeholder="Nome"
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        data={nomes}
                        visibleFrom="xs"
                    />
                    <MultiSelect
                        placeholder="Cargos"
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        data={cargos}
                    />
                    <Select placeholder='Status' data={['Ativo', 'Inativo']} clearable w='8vw'/> */}
                    {/* <Group justify='flex-end'>
                        <CreateUserModal />
                    </Group> */}
                    
                    {/* <Table highlightOnHover>
                    
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Id</Table.Th>
                                <Table.Th>Nome</Table.Th>
                                <Table.Th>Cargo</Table.Th>
                                <Table.Th>Salario</Table.Th>
                                <Table.Th>Status</Table.Th>
                                <Table.Th>Ações</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table> */}
                    <Group w='100%'>
                        <UsersTableApi />
                    </Group>
                    

                </Flex>
            </Flex>

        </>

    );
}