@echo off
echo ==============================================
echo Fixing GitHub Push Protection Error
echo ==============================================

:: Полностью удаляем старую историю Git, где сохранился токен
rmdir /s /q .git

:: Создаем чистую историю с нуля
git init
git add .
git config user.name "SENSE Admin"
git config user.email "admin@sense.com"
git commit -m "SENSE aesthetic space initial deploy"

git branch -M main
git remote add origin https://github.com/Kuala2/Referens-website.git

echo ==============================================
echo Pushing clean code to GitHub...
echo ==============================================
git push -u -f origin main

echo ==============================================
echo DONE!
echo ==============================================
pause
