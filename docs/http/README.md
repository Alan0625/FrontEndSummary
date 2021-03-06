---
sidebarDepth: 4
pageClass: custom-code-highlight
---

# HTTP总结

## 一、HTTP

### 1. HTTP常用的状态码有哪些？

- 状态码的职责是当客户端向服务器发送请求时，描述返回的请求结果。借助状态码，用户可以知道服务器端是正常处理了请求还是出现了错误。

- 状态码的类别:

    状态码  |   类别                          |   原因短语
    -      |   -                            |    -
    1XX	   |   Informational（信息性状态码）   |   接受的请求正在处理
    2XX	   |   Success      （成功状态码）	   |   请求正常处理完毕
    3XX	   |   Redirection  （重定向状态码）   |   需要进行附加操作以完成请求
    4XX	   |   Client Error （客户端错误状态码）|   服务器无法处理请求
    5XX	   |   Server Error （服务器错误状态码）|   服务器处理请求出错

- 常用的状态码如下: 

```
100  Continue   继续，初始的请求已经接受，客户端应当继续发送请求的其余部分。

200  OK         请求已正常处理，正常返回信息
201  Created    请求成功并且服务器创建了新的资源，Location报头包含指向新创建资源的URL。
202  Accepted   服务器已接受请求，但处理尚未完成
204  No Content 请求处理成功，但没有任何资源可以返回给客户端
206  Partial Content 是对资源某一部分的请求，该状态码表示客户端进行了范围请求，而服务器成功执行了这部分的GET请求。响应报文中包含由Content-Range指定范围的实体内容。

301  Moved Permanently  请求的网页已永久更新到新位置，永久性重定向
302  Found       资源的URI已临时定位到其他位置了，临时性重定向。
303  See Other   临时性重定向，且总是使用 GET 请求新的 URI。
304  Not Modified 自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。 
307  Temporary Redirect 临时重定向。与302有相同的含义。当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只能跟随对GET请求的重定向。

400  Bad Request  服务器端无法理解客户端发送的请求，请求报文中可能存在语法错误。
401  Unauthorized 请求未授权。
403  Forbidden   服务器拒绝请求。
404  Not Found   服务器找不到请求的资源。

500  Internal Server Error  服务器端错误，无法完成请求。
502  Bad Gateway   服务器作为网关或代理，从上游服务器收到无效响应。
503  Service Unavailable  服务器端暂时无法处理请求（可能是过载或维护）。

```

### 2. HTTP的几种请求方法和用途

- `GET`方法
  - 向特定的资源发出请求，本质是发送一个请求来取得服务器上的某一资源

- `POST`方法
  - 向`URL`指定的资源提交数据进行处理请求

- `PUT`方法
  - 向指定资源位置上上传其最新内容（从客户端向服务器传送的数据取代指定文档的内容）
  - 跟`POST`方法很像，也是想服务器提交数据。但是，它们之间有不同。`PUT`指定了资源在服务器上的位置，而`POST`没有

- `HEAD`方法
  - 只请求页面的首部

- `DELETE`方法
  - 删除服务器上的指定的资源

- `OPTIONS`方法
  - 用来查询针对请求URI指定资源支持的HTTP请求方法。如果请求成功，会有一个`Allow`的头包含类似`“GET,POST”`这样的信息

- `TRACE`方法
  - 客户端可以对请求消息的传输路径进行追踪，用于测试和诊断

- `CONNECT`方法
  - 在与代理服务器通信时建立隧道，实现用隧道协议进行TCP通信

