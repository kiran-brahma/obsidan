---
title: How I built and manage my Blog
description: Understand the tools and software used by me in running this blog. The goal was to have a blog with WikiLinks and Graph View as Obsidian while spending no money
aliases: 
draft: false
tags:
  - Technology
  - Writing
  - Blog
date: 2024-04-08
---
## Key Takeaways

- [Obsidian](https://obsidian.md/) for content management and writing
	- All my images are hosted on [Imgur](https://imgur.com) and use [the Imgur plugin](https://github.com/gavvvr/obsidian-imgur-plugin) to upload images from Obsidian directly 
- I use [Quartz](https://quartz.jzhao.xyz/) for the development of my website
- I host my website on [Vercel](https://vercel.com)
- I use [Grammarly](https://app.grammarly.com/) to ensure the correctness of my writing
- A Plethora of alternatives exist, so explore all possibilities before making a decision

## Introduction

Building a blog is a simple process due to the numerous tools available, allowing anyone to get started quickly. Despite the numerous tools available, I was never truly satisfied with the offerings. Looking back I realse it was just an excuse to not start writing for my blog in my never-ending quest for perfection. Finally, in late 2023 I bit the bullet and got a blog up on [Vercel](https://vercel.com). 

Now once the blog was operational, I faced a similar challenge as most bloggers, an easy process to publish a post while allowing you to focus most effort on writing. As expected, it wasn't easy as I had to juggle between multiple apps to have a post published.

## Technology Stack

I use [Obsidian](https://obsidian.md) as my notes app, so I wanted to find a way to publish my blog posts once I finished drafting and editing my post.

After trying a bunch of tools and scouring [Reddit](https://reddit.com) for multiple hours, I identified [Quartz](https://quartz.jzhao.xyz/)as the solution for my needs. It involved a little coding, which I already learnt when revamping my company's website](https://knighthood.co) from [Wix](https://www.wix.com/) to [Next.js](https://nextjs.org/). 

Before Quartz, I just used the same code for both my website and blog, but I wanted my blog to be simpler, and more focused on writing. Keen to replicate [Obsidian Publish](https://obsidian.md/publish) but without any monthly recurring cost. 

 [Quartz](https://quartz.jzhao.xyz/) was the perfect template as  I just had to add my content and connect it to my domain. Quartz's robust documentation aided in ensuring I faced no issues in the blog's deployment
 
Since 2023, I have been using the [Imgur plugin](https://github.com/gavvvr/obsidian-imgur-plugin) to host all images in my notes as iCloud had just 5GB storage. I decided to host images outside to reduce cloud storage. Simply put, I just had to focus on writing and nothing else

## Hosting

I have been hosting my [company's website](https://knighthood.co) on  [Vercel](https://vercel.com) since 2022. It is easy to go live while providing additional insights and analytics on how a website is doing. 

Quartz's clear documentation provides all the necessary information, so took me less than 5 minutes to go live. Once I tweaked the blog's code to my liking on [VS Code]([Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)), linked it to a [GitHub](https://github.com/) repo and deployed it on Vercel. 

I spent some time fine-tuning the layout to make sure my website loads fast on both mobile and desktop. Aimed for a score of 90+ across both platforms

![Kiran Brahma Blog Page Speed](https://i.imgur.com/wSh7vaq.png)


## Content Editing

A lot is stated about AI taking over all written content generation but over the past year, I have realised that currently, we are still away from AI taking over all writing work from Humans. 

### Workflow
- Draft a new post as a [private page](https://quartz.jzhao.xyz/features/private-pages) in Obsidian
- Use [Grammarly](https://app.grammarly.com/) to ensure no obvious errors. 
- Use custom [[ai-prompts|AI prompts]] for an edited version of my writing
- Make changes based on suggestions
- Final review 24 hours later before posting it on blog
## Alternatives

There's no need to go through a similar grind as me to start a blog. A multitude of free and paid options exist, which can get you up and running quickly. 

### WordPress 

It is the big daddy of web development. Currently, 43% <sup><a href="https://colorlib.com/wp/wordpress-statistics/">1</a></sup>. of all online websites have been built on WordPress. You will need to subscribe for hosting on WordPress. I suggest exploring  [WordPress](https://wordpress.com/pricing/), where it starts from Rs 160/ month. As it is open source, there are numerous options available to host your website on WordPress

### Ghost

[Ghost](https://ghost.org/) is an amazing platform, where you can just concentrate on writing great blog content, while Ghost takes care of the rest. The possibilities are endless as I did explore it quite a bit. 

If my blog ever blows up and gets tons of readers, I might consider using Ghost. Similar to WordPress, it's open source so multiple hosting options exist. The platform allows you to build your audience along with the option for paid users. You can give the platform a trial for free at [DigitalPress](https://www.digitalpress.blog/pricing)

### Medium

[Medium](https://medium.com) is a great platform to start a new blog, simply for the reason that finding an audience will be easier due to the large cohort of people who use the platform. It is simple to start.

Mapping a custom domain requires a subscription, costing you $5 monthly. Secondly, if you ever choose to move out of the platform, you can export the posts in HTML files, which are not as easily malleable as a [Markdown](https://www.markdownguide.org/getting-started/) format. 
Medium can be a good springboard for your blog, but keep in mind the limitations if you plan to move on in the future.

### Hashnode

[Hashnode](https://hashnode.com) caters to blogging by Developers. It's a great blogging platform that should meet most needs of anyone wishing to start a blog as it is highly flexible, provides multiple customisation options, a newsletter, maps your domain, has great SEO features and use it as CMS for your blog. The best part is that it's free to use and you pay only if you want access to more premium features such as AI integration. It has a developer focussed user base, so the platform may not meet the needs of every writer but non-techies can host their blog without any effort

### Substack
If you are keen to build your audience and generate revenue then [SubStack](https://substack.com) is one of the best platforms to do so after [Ghost](/#ghost). You pay only if you charge for your readers, else it's free to use for all features. However, you will need to pay $50 for a custom domain and have limited options for customising the look of the blog.

### JamStack

If you know a bit of coding and adventurous type, choose any of the [Static Site Generators](https://jamstack.org/generators/) and build your blog the way you like it. I used this approach to build my company's website and with the aid of ChatGPT generated code for various components of my website. I built my website based on a [free template](https://vercel.com/templates/next.js/nextjs-contentlayer) available at Vercel on Next.js and use Obsidian to author content for my blog

## Conclusion

Despite a growth in consumption of Video content, written content still holds a place for many. A lot of times, I just enjoy the solitude of reading a good book or article online even when the same content can be consumed via a video on YouTube. My primary goal in building a blog is to consolidate my learnings across various mediums as writing forces you to [internalise your learnings](https://notes.andymatuschak.org/zB74H9CuWrosEuqve7jZyCo) in a better manner.  So I hope this post helps you how to build your blog and if you wish to understand more, do feel free to [[contact|connect]] with me.


