# TODONT
*the anti-todo list app app*

## What I did (so far)
Wrote the internal logic for a "todont" list app.

## Future Plans
- Build a UI so people who aren't me can use it
- Sort items
- Different views of items like a "compact" or "expanded" view (like for editing)
- Customizable colors and fonts

## What I learned (an overview)
1. How to write modular code (ES6 modules and the module pattern)
2. How to configure Webpack and my dev environment
3. How to take an idea and break it down into implementable chunks
4. How to use the Web Storage API (localStorage)

## Mistakes Were Made, Lessons Were Learned

**Mistake #1**
- Use incorrect syntax in .gitignore, accidentally adding a huge node_modules folder.

**FIX**
1. Update .gitignore with proper code: `./node_modules` to `node_modules/`
2. Used `git rm -r --cached node_modules/` to remove from repo, but not the actual folder
3. Check with `git status` and `ls`
4. Staged .gitignore changes with `git add .gitignore`
5. Committed that sucker!!

## Plog

Friday, February 23rd 2024 @9:23pm

I'm very excited for this project. I have mostly no idea how I'm going to do it. But even so, I'm feeling good. It's a strong, motivating idea that's a little but stupid. Just my kind of project <3

---

Saturday, February 24th 2024 @9:01pm

Soooo I'm terribly proud of myself for today's work. I realized a few things today:
1. I learn decently fast. I've never used Webpack before a few days ago, and I'm already configging all over the place. I've never really written anything modularly. And I'm modulating so hard. I was scared of local storage a few hours ago and now I'm pretty happy to use it whenever appropriate.
2. I don't have to worry as much as I have about getting rock solid on fundamental stuff BEFORE moving on to more advanced things. Yes, I will always review the fundamentals, that's just the sort of student I am. But I realized that every project is an opportunity to flex those fundamentals I'm so concerned about losing. What a silly worry! If I'm coding well, then I'm building my foundation!