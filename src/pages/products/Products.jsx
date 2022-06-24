import { DeleteOutlined, EditOutlined, VisibilityOutlined } from '@mui/icons-material';
import './product.scss';
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const items = [
    {
        id: 1,
        itemName: "Light Blue Chair",
        price: 34,
        status: "active",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/01.png"
    },
    {
        id: 2,
        itemName: "Light Blue Chair",
        price: 34,
        status: "disabled",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/02.png"
    },
    {
        id: 3,
        itemName: "Light Blue Chair",
        price: 34,
        status: "archived",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/03.png"
    },
    {
        id: 4,
        itemName: "Light Blue Chair",
        price: 34,
        status: "active",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/04.png"
    },
    {
        id: 5,
        itemName: "Light Blue Chair",
        price: 34,
        status: "disabled",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/05.png"
    },
    {
        id: 6,
        itemName: "Light Blue Chair",
        price: 34,
        status: "archived",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/06.png"
    },
    {
        id: 7,
        itemName: "Light Blue Chair",
        price: 34,
        status: "active",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/07.png"
    },
    {
        id: 8,
        itemName: "Light Blue Chair",
        price: 34,
        status: "disabled",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/08.png"
    },
    {
        id: 9,
        itemName: "Light Blue Chair",
        price: 34,
        status: "archived",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/09.png"
    },
    {
        id: 10,
        itemName: "Light Blue Chair",
        price: 34,
        status: "active",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/10.png"
    },
    {
        id: 11,
        itemName: "Light Blue Chair",
        price: 34,
        status: "disabled",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/11.png"
    },
    {
        id: 12,
        itemName: "Light Blue Chair",
        price: 34,
        status: "archived",
        date: "04/03/2022",
        imgUrl: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/products/12.png"
    }
]






const Products = () => {

    const [list, setList] = useState(items)
    // const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
    // const handleChange = (newValue) => {
    //     setValue(newValue);
    // };



    const handleDelete = (id) => {
        setList(
            list.filter((item) => {
                return (
                    (id !== item.id)
                )
            })
        )
    }

    return (
        <div className='appContainer'>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="appContentContainer">
                    <div className="productContainer">
                        {/* <div className="top">
                        <div className="left">
                            <div className="categoryContainer">
                                <div className="category">Category</div>
                                <ArrowUpward />
                            </div>
                        </div>
                        <div className="right">
                            <div className="datePicker">
                                <Stack component="form" noValidate spacing={3}>
                                    <TextField
                                        id="date"
                                       
                                        type="date"
                                        defaultValue="2017-05-24"
                                        sx={{ width: 220 }}
                                        style={{height: "10px"}}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Stack>
                            </div>
                        </div>
                    </div> */}

                        <div className="bottom">
                            {
                                list.map((data, index) => {
                                    return (
                                        <div className={`items ${(index + 1) % 2 ? "light" : "dark"}`} key={index}>
                                            <div className="left">
                                                <div className="image">
                                                    <img src={data.imgUrl} alt="" />
                                                </div>
                                                <div className="itemDetails">
                                                    <h3 className="itemTitle">{data.itemName}</h3>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div className="price item">${data.price}</div>
                                                <div className="item">
                                                    <span className={`status ${data.status}`}>
                                                        {data.status}
                                                    </span>
                                                </div>
                                                <div className="date item">{data.date}</div>
                                                <div className="editButton item">
                                                    <span>
                                                        <VisibilityOutlined className='eye' />
                                                    </span>
                                                    <span>
                                                        <EditOutlined className='pencil' />
                                                    </span>
                                                    <span onClick={() => handleDelete(data.id)}>
                                                        <DeleteOutlined className='delete' />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products