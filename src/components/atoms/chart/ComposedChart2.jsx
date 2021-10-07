import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip ,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

export const ComposedChart2 = (props) => {
  const { postCountList } = props
  let data = []
  postCountList.map((post) => {
    data.push(
      {
        userId: `user${post[0]}`,
        totalPosts: post[1]
      }
    )
  })
  return (
    <>
      <ComposedChart width={800} height={300} data={data} margin={{ top: 30, right: 30, bottom: 0, left: 0 }}>
        <XAxis dataKey="userId" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="totalPosts" barSize={30} fill="#413ea0" />
      </ComposedChart>
    </>
  );
}