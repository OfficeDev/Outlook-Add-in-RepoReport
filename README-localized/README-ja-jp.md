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
# Repo Report
**Repo Report** は Angular で開発された Outlook のアドインで、メールをスキャンして公開 GitHub リポジトリのリンクを探し、見つかったリンクの情報を表示します。

![Repo Report screenshot](./repo report screenshot.PNG)

## 前提条件
* [npm](https://www.npmjs.com/) (ノード パッケージ マネージャー) は、開発の依存関係をインストールするのに必要です。
* [Bower](http://bower.io/) は、フロントエンドの依存関係をインストールするのに必要です。 
* [Gulp](http://gulpjs.com/) は、開発サーバーにアプリケーションをサービスするなど、タスク ランナーとして使用されます。
* Office 365 アカウント。お持ちでない場合は、[Office 365 Developer プログラムに参加して、Office 365 の 1 年間無料のサブスクリプションを取得](https://aka.ms/devprogramsignup)できます。

## アドインを構成する
1. このリポジトリの複製を作成します。
2. `npm install` を実行し、npm と Bower の両方の依存関係をインストールします。
3. `gulp serve-static` を実行し、開発用サーバーを起動します。
4. [mail.office365.com](http://mail.office365.com) に移動し、Office 365 アカウントでサインインします。
5. 右上隅にある歯車アイコンをクリックし、 [*アドインの管理*] を選択します。
6. プラス記号のアイコンをクリックし、[*ファイルから追加*] を選択します。
7. このリポジトリ フォルダーを参照し、[*manifest.xml*] を選択します。
8. [*次へ*]、[*インストール*]、[*OK*] の順に選択してウィザードを完了し、アドインが Office 365 アカウントで使用できるようにします。
9. 最後に、[アプリ](https://localhost:8443/appread/index.html)をブラウザーで開き、`localhost:8443` の証明書を信頼する必要があります。この証明書がコンピューターにより信頼されない場合、アドインは実行されません。

## アドインを実行する
1. アドインをインストールしたら、[mail.office365.com](mail.office365.com) に移動します。 
2. パブリック GitHub リポジトリへのリンクが少なくとも 1 つ含まれているメール (ほとんどの場合、最初に自分宛に 1 通送信する必要があります) を選択します。*アドインは、対象 URL が検出された場合にのみ有効になります。*
3. メール本文のすぐ上にある [*Repo Report*] をクリックし、アドインの動作を確認します。

## 質問とコメント
このサンプルに関するフィードバックをお寄せください。質問や提案は、このリポジトリの「[問題](https://github.com/OfficeDev/Outlook-Add-in-RepoReport/issues)」セクションで送信できます。

## その他のリソース
* [Yeoman ジェネレーター](https://github.com/OfficeDev/generator-office) - Microsoft Office 関連のプロジェクト (アドインなど) を構築するための Yeoman ジェネレーターです。このプロジェクトは、Yeoman ジェネレーターを使って構築されました。
* [Office UI Fabric](https://github.com/OfficeDev/Office-UI-Fabric/) - Office 365 のエクスペリエンスを構築するためのフロント エンドのフレームワークです。Office の外観と操作性を持たせるために、このプロジェクトでも使用されています。 
* [dev.office.com](http://dev.office.com) - Office 開発に関連するドキュメント、サンプル、およびその他の役に立つ情報が見つかります。
* [正規表現アクティブ化](https://msdn.microsoft.com/en-us/library/office/fp142135.aspx) - アドインを特定の URL 形式でアクティブ化させるために、正規表現を使用しています。

## 著作権
Copyright (c) 2015 Microsoft.All rights reserved.


このプロジェクトでは、[Microsoft オープン ソース倫理規定](https://opensource.microsoft.com/codeofconduct/)が採用されています。詳細については、「[倫理規定の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
