---
layout:     blog
title:      "On meta-design and algorithmic design systems"
date:       2015-02-15 19:41:00
categories: blog
description: "The rise of the meta-designer, and the use of algorithmic design systems."
keywords: "graphic, design, systems, creative, code, algorithms"
poster: blog/vw.jpg
---

<div class="wide-750">
  <img src="{% asset_path blog/vw.jpg %}" alt="VW logo" />
</div>

This post is about something I see as a continuing trend in the design world: the rise of the meta-designer and algorithmic design systems.

> "Meta-design is much more difficult than design; it’s easier to draw something than to explain how to draw it" - Donald Knuth, The Metafont Book

Until recently, the term *Graphic Designer* was used to describe artists firmly rooted in the fine arts. Aspiring design students graduated with MFA degrees, and their curriculums were based on traditions taught by painting, sculpture and architecture. Paul Rand once famously said: *"It's important to use your hands. This is what distinguishes you from a cow or a computer operator"*. At best, this teaches the designer not to be dictated by their given tool. At worst, the designer is institutionalized to think of themselves as ideators: the direct opposite to a technical person. 

This has obviously changed with the advent of computers (and the field of web design in particular), but not to the degree that one would expect. Despite recent efforts in defining digital-first design vocabularies, like [Google's Material Design](http://www.google.com/design/spec/material-design/introduction.html), the legacy of the printed page is still omniscient. Even the most adept companies are organized around principles inherited from desktop publishing, and when the lines are drawn, we still have either design or engineering departments. Products start as static layouts in the former and become dynamic implementations in the latter. Designers use tools modeled after manual processes that came way before the computer, while engineers work in purely text-based environments. I believe this approach to design will change in a fundamental way, and like Donald Knuth, I'll call this the transition from design to meta-design.

So what is meta-design? In a traditional design practice, the designer works directly on a design product. Be it a logo, website, or a set of posters, the designer is the instrument to produce the final artifact. A meta-designer works to distill this instrumentation into a design system, often written in software, that can create the final artifact. Instead of drawing it manually, she is programming the system to draw it. These systems can then be used within different contexts to generate a range of design products without much effort.

<div class="wide-750">
  <img src="{% asset_path blog/casa.jpg %}" alt="Case de Musica logo" />
</div>

As a simple example, take this logo for a concert hall in Portgual. Instead of designing a static logo, [Sagmeister & Walsh](http://www.sagmeisterwalsh.com/) delivered a logo system that can be used to [generate endless variations](http://www.sagmeisterwalsh.com/work/project/casa-da-musica-identity/) of the logo, for use in posters, business cards, and on the web. Another example is Donald Knuth's [Metafont](http://en.wikipedia.org/wiki/Metafont), a programming language for designing typefaces. Where normal fonts are defined by their vector outlines and requires tedious manual work to create, Metafont algorithmically generates new fonts via strokes inspired by human handwriting.

Although not a new phenomenon, I believe this to be an important evolution of the design profession, and there's a number of reasons why I think it's particularly interesting today.

<ol class="bignums">

  <li>
    <span class="bignum">1</span>
    <strong>Design products are becoming increasingly dynamic</strong>, which makes it difficult to sustain a design process based on static prototypes. <a href="http://daringfireball.net/2012/02/walter_isaacson_steve_jobs">Design is how it works</a>, and sketching in code is the only natural way to prototype a dynamic system. Building even the simplest of data visualizations means hours of work in languages like R, Julia or Python. When your content is data, poking around in Photoshop simply makes no sense. In some way, it's the direct opposite of design: prettifying without context. Visual thinking is increasingly done in code, and there is not much to do if you can't program. As our design products become dynamic, it makes less and less sense to separate the design and implementation.
  </li>

  <li>
    <span class="bignum">2</span>
    <strong>A new generation of designers</strong> is starting to occupy important design positions in the U.S and abroad. For these designers, programming is a natural tool for creating the design products they desire, and their creative process is often built on a very systematic approach to design. They are as visually talented as technical proficient, and they see the technical process as an accelerator for creativity, as well as a way to liberate themselves from the manual techniques enforced upon them from traditional design software. Therefore, they often struggle to work in environments that enforce a traditional division of labor.
  </li>
  
  <li>
    <span class="bignum">3</span>
    <strong>An expanding set of algorithmic design tools</strong> now provide a better level of entry for many aspiring designers, who wouldn't ordinarily think of themselves as programmers. Even though there are surprisingly few interfaces for algorithmic design tools (an argument fit for a blog post in itself), there are now hundreds of libraries and frameworks for creating designs in code. We're also seeing a proliferation of educational material aimed at visual thinkers. Recent publications for just a single one of these projects, <a href="https://processing.org/">Processing</a>, include <a href="http://www.amazon.com/Processing-Programming-Handbook-Designers-Artists/dp/026202828X/ref=sr_1_6?s=books&amp;ie=UTF8&amp;qid=1406934187&amp;sr=1-6&amp;keywords=processing">books</a>, <a href="http://icm.shiffman.net/0.0/">videos</a>, <a href="http://natureofcode.com/book">websites</a>, and <a href="http://hello.processing.org/">interactive learning environments</a>, most of them freely accessible on the internet.
  </li>

  <li>
    <span class="bignum">4</span>
    <strong>Systems are an important part of our design history</strong>. I find this point extremely important, as it's something I realized rather late in my design education. Even though design can seem like a very subjective profession, the fundamentals of design are not, and <a href="http://printingcode.runemadsen.com/lecture-intro/">the history of graphic design is full of artists using rules or systems</a> in their creative process. Even before the computer was a household item, Karl Gerstner wrote the book <em><a href="http://runemadsen.com/blog/karl-gerstner-designing-programmes/">"Designing Programmes"</a></em>, outlining many of these exact ideas. Algorists like Sol Lewitt also valued the algorithm over the artifact. Today these theories can be more than theoretical instructions for a manual workflow. We have the ability to write algorithmic systems that create designs, and the designer of the future will need to understand how to deliver on that promise.
  </li>

</ol>

It's dangerous to speculate about the future if you're looking for simple outcomes, and we know for a fact that the new doesn't extinguish the old. However, I think we'll see implications to both professional practice and educational institutions: A new type of meta-design education will start to compete with existing visual arts programs. A new type of meta-design practice will become increasingly visible as well. Right now, [design studios](http://www.sagmeisterwalsh.com) are actively exploring similar themes. Academic institutions are focusing on dynamic design products in [new publications](http://www.amazon.com/Dynamic-Identities-Cultural-Public-Context/dp/3037781637). Independent [design](http://www.dot-dot-dot.us/) [magazines](http://www.servinglibrary.org/) are also writing about these trends. 
Using the word *programmer* is quickly becoming as exhausted as the term *computer operator*, and we will need to grapple with the fact that developers are quickly becoming a creative class – particularly in the design world.




