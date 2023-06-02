import React, { useEffect, useState } from 'react'


const Test = () => {
    const [budgetList, setBudgetList] = useState()
    const [investmentsList, setInvestments] = useState()


    const budget = [
        {
            id: "1",
            amount: "75",
            time_period: "month",
            sector: ""
        },
        {
            id: "2",
            amount: "30",
            time_period: "",
            sector: "finTech"
        },
        {
            id: "3",
            amount: "25",
            time_period: "quarter",
            sector: "BigData"
        },
        {
            id: "4",
            amount: "70",
            time_period: "year",
            sector: "E-Commerce"
        },
        {
            id: "5",
            amount: "350",
            time_period: "year",
            sector: ""
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



    const bud = () => {
        budget.map((item) => {
            investments.map((item2) => {
                // if (item.sector === item2.sector) {
                // console.log(item, item2)
                // console.log(item.amount + "-" + item2.amount + " : " + (item.amount - item2.amount))
                // }
                if (item.sector == 0) {
                    console.log(item.amount - item2.amount)
                }
            })
        })
    }
    const inv = () => {
        investments.map((item) => {

        })
    }

    // console.log(budget)
    // console.log(investments)

    useEffect(() => {
        bud()
        inv()
    }, [])

    const show = () => {
        console.log('run')
        bud();
        inv();
    }


    return (
        <>
            <button onClick={show}> show</button>
        </>
    )
}

export default Test
