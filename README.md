# TODONT
*the anti-todo list app app*

## Mistakes Were Made, Lessons Were Learned

**Mistake**
Used incorrect syntax in .gitignore, accidentally adding a huge node_modules folder.

**FIX**
1. Update .gitignore with proper code: `./node_modules` to `node_modules/`
2. Used `git rm -r --cached node_modules/` to remove from repo, but not the actual folder
3. Check with `git status` and `ls`
4. Staged .gitignore changes with `git add .gitignore`
5. Committed that sucker!!