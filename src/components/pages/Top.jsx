import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

import { ComposedChart1 } from '../atoms/chart/ComposedChart'
import styled from 'styled-components'

export const Top = () => {
  const data = [
    {
      subject: "Math",
      A: 120,
      B: 110,
      fullMark: 150
    },
    {
      subject: "Chinese",
      A: 98,
      B: 130,
      fullMark: 150
    },
    {
      subject: "English",
      A: 86,
      B: 130,
      fullMark: 150
    },
    {
      subject: "Geography",
      A: 99,
      B: 100,
      fullMark: 150
    },
    {
      subject: "Physics",
      A: 85,
      B: 90,
      fullMark: 150
    },
    {
      subject: "History",
      A: 65,
      B: 85,
      fullMark: 150
    }
  ];
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Topページ</h1>
      <SRow>
        <div style={{ paddingBottom: '20%' }}>
          <h2>・RadarChart</h2>
          <p>チャート描画テスト</p>
        </div>
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </SRow>
      <SRow>
        <div style={{ paddingBottom: '20%' }}>
          <h2>・ComposedChart</h2>
          <p>チャート描画テスト</p>
        </div>
        <ComposedChart1 />
      </SRow>
    </>
  );
}

const SRow = styled.div`
  color: #504c4c;
  display: flex;
  flex-direction: Row;
  justify-content: center;
  align-items: center;
`