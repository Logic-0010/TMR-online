# 肉牛TMR日粮配方制作与指标管理系统 - 在线部署方案

## 系统概述

本系统是一个基于HTML、JavaScript和Tailwind CSS开发的肉牛TMR日粮配方制作与指标管理系统，具备以下功能：

- 配方制作与管理
- 营养指标分析
- 原料管理
- 收益测算
- 数据备份与恢复

## 本地开发环境

### 1. 系统要求

- Python 3.7+
- 现代Web浏览器（Chrome、Firefox、Edge）
- Git

### 2. 本地运行

```bash
# 克隆仓库
git clone <repository-url>

# 进入项目目录
cd tmr_ration_indicator_app

# 启动本地服务器
python -m http.server 8000

# 访问系统
# 打开浏览器访问 http://localhost:8000
```

### 3. 开发工具

- **代码编辑器**：VS Code、Sublime Text等
- **浏览器开发者工具**：用于调试和测试
- **Git**：版本控制

## 代码仓库管理

### 1. 仓库结构

```
tmr_ration_indicator_app/
├── assets/             # 静态资源
│   ├── css/            # CSS文件
│   ├── js/             # JavaScript文件
│   └── webfonts/       # 字体文件
├── index.html          # 主页面
├── diagnostics.js      # 系统诊断工具
└── .gitignore          # Git忽略文件
```

### 2. 分支管理

- **master**：主分支，用于部署生产环境
- **develop**：开发分支，用于开发新功能
- **feature/**：功能分支，用于开发特定功能
- **bugfix/**：修复分支，用于修复bug

### 3. 提交规范

- **feat**：新功能
- **fix**：bug修复
- **docs**：文档更新
- **style**：代码风格调整
- **refactor**：代码重构
- **test**：测试更新
- **chore**：构建或依赖更新

## 在线部署选项

### 1. GitHub Pages

**优点**：
- 免费
- 与GitHub仓库集成
- 自动部署

**部署步骤**：
1. 确保代码已推送到GitHub仓库
2. 在GitHub仓库设置中启用GitHub Pages
3. 选择部署分支（通常为master）
4. 选择部署目录（通常为根目录）
5. 保存设置，GitHub会自动部署

**访问地址**：`https://<username>.github.io/<repository-name>`

### 2. Netlify

**优点**：
- 免费
- 自动部署
- 支持自定义域名
- 提供HTTPS

**部署步骤**：
1. 登录Netlify账号
2. 连接GitHub仓库
3. 配置部署设置
4. 触发部署

**访问地址**：`https://<site-name>.netlify.app`

### 3. Vercel

**优点**：
- 免费
- 自动部署
- 支持自定义域名
- 提供HTTPS
- 部署速度快

**部署步骤**：
1. 登录Vercel账号
2. 导入GitHub仓库
3. 配置部署设置
4. 触发部署

**访问地址**：`https://<project-name>.vercel.app`

### 4. 其他选项

- **AWS S3 + CloudFront**：适合需要高可用性和扩展性的场景
- **Firebase Hosting**：适合需要后端服务的场景
- **Heroku**：适合需要后端服务的场景

## 部署步骤

### 1. 准备部署

```bash
# 确保代码已提交
git status

# 推送到远程仓库
git push origin master
```

### 2. GitHub Pages部署

1. 打开GitHub仓库页面
2. 点击"Settings"选项卡
3. 滚动到"GitHub Pages"部分
4. 在"Source"下拉菜单中选择"master branch"
5. 点击"Save"按钮
6. 等待部署完成（通常需要1-2分钟）
7. 访问生成的GitHub Pages URL

### 3. Netlify部署

1. 访问 https://app.netlify.com
2. 点击"New site from Git"
3. 选择"GitHub"
4. 授权Netlify访问GitHub仓库
5. 选择要部署的仓库
6. 配置部署设置（默认设置即可）
7. 点击"Deploy site"
8. 等待部署完成
9. 访问生成的Netlify URL

### 4. Vercel部署

1. 访问 https://vercel.com
2. 点击"New Project"
3. 选择"Import Git Repository"
4. 选择要部署的GitHub仓库
5. 点击"Import"
6. 配置部署设置（默认设置即可）
7. 点击"Deploy"
8. 等待部署完成
9. 访问生成的Vercel URL

## 系统维护与更新

### 1. 定期备份

系统已内置数据备份机制，会定期将数据备份到本地存储。建议：

- 定期导出系统数据
- 定期检查备份文件
- 确保备份数据安全存储

### 2. 系统更新

```bash
# 拉取最新代码
git pull origin master

# 部署更新
# GitHub Pages会自动部署
# Netlify和Vercel会自动部署
```

### 3. 性能优化

- 定期清理本地存储，避免存储空间不足
- 优化图片和资源文件大小
- 确保系统响应速度

### 4. 安全管理

- 定期检查系统漏洞
- 确保使用HTTPS
- 保护用户数据安全

## 故障排查

### 1. 常见问题

- **页面不显示**：检查服务器是否运行，网络连接是否正常
- **功能无响应**：检查浏览器控制台是否有错误信息
- **数据丢失**：使用备份恢复数据
- **图表不显示**：检查Chart.js是否正确加载

### 2. 诊断工具

系统内置诊断工具 `diagnostics.js`，可通过浏览器控制台查看诊断结果。

### 3. 技术支持

- 查看浏览器控制台错误信息
- 检查网络请求状态
- 联系开发人员获取技术支持

## 总结

本系统已完全准备就绪，可以通过GitHub Pages、Netlify或Vercel等平台部署为在线系统。部署后，用户可以通过互联网访问系统，使用所有功能。

系统具备完整的错误处理、日志记录、数据备份和恢复机制，确保系统的稳定运行和数据安全。

---

**部署完成后，系统将可以通过以下方式访问：**
- GitHub Pages: `https://<username>.github.io/tmr-ration-indicator`
- Netlify: `https://<site-name>.netlify.app`
- Vercel: `https://<project-name>.vercel.app`
