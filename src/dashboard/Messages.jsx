import { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { MdOutlineFilterAlt } from "react-icons/md";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    sortable: false,
    width: 150,
  },
  { field: "email", headerName: "Email", width: 150 },
  { field: "subject", headerName: "Subject", width: 200 },
  { field: "message", headerName: "Message", width: 200 },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => {
      const handleDelete = async () => {
        try {
          await axios.delete(
            `https://portbackend-it4o.onrender.com/api/messages/${params.row._id}`
          );

          // Refetch data after successful delete
          window.location.reload();
        } catch (error) {
          console.error("Error deleting entry:", error);
        }
      };

      return (
        <div className="flex justify-center">
          <button
            className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      );
    },
  },
];

function Messages() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portbackend-it4o.onrender.com/api/messages"
        );

        const data = response.data;

        setRows(
          data.map((user, index) => ({
            ...user,
            id: index + 1,
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <p className="font-bold mr-2">Filter</p>
        <MdOutlineFilterAlt className="text-2xl text-gray-600" />
      </div>
      <div className="w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          checkboxSelection
          pageSizeOptions={[5, 10, 25]}
          getRowId={(row) => row._id}
          autoHeight
          className="bg-white rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
}

export default Messages;
