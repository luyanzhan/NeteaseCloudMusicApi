#!/bin/bash
export PORT=9000
/var/lang/node16/bin/node app.js
#!/usr/bin/env node
async function start() {
  // 如果需要手动修改anonymous_token，需要注释generateConfig调用
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
start()
