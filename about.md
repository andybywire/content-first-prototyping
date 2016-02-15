---
layout: page
---
##About Content First Prototyping
The Content First Prototyping Framework introduces systems thinking into the architecture and design of online information spaces. We have lots of great ways to prototype visual design and motion, but so few ways to plug in and dynamically manipulate actual content and information architecture early on in the design process. This framework is intended to make content and IA first-class citizens in the design proces by providing an easy way for designers to model and simulate content and IA decisions.

###Systems Thinking
One of the core concepts of systems thinking is the idea that large systems that work are always made up of smaller systems that work. 

Always.

You don't end up with a working big complex out of a bunch of smaller systems that only sort of work. (What you end up in that case is an unholy mess.) A "systems thinking approach" to design is one that aims to make sure that the smaller systems that make up our larger systems work well – and work the way we want and expect them to. 

The structure and composition of online content is one of these systems. The best way to make sure that a system works as intended is to model and simulate that system in context – and then make changes, tweaks, and updates to see what works best (or simply toss it and start over if its a catastrophe). The Content First Prototyping framework provides designers tools for simulation and revision so that they can incorporate this systems thinking approach earlier in the design process and create more effective, intelligible, and useful digital spaces.

###Loose Coupling
This framework is made up of several smaller, simpler systems (Excel, Jekyll, and Foundation) loosely connected (with Gulp) in order to operate as a larger system. Granted, each of these "simpler" systems has a fair amount of complexity all of its own, but in this framework, each is only asked to do the task that it's really good at. Gulp, which connects the pieces behind the scenes, provides some easy pathways for these sytems to talk to each other, but isn't prescriptive about how that happens (that's what's meant by "loose coupling"). 

Ultimately, it is up to you, the informatin designer, to shape your model in the way that it makes the most sense given your content and your context – and then simulate it for your users.

###These Pages
This collection of pages is intended as a starting point for your own projects. Feel free to rearrange and build on them, or wipe them out and start fresh. I've modeled several of the way pages can be built in this framework. Here's a quick rundown:

- Homepage: This page is created at the root directory and is written in [Markdown](https://daringfireball.net/projects/markdown/syntax), with a fair amount of HTML mixed in. Because it starts off with a [YAML front matter block](http://jekyllrb.com/docs/frontmatter/), Jekyll process it and includes it in the processed website. 
- Sample Content
    - Catalogue, People, and Events: Each of these pages is created from a markdown file in the root directory (catalogue.md, directory.md, and feed.md) and built using the category.html layout, which is specified in each page's YAML front matter. The category.html template contains special markup for each of these page types, which pulls in data from the JSON files that are automatically created from the _data.xlsx at build. 
    - Person and Item Detail Pages: These pages are generated from the _data.xlsx spreadsheet (via JSON) at build. I've told Jekyll to create these pages by adding them to the Page Generator section of the config.yml file in the root directory. These pull from the same data source as the Catalogue, People, and Events pages above, but are created using a different template (detail.html), so can represent that data in a different way. When content in the _data.xlsx is changed, both page sets are updated automatically. 
- Tear Sheet: Since this page relies heavily on non-duplicating HTML, it is written directly in .html (as opposed to markdown). Because it includes YAML front matter, Jekyll knows to include it in the processed site.
- About: This page is written entirely in markdown. As you can see with the home page example above, you can mix markdown with more complex markup if you like. When a page needs only simple text formatting, though, you might find markdown an easier and more accessible option. 

You'll notice two more layouts in the _layout directory: page.html and post.html. The framework you've downloaded doesn't currently use these, but they're a standard part of Jekyll so I've left them in so that Jekyll will behave as you'd expect if you follow [its documentation](http://jekyllrb.com/docs/home/). 




