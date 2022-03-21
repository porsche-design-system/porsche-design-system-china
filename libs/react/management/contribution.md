# PUI Release Steps

1. create a release branch

2. make sure every bugs are fixed

3. run `npm run lint`, check there's not more eslint error/warning, if there are some, fixed them.

4. run `npm run build-all` to compile source code

5. run `npm run vfixed`, this command will helps to:

   - upgrade package to a new version in package.json
   - generate a new version tag in git repo
   - generate changelog document in CHANGELOG.md (all commits between old version tag and new version tag)

6. check CHANGELOG.md, modify changelog manually

7. run `npm run vrelease` to release