### 3. HTTP中GET和POST的区别?
  
  1. GET请求的数据会附在URL之后，以?分割URL和传输数据，参数之间以&相连，POST把提交的数据则放置在是HTTP包的包体中。
  
  2. GET请求在URL中传送的参数是有长度限制的(URL的最大长度是2048个字符， 不同的浏览器略有不同）;POST是没有大小限制的。
  
  3. GET请求只能进行url编码，而POST支持多种编码方式
  
  4. GET产生一个TCP数据包；POST产生两个TCP数据包（firefox浏览器除外）。对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。

  5. GET在浏览器回退时是无害的，POST数据会被重新提交（浏览器应该告知用户数据会被重新提交）。
  
  6. GET产生的URL地址可以被收藏，POST则不可以。
  
  7. GET请求会被浏览器主动cache，而POST不会，除非手动设置。

  8. GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。

  9. 对参数的数据类型，GET只接受ASCII字符，而POST没有限制，也允许二进制数据。

  10. GET比POST更不安全，因为参数直接暴露在URL上，所以在发送密码或其他敏感信息时绝不要使用GET。
  

### 4. 网络分层是怎么分层的？

  - OSI七层网络模型:

  ```

    1）物理层：通过媒介传输比特，确定机械及电气规范（比特Bit） 

    2）数据链路层：将比特组装成帧和点到点的传递（帧Frame） 

    3）网络层：负责数据包从源到宿的传递和网际互连（包PackeT） 

    4）传输层：提供端到端的可靠报文传递和错误恢复（段Segment） 

    5）会话层：建立、管理和终止会话（会话协议数据单元SPDU） 

    6）表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）

    7）应用层：允许访问OSI环境的手段（应用协议数据单元APDU）

  ```

  - TCP/IP分层模型

  ```
    应用层：应用层、表示层、会话层 （HTTP、FTP、SMTP、DNS）

    传输层（TCP和UDP）

    网络层（IP）

    网络接口层: 物理层 、数据链路层（以太网）

  ```

  - OSI与TCP/IP的对比：

    ```
    分层结构：OSI参考模型与TCP/IP协议都采用了分层结构，都是基于独立的协议栈的概念。OSI参考模型有7层，而TCP/IP协议只有4层，即TCP/IP协议没有了表示层和会话层，并且把数据链路层和物理层合并为网络接口层。不过，二者的分层之间有一定的对应关系。

    连接服务：OSI的网络层基本与TCP/IP的网络层对应，二者的功能基本相似，但是寻址方式有较大的区别。
    
    OSI的地址空间为不固定的可变长，由选定的地址命名方式决定，最长可达160字节，可以容纳非常大的网络，因而具有较大的成长空间。根据OSI的规定，网络上每个系统至多可以有256个通信地址。TCP/IP网络的地址空间为固定的4字节（在目前常用的IPV4中是这样，在IPV6中将扩展到16字节）。网络上的每个系统至少有一个唯一的地址与之对应。

    ```

### 5 TCP和UDP的区别

  1. TCP/UDP 都属于传输层的协议

  2. TCP(Transmission Control Protocol，传输控制协议）是面向连接的传输层协议，能够准确可靠的把数据传递给对方，当数据有丢包情况会重发，但是必须和对方建立可靠的连接，会浪费网络流量，主要用在对可靠性要求较高的地方。一个TCP连接必须要经过三次“对话”才能建立起来。

  3. UDP(User Data Protocol，用户数据报协议）是面向无连接的传输层协议，意思是只负责传输数据，不与对方建立连接,不能确保对方是否收到数据和数据的正确顺序，数据的正确性由应用层来校验。主要用于高速传输和实时性要求较高的场合如音视频会议，广播。

### 6 TCP建立连接的三次握手过程

- 为了准确无误地把数据送达目标处，TCP协议采用了三次握手策略。用TCP协议把数据包送出去后，TCP不会对传送后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了TCP的标志：SYN和ACK

  1. 客户端首先发送发送SYN包给服务端,并进入SYN_SENT（同步已发送）状态，等待服务器确认;

  2. 服务端收到SYN包后，然后回传一个带有SYN/ACK标志的数据包给客户端以示传达确认信息,此时服务器进入SYN_RECV（同步收到）状态；;

  3. 客户端收到服务端的SYN+ACK包后，向服务器发送确认包ACK，此包发送完毕，客户端和服务器进入ESTABLISHED（已建立连接）状态，客户端和服务端建立连接，完成三次握手。 若在握手过程中,某个阶段莫名中断，TCP协议会再次以相同的顺序发送相同的数据包。

- 三次握手过程客户端和服务端状态变化：

  1. 第一次握手：起初两端都处于CLOSED关闭状态，Client将标志位SYN置为1，随机产生一个值seq=x，并将该数据包发送给Server，Client进入SYN-SENT状态，等待Server确认；

  2. 第二次握手：Server收到数据包后由标志位SYN=1得知Client请求建立连接，Server将标志位SYN和ACK都置为1，ack=x+1，随机产生一个值seq=y，并将该数据包发送给Client以确认连接请求，Server进入SYN-RCVD状态，此时操作系统为该TCP连接分配TCP缓存和变量；

  3. 第三次握手：Client收到确认后，检查ack是否为x+1，ACK是否为1，如果正确则将标志位ACK置为1，ack=y+1，并且此时操作系统为该TCP连接分配TCP缓存和变量，并将该数据包发送给Server，Server检查ack是否为y+1，ACK是否为1，如果正确则连接建立成功，Client和Server进入ESTABLISHED状态，完成三次握手，随后Client和Server就可以开始传输数据。

### 7 为什么三次握手中客户端还要再发送一次确认呢？可以二次握手吗？

  - 主要防止已经失效的连接请求报文突然又传送到了服务器，从而产生错误。

  - 如果使用的是两次握手建立连接，假设有这样一种场景，客户端发送了第一个请求连接并且没有丢失，只是因为在网络结点中滞留的时间太长了，由于TCP的客户端迟迟没有收到确认报文，以为服务器没有收到，此时重新向服务器发送这条报文，此后客户端和服务器经过两次握手完成连接，传输数据，然后关闭连接。此时此前滞留的那一次请求连接，网络通畅了到达了服务器，这个报文本该是失效的，但是，两次握手的机制将会让客户端和服务器再次建立连接，这将导致不必要的错误和资源的浪费。

  - 如果采用的是三次握手，就算是那一次失效的报文传送过来了，服务端接受到了那条失效报文并且回复了确认报文，但是客户端不会再次发出确认。由于服务器收不到确认，就知道客户端并没有请求连接。

### 8 如果已经建立了连接，但是客户端突然出现故障了怎么办？

  - TCP还设有一个保活计时器，显然，客户端如果出现故障，服务器不能一直等下去，白白浪费资源。服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常是设置为2小时，若两小时还没有收到客户端的任何数据，服务器就会发送一个探测报文段，以后每隔75秒发送一次。若一连发送10个探测报文仍然没反应，服务器就认为客户端出了故障，接着就关闭连接。

### 9 TCP协议断开连接的四次挥手过程

  1. 第一次挥手：主动关闭方发送一个FIN包，用来关闭主动方到被动关闭方的数据传送，主动关闭方进入FIN_WAIT_1状态，但是此时主动关闭方还可以接受数据;

  2. 第二次挥手：被动关闭方收到FIN包后，发送一个ACK包给对方，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），被动关闭方进入CLOSE_WAIT状态;

  3. 第三次挥手：被动关闭方发送一个FIN包，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了，被动关闭方进入LAST_ACK状态；

  4. 第四次挥手：主动关闭方收到FIN后，发送一个ACK确认报文给被动关闭方，并进入TIME_WAIT状态；被动关闭方收到ACK确认报文后，进入CLOSED状态;主动关闭方需要经过时间等待计时器设置的时间2MSL后，才进入CLOSED状态。

### 10 为什么建立连接是三次握手，关闭连接确是四次挥手呢？

  - 因为当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送，故需要四步握手。

### 11 为什么TIME_WAIT状态需要经过2MSL(最大报文段生存时间)才能返回到CLOSE状态？

  1. 为了保证客户端发送的最后一个 ACK 报文段能够到达服务器。这个ACK报文段有可能丢失，使得处于LAST-ACK状态的服务器收不到对已发送的FIN+ACK报文段的确认，服务器超时重传FIN+ACK报文段，而客户端能在2MSL时间内收到这个重传的FIN+ACK报文段，接着客户端重传一次确认，重新启动2MSL计时器，最后客户端和服务器都进入到CLOSED状态，若客户端在TIME-WAIT状态不等待一段时间，而是发送完ACK报文段后立即释放连接，则无法收到服务器重传的FIN+ACK报文段，所以不会再发送一次确认报文段，则服务器无法正常进入到CLOSED状态。

  2. 防止 “已失效的连接请求报文段”出现在本连接中。客户端在发送完最后一个 ACK 报文段后，再经过时间 2MSL，就可以使本连接持续的时间内所产生的所有报文段，都从网络中消失。这样就可以使下一个新的连接中不会出现这种旧的连接请求报文段。

### 12 为什么服务器端易受到SYN攻击？

  - 服务器端的资源分配是在二次握手时分配的，而客户端的资源是在完成三次握手时分配的，所以服务器容易受到SYN洪泛攻击，SYN攻击就是Client在短时间内伪造大量不存在的IP地址，并向Server不断地发送SYN包，Server则回复确认包，并等待Client确认，由于源地址不存在，因此Server需要不断重发直至超时，这些伪造的SYN包将长时间占用未连接队列，导致正常的SYN请求因为队列满而被丢弃，从而引起网络拥塞甚至系统瘫痪。

  - 防范SYN攻击措施：降低主机的等待时间使主机尽快的释放半连接的占用，短时间受到某IP的重复SYN则丢弃后续请求。

### 13 从浏览器地址栏中输入 URL 到页面加载显示完成，这个过程中都发生了什么？

**基础版本**

- 浏览器根据请求的`URL`交给`DNS`域名解析，找到真实`IP`，向服务器发起请求；
- 服务器交给后台处理完成后返回数据，浏览器接收文件（`HTML、JS、CSS`、图象等）；
- 浏览器对加载到的资源（`HTML、JS、CSS`等）进行语法解析，建立相应的内部数据结构（如`HTML`的`DOM`）；
- 载入解析到的资源文件，渲染页面，完成。

**详细版**

1. 在浏览器地址栏输入URL
2. 浏览器查看**缓存**，如果请求资源在缓存中并且未过期，跳转到转码步骤
    1. 如果资源未缓存，发起新请求
    2. 如果已缓存，检验是否过期，未过期则直接提供给客户端，否则与服务器进行验证。
    3. 检验是否过期通常有两个HTTP头进行控制`Expires`和`Cache-Control`：
        - HTTP1.0提供Expires，值为一个绝对时间表示缓存过期日期
        - HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大过期时间
3. 浏览器**解析URL**获取协议，主机，端口，path
4. 浏览器**组装一个HTTP（GET）请求报文**
5. 浏览器**获取主机ip地址**，过程如下：
    1. 浏览器缓存
    2. 本机缓存
    3. hosts文件
    4. 路由器缓存
    5. ISP DNS缓存
    6. DNS递归查询（可能存在负载均衡导致每次IP不一样）
6. **打开一个socket与目标IP地址，端口建立TCP链接**，三次握手如下：
    1. 客户端发送一个TCP的**SYN=1，Seq=X**的包到服务器端口
    2. 服务器发回**SYN=1， ACK=X+1， Seq=Y**的响应包
    3. 客户端发送**ACK=Y+1， Seq=Z**
7. TCP链接建立后**发送HTTP请求**
8. 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
9. 服务器检查**HTTP请求头是否包含缓存验证信息**如果验证缓存新鲜，返回**304**等对应状态码
10. 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
11. 服务器将**响应报文通过TCP连接发送回浏览器**
12. 浏览器接收HTTP响应，然后根据情况选择**关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下**：
    1. 主动方发送**Fin=1， Ack=Z， Seq= X**报文
    2. 被动方发送**ACK=X+1， Seq=Z**报文
    3. 被动方发送**Fin=1， ACK=X， Seq=Y**报文
    4. 主动方发送**ACK=Y， Seq=X**报文
13. 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
14. 如果资源可缓存，**进行缓存**
15. 对响应进行**解码**（例如gzip压缩）
16. 根据资源类型决定如何处理（假设资源为HTML文档）
17. **解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本**，这些操作没有严格的先后顺序，以下分别解释
18. **构建DOM树**：
    1. **Tokenizing**：根据HTML规范将字符流解析为标记
    2. **Lexing**：词法分析将标记转换为对象并定义属性和规则
    3. **DOM construction**：根据HTML标记关系将对象组成DOM树
19. 解析过程中遇到图片、样式表、js文件，**启动下载**
20. 构建**CSSOM树**：
    1. **Tokenizing**：字符流转换为标记流
    2. **Node**：根据标记创建节点
    3. **CSSOM**：节点创建CSSOM树
21. **根据DOM树和CSSOM树构建渲染树**:
    1. 从DOM树的根节点遍历所有**可见节点**，不可见节点包括：1）`script`,`meta`这样本身不可见的标签。2)被css隐藏的节点，如`display: none`
    2. 对每一个可见节点，找到恰当的CSSOM规则并应用
    3. 发布可视节点的内容和计算样式
22. **js解析如下**：
    1. 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时**document.readystate为loading**
    2. HTML解析器遇到**没有async和defer的script时**，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。**同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容**
    3. 当解析器遇到设置了**async**属性的script时，开始下载脚本并继续解析文档。脚本会在它**下载完成后尽快执行**，但是**解析器不会停下来等它下载**。异步脚本**禁止使用document.write()**，它们可以访问自己script和之前的文档元素
    4. 当文档完成解析，document.readState变成interactive
    5. 所有**defer**脚本会**按照在文档出现的顺序执行**，延迟脚本**能访问完整文档树**，禁止使用document.write()
    6. 浏览器**在Document对象上触发DOMContentLoaded事件**
    7. 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些**内容完成载入并且所有异步脚本完成载入和执行**，document.readState变为complete，window触发load事件
23. **显示页面**（HTML解析过程中会逐步显示页面）

**详细简版**

1. 从浏览器接收`url`到开启网络请求线程（这一部分可以展开浏览器的机制以及进程与线程之间的关系）

2. 开启网络线程到发出一个完整的`HTTP`请求（这一部分涉及到dns查询，`TCP/IP`请求，五层因特网协议栈等知识）

3. 从服务器接收到请求到对应后台接收到请求（这一部分可能涉及到负载均衡，安全拦截以及后台内部的处理等等）

4. 后台和前台的`HTTP`交互（这一部分包括`HTTP`头部、响应码、报文结构、`cookie`等知识，可以提下静态资源的`cookie`优化，以及编码解码，如`gzip`压缩等）

5. 单独拎出来的缓存问题，`HTTP`的缓存（这部分包括http缓存头部，`ETag`，`catch-control`等）

6. 浏览器接收到`HTTP`数据包后的解析流程（解析`html`-词法分析然后解析成`dom`树、解析`css`生成`css`规则树、合并成`render`树，然后`layout`、`painting`渲染、复合图层的合成、`GPU`绘制、外链资源的处理、`loaded`和`DOMContentLoaded`等）

7. `CSS`的可视化格式模型（元素的渲染规则，如包含块，控制框，`BFC`，`IFC`等概念）

8. `JS`引擎解析过程（`JS`的解释阶段，预处理阶段，执行阶段生成执行上下文，`VO`，作用域链、回收机制等等）

9. 其它（可以拓展不同的知识模块，如跨域，web安全，`hybrid`模式等等内容）

## 二、HTTPS

### 14 HTTPS的工作原理？

  - HTTPS是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。

  1. Client使用HTTPS的URL访问Web服务器，要求与Web服务器建立SSL连接。

  2. Web服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送一份给客户端。

  3. 客户端的浏览器与Web服务器开始协商SSL连接的安全等级，也就是信息加密的等级。

  4. 客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。

  5. Web服务器利用自己的私钥解密出会话密钥。

  6. Web服务器利用会话密钥加密与客户端之间的通信。

### 15 HTTP和HTTPS的区别？

  - HTTP协议传输的数据都是未加密的，也就是明文的，因此使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，于是网景公司设计了SSL（Secure Sockets Layer）协议用于对HTTP协议传输的数据进行加密，从而就诞生了HTTPS。简单来说，HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比HTTP协议安全。

  1. HTTPS协议需要到CA申请证书，一般免费证书较少，因而需要一定费用。

  2. HTTP是超文本传输协议，信息是明文传输，HTTPS则是具有安全性的SSL加密传输协议。

  3. HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

  4. HTTP的连接很简单，是无状态的。HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比HTTP协议安全。(无状态的意思是其数据包的发送、传输和接收都是相互独立的。无连接的意思是指通信双方都不长久的维持对方的任何信息。)


### 16 HTTPS的优缺点?

  - 优点：

  1. 使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；

  2. HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比HTTP协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。

  3. HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。

  - 缺点：

  1. HTTPS协议握手阶段比较费时，会使页面的加载时间延长近50%，增加10%到20%的耗电；

  2. HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响；

  3. SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。

  4. SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗。

  5. HTTPS协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。最关键的，SSL证书的信用链体系并不安全，特别是在某些国家可以控制CA根证书的情况下，中间人攻击一样可行。

### 17 为什么HTTPS安全?

  - 认证用户或服务器，确保数据发送到正确的客户机或服务器

  - 加密数据以防止数据中途被窃取

  - 维护数据的完整性，保证数据传输过程中不被改变

### 18 对HTTP/2 了解哪些内容？

  - HTTP/2引入了“服务器推送（server push）”的概念，它允许服务端在客户端需要数据之前就主动地将数据发送到客户端缓存中，从而提高性能。

  - HTTP/2提供更多的加密支持。

  - HTTP/2完全采用二进制协议。

  - HTTP/2使用多路技术，允许多个消息在一个连接上同时交差。

  - 它增加了头部压缩（header compression），因此即使非常小的请求，其请求和响应的header都只会占用很小比例的带宽。

### 19 HTTP/2 与 HTTP/1.X的区别？

  1. HTTP/2使用的是二进制传送，HTTP/1.X是文本（字符串）传送。

  二进制传送的单位是帧和流。帧组成了流，同时流还有流ID标示，更加简洁高效

  2. HTTP/2支持多路复用

   因为有流ID，所以通过同一个HTTP请求实现多个HTTP请求传输变成了可能，可以通过流ID来标示究竟是哪个流从而定位到是哪个HTTP请求，针对每个域只使用一个多路复用的连接

  3. HTTP/2头部压缩， 压缩头部信息减小开销

   HTTP/2通过gzip和compress压缩头部然后再发送，同时客户端和服务器端同时维护一张头信息表，所有字段都记录在这张表中，这样后面每次传输只需要传输表里面的索引Id就行，通过索引ID查询表头的值

  4. HTTP/2支持服务器推送

  HTTP/2支持在未经客户端许可的情况下，主动向客户端推送内容

### 20 状态码304缓存的原理是什么？

  - 服务器首先产生ETag，服务器可在稍后使用它来判断页面是否已经被修改。本质上，客户端通过将该记号传回服务器要求服务器验证其（客户端）缓存。

  - 304是HTTP状态码，服务器用来标识这个文件没修改，不返回内容，浏览器在接收到个状态码后，会使用浏览器已缓存的文件。

  - 客户端请求一个页面（A）。 服务器返回页面A，并在给A加上一个ETag。 客户端展现该页面，并将页面连同ETag一起缓存。 客户再次请求页面A，并将上次请求时服务器返回的ETag一起传递给服务器。 服务器检查该ETag，并判断出该页面自上次客户端请求之后还未被修改，直接返回响应304（未修改——Not Modified）和一个空的响应体。

### 21 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？

  1. 浏览器查找域名对应的IP地址(DNS 查询：浏览器缓存->系统缓存->路由器缓存->ISP DNS 缓存->根域名服务器)
  2. 浏览器向 Web 服务器发送一个 HTTP 请求（TCP三次握手）
  3. 服务器 301 重定向（从 http://example.com 重定向到 http://www.example.com）
  4. 浏览器跟踪重定向地址，请求另一个带 www 的网址
  5. 服务器处理请求（通过路由读取资源）
  6. 服务器返回一个 HTTP 响应（报头中把 Content-type 设置为 'text/html'）
  7. 浏览器进 DOM 树构建
  8. 浏览器发送请求获取嵌在 HTML 中的资源（如图片、音频、视频、CSS、JS等）
  9. 浏览器显示完成页面
  10. 浏览器发送异步请求

### 22 HTTP request报文结构是怎样的?
  
  1. 首行是**Request-Line**包括：**请求方法**，**请求URI**，**协议版本**，**CRLF**
  2. 首行之后是若干行**请求头**，包括**general-header**，**request-header**或者**entity-header**，每个一行以CRLF结束
  3. 请求头和消息实体之间有一个**CRLF分隔**
  4. 根据实际请求需要可能包含一个**消息实体**

### 23 HTTP response报文结构是怎样的?

  1. 首行是状态行包括：**HTTP版本，状态码，状态描述**，后面跟一个CRLF
  2. 首行之后是**若干行响应头**，包括：**通用头部，响应头部，实体头部**
  3. 响应头部和响应实体之间用**一个CRLF空行**分隔
  4. 最后是一个可能的**消息实体**

### 24. 跨域的原理，跨域的解决方式？

 - 跨域是指一个域下的文档或脚本试图去请求另一个域下的资源，这里跨域是广义的。

 - 广义的跨域：

  ```
  1. 资源跳转： A链接、重定向、表单提交
  2. 资源嵌入： <link>、<script>、<img>、<frame>等dom标签,还有样式中background:url()、@font-face()等文件外链
  3. js发起的Ajax请求、dom和js对象的跨域操作等。
  ```

  - 我们通常所说的跨域是狭义的，是由浏览器的同源策略限制引起的。

  ```
  同源: 如果两个页面的协议，端口(如果有指定)和主机都相同，则两个页面具有相同的源。
  ```
  ```
  同源策略限制了从同一个源加载的文档或脚本如何与来自另外一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。
  ```

  - 同源策略是一种浏览器的最基本的安全机制，能够规避一些XSS、CSFR等外在的攻击危险。

  - 同源策略限制以下几种行为：

  ```
  1. Cookie、LocalStorage 和 IndexDB无法读取
  2. DOM 和 JS 对象无法获得
  3. Ajax 请求不能发送

  ```


  - 跨域解决方案

    1、 通过jsonp跨域
    2、 document.domain + iframe跨域
    3、 location.hash + iframe
    4、 window.name + iframe跨域
    5、 postMessage跨域
    6、 跨域资源共享（CORS）
    7、 nginx代理跨域
    8、 nodejs中间件代理跨域
    9、 WebSocket协议跨域


  - 跨域的应用场景：
    简单的跨域请求jsonp方案，复杂的用CORS，窗口之间JS跨域用postMessage，开发环境下接口跨域用nginx反向代理或node中间件比较方便。


  - 下面介绍一下每种方法的使用


    一、通过jsonp跨域

    jsonp的原理是利用 `<script>` 标签没有跨域限制的漏洞,通过 `<script>` 标签指向一个需要访问的地址并提供一个回调函数来接收数据当需要通讯时。 jsonp使用简单且兼容性不错，但是只限于 get 请求。

    1).原生实现

    ```js
        let script = document.createElement('script');
        script.type = 'text/javascript';

        // 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数
        script.src = 'http://www.example.com/login?user=admin&callback=handleCallback';
        script.async = true;
        document.body.appendChild(script);

        // 回调执行函数
        function handleCallback(res) {
            alert(JSON.stringify(res));
        }
    ```

    服务端返回如下（返回时即执行全局函数）:

    ```
    handleCallback({"status": true, "user": "admin"})
    ```

    2). vue.js

    ```
    this.$http.jsonp('http://www.domain2.com:8080/login', {
        params: {},
        jsonp: 'handleCallback'
    }).then((res) => {
        console.log(res); 
    })
    ```

    二、document.domain + iframe跨域

    此方案仅限主域相同，子域不同的跨域应用场景。

    实现原理： 两个页面都通过js强制设置document.domain为基础主域，就实现了同域。

    ```
    1.）父窗口：(http://www.domain.com/a.html)

    <iframe id="iframe" src="http://child.domain.com/b.html"></iframe>
    <script>
        document.domain = 'domain.com';
        var user = 'admin';
    </script>

    2.）子窗口：(http://child.domain.com/b.html)

    <script>
        document.domain = 'domain.com';
        // 获取父窗口中变量
        alert('get js data from parent ---> ' + window.parent.user);
    </script>

    ```

    三、 location.hash + iframe跨域

    实现原理： a欲与b跨域相互通信，通过中间页c来实现。 三个页面，不同域之间利用iframe的location.hash传值，相同域之间直接js访问来通信。

    具体实现：A域：a.html -> B域：b.html -> A域：c.html，a与b不同域只能通过hash值单向通信，b与c也不同域也只能单向通信，但c与a同域，所以c可通过parent.parent访问a页面所有对象。

  
    四、 window.name + iframe跨域

    window.name属性的独特之处：name值在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值（2MB）。

    总结：通过iframe的src属性由外域转向本地域，跨域数据即由iframe的window.name从外域传递到本地域。这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。

    
    五、 postMessage跨域

    postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：
    a.） 页面和其打开的新窗口的数据传递
    b.） 多窗口之间消息传递
    c.） 页面与嵌套的iframe消息传递
    d.） 上面三个场景的跨域数据传递

    用法：postMessage(data,origin)方法接受两个参数
    data： html5规范支持任意基本类型或可复制的对象，但部分浏览器只支持字符串，所以传参时最好用JSON.stringify()序列化。
    origin： 协议+主机+端口号，也可以设置为"*"，表示可以传递给任意窗口，如果要指定和当前窗口同源的话设置为"/"。

    ```
    1.）a.html：(http://www.domain1.com/a.html)

    <iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none;"></iframe>
    <script>       
        var iframe = document.getElementById('iframe');
        iframe.onload = function() {
            var data = {
                name: 'aym'
            };
            // 向domain2传送跨域数据
            iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.domain2.com');
        };

        // 接受domain2返回数据
        window.addEventListener('message', function(e) {
            alert('data from domain2 ---> ' + e.data);
        }, false);
    </script>
    2.）b.html：(http://www.domain2.com/b.html)

        // 接收domain1的数据
        window.addEventListener('message', function(e) {
            alert('data from domain1 ---> ' + e.data);

            var data = JSON.parse(e.data);
            if (data) {
                data.number = 16;

                // 处理后再发回domain1
                window.parent.postMessage(JSON.stringify(data), 'http://www.domain1.com');
            }
        }, false);

    ```

    
    六、 跨域资源共享（CORS）

    普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。

    需注意的是：由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie，而非当前页。如果想实现当前页cookie的写入，可参考下文：七、nginx反向代理中设置proxy_cookie_domain 和 八、NodeJs中间件代理中cookieDomainRewrite参数的设置。

    目前，所有浏览器都支持该功能(IE8+：IE8/9需要使用XDomainRequest对象来支持CORS）)，CORS也已经成为主流的跨域解决方案。

    1、 前端设置：
    1.）原生ajax

    // 前端设置是否带cookie
    xhr.withCredentials = true;
    示例代码：

    var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容

    // 前端设置是否带cookie
    xhr.withCredentials = true;

    xhr.open('post', 'http://www.domain2.com:8080/login', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('user=admin');

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
        }
    };
    2.）jQuery ajax

    $.ajax({
        ...
      xhrFields: {
          withCredentials: true    // 前端设置是否带cookie
      },
      crossDomain: true,   // 会让请求头中包含跨域的额外信息，但不会含cookie
        ...
    });
    3.）vue框架

    a.) axios设置：

    axios.defaults.withCredentials = true
    b.) vue-resource设置：

    Vue.http.options.credentials = true


    2、 服务端设置：
    若后端设置成功，前端浏览器控制台则不会出现跨域报错信息，反之，说明没设成功。

    1.）Java后台：

    ```
    /*
    * 导入包：import javax.servlet.http.HttpServletResponse;
    * 接口参数中定义：HttpServletResponse response
    */

    // 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
    response.setHeader("Access-Control-Allow-Origin", "http://www.domain1.com"); 

    // 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
    response.setHeader("Access-Control-Allow-Credentials", "true"); 

    // 提示OPTIONS预检时，后端需要设置的两个常用自定义头
    response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");

    ```

    2.）Nodejs后台示例

    ```
    var http = require('http');
    var server = http.createServer();
    var qs = require('querystring');

    server.on('request', function(req, res) {
        var postData = '';

        // 数据块接收中
        req.addListener('data', function(chunk) {
            postData += chunk;
        });

        // 数据接收完毕
        req.addListener('end', function() {
            postData = qs.parse(postData);

            // 跨域后台设置
            res.writeHead(200, {
                'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
                'Access-Control-Allow-Origin': 'http://www.domain1.com',    // 允许访问的域（协议+域名+端口）
                /* 
                * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代理可以实现)，
                * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
                */
                'Set-Cookie': 'l=a123456;Path=/;Domain=www.domain2.com;HttpOnly'  // HttpOnly的作用是让js无法读取cookie
            });

            res.write(JSON.stringify(postData));
            res.end();
        });
    });

    server.listen('8080');
    console.log('Server is running at port 8080...');

    ```
   
  七、 nginx代理跨域

    1、 nginx配置解决iconfont跨域
    浏览器跨域访问js、css、img等常规静态资源被同源策略许可，但iconfont字体文件(eot|otf|ttf|woff|svg)例外，此时可在nginx的静态资源服务器中加入以下配置。

    location / {
      add_header Access-Control-Allow-Origin *;
    }

    2、 nginx反向代理接口跨域
    跨域原理： 同源策略是浏览器的安全策略，不是HTTP协议的一部分。服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨越问题。

    实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。


   八、 Nodejs中间件代理跨域
    node中间件实现跨域代理，原理大致与nginx相同，都是通过启一个代理服务器，实现数据的转发，也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，实现当前域的cookie写入，方便接口登录认证。

    1、 非vue框架的跨域（2次跨域）
    利用node + express + http-proxy-middleware搭建一个proxy服务器。

    2、 vue框架的跨域（1次跨域）
    利用node + webpack + webpack-dev-server代理接口跨域。在开发环境下，由于vue渲染服务和接口代理服务都是webpack-dev-server同一个，所以页面与代理接口之间不再跨域，无须设置headers跨域信息了。

    九、 WebSocket协议跨域
    WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。
    原生WebSocket API使用起来不太方便，我们使用Socket.io，它很好地封装了webSocket接口，提供了更简单、灵活的接口，也对不支持webSocket的浏览器提供了向下兼容。

    1.）前端代码：

    ```
    <div>user input：<input type="text"></div>
    <script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.js"></script>
    <script>
    var socket = io('http://www.domain2.com:8080');

    // 连接成功处理
    socket.on('connect', function() {
        // 监听服务端消息
        socket.on('message', function(msg) {
            console.log('data from server: ---> ' + msg); 
        });

        // 监听服务端关闭
        socket.on('disconnect', function() { 
            console.log('Server socket has closed.'); 
        });
    });

    document.getElementsByTagName('input')[0].onblur = function() {
        socket.send(this.value);
    };
    </script>
    ```

    2.）Nodejs socket后台：

    ```
    var http = require('http');
    var socket = require('socket.io');

    // 启http服务
    var server = http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end();
    });

    server.listen('8080');
    console.log('Server is running at port 8080...');

    // 监听socket连接
    socket.listen(server).on('connection', function(client) {
        // 接收信息
        client.on('message', function(msg) {
            client.send('hello：' + msg);
            console.log('data from client: ---> ' + msg);
        });

        // 断开处理
        client.on('disconnect', function() {
            console.log('Client socket has closed.'); 
        });
    });
    ```


