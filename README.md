# keystoneJS

```sh
cd cms
node keystone
```

install lint , eslint plugin for standardjs

```sh
npm i -D eslint-config-standard eslint-plugin-standard eslint-plugin-promise
```

```md:README.md
markdown
```

# add remote and  security access mongodb
## create admin user  on db.admin 
先に admin データベースへ admin ユーザーを作成
`role: "readWrite", db: "cms"`

```js
mongo
use admin
db.createUser({user: "admin",pwd: "<YourAdminPass>",roles: [{ role: "readWrite", db: "cms" }]})
```

## edit .env file (Github非共有ファイル)
接続URL に authSouce で データベース admin を選択する
`MONGO_URI=mongodb://admin:youradminpass@35.194.108.26:27017/cms?authSource=admin`

### open config file
`sudo vi /etc/mongod.conf`

### edit /etc/mongod.conf

```conf
security:
  authorization: enabled
```

### restart server

`sudo service mongod restart`


## check point

- Mongoログを確認
`sudo vi /var/log/mongodb/mongod.log`

- MONGO_URIを確認 authSource
