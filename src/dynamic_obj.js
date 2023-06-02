import React, { useEffect, useState } from 'react'

const Dynamic_obj = () => {
    const budget = [
        {
            id: "1",
            amount: "75",
            time_period: "month",
            sector: "",
        },
        {
            id: "2",
            amount: "30",
            time_period: "",
            sector: "finTech",
        },
        {
            id: "3",
            amount: "25",
            time_period: "quarter",
            sector: "BigData",
        },
        {
            id: "4",
            amount: "70",
            time_period: "year",
            sector: "E-Commerce",
        },
        {
            id: "5",
            amount: "350",
            time_period: "year",
            sector: "",
        }
    ]
    const investments = [
        {
            id: "1",
            date: '06/01/2020',
            amount: '10',
            sector: 'BigData'
        },
        {
            id: "2",
            date: '23/01/2020',
            amount: '20',
            sector: 'E-Commerce'
        },
        {
            id: "3",
            date: '02/02/2020',
            amount: '35',
            sector: 'finTech'
        },
        {
            id: "4",
            date: '10/02/2020',
            amount: '65',
            sector: 'SaaS'
        },
        {
            id: "5",
            date: '14/02/2020',
            amount: '15',
            sector: 'BigData'
        },
        {
            id: "6",
            date: '17/02/2020',
            amount: '5',
            sector: 'SaaS'
        },
        {
            id: "7",
            date: '29/02/2020',
            amount: '5',
            sector: 'finTech'
        },
        {
            id: "8",
            date: '18/03/2020',
            amount: '15',
            sector: 'BigData'
        },
        {
            id: "9",
            date: '03/05/2020',
            amount: '30',
            sector: 'E-Commerce'
        },
        {
            id: "10",
            date: '18/05/2020',
            amount: '50',
            sector: 'E-Commerce'
        },
    ]


    const [bList, setBList] = useState(null);

    const transformData = () => {
        let sector = {};
        let totalBudget = null;
        let yearBudget = null;
        let quarterBudget = null;
        let monthBudget = null;

        budget.forEach((el) => {
            if (el.sector !== '') {
                const key = el.sector;
                if (sector[key] == null) {
                    sector[key] = { total: null, year: null, quarter: null, month: null };
                }

                if (el.time_period === 'year') {
                    sector[key].year = el.amount;
                }
                else if (el.time_period === 'quarter') {
                    sector[key].quarter = el.amount;
                }
                else if (el.time_period === 'month') {
                    sector[key].month = el.amount;
                }
                else sector[key].total = el.amount;
            }
            else {
                if (el.time_period === 'year') {
                    yearBudget = el.amount;
                }
                else if (el.time_period === 'quarter') {
                    quarterBudget = el.amount;
                }
                else if (el.time_period === 'month') monthBudget = el.amount;
                else totalBudget = el.amount;
            }
        });
        setBList({ total: totalBudget, year: yearBudget, quarter: quarterBudget, month: monthBudget, sector });

    };


    const data = () => {
        investments.forEach((e) => {
            if (e.sector == 'finTech') {
                let data = (bList.sector.finTech.total - e.amount)
                if (0 <= data) {
                    // console.log("finTech pass", e.id)
                } else {
                    // console.log("finTech not-pass", e.id, data)
                }
            }
            else if (e.sector == 'BigData') {

                let totalB = bList.sector.BigData.quarter

                console.log("totalB :", totalB)

                let data = totalB - e.amount

                console.log(' ', totalB + "-" + e.amount + "=" + data)

                totalB = data

                // console.log('after : ', totalB + "-" + e.amount + "=" + data)

                console.log(totalB)

                // // if (0 <= data) {
                // //     console.log("BigData pass", e, data)
                // //     totalB = data
                // // } else {
                //     // console.log("BigData not-pass", e, data)
                // }
            }
            else if (e.sector == 'E-Commerce') {
                // console.log(e)
            }
            else {
                // console.log(e)
            }
        })
    }

    useEffect(() => {
        transformData()
    }, [])



    return (
        <div>
            <button onClick={data}>Data</button>
            {/* {console.log(bList)} */}
        </div>
    )

}


export default Dynamic_obj