### 25. 跨域的几种方式的优缺点？

> 很多种方法，但万变不离其宗，都是为了搞定同源策略。重用的有 `jsonp`、`iframe`、`cors`、`img`、H`TML5 postMessage`等等。其中用到 `html` 标签进行跨域的原理就是 `html` 不受同源策略影响。但只是接受 `Get` 的请求方式，这个得清楚。

> **延伸1：img iframe script 来发送跨域请求有什么优缺点？**

**1. `iframe`**

- 优点：跨域完毕之后`DOM`操作和互相之间的`JavaScript`调用都是没有问题的
- 缺点：1.若结果要以`URL`参数传递，这就意味着在结果数据量很大的时候需要分割传递，巨烦。2.还有一个是`iframe`本身带来的，母页面和`iframe`本身的交互本身就有安全性限制。

**2. script**

- 优点：可以直接返回`json`格式的数据，方便处理
- 缺点：只接受`GET`请求方式

**3. 图片ping**

- 优点：可以访问任何`url`，一般用来进行点击追踪，做页面分析常用的方法
- 缺点：不能访问响应文本，只能监听是否响应

> **延伸2：配合 webpack 进行反向代理？**

`webpack` 在 `devServer` 选项里面提供了一个 `proxy` 的参数供开发人员进行反向代理

