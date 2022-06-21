# @formiz/eslint-plugin

## Setup

```sh
yarn add -D @formiz/eslint-plugin
```

Then, add `@formiz` in the `plugins` section of your .eslintrc file.

## Available rules

- `@formiz/no-empty-use-form`

## Development

### Test the rules locally

First, you will want to use [yalc](https://github.com/wclr/yalc) (because of issues with yarn link)

```sh
yarn global add yalc
```

Then, start the dev server:

```sh
yarn dev # Reload the project on each update and publish it to yalc
```

Now, go into the project you want to test your rules against:

```sh
yalc add -D @formiz/eslint-plugin
```

Don't forget to reinstall with yarn, npm or pnpm (or whatever package manager you are using) so the eslint plugin will be correctly installed

Now you can follow the `Setup` section of this readme in the repo you want to test the local rule.