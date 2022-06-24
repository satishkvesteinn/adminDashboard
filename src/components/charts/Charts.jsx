import './charts.scss';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        Customers: 100,
        Visitores: 110,
        Sales: 50,
    },
    {
        name: 'Feb',
        Customers: 40,
        Visitores: 90,
        Sales: 70,
    },
    {
        name: 'Mar',
        Customers: 110,
        Visitores: 60,
        Sales: 90,
    },
    {
        name: 'Apr',
        Customers: 117,
        Visitores: 10,
        Sales: 110,
    },
    {
        name: 'May',
        Customers: 100,
        Visitores: 70,
        Sales: 90,
    },

    {
        name: 'Jun',
        Customers: 80,
        Visitores: 30,
        Sales: 80,
    },

    {
        name: 'Jul',
        Customers: 20,
        Visitores: 50,
        Sales: 70,
    },

    {
        name: 'Aug',
        Customers: 70,
        Visitores: 40,
        Sales: 90,
    },

    {
        name: 'Sep',
        Customers: 10,
        Visitores: 80,
        Sales: 115,
    },

    {
        name: 'Oct',
        Customers: 70,
        Visitores: 95,
        Sales: 110,
    },
];

const Charts = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className='charts'>
                <BarChart
                    width={580}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='#666666'/>
                    <XAxis dataKey="name" fontSize={13}/>
                    {/* <YAxis fontSize={13}/> */}
                    <Tooltip contentStyle={{background: "var(--background)", borderRadius: "5px", color: "white"}}/>
                    <Legend />
                    <Bar dataKey="Sales" fill="#737373" />
                    <Bar dataKey="Customers" fill="#8c8c8c" />
                    <Bar dataKey="Visitores" fill="#a6a6a6" />
                </BarChart>
            </div>
        </ResponsiveContainer>
    );
}

export default Charts