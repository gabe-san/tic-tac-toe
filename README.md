# tic-tac-toe

Link: https://gabe-san.github.io/tic-tac-toe/
Playable Tic-Tac-Toe game in browser. Uses HTML, CSS, and JS.  
Future Plans to make Player vs. AI mode.

> **Use as future project template for ESLint & Prettier. Note: make a template repo excluding main.js, index.html, style.css. Run npm install within repo directory locally and you should be good to go.**

## Setting up prettier

1. `npm install --save-dev --save-exact prettier` in the repo you’re working on so on a per project basis
2. `echo {}> .prettierrc.json` to create a file that is needed to recognise this repo uses prettier
3. `touch .prettierignore` and put files to be ignored in it based on your ESLintignore and/or gitignore file (gitignore would be recommended to copy over)

### Note for Step 3:

**.prettierignore file set up:**

```
node_modules
package-lock.json
build
.DS_Store
CVS
Thumbs.db
```

4. install Prettier extension in VSCode to be able to format using a shortcut or set it up to run on save etc.

_For more info on setting up a gitignore file:_
https://www.freecodecamp.org/news/gitignore-file-how-to-ignore-files-and-folders-in-git/

## Setting up ESLint

5. `npm init --yes` in the repo/project you’ll be working on. This is to get a package.json file in there if it's not there yet.

6./7. `npm init @eslint/config` to hit two birds with one stone (intitialize and creating the config file)

8. Configure the resulting eslintrc.json file first by the prompts and/or review https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code for prompt decisions and later adjusting of config. Copy from template repo.

9. Install the ESLint VSCode extension for visual clues during programming and maybe even configure it to do it's magic on each save automatically, also explained on the above DigitalOcean lesson

## Setting up eslint-config-prettier

10. npm install --save-dev eslint-config-prettier in the same repo to make ESLint and Prettier work nicely together without conflict
11. add "prettier" to the "extends" array in your .eslintrc.\* file at the end of the file

```
    example:

"extends": [
"airbnb-base",
"prettier"
],
```

12. npx eslint-config-prettier path/to/main.js to see if there are conflicts

Now to manually use prettier for formatting you can use the shortcut shift+alt+f or use the command npx prettier --write <filename>
To see all the errors and warnings for ESLint you can use the command npx eslint <filename> but they're also shown in the VSCode Problems section

13. set up ESLint to automatically fix syntax and formatting issues upon save by following Step 4 and 5 of this article: https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code