```js
'/api': {
  target: 'http://www.example.com', // your target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: {
    '^/api': ''  // rewrite path
  }
},
```

> 然后再配合 `http-proxy-middleware` 插件对 `api` 请求地址进行代理

```js
const express = require('express');
const proxy = require('http-proxy-middleware');
// proxy api requests
const exampleProxy = proxy(options); // 这里的 options 就是 webpack 里面的 proxy 选项对应的每个选项

// mount `exampleProxy` in web server
const app = express();
app.use('/api', exampleProxy);
app.listen(3000);
```

> 然后再用 `nginx` 把允许跨域的源地址添加到报头里面即可

> 说到 `nginx` ，可以再谈谈 `CORS` 配置，大致如下

```js
location / {
  if ($request_method = 'OPTIONS') {
    add_header 'Access-Control-Allow-Origin' '*';  
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS'; 
    add_header 'Access-Control-Allow-Credentials' 'true';
    add_header 'Access-Control-Allow-Headers' 'DNT, X-Mx-ReqToken, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type';  
    add_header 'Access-Control-Max-Age' 86400;  
    add_header 'Content-Type' 'text/plain charset=UTF-8';  
    add_header 'Content-Length' 0;  
    return 200;  
  }
}
```

### 26. http 无状态无连接

- `http` 协议对于事务处理没有记忆能力
- 对同一个`url`请求没有上下文关系
- 每次的请求都是独立的，它的执行情况和结果与前面的请求和之后的请求是无直接关系的，它不会受前面的请求应答情况直接影响，也不会直接影响后面的请求应答情况
- 服务器中没有保存客户端的状态，客户端必须每次带上自己的状态去请求服务器
- 请求过的资源下一次会继续进行请求

