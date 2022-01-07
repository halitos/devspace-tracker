---
title: "Learning Next Js"
date: "Jan 06, 2022"
excerpt: "Next.js gives you the best developer experience with all the features you need for production"
cover_image: "/images/posts/nextjs.png"
category: "JavaScript"
author: "Halit Oskan"
author_image: "https://randomuser.me/api/portraits/men/11.jpg"
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->

# The React Framework for Production

Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

### Server-side rendering

Allows react app to be rendered on the server at first page load??
Data fetching/API/better performence for **SEO**

Requires Node installed not render in server.

### Static Site Generator

Easy to deploy

Having API Routes and being able set HTTP only cookie, is another big benefit of using Next.js , that can’t be done with React only. Where to store Jason Web Tokens (JWT) always a kind of problem with front end development.

#### `jsconfig.json` Object

```
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["components/*"],
      "@/config/*": ["config/*"],
      "@/utils/*": ["utils/*"],
      "@/lib/*": ["lib/*"]
    }
  }
}
```

For more information check [DOCS](https://nextjs.org/)
