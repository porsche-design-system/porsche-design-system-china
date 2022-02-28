# PUI Release Steps

1. make sure every bugs are fixed

2. run `npm run lint`, check there's not more eslint error/warning, if there are some, fixed them.

3. run `npm run build-all` to compile source code

4. run `npm run vfixed`, this command will helps to:

   - upgrade package to a new version in package.json
   - generate a new version tag in git repo
   - generate changelog document in CHANGELOG.md (all commits between old version tag and new version tag)

5. check CHANGELOG.md, modify changelog manually

6. run `npm run vrelease` to release
