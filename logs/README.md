
# Сохранение `git log` в файл, краткий вывод на экран.

__Скрипт bash в одну строку. Работает в git-bash Windows.__

```bash
git --no-pager log | grep "    " | sed -e 's/^[ \t]*//' | sed 's/^/ - /' && git --no-pager log > ./logs/git_log_-_$(date +%Y-%m-%d_-_%k_%M_%S).txt && git --no-pager log | grep "    " | sed -e 's/^[ \t]*//' | sed 's/^/ - /' > ./logs/git_log_simple_-_$(date +%Y-%m-%d_-_%k_%M_%S).txt
```

Будет вывод на экран вида:

```
$ git --no-pager log | grep "    " | sed -e 's/^[ \t]*//' | sed 's/^/ - /' && git --no-pager log > ./logs/git_log_-_$(date +%Y-%m-%d_-_%k_%M_%S).txt && git --no-pager log | grep "    " | sed -e 's/^[ \t]*//' | sed 's/^/ - /' > ./logs/git_log_simple_-_$(date +%Y-%m-%d_-_%k_%M_%S).txt
 - fix: little content update; build by `npm run dev-css` project script.
 - feat: mvp multilanguage, implement and test key functions
 - feat: implement object fo phrase content; generate by JS some main structure; implement function for append to node strings from array as text node wrapped in specified child elements; some refactor; start work on multilanguage
 - feat: add some test DOM structure in `<main>`; test work with buttons, create some button styles
 - feat: add and refactor static html structure (header); add mvp styles for .questions-navigation
 - fix: comments issue; add and import normalize.css
 - feat: install mini-css-extract-plugin; improvement npm scripts and webpack configs; add static html structure
 - feat: install and configured webpack-dev-server
 - refactor: fix mor ESLint problems in JS code
 - refactor: ESLint config on IDE project level; fix ESLint problems in JS
 - fix: add new lines at end of files
 - feat: install: css-loader, style-loader; test load css to js
 - feat: add html-webpack-plugin; test html generation; test listener; add utils module
 - feat: create basic HTML structure
 - feat: add working tree structure; fix gitignore (dont ignore `dist`)
 - feat: init npm project; add config for ESLint and webpack
 - feat: init webstorm project; add git ignore
 - init: start songbird
 - Initial commit
```

Полный `git log` сохранится в файл, вида: `git_log_-_2022-11-16_-_20_34_51.txt`.
Краткий `git log` (как на экране) сохранится в файл, вида: `git_log_simple_-_2022-11-16_-_20_34_52.txt`.
