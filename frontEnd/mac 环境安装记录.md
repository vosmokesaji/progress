# mac 服务安装记录（踩坑过程）

## 前期准备

- xcode
- xcode-select --install
- iterm2
- oh-my-zsh
- brew


## nginx 安装

1. 安装依赖：（brew install）

	```
	brew install pcre
	brew install openssl
	```


2. 编译安装

	- 解压源码包并进入 nginx-1.12.2.tar.gz 并且进入 nginx-1.12.2

	```
	tar zxf nginx-1.12.2.tar.gz
	cd nginx-1.12.2
	```

	- 配置

	```
	./configure --prefix=/Users/linzhiqing/servers/nginx \
	--conf-path=/Users/linzhiqing/servers/nginx/config/nginx.conf \
	--error-log-path=/Users/linzhiqing/servers/nginx/var/log/error.log \
	--pid-path=/Users/linzhiqing/servers/nginx/var/run/nginx.pid \
	--lock-path=/Users/linzhiqing/servers/nginx/var/run/nginx.lock \
	--with-http_ssl_module \
	--with-http_stub_status_module \
	--with-http_gzip_static_module \
	--with-http_sub_module \
	--with-http_flv_module \
	--with-http_mp4_module \
	--with-http_random_index_module \
	--with-http_dav_module \
	--with-http_realip_module \
	--with-openssl=/Users/linzhiqing/Downloads/src/nginx1.12.2/openssl-1.1.0j
	```


	> 要在wiki中的linux系统下配置的基础上添加一个openssl，目录要指向源码包  而非安装后的文件位置（此处踩坑半小时）

	- 编译

	```
	make
	```

	- 安装

	```
	make install
	```

3. 后续配置

	- 将 ssl 文件夹放在 ~/sites/ 目录下

	- 再安装目录中 编辑 config/nginx.conf 在 http {} 模块内加上以下配置。

	```
    upstream php_proxy {
        server 127.0.0.1:9027;
    }
    include sites-conf/*.conf;
    ```
	- 将 sites-conf 文件夹与 nginx.conf 置于同一级，并将 sites-conf 中的项目路径、证书路径以及日志路径改成自己的。

	- 测试和启动

	```
	# 测试：
	/Users/linzhiqing/servers/nginx/sbin/nginx -t
	
	# 启动：
	/Users/linzhiqing/servers/nginx/sbin/nginx
	
	# 重新启动：
	/Users/linzhiqing/servers/nginx/sbin/nginx -s reload
	
	# 停止服务：
	/Users/linzhiqing/servers/nginx/sbin/nginx -s stop
	```

	- 增加全局命令，可以在全局任意位置执行 nginx 命令

	```
	sudo ln -s /Users/linzhiqing/servers/nginx/sbin/nginx /usr/local/bin
	
	# 上边的命令就变成了
	
	# 测试：
	nginx -t
	
	# 启动：
	nginx
	
	# 重新启动：
	nginx -s reload
	
	# 停止服务：
	nginx -s stop
	```

	- 写入启动脚本 ~/start_servers.sh
	
	```
	vim ~/start_servers.sh
	
	# 写入
	nginx
	```

## Memcache 安装（端口：12306）

1. 创建服务安装目录和 pid 文件存放目录

	```
	mkdir -p /Users/linzhiqing/servers/memcached/var
	```

2. 安装依赖

	```
	brew install libevent
	```

3. 编译安装

	- 解压源码包并进入目录

	```
	tar zxf memcached-1.4.34.tar.gz
	cd memcached-1.4.34
	```

	- 配置

	```
	./configure --prefix=/Users/linzhiqing/servers/memcached
	```

	- 编译

	```
	make
	```

	- 安装

	```
	make install
	```


