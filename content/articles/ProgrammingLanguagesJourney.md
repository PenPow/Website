---
title: 'A Journey into Niche Programming Languages'
description: 'A step into the underworld of programming languages, and how I explored the vast array of languages to find the one.'
cover: 'https://avatars.githubusercontent.com/u/603863?s=200&v=4'
---

Programming Languages are a hot debate point. Sitting in the middle of these arguments, I find it interesting to look past the flashy features that are being discussed, and dive deeper into the syntax of the languages involved.

And while making a domain specific language is a bit out of my league[^1], this brief foray into making the perfect programming language made me curious for what is the closest language to what I consider ideal?

## Table of Contents

- [Table of Contents](#table-of-contents)
- [What Makes The Perfect Language?](#what-makes-the-perfect-language)
- [Nim](#nim)
- [My Experiences and Conclusions](#my-experiences-and-conclusions)

## What Makes The Perfect Language?

Lets preface this journey with what is considered perfect. This is harder than it seems, and is different for everyone.

I program in Python and TypeScript, and so a syntax similar to either (or both!) of them would be my perfect syntax. And, of course, strict typing as a requirement.

But Python and TypeScript are not known for their speed[^2], so lets look into compiled languages, where speed can really be optimised. Personally, I dont mind a compiled language, if it uses less memory, or is faster, so lets put it as "preferable".

I have one more requirement, which is memory management must either be safe, or managed for me, as segfaults are never fun to troubleshoot.

<img src="https://external-preview.redd.it/VEnaCJKxNrT7YZRkKA-X8LBijWkzZ1S2yBD6pmhpP9s.jpg?auto=webp&s=0410570c541e3d1e618c7c8ad41a5dfdeb246c02"></img>

Now we have our checklist:

- Fast
- Syntax of Python or TypeScript
- Strongly Typed
- No Required Memory Management

Lets explore the language I found while exploring: Nim

## Nim

Nim feels very much like Python, but compiled and enhanced, after taking steroids.

```nim
from std/strutils import parseInt

echo "A number please: "
let n = parseInt(readLine(stdin))
case n
of 0..2, 4..7: echo "The number is in the set: {0, 1, 2, 4, 5, 6, 7}"
of 3, 8: echo "The number is 3 or 8"
```

The `..` range operator is built in, and its these small thoughts that make Nim so appealing.

| Feature                       | Python      | Typescript                                     | Nim                                            |
| ----------------------------- | ----------- | ---------------------------------------------- | ---------------------------------------------- |
| Typing                        | Dynamic     | ✔️                                             | ✔️                                             |
| Generics                      | ❌          | ✔️                                             | ✔️                                             |
| Interpreted or Compiled?      | Interpreted | Compiled and Interpreted                       | Compiled                                       |
| Variable Immutability         | ❌          | ✔️ with `const`<br><br>❌ with `let` and `var` | ✔️ with `const` and `let`<br><br>❌ with `var` |
| FFI with C                    | ✔️          | ❓Limited Support                              | ✔️                                             |
| FFI with JS                   | ❌          | ✔️                                             | ✔️                                             |
| Package Manager               | pip         | NPM                                            | Nimble                                         |
| Inline Conditional Statements | ✔️          | ✔️                                             | ✔️                                             |
| Enums                         | ❌          | ✔️                                             | ✔️                                             |

The main issue with Nim is the lack of other people using it. You have a much smaller range of packages and communities to work with, but I find this half the fun of programming, as you are able to write the solutions yourself!

## My Experiences and Conclusions

Python has an undeniable driving force behind the community, and while Nim may never replace it, it has the capability to compete with C/C++ and even experimental languages like Carbon.

<!-- Footnotes -->

[^1]: Jetbrains have their [MPS](https://www.jetbrains.com/mps/) tool, which I want to mess around with at some point. You can read more about how they make a DSL [here](https://www.jetbrains.com/mps/concepts/)&nbsp;
[^2]: [PyPy](https://www.pypy.org/), which is the faster implementation of CPython, is faster, but extracting raw speed is the name of the game here, but still have a look, as its a genuinely interesting project.
