---
layout: ../../layouts/Post.astro
title: Learning With AI
date: 2026-05-25
description: Ew, AI. Yes. But how do we exploit it?
draft: true
---

At work, a staff software engineer and I were working through how to build my agentic service. He asserted that we should try really hard to separate concerns as a core design principle and while I agreed with him, I struggled to communicate a sketch on how I would implement it in my service. He then told me to “work on my fundamentals” and that hurt quite a bit. But it was incredibly motivating and he pointed me towards a [technical blog from Temporal](https://temporal.io/blog/google-adk-temporal-integration-bts) for an example of how to execute this separation, and while helpful, I quickly realized I didn’t really understand the internals of Temporal, a framework that guarantees reliable execution of long multi-step jobs. I had relied on this framework indirectly every day at work, and with AI I thought I could keep getting away with not knowing it, since surely it could solve everything for me, right? However, my ego paid the price when I was actually tested by someone well versed.

The natural inclination to read docs is a great intuition. However sometimes it can be difficult to navigate: hard to find, you’re not in the target audience, disjoint vocabulary. AI tools can be incredibly useful to overcome these gaps, as long as you know how to prompt them. Similarly, verbatim prompts out of the box are quite hard to share as everyone interacts with their AI tools differently (different memory systems, output styles, skills). The key point is that you should guide your AI tool to teach you in a way that works for you. For me it could look like the following:

```
I want to learn more about Temporal. I don’t know anything about it other than it is a framework and my upstream services rely on it under the hood. Teach me some keywords and explain it to me like I’m learning it for the first time. I’m a software engineer working in ML Platform. Try to explain it to me visually and we can run through a simple example together. Interview me first to flesh out this task and get more context on what I already know so you can set up a course plan.
```

Try it yourself! The best part of this is that you can keep guiding it to give you knowledge in ways that you know will work for you. On a meta point, prompting is all about [managing context](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). To me this space doesn’t have best practices yet today, or I have yet to learn such best practices. Then all that we are left with is intuition. I want to share a few guiding intuitions I’ve discovered to establish base context to more accurately get what you want (in terms of learning, but I think this is generalizable to other tasks as well). In the beginning, the LLM is naive and knows nothing about you, so initially it is no better than native documentation. The difference is that you will explicitly seed it with context for it to tailor your learning experience.

### Provide where you are and what you want to learn
You don’t want the LLM to repeat what you already know, but giving it an example of what you know can help it understand your current level. Essentially, you're centering your experience around your current skill level. 

Same thing with forward looking guidance. Imagine I asked you to teach me about your life. That’s super vague and is unfair to both of us without further guidance. If you don’t specify what you want, garbage in, garbage out.

### Make AI interview you to define your goal thoroughly
Many times I find that my prompt is insufficient in detail, or it's fuzzy what exactly I want to execute. Give the AI a fighting chance to orient itself through AskUserQuestion - it’s just a few multiple choice questions!

### Ask questions to the AI
This is where AI becomes a 1:1 teacher rather than just a lecture series. You get the benefit of personal tutoring, but if you don’t ask, it’ll assume you understand the material. One technique I use is I try to type back my understanding of the concept in my own words, and ask if this understanding is correct.

### Verify your comprehension with AI
After you’ve finished a lesson, ensure that the learning is actually sticking by asking for a comprehensive quiz. I now understand why schooling always has tests, they are actually great to verify learning (and this time there’s no consequences for being wrong!).

### Have AI give you further resources or other directions
Learning is continuous. You can tell AI to store your learning progress in a log somewhere. Then, later on, you can continue the learning loop by building off the knowledge you learned today, and add more depth into your lesson plan.


Working with these intuitions in your head as your prompt should give you higher quality responses. Surprisingly this has enabled me to learn concepts faster and more comprehensively than I used to before. Now the hard part is developing habits to apply this methodology to continuously learn new things.

Navigating the line between actually learning something with AI versus [using it as a crutch to hide your weaknesses](https://news.harvard.edu/gazette/story/2025/11/is-ai-dulling-our-minds/) is what will ultimately become the differentiator for those who desire to stand out from others. For me, my next encounter with the staff engineer awaits at the design document review, but this time I will be well equipped with the prerequisite knowledge to defend my technical design. 
