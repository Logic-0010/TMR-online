# 肉牛TMR日粮配方制作与指标管理系统 - 手动部署指南

## 系统准备

### 1. 检查系统文件

确保以下文件和目录存在：

```
tmr_ration_indicator_app/
├── assets/             # 静态资源
│   ├── css/            # CSS文件
│   ├── js/             # JavaScript文件
│   └── webfonts/       # 字体文件
├── index.html          # 主页面
├── diagnostics.js      # 系统诊断工具
├── DEPLOYMENT.md       # 部署文档
└── .gitignore          # Git忽略文件
```

### 2. 本地测试

在部署之前，确保系统在本地正常运行：

```bash
# 启动本地服务器
python -m http.server 8000

# 访问系统
# 打开浏览器访问 http://localhost:8000
```

## 部署选项

### 选项1：GitHub Pages 手动部署

**步骤1：创建GitHub仓库**
1. 登录GitHub账号
2. 点击"New repository"
3. 输入仓库名称（例如：tmr-ration-indicator）
4. 选择"Public"或"Private"
5. 点击"Create repository"

**步骤2：推送代码到GitHub**
1. 打开命令行终端
2. 进入项目目录
3. 执行以下命令：

```bash
# 初始化Git仓库（如果尚未初始化）
git init

# 添加远程仓库
git remote add origin https://github.com/your-username/tmr-ration-indicator.git

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 推送到GitHub
git push -u origin master
```

**步骤3：启用GitHub Pages**
1. 打开GitHub仓库页面
2. 点击"Settings"选项卡
3. 滚动到"GitHub Pages"部分
4. 在"Source"下拉菜单中选择"master branch"
5. 点击"Save"按钮
6. 等待部署完成（1-2分钟）
7. 访问生成的GitHub Pages URL

### 选项2：Netlify 手动部署

**步骤1：创建Netlify账号**
1. 访问 https://app.netlify.com
2. 注册并登录账号

**步骤2：部署网站**
1. 点击"New site from Git"
2. 选择"GitHub"并授权
3. 选择刚创建的GitHub仓库
4. 配置部署设置（默认设置即可）
5. 点击"Deploy site"
6. 等待部署完成
7. 访问生成的Netlify URL

### 选项3：Vercel 手动部署

**步骤1：创建Vercel账号**
1. 访问 https://vercel.com
2. 注册并登录账号

**步骤2：部署网站**
1. 点击"New Project"
2. 选择"Import Git Repository"
3. 选择刚创建的GitHub仓库
4. 点击"Import"
5. 配置部署设置（默认设置即可）
6. 点击"Deploy"
7. 等待部署完成
8. 访问生成的Vercel URL

### 选项4：其他平台部署

#### 4.1 AWS S3 + CloudFront

**步骤1：创建S3存储桶**
1. 登录AWS控制台
2. 导航到S3服务
3. 点击"Create bucket"
4. 输入存储桶名称
5. 选择区域
6. 取消勾选"Block all public access"
7. 点击"Create bucket"

**步骤2：上传文件**
1. 打开刚创建的存储桶
2. 点击"Upload"
3. 上传项目的所有文件和目录
4. 点击"Upload"

**步骤3：启用静态网站托管**
1. 打开存储桶属性
2. 滚动到"Static website hosting"
3. 点击"Edit"
4. 选择"Enable"
5. 输入"Index document"为"index.html"
6. 点击"Save changes"

**步骤4：配置CloudFront（可选）**
1. 导航到CloudFront服务
2. 点击"Create distribution"
3. 选择"Web"
4. 输入S3存储桶的URL
5. 点击"Create distribution"
6. 等待部署完成
7. 访问生成的CloudFront URL

#### 4.2 Firebase Hosting

**步骤1：安装Firebase CLI**

```bash
npm install -g firebase-tools
```

**步骤2：初始化Firebase项目**

```bash
# 登录Firebase
firebase login

# 初始化项目
firebase init

# 选择Hosting
# 选择或创建Firebase项目
# 输入public目录为"."
# 选择"No" for single-page app
```

**步骤3：部署到Firebase**

```bash
firebase deploy
```

**步骤4：访问网站**
访问生成的Firebase Hosting URL

## 部署验证

部署完成后，验证系统是否正常运行：

1. **访问网站**：打开部署后的URL
2. **检查功能**：
   - 配方制作功能
   - 营养指标分析
   - 原料管理
   - 收益测算
   - 数据备份与恢复
3. **检查响应速度**：确保页面加载和操作响应迅速
4. **检查兼容性**：在不同浏览器中测试系统

## 故障排查

### 常见问题

1. **页面不显示**
   - 检查文件路径是否正确
   - 检查服务器配置
   - 检查网络连接

2. **功能无响应**
   - 检查浏览器控制台错误信息
   - 检查JavaScript代码是否有错误
   - 检查资源文件是否加载成功

3. **图表不显示**
   - 检查Chart.js是否正确加载
   - 检查图表初始化代码
   - 检查数据是否正确

4. **数据丢失**
   - 检查本地存储是否可用
   - 检查备份机制是否正常
   - 尝试使用备份恢复数据

### 技术支持

如果遇到问题，请：
1. 查看浏览器控制台错误信息
2. 检查网络请求状态
3. 参考部署文档中的故障排查部分
4. 联系开发人员获取技术支持

## 系统维护

### 定期更新

1. **代码更新**
   - 拉取最新代码
   - 测试更改
   - 重新部署

2. **数据备份**
   - 定期导出系统数据
   - 确保备份数据安全存储

3. **性能优化**
   - 定期清理本地存储
   - 优化资源文件大小
   - 确保系统响应速度

4. **安全管理**
   - 定期检查系统漏洞
   - 确保使用HTTPS
   - 保护用户数据安全

## 总结

本系统已完全准备就绪，可以通过多种平台部署为在线系统。部署后，用户可以通过互联网访问系统，使用所有功能。

系统具备完整的错误处理、日志记录、数据备份和恢复机制，确保系统的稳定运行和数据安全。

---

**部署完成后，系统将可以通过以下方式访问：**
- GitHub Pages: `https://<username>.github.io/tmr-ration-indicator`
- Netlify: `https://<site-name>.netlify.app`
- Vercel: `https://<project-name>.vercel.app`
- AWS S3: `https://<bucket-name>.s3.<region>.amazonaws.com/index.html`
- Firebase: `https://<project-name>.web.app`
