---
path       : '/JCEjnWT4Gd7SguvvUZMf6JmH'
title      : "Oracle TNSListener服务启动后自动停止"
date       : 2011-10-31 13:03:14 +0800
comments   : true
categories : programming
author     : Sir0xb
tags       : [oracle, tns]
---

##### 问题：

发现 `TNSListener` 服务启动后一刷新就自动停止。

##### 分析：

除了更改过主机名，没做过其他操作。

##### 解决：

`X:\oracle\product\10.2.0\db_1\NETWORK\ADMIN\` 路径下，打开 `listener.ora` 文件
将 `LISTENER` 中的主机名更新成最新的。

***