### 27. http协议无状态中的 状态 到底指的是什么？

- 【状态】的含义就是：客户端和服务器在某次会话中产生的数据
- 那么对应的【无状态】就意味着：这些数据不会被保留
- 通过增加`cookie`和`session`机制，现在的网络请求其实是有状态的
- 在没有状态的`http`协议下，服务器也一定会保留你每次网络请求对数据的修改，但这跟保留每次访问的数据是不一样的，保留的只是会话产生的结果，而没有保留会话

### 28. Http 缓存的好处？ http缓存的类型？ http本地缓存？

 - 首先得明确 http 缓存的好处

  - 减少了冗余的数据传输，提升性能，节约资源
  - 减少服务器端的压力
  - `Web` 缓存能够减少延迟与网络阻塞，进而减少显示某个资源所用的时间
  - 加快客户端加载网页的速度，提升用户体验

 - 常见 http 缓存的类型**

  - 私有缓存（一般为本地浏览器缓存）
  - 代理缓存

  - 本地缓存是怎么工作的？

  > 本地缓存是指浏览器请求资源时命中了浏览器本地的缓存资源，浏览器并不会发送真正的请求给服务器了。它的执行过程是

  - 第一次浏览器发送请求给服务器时，此时浏览器还没有本地缓存副本，服务器返回资源给浏览器，响应码是`200 OK`，浏览器收到资源后，把资源和对应的响应头一起缓存下来
  - 第二次浏览器准备发送请求给服务器时候，浏览器会先检查上一次服务端返回的响应头信息中的`Cache-Control`，它的值是一个相对值，单位为秒，表示资源在客户端缓存的最大有效期，过期时间为第一次请求的时间减去`Cache-Control`的值，过期时间跟当前的请求时间比较，如果本地缓存资源没过期，那么命中缓存，不再请求服务器
  - 如果没有命中，浏览器就会把请求发送给服务器，进入缓存协商阶段。

  > 与本地缓存相关的头有：`Cache-Control`、`Expires`，`Cache-Control`有多个可选值代表不同的意义，而`Expires`就是一个日期格式的绝对值。


