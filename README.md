# template-redux-module

> SAO template to generate a Redux Module

Use it to generate a base redux module in your underlying `modules/` folder. Use the second parameter to specify another folder than `modules`.

The template will generate a folder with the following example files:
* actions.js
* reducer.js
* selectors.js

It will also generate a `__tests__` folder with corresponding files and example tests.

Obviously this is an opinionated Redux structure and is meant as such. For me I find it easy to work with - and it scales well in bigger projects. Do feel free to contribute your thoughts on how to improve this template.

## Usage

Install [SAO](https://github.com/egoist/sao) first.

```bash
yarn global add sao
# or
npm i -g sao
```

### From npm

```bash
sao redux-module
```

or if you want to specify your own folder instead of 'modules/':

```bash
sao redux-module redux-stuff/my-own-modules-folder
```

### From git

```bash
sao robertherber/template-redux-module
```

## License

MIT &copy; [robert herber](github.com/robertherber)
