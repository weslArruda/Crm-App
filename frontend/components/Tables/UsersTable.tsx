import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import {
    MantineReactTable,
    useMantineReactTable,
    type MRT_ColumnDef,
} from 'mantine-react-table';

type Person = {
    id: number;
    salario: number;
    cargo: string;
    name: string;
    status: string;
    supervisor: string;
    permissao: string;
    nascimento: string;

};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
    { id: 6, salario: 12.011, cargo: 'Ti', name: 'Weslley', status: 'Ativo', supervisor: '', permissao: '', nascimento: '1979-09-24' },
    { id: 7, salario: 14.007, cargo: 'Ti', name: 'Emerson', status: 'Ativo', supervisor: '', permissao: '', nascimento: '1979-09-24' },
    { id: 39, salario: 88.906, cargo: 'Ti', name: 'Vinnicius', status: 'Inativo', supervisor: '', permissao: '', nascimento: '1979-09-24' },
    { id: 56, salario: 137.33, cargo: 'Vendedor', name: 'Jubliscleiton', status: 'Inativo', supervisor: '', permissao: '', nascimento: '1979-09-24' },
    { id: 58, salario: 140.12, cargo: 'Supervisor', name: 'Betoneira', status: 'Ativo', supervisor: '', permissao: '', nascimento: '1979-09-24' },
    { id: 58, salario: 140.12, cargo: 'Gerente', name: 'Betoneira Cromada', status: 'Ativo', supervisor: '', permissao: '', nascimento: '1979-09-24' }
];

const UsersTable = () => {
    //should be memoized or stable
    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'Id',
            },
            {
                accessorKey: 'name',
                header: 'Nome',
            },
            {
                accessorKey: 'cargo', //normal accessorKey
                header: 'Cargo',
            },
            {
                accessorKey: 'salario',
                header: 'Salario',
            },
            {
                accessorKey: 'status',
                header: 'Status',
            },
            {
                accessorKey: 'supervisor',
                header: 'Supervisor',
            },
            {
                accessorKey: 'permissao',
                header: 'Permissão',
            },
            {
                accessorKey: 'nascimento',
                header: 'Data de nascimento',
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        
    });

    return <MantineReactTable table={table} />;
};

export default UsersTable;