# PUI Release Steps

1. you don't need to modify version manually!!

2. create a release branch

3. make sure every bugs are fixed

4. run `npm run lint`, check there's not more eslint error/warning, if there are some, fixed them.

5. run `npm run build` to compile source code

6. run `npm run vfixed`, this command will helps to:

   - upgrade package to a new version in package.json
   - generate a new version tag in git repo
   - generate changelog document in CHANGELOG.md (all commits between old version tag and new version tag)

7. check CHANGELOG.md, modify changelog manually

8. run `npm run vrelease` to release
