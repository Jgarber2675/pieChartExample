/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import PieChart from "../islands/PieChart.tsx";
import ChoroplethChart from "../islands/ChoroplethChart.tsx";
import CSV  from "https://deno.land/x/csv_web@v1.0/mod.ts";
import * as d3 from "d3";


{/*  */}

export default function Home() {
  const props = {
    strokeWidth: 1,
    width : 500,
    fontSide : 50,
    labelDistanceToEdge : 300,
    fontSize: '10px',
    colorStart : "yellow",
    colorEnd : "green",
    data:[{data: 4, label: 'bagels'},{data: 2, label: 'bananas'},{data: 14, label: 'grapes'},{data: 16, label: 'other stuff'}]
  }

  // d3.csv()

  // const WorldData = fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv")
  //   .then(res => res.text())
  //   .then(data  => {
      
  //     console.log(data, typeof data, "data");
  //   })

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <PieChart {...props} />
      <ChoroplethChart  />
    </div>
  );
}
