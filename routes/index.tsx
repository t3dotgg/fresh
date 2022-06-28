/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Content from "../Components/contents.tsx";

const getReusedData = async () => {
  const startedAt = new Date();
  const githubProfile = await (
    await fetch("https://api.github.com/users/theobr")
  ).json();

  const endedAt = new Date();

  const timeElapsed = endedAt.getTime() - startedAt.getTime();

  console.log("Time to fetch github info", timeElapsed);

  return {
    startedAt: startedAt.getTime(),
    endedAt: endedAt.getTime(),
    timeElapsed,
    ...githubProfile,
  };
};

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers<{}> = {
  async GET(_req, ctx) {
    const data = await getReusedData();
    return ctx.render(data);
  },
};

export default function Home(props: any) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Content {...props.data} />
    </div>
  );
}
