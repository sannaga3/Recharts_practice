import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip ,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

export const ComposedChart1 = () => {
  const data = [
    {
      userName: "mike",
      totalPosts: 10
    },
    {
      userName: "mary",
      totalPosts: 8
    },
    {
      userName: "jane",
      totalPosts: 1
    },
  ];
  return (
    <>
      <ComposedChart width={500} height={300} data={data} margin={{ top: 30, right: 30, bottom: 0, left: 0 }}>
        <XAxis dataKey="userName" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="totalPosts" barSize={30} fill="#413ea0" />
      </ComposedChart>
    </>
  );
}