4. 后续配置

	- 不需要配置文件，启动服务

	```
	# 启动：
	/Users/linzhiqing/servers/memcached/bin/memcached -d -p 12306 -P /Users/linzhiqing/servers/memcached/var/memcached.pid
	
	参数解释
	-m 允许最大内存用量，单位 M （默认：64KB）
	-l 绑定地址（默认：所有都允许，无论内外网或者本机更换IP，有一定的安全隐患，所设置为127.0.0.1就只能本机访问）
	-p 设置TCP端口号（默认：11211）
	-U UDP监听端口（默认：11211，0 关闭）
	-c 最大同时连接数（默认：1024）
	-d 以daemon方式守护模式运行
	-u 绑定使用指定用于运行进程的用户
	-P 将PID写入文件中，这样可以使得后面进行快速进程终止，需要与 -d 一起使用
	```

	
	- 写入启动脚本 ~/start_servers.sh
	
	```
	vim ~/start_servers.sh
	
	# 写入
	nginx
	/Users/linzhiqing/servers/memcached/bin/memcached -d -p 12306 -P /Users/linzhiqing/servers/memcached/var/memcached.pid
	```

## Redis 安装 （端口：16379）


1. 创建服务安装目录：

	```
	mkdir -p {/Users/linzhiqing/servers/redis/bin,/Users/linzhiqing/servers/redis/datafile,/Users/linzhiqing/servers/redis/etc,/Users/linzhiqing/servers/redis/logs}
	```

2. 安装

	- 解压源码包并进入目录

	```
	tar zxf memcached-1.4.34.tar.gz
	cd memcached-1.4.34
	```
	- 编译以及安装

	```
	make && make PREFIX=/Users/linzhiqing/servers/redis install
	```

3. 配置：Redis 默认是不生成配置文件的，可以在解压的源码包目录下拷贝 redis.conf 到 /Users/linzhiqing/servers/redis/etc 下，修改监听端口为 16379 ， 开启守护模式。

	```
	daemonize yes		//默认是不开启后台守护模式的，把 no 改为 yes 可以直接切到后台运行
	port 16379		    //服务默认监听 6379 端口号，根据需要决定是否更改
	```

4. 启动服务和停止服务

	```
	# 启动
	/Users/linzhiqing/servers/redis/bin/redis-server /Users/linzhiqing/servers/redis/etc/redis.conf
	# 停止
	/Users/linzhiqing/servers/redis/bin/redis-cli -p 16379 shutdown
	# 如果没有更改默认监听的端口号，可以省略 -p 16379
	```
	
	- 写入启动脚本 ~/start_servers.sh
	
	```
	vim ~/start_servers.sh
	
	# 写入
	nginx
	/Users/linzhiqing/servers/memcached/bin/memcached -d -p 12306 -P /Users/linzhiqing/servers/memcached/var/memcached.pid
	/Users/linzhiqing/servers/redis/bin/redis-server /Users/linzhiqing/servers/redis/etc/redis.conf
	```



## PHP5.6 安装

1. 安装依赖

```
brew install xml2
brew install libjpeg
brew install libpng
brew install mcrypt
brew install autoconf
brew install memcached
brew install gearman
brew install freetype
brew install bzip2
brew install imagemagick
```


