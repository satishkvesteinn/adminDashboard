import { CalendarMonthOutlined, MoreHorizOutlined } from '@mui/icons-material'
import BarChart from '../barChart/BarChart'
// import LineChartSection from '../lineChart/LineChart'
import './topProducts.scss'


const items = [
    {
        id: 1,
        itemImage: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/chair.png",
        itemName: "Light Blue Chair",
        itemPrice: 123,
        itemSale: 345
    },
    {
        id: 2,
        itemImage: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/user-interface.png",
        itemName: "Honor Mobile 7x",
        itemPrice: 623,
        itemSale: 145
    },
    {
        id: 3,
        itemImage: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/tshirt.png",
        itemName: "T-shirts",
        itemPrice: 323,
        itemSale: 35
    },
    {
        id: 4,
        itemImage: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/headphones.png",
        itemName: "Headphone",
        itemPrice: 503,
        itemSale: 5
    },
    {
        id: 5,
        itemImage: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/shoes.png",
        itemName: "Shoes",
        itemPrice: 1230,
        itemSale: 23
    }, {
        id: 6,
        itemImage: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/watch.png",
        itemName: "Watch",
        itemPrice: 208,
        itemSale: 231
    }
]


const TopProducts = () => {
    return (
        <div className='topProducts'>
            <div className="titleSection">
                <div className="topProductsTitle">
                    <h2>Top Products</h2>
                    <p><CalendarMonthOutlined className='icon' /> in last 30 days revenue</p>
                </div>
                <div className="topProductsMenu">
                    <MoreHorizOutlined />
                </div>
            </div>
            <div className="topProductItems">
                {
                    items.map((data, index) => {
                        return (
                            <div className="item" key={index}>
                                <div className="itemLeft">
                                    <div className="image">
                                        <img src={data.itemImage} alt="" />
                                    </div>
                                    <div className="itemDetails">
                                        <h3 className="itemTitle">{data.itemName}</h3>
                                        <p className="itemPrice">${data.itemPrice}</p>
                                    </div>
                                </div>
                                <div className="itemMidle">
                                    <div className="totalSalePrice">
                                        ${data.itemPrice * data.itemSale}
                                    </div>
                                    <div className="totalSales">
                                        {data.itemSale} Sales
                                    </div>
                                </div>
                                <div className="itemRight">
                                    <BarChart width="150" height="40" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TopProducts