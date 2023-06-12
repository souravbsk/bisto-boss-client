import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBus, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const lineChartColor = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
];
const pieCartColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("admin-stats");
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["cart-stats"],
    queryFn: async () => {
      const res = await axiosSecure("order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold ">
        Hi, Welcome Back! {user?.displayName}
      </h1>
      <div className="stats mt-8 w-full stats-vertical md:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaWallet className="text-3xl text-[#D1A054]"></FaWallet>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats.revenue}</div>
          
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl text-[#D1A054]"></FaUsers>
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">{stats.customers}</div>
          
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUtensils className="text-3xl text-[#D1A054]"></FaUtensils>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.products}</div>
          
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBus className="text-3xl text-[#D1A054]"></FaBus>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <div className="md:w-1/2">
          <ResponsiveContainer width="100%" height={400}>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Legend></Legend>
            <Bar
              dataKey="totalPrice"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={lineChartColor[index % 20]} />
              ))}
            </Bar>
          </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-1/2">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
              <Legend></Legend>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                  name={entry.category}
                    key={`cell-${index}`}
                    fill={pieCartColors[index % pieCartColors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