2. 编译安装
	- 解压源码包并进入目录

	```
	tar zxf php-5.6.37.tar.gz
	cd php-5.6.37
	```

	- 配置：这是文档的原配置

	```
	./configure --prefix=/Users/linzhiqing/servers/php \
	--enable-cli \
	--with-libxml-dir=/usr/include/libxml2/libxml/ \
	--with-kerberos=/usr/include/krb5/ \
	--enable-bcmath \
	--enable-calendar \
	--enable-fpm \
	--with-mcrypt \
	--enable-soap \
	--enable-exif \
	--enable-mbstring \
	--enable-pdo \
	--with-pdo-mysql=mysqlnd \
	--with-mysql-sock \
	--with-curl=/usr/include/curl/ \
	--enable-ftp \
	--enable-mbstring \
	--with-png-dir \
	--with-gd \
	--enable-gd-native-ttf \
	--with-freetype-dir=/usr/include/freetype2/freetype/ \
	--disable-debug \
	--disable-rpath \
	--enable-inline-optimization \
	--with-bz2 \
	--with-zlib=/usr \
	--enable-sockets \
	--enable-sysvsem \
	--enable-sysvshm \
	--enable-pcntl \
	--enable-mbregex \
	--with-mhash \
	--enable-zip \
	--with-pcre-regex \
	--with-mysql=mysqlnd \
	--with-mysqli=mysqlnd \
	--with-gd \
	--with-jpeg-dir \
	--with-openssl
	```

	- 报错：configure: error: Cannot find OpenSSL's <evp.h> 需要挂等号添加 OpenSSL 的安装路径，变成这样

	```
	./configure --prefix=/Users/linzhiqing/servers/php \
	--enable-cli \
	--with-libxml-dir=/usr/include/libxml2/libxml/ \
	--with-kerberos=/usr/include/krb5/ \
	--enable-bcmath \
	--enable-calendar \
	--enable-fpm \
	--with-mcrypt \
	--enable-soap \
	--enable-exif \
	--enable-mbstring \
	--enable-pdo \
	--with-pdo-mysql=mysqlnd \
	--with-mysql-sock \
	--with-curl=/usr/include/curl/ \
	--enable-ftp \
	--enable-mbstring \
	--with-png-dir \
	--with-gd \
	--enable-gd-native-ttf \
	--with-freetype-dir=/usr/include/freetype2/freetype/ \
	--disable-debug \
	--disable-rpath \
	--enable-inline-optimization \
	--with-bz2 \
	--with-zlib=/usr \
	--enable-sockets \
	--enable-sysvsem \
	--enable-sysvshm \
	--enable-pcntl \
	--enable-mbregex \
	--with-mhash \
	--enable-zip \
	--with-pcre-regex \
	--with-mysql=mysqlnd \
	--with-mysqli=mysqlnd \
	--with-gd \
	--with-jpeg-dir \
	--with-openssl=/usr/local/Cellar/openssl/1.0.2q
	```

	- 也可以，添加软链，不用挂等号，推荐这种方法，一劳永逸，之后装php扩展也不会遇到这种问题。

	```
	ln -s /usr/local/Cellar/openssl/1.0.2q/include/* /usr/local/include
	ln -s /usr/local/Cellar/openssl/1.0.2q/lib/* /usr/local/lib
	```

	- 再次报错：checking if the location of ZLIB install directory is defined... no \n configure: error: Cannot find libz ，这个需要 brew 安装 zlib，并且等号挂 zlib 的安装路径

	```
	brew install zlib

	# 把
	--with-zlib=/usr \
	# 改为
	--with-zlib=/usr/local/Cellar/zlib/1.2.11/ \
	```

	- 也可以，添加软链，不用挂等号，推荐这种方法，一劳永逸，之后装php扩展也不会遇到这种问题。

	```
	ln -s /usr/local/Cellar/zlib/1.2.11/include/* /usr/local/include
	ln -s /usr/local/Cellar/zlib/1.2.11/lib/* /usr/local/lib
	```

	- 再次报错：

	```
	checking for BZip2 in default path... not found 
	configure: error: Please reinstall the BZip2 distribution
	```
	同理：安装 bzip2 加软链


	```
	brew install bzip2
	ln -s /usr/local/Cellar/bzip2/1.0.6_1/include/* /usr/local/include
	ln -s /usr/local/Cellar/bzip2/1.0.6_1/lib/* /usr/local/lib
	```

	- 再次报错：

	```
	checking for cURL in default path... not found
	configure: error: Please reinstall the libcurl distribution -
	easy.h should be in <curl-dir>/include/curl/
	```
	
	先brew安装curl，再试一次。报同样的错，

	```
	brew install curl
	```

	- 把 curl 挂等号的路径删掉，试试。

	```
	# 把
	--with-curl=/usr/include/curl/ \
	# 改成
	--with-curl \
	```
	- 还是报一样的错。我把 curl 的链接恢复成原样，加上软链，再试一次

	```
	# 把
	--with-curl \
	# 恢复成
	--with-curl=/usr/include/curl/ \
	# 添加软链
	ln -s /usr/local/Cellar/curl/7.64.0/include/* /usr/local/include
	ln -s /usr/local/Cellar/curl/7.64.0/lib/* /usr/local/lib
	```
	
	- curl 过了，接着报错 

	```
	configure: error: Please specify the install prefix of iconv with --with-iconv=<DIR>
	```
	需要添加 iconv ，先 brew 安装，然后加上 --with-iconv 不挂等号和路径试试 ，报一样的错，加上软链呢，再试试


	```
	brew install libiconv
	ln -s /usr/local/Cellar/libiconv/1.15/include/* /usr/local/include
	ln -s /usr/local/Cellar/libiconv/1.15/lib/* /usr/local/lib
	```

	- 出现 Thank you for using PHP... ，恭喜 配置成功
	- **总结一下，需要在文档的基础上加一个--with-iconv，并且要将 openssl、zlib、bzip2、curl、libiconv 通过 brew 安装 & 添加软链**

	- 编译

	```
	make
	```

	- 如果遇到报错

	```
	ld: symbol(s) not found for architecture x86\_64 
	```
	解决方法：./config... 之后，编辑 Makefile ，删除 EXTRA\_LDFALGS 和 EXTRA\_LDFLAGS\_PROGRAMS （大概在102行和103行）中的 
	
	```
	-L/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.xx.sdk/usr/lib
	```
	保存，再次 make，出现

	```
	Build complete. Don't forget to run 'make test'. 
	```
	表示编译成功。


	- 安装

	```
	make install
	```


