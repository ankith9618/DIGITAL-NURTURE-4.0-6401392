-mkdir gitignore-lab
-cd gitignore-lab
-git init

e-cho "This is a log file" > error.log
-mkdir log
-echo "Log folder content" > log/app.log

-echo "*.log" >> .gitignore
-echo "log/" >> .gitignore

-git status

-git add .gitignore
-git commit -m "Add .gitignore to exclude .log files and log folder"

-git status
