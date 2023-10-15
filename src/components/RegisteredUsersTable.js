import React, { useState } from 'react';
import { useUserContext } from '../contexts/UserContext';
import { Table, Input } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const RegisteredUsersTable = () => {
    const { registeredUsers } = useUserContext();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSortColumn = () => {
        // Add sorting logic here
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    // const filteredUsers = registeredUsers.filter((user) =>
    //     `${user.name} ${user.surname} ${user.telephone}`
    //         .toLowerCase()
    //         .includes(searchTerm.toLowerCase())
    // );

    return (
        <div>
            <Input
                placeholder="Search"
                style={{ width: 400, marginBottom: '10px' }}
                // value={searchTerm}
                // onChange={handleSearch}
            />
            <Table
                height={400}
                // data={filteredUsers}
                // onSortColumn={handleSortColumn}
                sortColumn="name"
                sortType="asc"
            >
                <Column width={200}>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="name" />
                </Column>
                <Column width={200}>
                    <HeaderCell>Surname</HeaderCell>
                    <Cell dataKey="surname" />
                </Column>
                <Column width={200}>
                    <HeaderCell>Telephone</HeaderCell>
                    <Cell dataKey="telephone" />
                </Column>
            </Table>
        </div>
    );
};

export default RegisteredUsersTable;