### 29. http缓存的使用？

- 本地缓存

  > 与本地缓存相关的头有：`Cache-Control`、`Expires`，`Cache-Control`有多个可选值代表不同的意义，而`Expires`就是一个日期格式的绝对值。

  **Cache-Control**

  > `Cache-Control`是`HTPP`缓存策略中最重要的头，它是`HTTP/1.1`中出现的，它由如下几个值

  - `no-cache`：不使用本地缓存。需要使用缓存协商，先与服务器确认返回的响应是否被更改，如果之前的响应中存在`ETag`，那么请求的时候会与服务端验证，如果资源未被更改，则可以避免重新下载
  - `no-store`：直接禁止浏览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源
  - `public`：可以被所有的用户缓存，包括终端用户和`CDN`等中间代理服务器。
  - `private`：只能被终端用户的浏览器缓存，不允许`CDN`等中继缓存服务器对其缓存。
  - `max-age`：从当前请求开始，允许获取的响应被重用的最长时间（秒）。

  ```bash

  Cache-Control: public, max-age=1000 
  # 表示资源可以被所有用户以及代理服务器缓存，最长时间为1000秒。
  ```

  **Expires**

  > `Expires`是`HTTP/1.0`出现的头信息，同样是用于决定本地缓存策略的头，它是一个绝对时间，时间格式是如`Mon, 10 Jun 2015 21:31:12 GMT`，只要发送请求时间是在`Expires`之前，那么本地缓存始终有效，否则就会去服务器发送请求获取新的资源。如果同时出现`Cache-Control：max-age`和`Expires`，那么`max-age`优先级更高。他们可以这样组合使用

  ```
  Cache-Control: public
  Expires: Wed, Jan 10 2018 00:27:04 GMT
  ```

