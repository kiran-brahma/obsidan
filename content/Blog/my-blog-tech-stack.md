---
title: How I built and manage my Blog
description: Understand the tools and software used by me in running this blog. The goal was to have a blog with WikiLinks and Graph View as Obsidian while spending no money
aliases: 
draft: true
tags:
  - Technology
  - Writing
  - Blog
date: 2024-04-06
---
## Key Takeaways

- [Obsidian](https://obsidian.md/) for content management and writing
	- All my images are hosted on [Imgur](https://imgur.com) and use [the Imgur plugin](https://github.com/gavvvr/obsidian-imgur-plugin) to upload images from Obsidian directly 
- I use [Quartz](https://quartz.jzhao.xyz/) for the development of my website
- I host my website on [Vercel](https://vercel.com)
- I use [Grammarly](https://app.grammarly.com/) to ensure the correctness of my writing
- Plethora of alternatives exist, so do explore all possibilities before making a decision

## Introduction

Building a blog is an easy process as there are numerous software tools available, allowing anyone to start in a jiffy. However, despite the plethora of tools available, I was never satisfied with the final product. Looking back I realise it was just an excuse to not start writing for my blog in my never-ending quest for perfection. Finally, in late 2023 I bit the bullet,  developing a basic blog, and hosting it on [Vercel](https://vercel.com)). 

Now once the blog was up and running, I fell into the challenge that most bloggers face, a simple process that lets me focus on writing. As expected, it wasn't easy as I had to juggle between multiple apps to finally a post published.

## Technology Stack

I use [Obsidian](https://obsidian.md) as my notes app, hence was keen to include it in my workflow. Once my final edit for a post is done in Obsidian, the post is published on my blog.

After multiple experiments and scouring [Reddit](https://reddit.com) for multiple hours, I identified [Quartz](https://quartz.jzhao.xyz/)
as the solution to my specific problem. It did require a bit of know-how in coding, which I picked up when I moved my [company's website](https://knighthood.co) from [Wix](https://www.wix.com/) to [Next.js](https://nextjs.org/). 
 
 Initially, I built my blog using the same code as my website but I felt it was lacking as I wanted
 my blog to be free-flowing as it would focus more on content with limited need for components. 
I was keen to replicate a similar style as [Obsidian Publish](https://obsidian.md/publish) but wasn't yet ready to pay the monthly recurring cost. 

 [Quartz](https://quartz.jzhao.xyz/) provided me with a template that met all my needs as I only had to pay for my domain name. Quartz's robust documentation aided in ensuring I faced no issues in the blog's deployment
 
Since 2023, I have been using the [Imgur plugin](https://github.com/gavvvr/obsidian-imgur-plugin) to host all images in my notes as I feared that over time, the images would consume a lot of space. Considering I was using iCloud (where Apple gives a measly 5GB storage) to sync my Obsidian vault, I wanted to host images outside to reduce cloud storage. Using Obsidian to write and edit my posts with the images hosted on Imgur freed my mind, allowing me to focus on what I would write rather than worry about other aspects. 

## Hosting

I have been hosting my [company's website](https://knighthood.co) on  [Vercel](https://vercel.com) since 2022. It provides an easy process to go live while providing additional insights and analytics on how my website is performing. 

Quartz's documentation provides the necessary information on how to host on Vercel, so the entire setup took me less than 5 minutes to go live. Once I made all the required changes to my blog's code on [VS Code]([Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)), I set up a [GitHub](https://github.com/) repo for my blog and deployed it on Vercel. 

I spent some time tweaking the layout and other elements to ensure my blog page speed wasn't low as I wanted it to be above 90+ on mobile and desktop

![Kiran Brahma Blog Page Speed](https://i.imgur.com/wSh7vaq.png)


## Content Editing

A lot is said about AI killing written content generation but over the past year, I have realised that as of date it is still some time away before we can outsource all our writing to AI tools. 

I draft my post as a new note on Obsidian as a [private page](https://quartz.jzhao.xyz/features/private-pages) and use [Grammarly](https://app.grammarly.com/) to ensure that my draft does not have obvious errors. In the past, I used to review what I had written the next day, allowing me to make changes where needed. However, I use [[ai-prompts|simple prompts]] to get an edited version of my draft from ChatGPT and Gemini. I refer to the AI draft, making changes where I find value. 

Once I am satisfied with the new draft, I review the same again the next day and make changes but observed that overall time has significantly reduced due to AI's aid.

## Alternatives

Not everyone needs to dedicate so much effort to go live with a blog when there are a multitude of free and paid options available that can get your blog up and running in a jiffy.  Here are some of the options that I have personally used:

### WordPress 

It is the big daddy of web development. Even today most of the websites we see on the internet have been built on WordPress, accounting for around 43% <sup><a href="https://colorlib.com/wp/wordpress-statistics/">1</a></sup>. You will need to subscribe for hosting on WordPress and a plethora of options are available. I suggest exploring the one at [WordPress](https://wordpress.com/pricing/), where it starts from Rs 160/ month. As its open source, I am pretty sure multitude of options exists if you put in the effort to find the one that meets your needs


### Ghost

[Ghost](https://ghost.org/) is an amazing platform, where you can just focus on building content for your blog and leave all the other aspects to the software. The possibilities are endless as I did explore it quite a bit and lacking any possibility to run it for free, I left it aside. In the future, if my blog obtains a large amount of traffic, I may explore hosting it on Ghost. Similar to WordPress, it's open source so multiple hosting options exist. The platform allows you to build your own audience along with option to restrict certain pages to specific users. You can give the platform a trial for free at [DigitalPress](https://www.digitalpress.blog/pricing)

### Medium

[Medium](https://medium.com) is a great platform to start a new blog, simply for the reason that finding an audience will be easier due to the large cohort of people who use the platform. It is simple to start and getting the hang of the platform is easy. However, mapping a custom domain will require you to subscribe to its membership plan, costing you $5 monthly if you take up a yearly plan. Secondly, if you ever choose to move out of the platform, you can export the posts in HTML files, which are not as easily malleable as a [Markdown](https://www.markdownguide.org/getting-started/) format. 

### Hashnode

[Hashnode](https://hashnode.com) is a blogging platform focused on Developers. It's a great blogging platform that should meet most needs of anyone wishing to start a blog as it is highly flexible, provides multiple customisation options, a newsletter, maps your domain, has great SEO features and use it as CMS for your blog. The best part is that it's free to use and you pay only if you want access to more premium features such as AI integration. It has a developer focussed user base, so the platform may not meet the needs of every writer but non-techies can host their blog without any effort

### Substack
If you are keen to build your audience and generate revenue then [SubStack] is one of the best platforms to do so after [Ghost](/#ghost). You pay only if you charge for your readers, else it's free to use for all features. However, you will need to pay $50 for a custom domain and have limited options for customising the look of the blog.

### JamStack

If you know a bit of coding and adventurous type, choose any of the [Static Site Generators](https://jamstack.org/generators/) and build your blog the way you like it. I used this approach to build my company's website and with the aid of ChatGPT generated code for various components of my website. I built my website based on a [free template](https://vercel.com/templates/next.js/nextjs-contentlayer) available at Vercel on Next.js and use Obsidian to author content for my blog

## Conclusion

Despite a growth in consumption of Video content, written content still holds a place for many. A lot of times, I just enjoy the solitude of reading a good book or article online even when the same content can be consumed via a video on YouTube. My primary goal in building a blog is to consolidate my learnings across various mediums as writing forces you to [internalise your learnings](https://notes.andymatuschak.org/zB74H9CuWrosEuqve7jZyCo) in a better manner.  So I hope this post helps you how to build your blog and if you wish to understand more, do feel free to [[contact|connect]] with me.


