import HeroTitleWithDarkButton from "./HeroTitleWithDarkButton";
import ListItems from "./ListItem";
import Project from "./Project";
import Link from "next/link";

export default function Page(): JSX.Element {
  return (
    <>
      <div>
        <HeroTitleWithDarkButton text="Kunal Singh" />
        <p className="mx-2 text-center text-xl dark:text-white">
          Hi there 👋, my name is Kunal and I&apos;m currently pursuing a degree
          in Computer Science and Engineering. I do full stack web development,
          using technologies like React, NextJS, TailwindCSS, and TypeScript.
          I&apos;m also passionate about cloud computing and databases (Backend
          in other words), and I enjoy using C++ for competitive programming and
          Python for scripting. In my free time, I love contributing to
          open-source software development and using Vim as my text editor of
          choice. Thanks for reading!
        </p>
      </div>
      <section className="mx-auto my-8 block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-xl ring-1 ring-slate-900/5  transition hover:rotate-6  dark:bg-[#121212] dark:ring-1 dark:ring-white ">
        <ul className="flex items-center justify-center">
          <ListItems
            url="https://github.com/kunalsin9h"
            src="/github.png"
            alt="GitHub logo"
          />
          <ListItems
            url="https://twitter.com/kunalsin9h"
            src="/twitter.png"
            alt="Twitter logo"
          />
          <ListItems
            url="https://linkedin.com/in/kunalsin9h"
            src="/linkedin.png"
            alt="LinkedIn logo"
          />
          <ListItems
            url="mailto:kunal@kunalsin9h.dev"
            src="/mail.png"
            alt="Email logo"
          />
          <Link href="/blog">
            <p className="ml-2 text-2xl font-bold hover:text-slate-500 dark:text-white dark:hover:text-slate-300">
              /blog
            </p>
          </Link>
        </ul>
      </section>
      <section>
        <p className="mx-4 text-4xl font-extrabold dark:text-white">Projects</p>
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
      <section>
        <p className="mx-4 text-4xl font-extrabold dark:text-white">Blogs</p>
      </section>
    </>
  );
}
