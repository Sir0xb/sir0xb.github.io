---
path       : '/57OmkmFgj9nDjNmgYbvM6kQy'
title      : "Windows 环境下 Nginx 配置 php"
date       : 2011-12-26 11:40:22 +0800
comments   : true
categories : programming
author     : Sir0xb
tags       : [nginx]
---

##### # 下载php

<a target="_blank" href="http://windows.php.net/download/">http://windows.php.net/download/</a>

下载 Non Thread Safe 版本，本人下了个zip绿色版本的。

##### # php部署到哪儿无所谓，主要是给Nginx用的，所以放Nginx目录下了。

##### # 找到 php.ini-development 文件，更名为 php.ini

##### # 修改 php.ini 配置参数：

``` bash
; extension_dir = "ext"
```

<!--more-->

修改成(下面是本人的配置，根据自己的进行修改)：

``` bash
extension_dir = " C:/nginx-1.1.5/php-5.3.8/ext"
```

开启如下配置注释：

``` bash
extension=php_curl.dll
extension=php_gd2.dll
extension=php_mbstring.dll
extension=php_mysql.dll
extension=php_pdo_odbc.dll
extension=php_xmlrpc.dll
```

php 的 Session 也配一个吧，应该都没关系(随便建了个 temp 文件夹)：

``` bash
session.save_path = "C:/nginx-1.1.5/php-5.3.8/temp"
```

##### # 之后就是配置 nginx.conf 文件了，粉色部分是新加的：

``` bash
server {
listen       80;
    server_name  Dojo;
    charset utf-8;

    location / {
       #主目录，相当于webapps目录
       root   WebServer/Dojo;

       #开启目录浏览
       autoindex on;
    }

   location ~ \.php$ {
       root           WebServer/Dojo;
       fastcgi_pass   127.0.0.1:9000;
       fastcgi_index  index.php;
       fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include        fastcgi_params;
   }
}
```

#### # 下载一个小工具，配置启动 bat 的时候用得上，解压后把 exe 文件丢到 php 住目录下即可。

<a target="_blank" href="http://redmine.lighttpd.net/attachments/660/RunHiddenConsole.zip">http://redmine.lighttpd.net/attachments/660/RunHiddenConsole.zip</a>

#### # 还有一步是必须的，就是启动 Nginx 的时候，同时把 php 也启动了。还是修改启动 bat 文件为例吧。

``` bash
cls
@ECHO OFF
SET NGINX_PATH=C:
SET NGINX_DIR=C:\nginx-1.1.5\
color 0a
TITLE Nginx管理程序
GOTO MENU
:MENU
CLS
ECHO.
ECHO. * * * *  Nginx Management  * * *
ECHO. *                                *
ECHO. *   1 启动Nginx                  *
ECHO. *                                *
ECHO. *   2 关闭Nginx                  *
ECHO. *                                *
ECHO. *   3 重启Nginx                  *
ECHO. *                                *
ECHO. *   4 检查配置                   *
ECHO. *                                *
ECHO. *   5 退 出                      *
ECHO. *                                *
ECHO. * * * * * * * * * * * * * * * * *
ECHO.
ECHO.请输入命令编号:
set /p ID=
IF "%id%"=="1" GOTO cmd1
IF "%id%"=="2" GOTO cmd2
IF "%id%"=="3" GOTO cmd3
IF "%id%"=="4" GOTO cmd4
IF "%id%"=="5" EXIT
PAUSE

:cmd1
ECHO.

@ECHO OFF
SET PHP_FCGI_MAX_REQUESTS=1000
ECHO.启动PHP FastCGI...
RunHiddenConsole C:/nginx-1.1.5/php-5.3.8/php-cgi.exe -b 127.0.0.1:9000 -c C:/nginx-1.1.5/php-5.3.8/php.ini

ECHO.启动Nginx......
IF NOT EXIST %NGINX_DIR%nginx.exe ECHO %NGINX_DIR%nginx.exe不存在
%NGINX_PATH%
cd %NGINX_DIR%
IF EXIST %NGINX_DIR% start %NGINX_DIR%nginx.exe
ECHO.OK
PAUSE
GOTO MENU

:cmd2
ECHO.
ECHO.关闭Nginx......
taskkill /F /IM nginx.exe > nul
ECHO.关闭 PHP FastCGI...
taskkill /F /IM php-cgi.exe > nul
ECHO.OK
PAUSE
GOTO MENU

:cmd3
ECHO.
ECHO.关闭Nginx......
taskkill /F /IM nginx.exe > nul
ECHO.关闭PHP FastCGI...
taskkill /F /IM php-cgi.exe > nul
ECHO.OK
GOTO cmd1
GOTO MENU

:cmd4
ECHO.
ECHO.检查Nginx配置......
IF NOT EXIST %NGINX_DIR%nginx.exe ECHO %NGINX_DIR%nginx.exe不存在
%NGINX_PATH%
cd %NGINX_DIR%
IF EXIST %NGINX_DIR% %NGINX_DIR%nginx.exe -t
ECHO.完成检查
PAUSE
GOTO MENU
```

#### # 完成之后可以用 php 页面测试一下。

``` html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>xampp 的 php 开发环境测试页面</title>
<script type="text/javascript" >
    function thisClose(){
            window.close();
        }
</script>
</head>
<body>
<?php

    for($i = 1;$i <= 10; $i++) {
            echo "$i.这是一个测试页面。<br />";
        }

?>
<input id="btnClose" type="button" value="关闭窗口" onclick="thisClose()" />
</body>
</html>
```

效果如下：

<img src="/images/2011/2011-12-26-114022.png" />

***
