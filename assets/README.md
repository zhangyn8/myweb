# 照片存储解决方案

由于 GitHub Pages 在国内访问可能存在图片加载问题，建议使用以下替代方案：

## 方案1：使用国内图床
- 阿里云 OSS
- 腾讯云 COS
- 七牛云存储
- 又拍云

## 方案2：使用 CDN 加速
- jsDelivr: `https://cdn.jsdelivr.net/gh/用户名/仓库名@分支/文件路径`
- 示例：`https://cdn.jsdelivr.net/gh/zhangyn8/myweb@gh-pages/assets/profile-photo.jpg`

## 方案3：使用 Base64 编码
将小图片直接嵌入 HTML 中，避免外部请求

## 当前文件列表
- profile-photo.jpg (个人头像)
- project-1.jpg (项目图片1)
- project-2.jpg (项目图片2)
- project-3.jpg (项目图片3)
- resume-placeholder.pdf (简历文件)