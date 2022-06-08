import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, XAxis, YAxis, Tooltip, ResponsiveContainer   } from 'recharts';
import "./Dashboard.css"


const Dashboard = () => {
    const data=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
          
    return (
        <div className="charts">
                    <div>
                    <PieChart width={730} height={250}>
              <Pie data={data} dataKey="investment" fill="#82ca9d" monthKey="month" outerRadious={50} revenue="revenue" cx="50%" cy="50%" label></Pie>
              <Pie data={data} dataKey="revenue" fill="#8884d8" monthKey="month" innerRadious={60} outerRadius={80} revenue="revenue" cx="50%" cy="50%" label></Pie>
                <Tooltip></Tooltip>
            </PieChart>
                    </div>
            
            <div>
            <BarChart height={250} width={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey='revenue' fill="#8884d8"></Bar>
                    <Bar dataKey="investment" fill="#82ca9d"></Bar>
                </BarChart>
            </div>
            
            

        </div>
                
            
        
    );
};

export default Dashboard;