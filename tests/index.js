// test.js
import path from 'path'
import test from 'ava';
import sao from 'sao';

const template = {
  fromPath: path.join(__dirname, '..')
}

test('default values', async t => {
  const stream = await sao.mockPrompt(template, {
    // Here is the mocked prompts value
    // It uses the `default` value by default
    name: 'my-module'
  })

  t.snapshot(stream.fileList, 'Generated files')
});