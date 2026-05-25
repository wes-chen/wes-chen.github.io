As AI adoption becomes more widespread, we ultimately need to shift our attention towards how we harness it to enrich our lives rather than outsourcing critical thought to LLMs. The overarching cautionary tale is to avoid having AI do thinking for you, but responsibility of the guardrail is still left to the user.

In this post I want to explore an in depth tale of how we can use AI to learn rather than giving up the abstractions to 

At work, I was discussing agent/skill authoring with a staff software engineer who was building the agent platform. He asserted that we should try really hard to separate concerns (i.e. deterministic orchestration of a state machine versus nondeterministic steps within each state) and while in principle I agreed with him, I struggled to communicate a sketch on how I would implement it in my service. He then told me to “work on my fundamentals” and that hurt quite a bit. But it was incredibly motivating and he pointed me towards a Temporal blog for a pointer, and quickly I realized I didn’t really understand Temporal itself at all. I was definitely a customer of Temporal backed services but had very little understanding of how it worked under the hood.

The natural inclination to reading docs is a great intuition. However sometimes it can be difficult to navigate: hard to find, you’re not in the target audience, disjoint vocabulary. AI tools can be incredibly useful to overcome these gaps, as long as you know how to prompt it. Similarly, verbatim prompts out of the box are quite hard to share as everyone interacts with their AI tools differently (different memory systems, output styles, skills). The key point is that you should guide your AI tool to teach you in a way that works for you. For me it looks could like the following:

I want to learn more about Temporal. I don’t know anything about it other than it is a framework and my upstream services rely on it under the hood. Teach me some keywords and explain it to me like I’m learning it for the first time. I’m a software engineer working in ML Platform. Try to explain it to me visually and we can run through a simple example together. Interview me first to flesh out this task and get more context on what I already know so you can set up a course plan.

Try it yourself! The best part of this is that you can keep guiding it to give you knowledge in ways that you know will work for you. On a meta point, prompting is all about managing context. To me this space doesn’t have best practices yet today, or I have yet to learn such best practices. Then all that we are left with is intuition. I want to share a few guiding intuitions I’ve discovered to establish base context to more accurately get what you want (in terms of learning, but I think this is generalizable to other tasks as well). 

Why establish the base context?
The LLM is naive and dumb. It knows nothing about you, so in a way it is no better than native documentation. However providing the base context can help seed some direction on where to go.
Provide what you know already
You don’t want the LLM to repeat what you already know, but giving it an example of what you know can help it understand your current level.
Provide direction of what you want to learn
Imagine I asked you to teach me about your life. That’s super vague and is unfair to both of us without further guidance. Same principle here - if you don’t specify what you want, the output will get even worse
Have AI ask you questions
Maybe your prompt isn’t good enough, or the task is unclear. Give the AI a fighting chance to orient itself through AskUserQuestion (it’s just a few multiple choice questions!)
Interrupt the AI at any time to ask for clarifications. 
This is where AI becomes a 1:1 teacher rather than just a lecture series. You get the benefit of personal tutoring, but if you don’t ask, it’ll assume you understand the material. 
Have AI quiz you to verify you’ve learned correctly
After you’ve finished a lesson, verify that the learning is actually sticking by asking for a comprehensive quiz. I now understand why schooling always has tests, they are actually great to verify learning (and this time there’s no consequences for being wrong!).
Have AI give you further resources or other directions


Working with these intuitions in your head as your prompt should give you higher quality responses. Surprisingly this has enabled me to learn concepts way faster than I used to before. Now the hard part is developing habits to apply this methodology to continuously learn new things…
