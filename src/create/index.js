import * as installBedrock from './installBedrock'
import * as adjustGitignore from './adjustGitignore'
import * as requireComposerPackages from './requireComposerPackages'
import * as setupTheme from './setupTheme'
import * as replaceProjectSpecificStrings from './replaceProjectSpecificStrings'
import * as initGitRepo from './initGitRepo'
import * as db from './db'
import * as setupWordpress from './setupWordpress'
import * as buildYarn from '../build/yarn'
import * as activateWordpress from './activateWordpress'

export const commands = {
  installBedrock,
  adjustGitignore,
  requireComposerPackages,
  setupTheme,
  replaceProjectSpecificStrings,
  db,
  setupWordpress,
  buildYarn,
  activateWordpress,
  initGitRepo
}

export const cmds = Object.keys(commands)
