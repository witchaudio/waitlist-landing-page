'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ResponsiveLine } from "@nivo/line"
import Image from "next/image";


export default function Hero() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-4">
      <Image alt="Logo" src="/Output_logo.png" width={100} height={100} />
        <div className="space-x-4">
          {/* <Link className="hover:text-gray-300" href="#">
            Early access
          </Link> */}
          <Link className="hover:text-gray-300" href="#cta">
            About Us
          </Link>
          <Link className="hover:text-gray-300" href="#faq">
            FAQ
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/signup">
          <Button className="bg-black text-[#D4AF37] custom-hover">Sign up</Button>
          </Link>
        </div>
      </nav>
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-bold mb-4">Get on the waiting list</h1>
        <p className="mb-8 max-w-2xl text-gray-400">
          We are working hard on the platform to make it available for everyone, meanwhile we will grant early access to
          the ones that sign up
        </p>
        <QAProgressChart className="w-full h-[50vh] min-h-[300px]" />
      </div>
      {/* <div className="text-xs text-gray-400 p-4 text-center">EARLY ACCESS 2024</div> */}
    </div>
  )
}

function QAProgressChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Reported Bugs",
            data: [
              { x: "Week 1", y: 120 },
              { x: "Week 2", y: 108 },
              { x: "Week 3", y: 134 },
              { x: "Week 4", y: 89 },
              { x: "Week 5", y: 70 },
              { x: "Week 6", y: 45 },
            ],
          },
          {
            id: "Resolved Bugs",
            data: [
              { x: "Week 1", y: 30 },
              { x: "Week 2", y: 45 },
              { x: "Week 3", y: 80 },
              { x: "Week 4", y: 110 },
              { x: "Week 5", y: 90 },
              { x: "Week 6", y: 100 },
            ],
          }
        ]}
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: 0, max: "auto", stacked: false }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Week',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Number of Bugs',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        colors={["#ff6347", "#32cd32"]}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        areaOpacity={0.3}
        useMesh={true}
        enableArea={true}
        gridYValues={5}
        tooltip={({ point }) => {
          return (
            <div style={{ color: point.serieColor, background: 'white', padding: '5px', border: '1px solid black', borderRadius: '4px' }}>
              <strong>{point.serieId}</strong>
              <div>{String(point.data.x)}: {String(point.data.y)} bugs</div>
            </div>
          );
        }}
        theme={{
          grid: {
            line: {
              stroke: "#ebedf0",
              strokeWidth: 1
            }
          }
        }}
      />
    </div>
  );
}

