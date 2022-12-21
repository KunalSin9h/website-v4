import HeroTitleWithDarkButton from "./HeroTitleWithDarkButton";
import ListItems from "./ListItem";
import Project from "./Project";
import Link from "next/link";
import { Righteous } from "@next/font/google";
import BoxGradient from "./BoxGradient";
import Bash from "./Base";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Page(): JSX.Element {
  return (
    <>
      <div>
        <HeroTitleWithDarkButton text="Kunal Singh" />
        <p className="mx-2 text-center text-sm dark:text-white md:text-xl">
          Hi there 👋, my name is <BoxGradient text="Kunal" />
          and I&apos;m currently pursuing a degree in{" "}
          <BoxGradient
            text="Computer Science and
          Engineering"
          />
          . I do <BoxGradient text="Full Stack Web Development" />, using
          technologies like <BoxGradient text="React" />,{" "}
          <BoxGradient text="NextJS" />, <BoxGradient text="TailwindCSS" />, and
          <BoxGradient text="TypeScript" />. I&apos;m also passionate about
          <BoxGradient text="Cloud computing and Databases" />
          (Backend in other words), and I enjoy using <BoxGradient text="C++" />{" "}
          for competitive programming and <BoxGradient text="Python" /> for
          scripting. I love contributing to{" "}
          <BoxGradient text="Open-Source Software Development" />. Thanks for
          reading!
        </p>
      </div>
      <section className="mx-auto my-8 block max-w-xs space-y-3 rounded-lg bg-white from-slate-600 to-slate-800 p-6 shadow-xl ring-1 ring-slate-900/5  transition hover:rotate-6  dark:bg-gradient-to-r  dark:ring-1 dark:ring-black">
        <ul className="flex items-center justify-center">
          <ListItems
            url="https://github.com/kunalsin9h"
            src="/images/github.png"
            alt="GitHub logo"
          />
          <ListItems
            url="https://twitter.com/kunalsin9h"
            src="/images/twitter.png"
            alt="Twitter logo"
          />
          <ListItems
            url="https://linkedin.com/in/kunalsin9h"
            src="/images/linkedin.png"
            alt="LinkedIn logo"
          />
          <ListItems
            url="mailto:kunal@kunalsin9h.dev"
            src="/images/mail.png"
            alt="Email logo"
          />
        </ul>
      </section>
      <section>
        <p
          className={`${righteous.className} mx-4 text-4xl font-extrabold dark:text-white`}
        >
          Projects
        </p>
        <div className="my-4 flex items-center justify-center">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Project
              banner="/project-images/znip-banner.png"
              logo="/project-images/znip-logo.png"
              name="znip"
              desc="znip is the best way to use and manage your snippets"
              live="https://znip.web.app"
              source="https://github.com/znip-in"
            />
            <Project
              banner="/project-images/commit-banner.gif"
              logo="/project-images/commit-logo.svg"
              name="Commit"
              desc="Git commit simulator using Conventional Commits conventions."
              source="https://github.com/kunalsin9h/commit"
            />
            <Project
              banner="/project-images/doingto-banner.png"
              logo="/project-images/doingto-logo.png"
              name="Doingto"
              desc="doingto is simple but usefull ToDo app which lets you to divide you progress into three category viz todo, doing and done"
              live="https://doingto.live"
              source="https://github.com/KunalSin9h/doingto"
            />
            <Project
              logo="/project-images/gita-logo.png"
              name="Gita-Verse"
              desc="A Twitter Bot for tweeting all the verses of Bhagavad Gita."
              live="https://twitter.com/ShriGitaVerse"
              source="https://github.com/KunalSin9h/Gita-Verse"
            />
            <Project
              logo="/project-images/coptit-logo.png"
              name="Coptit Discord Bot"
              desc="Discord bot for college programming club's discord server"
              source="https://github.com/KunalSin9h/coptit-bot"
            />
          </div>
        </div>
      </section>
      <br />
      <br />
    </>
  );
}
