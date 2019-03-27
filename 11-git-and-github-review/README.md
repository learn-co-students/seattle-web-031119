# GitHub Collaboration Walkthrough

This lecture was a walkthrough of how to (and how not to) collaborate with GitHub

## Part 1: When Things Go Right

Soundarya and Erin are collaborating on a project that uses an API and gets input from the command line.  We have agreed that Erin is going to work on the API part, and Soundarya is going to work on the CLI part.  In parallel we make feature branches, commit our changes, then create pull requests against the `master` branch.  Both pull requests are successfully able to merge.

### Part 1: Setup

For the purposes of this example, we are using the "Star Wars API" lab.

 - [x] Add Soundarya as a collaborator on my fork of Learn Co repo
 - [x] Clone a copy of the code onto my computer


### Erin Part 1: Adding API Functionality

Erin makes a new feature branch to get the relevant character movie data from the API.  (Right now it is connecting to the API but not getting any of the relevant info yet.)

 - [x] Create a new branch for API functionality `git checkout -b api-communicator`
 - [x] Make changes to the relevant file
 - [x] `git status` should show that the only file with changes is `lib/api_communicator.rb`
 - [x] `git add lib/api_communicator.rb`
 - [x] `git commit -m "Implemented get_characters_from_api and print_movies methods"` commits the changes to the local copy of the api-communicator branch
 - [x] `git push origin api-communicator` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/tree/api-communicator) of the api-communicator branch
 - [x] On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/pull/new/api-communicator)
   - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-031119 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-031119 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **api-communicator**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Soundarya Part 1: Adding CLI Functionality

Soundarya is working at the same time as Erin, but on a different part of the code.  She is adding the command line interface code so that the program will print a welcome message and prompt the user for the name of a character.  (Right now it is calling the API method with `nil` instead of getting actual user input.)

 - [x] `git checkout -b rajiprinze/adding_command_line_code` creates the new branch
 - [x] Make changes to the relevant file

 - [x] `git status` should show that the only file with changes is `lib/command_line_interface.rb`
 - [x] `git add lib/command_line_interface.rb`
 - [x] `git commit -m "Added input code for command line"` commits the changes to the local copy of the rajiprinze/adding_command_line_code branch
 - [x] `git push origin rajiprinze/adding_command_line_code` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/tree/rajiprinze/adding_command_line_code) of the rajiprinze/adding_command_line_code branch
 - [x] On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/pull/new/rajiprinze/adding_command_line_code)
   - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-031119 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-031119 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **rajiprinze/adding_command_line_code**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Part 1: Merging

Both Erin's branch and Soundarya's branch have pull requests ready to go.  Now that they have agreed that the changes should be merged into master:
- [x] Erin goes to the [pull requests page](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/pulls) for the repository and approves both pull requests.  (Either person could do this, since both are contributors on the repo.)  There are no merge conflicts.  Yay!

To get their local copies of the repository synced up with the remote GitHub copy, Erin and Soundarya each run the following:
- [x] `git checkout master` to move from their feature branch (`api-communicator` and `rajiprinze/adding_command_line_code`, respectively) back to master
- [x] `git pull origin master` to fetch changes from the remote GitHub copy and merge them in.  There are no merge conflicts.  Yay!

## Part 2: When Things Go Wrong

Soundarya and Erin agree that the README file should be edited to say that they are the authors.  However, they don't communicate clearly about who is doing this task, so both are start making changes to the same file.

### Erin Part 2: Adding Authors

- [x] `git checkout -b update-readme` creates the new branch
- [x] Add "by Erin and Soundarya" to the second line of README.md
- [x] `git status` should show that the only file with changes is `README.md`
- [x] `git add README.md`
- [x] `git commit -m "updated readme"` commits the changes to the local copy of the update-readme branch
- [x] `git push origin update-readme` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/tree/update-readme)
- [x] On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/pull/new/update-readme)
  - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-031119 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-031119 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **update-readme**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Soundarya Part 2: Adding Authors