3. 安装扩展


	- yaf/grpc/protobuf 都这么安装（编译安装）

	```
	# 以yaf为例
	
	tar zxf yaf-2.3.5.tgz
	ca cd yaf-2.3.5
	/Users/linzhiqing/servers/php/bin/phpize
	./configure --with-php-config=/Users/linzhiqing/servers/php/bin/php-config
	make
	make install
	```
	

	- memcached/memcache/redis/gearman/yar/swoole/imagick/ssh2

	
	```
	# pear 的方式（如果遇到了 redis 装不上的情况，改用编译安装即可）
	
	/Users/linzhiqing/servers/php/bin/pear install ./imagick-3.4.3.tgz
	
	```

4. 后续配置

	- PS：
	
	```
	php-fpm.conf 和 php.ini 文件默认是不会自动生成在安装路径下的
	php-fpm.conf 文件可以在安装目录下的 etc/ 目录下拷贝 .default 文件
	php.ini 文件可以在解压的源码包路径下拷贝过去
	php-fpm.conf 是 PHP 主配置文件，php.ini 是 PHP 扩展文件
	```
	
	- 拷贝配置文件

	```
	cp Path/to/your/php/etc/php-fpm.conf.default Path/to/your/php/etc//php-fpm.conf
	cp php-5.6.37/php.ini-production Path/to/your/php/lib/php.ini
	```
	
	- php-fpm.conf 修改端口 9000 改为 9027：

	```
	listen = 127.0.0.1:9027
	```
	
	- 在 php.ini 文件中增加扩展的相关配置使 扩展 生效：

	```
	extension=redis.so
	extension=gearman.so
	extension=memcache.so
	extension=memcached.so
	extension=yaf.so
	extension=imagick.so
	extension=swoole.so
	extension=grpc.so
	extension=protobuf.so
	extension=yar.so
	extension=ssh2.so
	```
	
	- 测试脚本
	
	```
	/Users/linzhiqing/servers/php/sbin/php-fpm -c /Users/linzhiqing/servers/php/lib/php.ini -y /Users/linzhiqing/servers/php/etc/php-fpm.conf -t
	[11-Mar-2019 10:52:50] NOTICE: configuration file /Users/linzhiqing/servers/php/etc/php-fpm.conf test is successful
	```
	- 启动服务

	```
	/Users/linzhiqing/servers/php/sbin/php-fpm -c /Users/linzhiqing/servers/php/lib/php.ini
	```
	
	- 写入启动脚本 ~/start_servers.sh
	
	```
	vim ~/start_servers.sh
	
	# 写入
	nginx
	/Users/linzhiqing/servers/memcached/bin/memcached -d -p 12306 -P /Users/linzhiqing/servers/memcached/var/memcached.pid
	/Users/linzhiqing/servers/redis/bin/redis-server /Users/linzhiqing/servers/redis/etc/redis.conf
	/Users/linzhiqing/servers/php/sbin/php-fpm -c /Users/linzhiqing/servers/php/lib/php.ini
	```