# LinkedIn article (EN): Why ideas should bloom overnight

Status: draft for owner approval. Published by the founder as a LinkedIn article, or as issue 1 of a newsletter (suggested name: **Overnight**, described as "Notes on turning ideas into working prototypes, one night at a time."). Cover: `assets/article-cover-1920x1080.png`. About 800 words.

- **Title (≤150):** Why ideas should bloom overnight
- **SEO title (LinkedIn "SEO title", ≤60):** Why AI prototypes should take one night, not one quarter
- **SEO description (≤160):** What has to be true for an idea to become a working, tested prototype overnight, and why a human still makes every decision that matters.

---

Most ideas don't fail because they're bad. They stall because finding out whether they're good takes too long.

You know the pattern. Someone has an idea: a chat over the company's documents, an assistant for the support team, a connection between two systems that never talk. It sounds promising. Then comes the estimate, the planning, the prioritisation, the wait for a free sprint. By the time anyone can click on something, weeks have passed, the original question has blurred, and the person who had the idea has moved on to the next one.

For more than 20 years I've helped teams build systems that work in production. The slowest part was rarely the building itself. It was the time between "what if" and "let me try it".

## What changed

AI agents can now write and test a large amount of code in a single night. That doesn't make them architects. Left alone, they build confidently in the wrong direction, skip the boring cases, and make choices that aren't theirs to make.

But with direction and judgement around them, they change the economics of the first version. A first version that used to take weeks can now take a night, if a few things are true.

## What has to be true

**1. The scope fits one night.** An overnight prototype is one clear idea with one core flow you can try. Not a product, not a platform. That is why every Moonbloom night starts with a short evening conversation where we cut the idea down to the part that answers the most important question. If the idea is bigger, the rest becomes further nights.

**2. There is a plan before there is code.** Before the agents start, the idea becomes a written plan: what to build, what "working" means, what is out of scope, and how it will be tested. A senior architect reviews that plan. Most of the quality of the morning result is decided here, in the evening.

**3. Tests are part of the build, not an afterthought.** The agents write the code and its tests together. Tests are how the agents know what works, and how you know it the next morning. A prototype without tests is a demo you have to take on faith.

**4. The agents don't make your decisions.** Some choices shouldn't be made by an agent at 3 a.m.: which model to use for real data, who should have access, what to do when the data is ambiguous. Those go on a short list of open decisions. In my experience, that list is often the most valuable thing on the table in the morning.

**5. A human approves everything that matters.** You approve the scope in the evening and the result in the morning. Nothing ships without human approval. Nobody watches the build all night, and nobody needs to: that's what the plan and the tests are for.

## What you get in the morning

When those things are true, you wake up to four things:

- a working prototype you can click through, call or try;
- its automated tests;
- a short demo of what was built and how to try it;
- the open decisions, ready for your answers.

Then you decide: approve it, refine it over another night, or plan the path to production.

## What it isn't

An overnight prototype is not a finished product, and pretending otherwise would waste your time. It won't have every edge case, the hardened infrastructure or the access model a production system needs. When a prototype earns its place, that work comes next: CI/CD, infrastructure as code, monitoring, hardening. That's slower, deliberate work, and it should be.

What the overnight prototype gives you is an honest answer, fast, to the question that matters first: does this idea work?

## Why I started Moonbloom Labs

I started Moonbloom Labs to make that first answer cheap. You plant an idea in the evening; you wake up to something you can try, and to the questions only you can answer.

We build RAG search over company documents, knowledge bases, chatbots and AI assistants, gamification, AI integrations, and the DevOps and cloud work to take good prototypes to production. We work in English and Slovak.

If you have an idea waiting on your list, I'd love to hear it: moonbloomlabs.com.

Ideas bloom overnight.

_Michal Maxian, founder of Moonbloom Labs, AI & cloud architect_