- 协商缓存

  > 当第一次请求时服务器返回的响应头中存在以下情况时

  - 没有 `Cache-Control` 和 `Expires`
  - `Cache-Control` 和 `Expires` 过期了
  - `Cache-Control` 的属性设置为 `no-cache` 时

  > 那么浏览器第二次请求时就会与服务器进行协商，询问浏览器中的缓存资源是不是旧版本，需不需要更新，此时，服务器就会做出判断，如果缓存和服务端资源的最新版本是一致的，那么就无需再次下载该资源，服务端直接返回`304 Not Modified` 状态码，如果服务器发现浏览器中的缓存已经是旧版本了，那么服务器就会把最新资源的完整内容返回给浏览器，状态码就是`200 Ok`，那么服务端是根据什么来判断浏览器的缓存是不是最新的呢？其实是根据`HTTP`的另外两组头信息，分别是：`Last-Modified/If-Modified-Since` 与 `ETag/If-None-Match`。

  **Last-Modified 与 If-Modified-Since**

  - 浏览器第一次请求资源时，服务器会把资源的最新修改时间`Last-Modified:Thu, 29 Dec 2011 18:23:55 GMT`放在响应头中返回给浏览器
  - 第二次请求时，浏览器就会把上一次服务器返回的修改时间放在请求头`If-Modified-Since:Thu, 29 Dec 2011 18:23:55`发送给服务器，服务器就会拿这个时间跟服务器上的资源的最新修改时间进行对比

  > 如果两者相等或者大于服务器上的最新修改时间，那么表示浏览器的缓存是有效的，此时缓存会命中，服务器就不再返回内容给浏览器了，同时`Last-Modified`头也不会返回，因为资源没被修改，返回了也没什么意义。如果没命中缓存则最新修改的资源连同`Last-Modified`头一起返回


  ```bash
  # 第一次请求返回的响应头
  Cache-Control:max-age=3600
  Expires: Fri, Jan 12 2018 00:27:04 GMT
  Last-Modified: Wed, Jan 10 2018 00:27:04 GMT
  ```


  ```bash
  # 第二次请求的请求头信息
  If-Modified-Since: Wed, Jan 10 2018 00:27:04 GMT
  ```

  > 这组头信息是基于资源的修改时间来判断资源有没有更新，另一种方式就是根据资源的内容来判断，就是接下来要讨论的 `ETag` 与 `If-None-Match`

  **ETag与If-None-Match**

  > `ETag/If-None-Match`与`Last-Modified/If-Modified-Since`的流程其实是类似的，唯一的区别是它基于资源的内容的摘要信息（比如`MD5 hash`）来判断

  > 浏览器发送第二次请求时，会把第一次的响应头信息`ETag`的值放在`If-None-Match`的请求头中发送到服务器，与最新的资源的摘要信息对比，如果相等，取浏览器缓存，否则内容有更新，最新的资源连同最新的摘要信息返回。用`ETag`的好处是如果因为某种原因到时资源的修改时间没改变，那么用`ETag`就能区分资源是不是有被更新。

  ```bash
  # 第一次请求返回的响应头：

  Cache-Control: public, max-age=31536000
  ETag: "15f0fff99ed5aae4edffdd6496d7131f"
  ```

  ```bash
  # 第二次请求的请求头信息：

  If-None-Match: "15f0fff99ed5aae4edffdd6496d7131f"
  ```

