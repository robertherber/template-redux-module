const superb = require('superb'),
      inflection = require('inflection');

let data;

module.exports = {
  templateOptions: {
    context: {
      //inflection
    }
  },
  prompts: {
    name: {
      message: 'Name your module',
      default: `${superb()}`
    },
  },
  data: (answers) => {
    const moduleTitle = inflection.titleize(answers.name),
          moduleFolderName = inflection.dasherize(answers.name),
          moduleCamelCase = inflection.camelize(answers.name.replace(' ', '_'), true);

    data = {
      moduleTitle,
      moduleFolderName,
      moduleCamelCase
    }

    return data;
  },
  move(answers) {
    const folderPrefix = (answers._.isNewFolder ? '' : 'modules/'),
          folderPath = folderPrefix + data.moduleFolderName + '/';

    const suffixes = [
      'actions.js',
      'reducer.js',
      'selectors.js',
      '__tests__/.eslintrc.js',
      '__tests__/actions.js',
      '__tests__/reducer.js',
      '__tests__/selectors.js'
    ];

    const mapping = suffixes.reduce((obj, cur) => {
      const src = 'module/' + cur,
            target = folderPath + cur;

      obj[src] = target;

      return obj;
    }, {});

    return mapping;
  },
  post: (ctx) => {
    ctx.log.info(`Don't forget to add your new module to your combineReducers! It should look something like this:

    import ${data.moduleCamelCase} from '${data.moduleFolderName}'
    ...

    return combineReducers({
      ...,
      ${data.moduleCamelCase},
      ...
    })
    `);
  },
  showTip: true
}
