import React from 'react';
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import Sidebar from '../components/Sidebar';

const Analytics = () => {
  const chartConfig = {
    type: "line",
    height: 500,
    width: '100%',
    series: [
      {
        name: "Bookings",
        data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
        background: '#f1f5f9',
      },
      title: {
        text: 'Houseboat Booking Analytics',
        align: 'left',
        style: {
          fontSize: '24px',
          color: '#000000',
        },
      },
      colors: ["#000000"], 
      stroke: {
        curve: "smooth",
        width: 3,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
        labels: {
          style: {
            colors: "#000000", 
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#000000", 
          },
        },
      },
      grid: {
        borderColor: "#000000", 
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <div className="flex h-screen bg-f1f5f9"> 
      <Sidebar />
      <Card className="mx-auto w-full">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center bg-white text-black" 
        >
          <div>
            <Typography variant="h6" color="blue-gray">
              Houseboat Booking Analytics
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="max-w-sm font-normal"
            >
              Visualize the booking trends for houseboats using this chart.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Analytics;