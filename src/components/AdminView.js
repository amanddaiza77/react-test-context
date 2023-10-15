import React, { useState } from 'react';
import { useRegistrationContext } from '../contexts/RegistrationContext';
import { Table, Input, Button } from 'rsuite';
import "../App.css";
const { Column, HeaderCell, Cell } = Table;

function AdminView() {
  const { state, dispatch } = useRegistrationContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [newSeat, setNewSeat] = useState('');
  const [editId, setEditId] = useState(null);
  const data = state.registrations;
  const handleLocationChange = (e) => {
    dispatch({ type: 'UPDATE_LOCATION', payload: e.target.value });
  };
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

  const handleEditSeat = (id, currentSeat) => {
    setEditId(currentSeat);
    setNewSeat(currentSeat.toString()); // Set the initial value of the input field
  };
  const handleSaveSeat = () => {
    console.log('parseInt',parseInt(newSeat, 10));
    console.log('editId',editId);
    dispatch({ type: 'UPDATE_SEAT', payload: { id: editId, newSeat: parseInt(newSeat, 10) } });
    setEditId(null);
    setNewSeat('');
  };
  return (
    <div className="border p-4">
      <h2 className="text-xl font-semibold mb-4">Admin View</h2>
      {/* <div className="mb-4">
        <label htmlFor="location" className="block font-medium mb-1">
          Location:
        </label>
        <select
          id="location"
          value={state.adminInfo.location}
          onChange={handleLocationChange}
          className="border p-2 w-full"
        >
          <option value="Office">Office</option>
          <option value="Remote">Remote</option>
        </select>
      </div> */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Registered Users</h3>
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
            <Cell>
              {rowData => (
                rowData.seat === editId ? (
                  <Input
                    value={newSeat}
                    onChange={value => setNewSeat(value)}
                  />
                ) : (
                  <span>{rowData.seat}</span>
                )
              )}
            </Cell>
          </Column>
          <Column width={150} resizable sortable>
            <HeaderCell>First Name</HeaderCell>
            <Cell dataKey="name" />
          </Column>
          <Column width={150} resizable sortable>
            <HeaderCell>Last Name</HeaderCell>
            <Cell dataKey="surname" />
          </Column>
          <Column width={150} resizable sortable>
            <HeaderCell>Telephone</HeaderCell>
            <Cell dataKey="telephone" />
          </Column>
          <Column width={100} resizable>
            <HeaderCell>Action</HeaderCell>
            <Cell>
              {rowData => (
                <Button
                  appearance="link"
                  onClick={() => handleEditSeat(rowData.id, rowData.seat)} // Pass the current seat value
                >
                  Edit Seat
                </Button>
              )}
            </Cell>
          </Column>
        </Table>
        {editId !== null && (
          <Button color="green" onClick={handleSaveSeat} className="bg-blue-500 text-white p-2 rounded m-4">
            Save Seat
          </Button>
        )}
      </div>
    </div>
  );
}

export default AdminView;