### 30. cookie 和 session？

- `session`： 是一个抽象概念，开发者为了实现中断和继续等操作，将 `user agent `和 `server` 之间一对一的交互，抽象为“会话”，进而衍生出“会话状态”，也就是 `session` 的概念
- `cookie`：它是一个世纪存在的东西，`http` 协议中定义在 `header` 中的字段，可以认为是 `session` 的一种后端无状态实现

> 现在我们常说的 `session`，是为了绕开 `cookie` 的各种限制，通常借助 `cookie`本身和后端存储实现的，一种更高级的会话状态实现

`session` 的常见实现要借助`cookie`来发送 `sessionID`

### 31. 安全问题，如 XSS 和 CSRF

-  `XSS`：跨站脚本攻击，是一种网站应用程序的安全漏洞攻击，是代码注入的一种。常见方式是将恶意代码注入合法代码里隐藏起来，再诱发恶意代码，从而进行各种各样的非法活动

> 防范：记住一点 “所有用户输入都是不可信的”，所以得做输入过滤和转义

- `CSRF`：跨站请求伪造，也称 `XSRF`，是一种挟制用户在当前已登录的`Web`应用程序上执行非本意的操作的攻击方法。与 `XSS` 相比，`XSS`利用的是用户对指定网站的信任，`CSRF`利用的是网站对用户网页浏览器的信任。

> 防范：用户操作验证（验证码），额外验证机制（`token`使用）等