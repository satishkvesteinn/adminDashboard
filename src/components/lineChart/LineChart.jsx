import './lineChart.scss';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const LineChartSection = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div className='lineChart' style={{width: "100%"}}>
                <LineChart width={360} height={70} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={3} style={{color: "red"}} />
                    <Tooltip contentStyle={{background: "var(--background)", borderRadius: "5px", color: "white"}}/>
                </LineChart>
            </div>
        </ResponsiveContainer>
    )
}

export default LineChartSection;