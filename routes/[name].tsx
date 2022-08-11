/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { BarChart } from "https://deno.land/x/d3nodata@v.0.0.1.1/charts.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
