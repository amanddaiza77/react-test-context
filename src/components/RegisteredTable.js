import React, { useState } from 'react';
import { useRegistrationContext } from '../contexts/RegistrationContext';
import { Table, Input } from 'rsuite';
import "../App.css";
const { Column, HeaderCell, Cell } = Table;

function RegisteredTable() {
    const { state } = useRegistrationContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const data = state.registrations;
    const getData = () => {
        let filteredData = data.filter(item => {
            const values = Object.values(item).join(' ').toLowerCase();
            return values.includes(searchTerm.toLowerCase());
        });

        if (sortColumn && sortType) {
            filteredData = filteredData.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }

        return filteredData;
    };
    return (
        <div className="border p-4">
            <h2 className="text-xl font-semibold mb-4">Registered Users</h2>
            <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(value) => setSearchTerm(value)}
                className="mb-2 w-full"
            />
            <Table
                height={420}
                data={getData()}
                autoHeight
                wordWrap
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={(sortColumn, sortType) => {
                    setLoading(true);
                    setTimeout(() => {
                        setLoading(false);
                        setSortColumn(sortColumn);
                        setSortType(sortType);
                    }, 500);
                }}
                loading={loading}
            >
                <Column width={100} resizable sortable>
                    <HeaderCell>Seat</HeaderCell>
                    <Cell dataKey="seat" />
                </Column>
                <Column width={200} resizable sortable>
                    <HeaderCell>First Name</HeaderCell>
                    <Cell dataKey="name" />
                </Column>
                <Column width={200} resizable sortable>
                    <HeaderCell>Last Name</HeaderCell>
                    <Cell dataKey="surname" />
                </Column>
                <Column width={200} resizable sortable>
                    <HeaderCell>Telephone</HeaderCell>
                    <Cell dataKey="telephone" />
                </Column>
            </Table>
        </div>
    );
}

export default RegisteredTable;
