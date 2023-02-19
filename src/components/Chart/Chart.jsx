import React from 'react';
import './Chart.css';
 import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';


const Chart = () => {

    const data = [
        {
          name: 'MAY',
          Deals_Lost: 300,
          Deals_Won: 200,
         
        },
        {
          name: 'JUN',
          Deals_Lost: 380,
          Deals_Won: 300,
          
        },
        {
          name: 'JUL',
          Deals_Lost: 150,
          Deals_Won: 110,
          
        },
        {
          name: 'AUG',
          Deals_Lost: 300,
          Deals_Won: 210,
          
        },
        {
          name: 'SEPT',
          Deals_Lost: 200,
          Deals_Won: 180,
          
        },
        {
          name: 'OCT',
          Deals_Lost: 200,
          Deals_Won: 120,
          
        },      
         
      ];

  return (
    <div>
        <div className='chartcontainer'>
        <BarChart
          width={400}
          height={300}
          data={data}          
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}        
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Deals_Won" barSize={15} stackId="a" fill="#0000FF" />
          <Bar dataKey="Deals_Lost" stackId="a" fill="#FF1493" radius={[5, 5, 0, 0]} />
        </BarChart>
        </div>
        
    </div>
  )
}

export default Chart