import BarChart from '../barChart/BarChart'
import './bounceRate.scss'

const BounceRate = () => {
  return (
    <div className='bounceRate'>
        <div className="bounceRateItem">
            <div className="top">
                <div className="left">
                    <h3>Bounce Rate</h3>
                    <h1>48.54%</h1>
                </div>
                <div className="right">
                    <h4>+12.34 Increase</h4>
                    <p>From Last Week</p>
                </div>
            </div>
            <div className="bottom">
                <BarChart width="435" height="88"/>
            </div>
        </div>

        <div className="bounceRateItem">
            <div className="top">
                <div className="left">
                    <h3>Bounce Rate</h3>
                    <h1>48.54%</h1>
                </div>
                <div className="right">
                    <h4>+12.34 Increase</h4>
                    <p>From Last Week</p>
                </div>
            </div>
            <div className="bottom">
                <BarChart width="435" height="88"/>
            </div>
        </div>

        <div className="bounceRateItem">
            <div className="top">
                <div className="left">
                    <h3>Bounce Rate</h3>
                    <h1>48.54%</h1>
                </div>
                <div className="right">
                    <h4>+12.34 Increase</h4>
                    <p>From Last Week</p>
                </div>
            </div>
            <div className="bottom">
                <BarChart width="435" height="88"/>
            </div>
        </div>
    </div>
  )
}

export default BounceRate