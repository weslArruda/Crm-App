'use client'

import { useState, useEffect } from 'react';
import { IconArchive, IconArrowsLeftRight, IconChevronRight, IconCircleOff, IconLayoutDashboard, IconMessageCircle, IconPencil, IconPhoto, IconSettings, IconStatusChange, IconTrash, IconUserCode } from '@tabler/icons-react';
import { Group, Avatar, Text, Menu, UnstyledButton, Table, ActionIcon, Badge, Breadcrumbs, Flex, NavLink, rem, Stack } from '@mantine/core';
import UsersTableApi from '@/components/Tables/UsersTableApi';
import ColorSchemeToggle from '@/components/ColorSchemeToggle/ColorSchemeToggle';

// type User = {
//   id: string;
//   nome?: string;
//   username?: string;
//   senha?: string;
//   email: string;
//   nascimento?: string;
//   cargo?: string;
//   supervisor?: string;
//   permissao?: string;
//   status?: string;
//   createdAt?: string;
// };

// const fetchData = async () => {
//   try {
//     const response = await fetch('http://localhost:8080/user/list');
//     console.log('Tentando listar usuarios', response)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Fetch error:', error);
//     return [];
//   }
// };

export default function Page() {
  // const [elements, setElements] = useState<User[]>([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetchData();
  //     setElements(data);
  //   };
  //   getData();
  // }, []);

  // const rows = elements.map((element) => (
  //   <tr key={element.nome}>
  //     <td><Group justify='center'>{element.id}</Group></td>
  //     <td><Group justify='center'>{element.nome}</Group></td>
  //     <td><Group justify='center'>{element.username}</Group></td>
  //     <td><Group justify='center'>{element.email}</Group></td>
  //     <td><Group justify='center'>{element.cargo}</Group></td>
  //     <td><Group justify='center'>{element.supervisor}</Group></td>
  //     <td><Group justify='center'>{element.permissao}</Group></td>
  //     <td><Group justify='center'>{element.status}</Group></td>
  //     <td><Group justify='center'>{element.createdAt}</Group></td>
  //     <td>
  //       <Group justify='center'>
  //         {element.status}
  //       </Group>
  //     </td>
  //     <td>
  //       <Group justify='center' gap={'xs'}> 
  //         <ActionIcon variant="default">
  //           <IconPencil style={{ width: '70%', height: '70%' }} stroke={1.5} />
  //         </ActionIcon>
  //         <ActionIcon variant="default">
  //           <IconStatusChange style={{ width: '70%', height: '70%' }} stroke={1.5} />
  //         </ActionIcon>
  //         <ActionIcon variant="default" style={{ background: 'var(--mantine-color-red-9)' }}>
  //           <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
  //         </ActionIcon>
  //       </Group>
  //     </td>
  //   </tr>
  // ));

  // return (
  //   <Table highlightOnHover>
  //     <thead>
  //       <tr>
  //         <th>Id</th>
  //         <th>Nome</th>
  //         <th>Username</th>
  //         <th>Email</th>
  //         <th>Cargo</th>
  //         <th>Supervisor</th>
  //         <th>Permissão</th>
  //         <th>Status</th>
  //         <th>Data de criação</th>
  //         <th>Ações</th>
  //       </tr>
  //     </thead>
  //     <tbody>{rows}</tbody>
  //   </Table>
  // );
  <>
  {/* header */}
  <Flex gap='md'>

      {/* Page content */}
      <Flex justify='flex-end' direction='column' w='85%'>
         
          <Group w='100%'>
              <UsersTableApi />
          </Group>
          

      </Flex>
  </Flex>

</>

}
