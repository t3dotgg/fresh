/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import Counter from "../islands/Counter.tsx";
import CounterComponent from "../Components/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <div>Hi stream</div>
      <Counter start={5} />

      <CounterComponent start={10} />
    </div>
  );
}
