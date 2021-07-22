import React, { useEffect } from 'react';
import { useState } from 'react';
import './styleCovid.css'
import Corona from './Images/Corona.jpg'


const Covid = () => {


    const [Data, setData] = useState([]);

    const CovidData = async () => {
        try {
            const web = await fetch('https://api.covid19india.org/data.json');
            // console.log(web);
            const file = await web.json()
            console.log(file.statewise[0])
            setData(file.statewise[0])

        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        CovidData();
    }, [])

    return (
        <>

            <h1 className="header"> Covid-19
                <a href="https://www.mygov.in/covid-19">
                    
                        <span className = "span">  State information</span>
                </a>
                <span className = "span1">{Data.lastupdatedtime}(last Updated)</span>
                </h1>



                <br />

                {/* 1 */}




                <div className="row">


                    <div className="col-sm-6">

                        <div className="card">

                            <div className="card-body">

                                <h5 className="card-title">{Data.active} : Active Cases</h5>
                                <br />
                                <a href='#' className="btn btn-outline-primary">Active</a>
                            </div>
                        </div>
                    </div>


                    {/* </div>     */}

                    {/* 2 */}

                    <br />
                    {/* <div className="row"> */}
                    {/* <div className="margin"> */}


                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{Data.confirmed} : Confirmed Cases </h5>
                                <br />
                                <a href="" className="btn btn-outline-primary"> Confirmed </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}


                <br />


                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{Data.recovered} : Total Recovered</h5>
                                <br />
                                <a href="#" className="btn btn-outline-primary">Recovered</a>
                            </div>
                        </div>
                    </div>


                    {/* 4 */}
                    <br />
                    {/* <div className="row"> */}
                    {/* <div className = "margin"> */}


                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{Data.deaths} : Total Deaths</h5>
                                <br />
                                <a href="#" className="btn btn-outline-primary">Deaths</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
        </>
            )
}

            export default Covid;