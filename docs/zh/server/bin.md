# 二进制安装  
  
## 前言  

目前提供所有版本二进制下载，请前往 GitHub 查看。

目前只支持 sqlite 作为数据库，未来将提供其他数据库的支持。

## 安装步骤 (假设你下载的二进制文件名为getneko)
1.检查环境要求是否已满足  
  
2.下载二进制文件  
  
3.使用命令 `cd` 进入到刚刚创建的目录  
  
4.赋予执行权限 `chmod +x ./getneko` (仅linux)  
  
5.运行二进制文件 `./getneko`  
  
  
注:默认端口为61223，可以用 `-port` flag指定端口,如果需要查看swagger文档请添加 `-doc` flag，url为`http://ip:port/swagger/index.html`