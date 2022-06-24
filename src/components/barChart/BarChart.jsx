import './barChart.scss'
import { AreaChart, Area } from 'recharts';


const data = [
    {
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        // uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const BarChart = (props) => {
    return (
        <AreaChart width={+props.width} height={+props.height} data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
                {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient> */}
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#ffffff" stopOpacity={0} />
                    <stop offset="90%" stopColor="#ffffff" stopOpacity={1} />
                </linearGradient>
            </defs>
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <Tooltip contentStyle={{background: "var(--background)", borderRadius: "5px", color: "white"}}/> */}
            {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
            <Area type="monotone" dataKey="pv" stroke="#ffffff" fillOpacity={1} fill="url(#colorPv)" strokeWidth={2} />
        </AreaChart>
    )
}

export default BarChart