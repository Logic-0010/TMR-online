#!/bin/bash

# 肉牛TMR日粮配方制作与指标管理系统 - 自动部署脚本

echo "=== 开始自动部署 ==="

# 检查Git是否安装
if ! command -v git &> /dev/null; then
    echo "错误: Git 未安装，请先安装Git"
    exit 1
fi

# 检查Python是否安装
if ! command -v python3 &> /dev/null; then
    if ! command -v python &> /dev/null; then
        echo "错误: Python 未安装，请先安装Python"
        exit 1
    else
        PYTHON_CMD="python"
    fi
else
    PYTHON_CMD="python3"
fi

# 检查本地服务器是否运行
echo "检查本地服务器状态..."
if lsof -i :8000 > /dev/null 2>&1; then
    echo "本地服务器已在运行"
else
    echo "启动本地服务器..."
    $PYTHON_CMD -m http.server 8000 &
    sleep 2
    if lsof -i :8000 > /dev/null 2>&1; then
        echo "本地服务器启动成功"
    else
        echo "警告: 本地服务器启动失败"
    fi
fi

# 检查Git仓库状态
echo "检查Git仓库状态..."
if [ ! -d ".git" ]; then
    echo "初始化Git仓库..."
    git init
    git config user.name "部署用户"
    git config user.email "deploy@example.com"
fi

# 检查远程仓库
echo "检查远程仓库..."
REMOTE_URL=$(git remote get-url origin 2>/dev/null)
if [ -z "$REMOTE_URL" ]; then
    echo "请输入GitHub仓库URL:"
    read -p "GitHub仓库URL: " GITHUB_URL
    git remote add origin "$GITHUB_URL"
    echo "远程仓库添加成功"
else
    echo "远程仓库已配置: $REMOTE_URL"
fi

# 添加所有文件
echo "添加所有文件..."
git add .

# 提交更改
echo "提交更改..."
git commit -m "自动部署: $(date)"

# 推送到GitHub
echo "推送到GitHub..."
git push -u origin master

# 检查推送结果
if [ $? -eq 0 ]; then
    echo "推送成功！"
else
    echo "推送失败，请检查网络连接和GitHub凭据"
    exit 1
fi

# 提示用户配置GitHub Pages
echo "\n=== 部署完成 ==="
echo "请按照以下步骤配置GitHub Pages:"
echo "1. 打开GitHub仓库页面"
echo "2. 点击'Settings'选项卡"
echo "3. 滚动到'GitHub Pages'部分"
echo "4. 在'Source'下拉菜单中选择'master branch'"
echo "5. 点击'Save'按钮"
echo "6. 等待部署完成（1-2分钟）"
echo "7. 访问生成的GitHub Pages URL"

echo "\n部署脚本执行完成！"
