# keystoneJS

--DBはローカル環境からGcloud上にアクセス可能--
↓
mlab.com

## jenkins CI
github pull request builder
の設定が鬼門

## create your local /cms/.env

/cms/に .env(セキュリティ上非共有) ファイルを作成
パス、トークンを保存その後で↓

```sh
cd cms
npm i
node keystone (or npm start)
```

### npm global

npm -i standard --global
sudo npm install standard --global
sudo npm install pug-lint --global

### install lint , eslint plugin for standardjs

```sh
npm i -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise
```

ここからはサーバー設定手順メモ用

## add remote and security access mongodb

ハマったので、サーバー設定手順をログ、特にこれ → `?authSource=admin`

## 1.create admin user  on db.admin

先に admin データベースへ admin ユーザーを作成
`role: "readWrite", db: "cms"`

```sh
mongo
use admin
db.createUser({user: "admin",pwd: "<YourAdminPass>",roles: [{ role: "readWrite", db: "cms" }]})
```

## 2.edit .env file (Github非共有ファイル)
.env ローカルでドットエンブファイルにIPASを記述

接続URL に authSouce で データベース admin を選択する
`MONGO_URI=mongodb://admin:youradminpass@35.194.108.26:27017/cms?authSource=admin`
Gcloud内ローカル再起動でエラーが頻発 > mlab.com に切り替え

### 3.open config file

`sudo vi /etc/mongod.conf`

### 4.edit /etc/mongod.conf

```conf
security:
  authorization: enabled
```

### 5.restart server

`sudo service mongod restart`

## check point

- Mongoログを確認

`sudo vi /var/log/mongodb/mongod.log`

- MONGO_URIを確認 authSource

### mongodb version diff

みつけた現象
ver3 .6 だとDBの権限を管理するUserID識別子がランダムになっている
Driverが古いと対応不可とおもわれ

```json
mongdb3 .6 {
  "_id": ObjectId("5a9665b182b46133ac3bef91"),
  "user": "admin",
}

mongodb 3.4 {
  "_id": "cms.mono",
  "user": "mono",
}
```