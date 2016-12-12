#!/usr/bin/env node
import yargs from 'yargs'
import inquirer from 'inquirer'
import Promise from 'bluebird'
import _ from 'lodash'

import * as installBedrock from './setup/installBedrock'
import * as setupWordpress from './setup/setupWordpress'

// import {builder} from './cmds/setup'

// yargs
// .commandDir('cmds')
// // .demand(1)
// .help()
// .argv

const requirements = [
  installBedrock,
  setupWordpress
].map(task => task.requirements)

const prompts = [
  installBedrock,
  setupWordpress
].map(task => task.prompts)

const runs = [
  installBedrock,
  setupWordpress
].map(task => task.run)

Promise.all(_.union(...requirements).map(fn => fn()))
.then(function () {
  inquirer.prompt(_.union(...prompts))
  .then(function (answers) {
    console.log(answers)
    console.log(runs)
    let allRuns = Promise.resolve()
    runs.forEach(fn => allRuns = allRuns.then(() => fn(answers)))
    // Promise.all(runs.map(fn => fn(answers)))
  })
}, function (err) {
  console.log(err);
})