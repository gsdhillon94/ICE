
Steps to setting up the code for Assignment one-CSE5ICE.
1.	Create first Angular project.
•	Download latest version Node from the browser (https://nodejs.org/en/download/)
•	64 bit .msi installer for windows.
•	Open your command prompt and type the below code.
•	npm install -g @angular/cli
•	press Enter.
•	Cli will be downloaded.
•	Check if the cli is actually downloaded by typing ng –version. It will show the angular version installed.
2.	Setup Git.
•	Go to the url https://github.com/
•	Create your github id if it is already does not exist.
•	Install gitbash using the steps given here https://www.stanleyulili.com/git/how-to-install-git-bash-on-windows/

3.	Clone git Folder in your system
•	Create a folder for ICE Assignment in your file Explorer.
•	Right click and select option Git Bash Here.
•	In the git bash, write git clone https://github.com/gsdhillon94/ICE.git 
•	your will get ICE folder downloaded in your folder where you have done the above steps.

4.	Create your local git branch
•	From your terminal window, list the branches on your repository.
$ git branch

* master

This output indicates there is a single branch, the master and the asterisk indicates it is currently active.
•	create a new feature branch in the repository
$ git branch branch_name
•	check your branch name is available or not by typing git branch.
•	Switch to git branch by typing git checkout branch_name.
•	You can list the branches again with the git branch command.
•	This is your local branch and what ever change you make will be in this branch only and will not be reflected to the git repo on github server.


5.	Setup your Angular code.
•	Go inside ICE folder.
•	Go inside folder Favourite-game. Here you can see the src folder.
•	Open command prompt at this location by clicking on the url.
•	Write cmd and press enter.
•	In the command prompt write npm install.  This will initialise project and download all dependencies.
•	Write the following code on command prompt after initialisation is finished. 
ng serve –open.
•	Your project will open in browser.
•	You can edit the code by opening the code with VS code.
6.	Push your changed code.
•	Once you have made your changes you can push the code to central repository and Gurdayal will confirm the changes to merge it.
•	Go to your src folder in your file explorer.
•	Right click and select git bash here.
•	In git bash type following code.
•	To add the changes made git add .
•	To commit the changes git commit -m “your message which specifies your changes made”
•	(This step to be done only the first time) To set remote repo
  git remote add origin https://github.com/gsdhillon94/ICE.git 
•	To push the changes type git push.
•	Now Gurdayal will accept the changes from the git repo and merge it .
•	Do not push the changes if the code is not in working condition

