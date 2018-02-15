# template-redux-module

> SAO template to generate a Redux Module

[SAO](https://github.com/egoist/sao) is a scaffolding tool.

Use this SAO template to generate one new redux module in your project. This is not meant to set up the base structure - but rather add new modules adhering to the structure that's described below.

The template will generate a folder with the following files:
* `modules/<your module name>/actions.js`
* `modules/<your module name>/reducer.js`
* `modules/<your module name>/selectors.js`

It will also generate a `__tests__` folder with corresponding files and example tests:
* `modules/<your module name>/__tests__/actions.js`
* `modules/<your module name>/__tests__/reducer.js`
* `modules/<your module name>/__tests__/selectors.js`

If you want to put your module at another relative path - use the second parameter to SAO to specify another folder (see Usage for examples).

Obviously this is an opinionated Redux structure and is meant as such. For me I find it easy to work with - and I feel it scales well in bigger projects. Do feel free to contribute your thoughts on how to improve this template.

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

or if you want to specify your own folder instead of 'modules/':

```bash
sao robertherber/template-redux-module redux-stuff/my-own-modules-folder
```

## License

MIT &copy; [Robert Herber](https://github.com/robertherber)
