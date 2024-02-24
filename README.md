# TODONT
*the anti-todo list app app*

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