- [x] `git checkout -b rajiprinze/addNames` creates the new branch
- [x] Add "Authors : Soundarya Rajendran and Erin Hoffman" to the second line of README.md
- [x] `git status` should show that the only file with changes is `README.md`
- [x] `git add README.md`
- [x] `git commit -m "Added names"` commits the changes to the local copy of the rajiprinze/addNames branch
- [x] `git push origin rajiprinze/addNames` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/tree/rajiprinze/addNames)
- [x] On GitHub, [set up a pull request](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/pull/new/rajiprinze/addNames)
  - The base repository will be set to learn-co-students/apis-and-iteration-seattle-web-career-031119 and base: master.  We want to change that to hoffm386/apis-and-iteration-seattle-web-career-031119 and base: master.  That will change the interface so it just says "base: **master**" on the left and "compare: **rajiprinze/addNames**" on the right.  The difference is that we are comparing across two branches of the same repository, rather than our branch on our fork vs. the learn-co repo.

### Part 2: Merging

Both Erin's branch and Soundarya's branch have pull requests ready to go.  Now that they have agreed that the changes should be merged into master, Erin goes to the [pull requests page](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-012819/pulls) for the repository and approves Soundarya's pull request.  (Either person could do this, since both are contributors on the repo.)

Erin's pull request is successfully merged!

But then when they try to approve Soundarya's pull request, there is a merge conflict :(

Because Soundarya's changes are the ones that conflict with master, Erin needs to resolve the merge conflict. (Normally this would probably be Soundarya's problem but Erin's computer is connected to the projector.)

- [x] `git checkout -b rajiprinze/addNames origin/rajiprinze/addNames` will create a local branch on Erin's computer that points to Soundarya's remote branch

- [x] `git pull origin master` will fetch the latest version of master (with Soundarya's changes merged in) and attempt to merge them into Erin's branch
   - This generates the output:
     ```
     CONFLICT (content): Merge conflict in README.md
     Automatic merge failed; fix conflicts and then commit the result.
     ```
- [x] `git status`
   - This generates the output:
   ```On branch update-readme
      You have unmerged paths.
        (fix conflicts and run "git commit")
        (use "git merge --abort" to abort the merge)

      Unmerged paths:
        (use "git add <file>..." to mark resolution)

	         both modified:   README.md

      no changes added to commit (use "git add" and/or "git commit -a")
   ```
- [x] This tells Erin that she needs to open README.md to find the merge conflict, so `atom README.md`
- [x] When Erin looks at the README, there is a section that looks like this:
   ```<<<<<<< HEAD
      by Erin and Soundarya
      =======
      Authors : Soundarya Rajendran and Erin Hoffman
      >>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034
   ```
   - This means that since master was last pulled, two different commits have made changes to the same line.  One of them (Erin's) was "by Erin and Soundarya", which is between the "<<<<<<< HEAD" and "=======".  The other one (Soundarya's) was "Authors: Soundarya Rajendran and Erin Hoffman", which is between the "=======" and the ">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034".
   - Erin has three different options here:
     - **a) Accept Soundarya's version**.  To do that, she would erase the git markup ("<<<<<<< HEAD", "=======", and "">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034") and erase the line she added ("by Erin and Soundarya")
     - **b) Overwrite Soundarya's version with her version**.  To do that, she should erase the git markup ("<<<<<<< HEAD", "=======", and "">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034") and erase the line Soundarya added ("Authors : Soundarya Rajendran and Erin Hoffman")
     - **c) Make some new version**.  One example of that would be combining both "by Erin and Soundarya" and "authors : Erin and Soundarya :)" into a single line.  She would still need to erase the git markup ("<<<<<<< HEAD", "=======", and "">>>>>>> 9960c6e102ffb03e65bd9eeb3d24863e12baa034") as well.
   - Erin chooses option (c) and combines the two lines into one, then saves the file
- [x] `git add README.md`
- [x] `git status`
   - This generates the output:
     ```On branch update-readme
        All conflicts fixed but you are still merging.
          (use "git commit" to conclude merge)

        Changes to be committed:

	         modified:   README.md
      ```
- [x] `git commit -m "resolved merge conflict with author names"` commits the changes to the local copy of the update-readme branch
- [x] `git push origin update-readme` publishes the changes to the [remote (GitHub) copy](https://github.com/hoffm386/apis-and-iteration-seattle-web-career-031119/tree/update-readme)
- [x] Now if Erin refreshes the page on the pull request for this branch, the button will turn green.  Now we can approve Erin's pull request!

(For Soundarya's local copy to reflect this new version, she will need to run `git pull origin master`)
