import { useLoaderData } from "react-router-dom";
import { FcStatistics } from "react-icons/fc";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function ReChart() {
  const allProduct = useLoaderData();

  // Check if allProduct is an object or an array
  const data = Array.isArray(allProduct) ? allProduct : [allProduct];

  return (
    <div>
      {/* banner section  */}
      <div className="p-12 bg-purple-500">
        <h1 className="text-gray-100 font-bold text-center text-4xl pt-4">
          Statistics
        </h1>
        <p className="text-center text-md text-gray-100 py-5 font-semibold">
          Statistics is the science of collecting, analyzing, interpreting, and
          presenting data. It plays a crucial role in understanding patterns,
          making informed decisions, and solving real-world problems across
          various fields, such as business, healthcare, social sciences, and
          engineering. By analyzing data, statisticians can uncover trends, make
          predictions, and contribute to research and development.
        </p>
      </div>
      <div className="w-10/12 mx-auto my-10">
    <div className="flex space-x-3 items-center">
    <h1 className="text-4xl text-gray-700 font-bold py-5">Statistics</h1>
    <p className="text-4xl text-gray-700 font-bold"><FcStatistics /></p>
    </div>
        <div className="bg-[#FFFFFF0] shadow-md p-5">
          <BarChart
            width={1200}
            height={450}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="price" fill="#A855F7" />
            <Bar yAxisId="right" dataKey="rating" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default ReChart;
