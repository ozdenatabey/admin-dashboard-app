import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";

// eslint-disable-next-line react/prop-types
function LineChart({ isDashboard = false }) {
  return (
    <ResponsiveLine
      data={data}
      theme={{
        text: {
          fontSize: 12,
          fill: "oklch(var(--bc))",
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              stroke: "#bfbfbf",
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 16,
              fill: "oklch(var(--bc))",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          ticks: {
            line: {
              stroke: "#bfbfbf",
              strokeWidth: 1,
            },
            text: {
              fontSize: 12,
              fill: "#bfbfbf",
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            stroke: "#bfbfbf",
            strokeWidth: 1,
          },
        },

        tooltip: {
          wrapper: {},
          container: {
            background: "#ffffff",
            color: "#333333",
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Transportation",
        legendOffset: 40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Count",
        legendOffset: -45,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      colors={{ scheme: "tableau10" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableArea={true}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
        {
          anchor: "right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 15,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default LineChart;
