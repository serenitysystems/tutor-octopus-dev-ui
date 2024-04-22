import React, { useEffect, useState } from 'react';



import { CiSearch } from "react-icons/ci";





import { FaRegEdit } from "react-icons/fa";



import './Testings.css'


import Dropdown from 'react-bootstrap/Dropdown';



import { RiDeleteBin5Line } from 'react-icons/ri';


import { Col, Container, Nav, Row, Stack, Pagination, Form, Modal, Button, Card } from 'react-bootstrap'
import { IoMdArrowDropdown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { getStudentBatchRouter } from './apicalls/User';
import { getStudentWithoutBatch } from './apicalls/Student';
const Testings = ({ userData }) => {


    // const itemsPerPage = 8; // Change this to the desired number of items per page
    // const [currentPage, setCurrentPage] = useState(1);
    const [searchTitle, setSearchTitle] = useState('');

    const [data, setData] = useState([]);
    console.log('data1', data);
    const [search, SetSearch] = useState('');
    const [filter, setFilter] = useState([]);





    //------------------------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10); // Number of cards per page
    const [searchTerm, setSearchTerm] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [emaildata, setEmailData] = useState({
        email: ""
    });

    // Filter and search logic
    const filteredData = data.filter((value) =>
        // value.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filterValue === '' || value._id === filterValue)
    );

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const [show, setShow] = useState(false);

    // Unique categories for filter dropdown
    const uniqueCategories = [...new Set(data.map(item => item._id))];

    const handleClose = () => setShow(false);
    // const handleShow = (id) => {
    //     sessionStorage.setItem('editId',id);
    //     let email = sessionStorage.getItem('editId');
        
    //     setFormData({ ...formData, email: email });
    //     setShow(true);
    // }
    const [loading, setloading] = useState(false);

    const handleItemsPerPageChange = (selectedValue) => {
        setItemsPerPage(selectedValue);
        setCurrentPage(1); // Reset current page when changing items per page
    };

    // const handleDeleteStudent = async (recieve) => {
    //     // setloading(true);
    //     // console.log(loading)
    //     //const data=

    //     let emaildata = { email: recieve }
    //     const response = await DeleteStudentRouter(emaildata);
    //     if (response.success === true) {
    //         //alert(response.deletedStudent.email + "  is deleted successfully")
    //         getStudent()
    //         setShowModalLogout(false)
    //     }
    //     //console.log()

    // }


    const [showModalLogout, setShowModalLogout] = useState(false);
    

   

    // useEffect(() => {
    //     setloading(true);


    // }, [])



    // const initialValues = {
    //     price: '',
    //     mobileNumber: '',
    //     batch: '',
    //     lessonCategory: '',
    //     managedBy:sessionStorage.getItem('userId'),
        
    // };

    // const [formData, setFormData] = useState(initialValues);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await (formData);
        
    //     // Log the updated form data when it's guaranteed to be updated
    //     console.log('Form submitted with data:', formData);
        
    //     if (response.success === true) {
    //         // Assuming getStudent() fetches updated student data
    //         getStudent();
    //         //console.log(response);
    //         setShow(false);
    //     }
    // };
    




  








    // const getStudent = async () => {
    //     try {
    //         const req = await fetch("https://tutor-octopus-1.onrender.com/student/read");
    //         const res = await req.json();
            // setData(res);
            // setFilter(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }




    // const getStudentBatch = async () => {
    //     // let emaildata = { email: recieve }
    //     const response = await getStudentBatchRouter({
    //         id:sessionStorage.getItem('userId'),batch:"Batch-2"
    //     });
    //     console.log(response);
    //     if (response.success === true) {
    //         //alert(response.deletedStudent.email + "  is deleted successfully")
    //         // getStudentRouter()
    //         // setShowModalLogout(false)
    //         setData(response.data);
    //         setFilter(response.data);
    //         console.log(data);

    //     }
        
    // }

    const getStudentWithoutBatchData = async () => {
        
        const response = await getStudentWithoutBatch(
            sessionStorage.getItem('userId')
        );
        console.log(response);
       
    }






    useEffect(() => {
        getStudentWithoutBatchData();
    }, []);

   


    

    ///////morning  code
    // const filteredData = data.filter(value => value._id.toLowerCase().includes(searchTitle.toLowerCase()));

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    // Slice the data based on the calculated index range
    // const paginatedData = filteredData.slice(startIndex, endIndex);





    // const handleTitleChange = (value) => {
    //     setSearchTitle(value);
    //     setCurrentPage(1); // Reset to the first page when the title filter changes
    // };

    // useEffect(() => {
    //     const result = data.filter((item) => {
    //         return item.title.toLowerCase().match(search.toLocaleLowerCase());
    //     });
    //     setFilter(result);
    // }, [search]);




    // const onButtonClick = () => {
    //     const pdfUrl = "example.pdf";
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.download = "example.pdf"; // specify the filename
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };




























    return (
        <div>


            
        <button onClick={getStudentWithoutBatchData}>Save</button>





        </div>

    )
}

export default Testings
