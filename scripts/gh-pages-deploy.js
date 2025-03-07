import { execa } from 'execa'
import { existsSync } from 'fs'
;(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages'])

    console.log('Building started...')
    await execa('yarn', ['build'])
    // Understand if it's dist or build folder
    const folderName = existsSync('dist') ? 'dist' : 'build'
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])
    console.log('Pushing to gh-pages...')
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
    await execa('rm', ['-r', folderName])
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
