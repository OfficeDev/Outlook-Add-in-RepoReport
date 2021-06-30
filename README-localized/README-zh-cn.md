---
page_type: sample
products:
- office-outlook
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  platforms:
  - CSS
  - AngularJS
  createdDate: 10/15/2015 12:44:12 PM
---
# 存储库报告
**存储库报告**是通过 Angular 构建的 Outlook 加载项，用于对电子邮件进行扫描以查找公共 GitHub 存储库链接，并显示找到的相关信息。

![存储库报告屏幕截图](./repo report screenshot.PNG)

## 先决条件
* 需要使用 [npm](https://www.npmjs.com/)（节点包管理器）安装开发依赖项。
* 需要使用 [Bower](http://bower.io/) 安装前端依赖项。 
* [Gulp](http://gulpjs.com/) 用作任务运行程序，包括在开发服务器上为应用程序提供服务。
* Office 365 帐户。如果你没有该帐户，可以[参加 Office 365 开发人员计划并获取为期 1 年的免费 Office 365 订阅](https://aka.ms/devprogramsignup)。

## 配置加载项
1. 克隆该存储库。
2. 运行 `npm 安装` 以安装 npm 和 Bower 依赖项。
3. 运行 `gulp serve-static` 以启动开发服务器。
4. 转到 [mail.office365.com](http://mail.office365.com) 并使用你的 Office 365 帐户登录。
5. 单击右上角的齿轮图标，然后选择“*管理加载项*”。
6. 单击加号图标，然后选择“*从文件添加*”。
7. 浏览到此存储库文件夹，然后选择 *manifest.xml*。
8. 随后完成向导（“*下一步*”、“*安装*”、“*确定*”），使该加载项在 Office 365 帐户上可用。
9. 最后，必须在浏览器中打开[应用](https://localhost:8443/appread/index.html)，并信任 `localhost:8443` 的证书。如果计算机不信任该证书，则加载项不会运行。

## 运行加载项
1. 安装加载项后，转到 [mail.office365.com](mail.office365.com)。 
2. 选择一封电子邮件（你可能必须先向自己发送），其中至少有一条指向公共 GitHub 存储库的链接。*仅当找到目标 URL 的情况下才会激活加载项！*
3. 单击电子邮件正文上方的“*库报告*”以查看加载项的效果。

## 问题和意见
我们乐意倾听你对本示例的反馈。你可通过该存储库中的[问题](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues)部分向我们发送问题和建议。

## 其他资源
* [Yeoman 生成器](https://github.com/OfficeDev/generator-office) - 生成与 Microsoft Office 相关的项目（包括加载项）的 Yeoman 生成器。本项目便是使用该生成器生成的。
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - 用于生成 Office 365 体验的前端框架。此项目使用它来获取 Office 的外观。 
* [dev.office.com](http://dev.office.com) - 查找与 Office 开发相关的文档、示例和其他有用信息。
* [正则表达式激活](https://msdn.microsoft.com/en-us/library/office/fp142135.aspx) - 为了以特定 URL 格式激活加载项，我们使用了正则表达式。

## 版权信息
版权所有 (c) 2015 Microsoft。保留所有权利。


此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
