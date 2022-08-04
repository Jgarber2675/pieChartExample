/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import BarChart from "../islands/BarChart.tsx";
import PieChart from "../islands/PieChart.tsx";

{/*  */}

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <BarChart/>
      <PieChart strokeWidth = {1} width = {600} fontSize = {50} labelDistanceToEdge = {150}/>
    </div>
  );
}
