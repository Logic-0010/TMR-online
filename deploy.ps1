# 肉牛TMR日粮配方制作与指标管理系统 - 自动部署脚本 (PowerShell)

Write-Host "=== 开始自动部署 ===" -ForegroundColor Green

# 检查Git是否安装
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "错误: Git 未安装，请先安装Git" -ForegroundColor Red
    exit 1
}

# 检查Python是否安装
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    if (-not (Get-Command python3 -ErrorAction SilentlyContinue)) {
        Write-Host "错误: Python 未安装，请先安装Python" -ForegroundColor Red
        exit 1
    } else {
        $PYTHON_CMD = "python3"
    }
} else {
    $PYTHON_CMD = "python"
}

# 检查本地服务器是否运行
Write-Host "检查本地服务器状态..." -ForegroundColor Cyan
try {
    $server = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
    if ($server) {
        Write-Host "本地服务器已在运行" -ForegroundColor Green
    } else {
        Write-Host "启动本地服务器..." -ForegroundColor Cyan
        Start-Process -FilePath $PYTHON_CMD -ArgumentList "-m http.server 8000" -NoNewWindow -PassThru
        Start-Sleep -Seconds 2
        $server = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
        if ($server) {
            Write-Host "本地服务器启动成功" -ForegroundColor Green
        } else {
            Write-Host "警告: 本地服务器启动失败" -ForegroundColor Yellow
        }
    }
} catch {
    Write-Host "警告: 无法检查服务器状态" -ForegroundColor Yellow
}

# 检查Git仓库状态
Write-Host "检查Git仓库状态..." -ForegroundColor Cyan
if (-not (Test-Path ".git")) {
    Write-Host "初始化Git仓库..." -ForegroundColor Cyan
    git init
    git config user.name "部署用户"
    git config user.email "deploy@example.com"
    Write-Host "Git仓库初始化成功" -ForegroundColor Green
}

# 检查远程仓库
Write-Host "检查远程仓库..." -ForegroundColor Cyan
try {
    $REMOTE_URL = git remote get-url origin 2>$null
    if (-not $REMOTE_URL) {
        Write-Host "请输入GitHub仓库URL:"
        $GITHUB_URL = Read-Host "GitHub仓库URL"
        git remote add origin "$GITHUB_URL"
        Write-Host "远程仓库添加成功" -ForegroundColor Green
    } else {
        Write-Host "远程仓库已配置: $REMOTE_URL" -ForegroundColor Green
    }
} catch {
    Write-Host "警告: 无法检查远程仓库状态" -ForegroundColor Yellow
}

# 添加所有文件
Write-Host "添加所有文件..." -ForegroundColor Cyan
git add .
Write-Host "文件添加成功" -ForegroundColor Green

# 提交更改
Write-Host "提交更改..." -ForegroundColor Cyan
$commitMessage = "自动部署: $(Get-Date)"
git commit -m "$commitMessage"
Write-Host "更改提交成功" -ForegroundColor Green

# 推送到GitHub
Write-Host "推送到GitHub..." -ForegroundColor Cyan
try {
    git push -u origin master
    if ($LASTEXITCODE -eq 0) {
        Write-Host "推送成功！" -ForegroundColor Green
    } else {
        Write-Host "推送失败，请检查网络连接和GitHub凭据" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "推送失败: $_" -ForegroundColor Red
    exit 1
}

# 提示用户配置GitHub Pages
Write-Host "`n=== 部署完成 ===" -ForegroundColor Green
Write-Host "请按照以下步骤配置GitHub Pages:" -ForegroundColor Cyan
Write-Host "1. 打开GitHub仓库页面"
Write-Host "2. 点击'Settings'选项卡"
Write-Host "3. 滚动到'GitHub Pages'部分"
Write-Host "4. 在'Source'下拉菜单中选择'master branch'"
Write-Host "5. 点击'Save'按钮"
Write-Host "6. 等待部署完成（1-2分钟）"
Write-Host "7. 访问生成的GitHub Pages URL"

Write-Host "`n部署脚本执行完成！" -ForegroundColor Green
