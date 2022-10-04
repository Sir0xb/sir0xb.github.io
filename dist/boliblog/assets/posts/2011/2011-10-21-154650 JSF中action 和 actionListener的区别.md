---
path       : '/iEAktJWyXOiNEzstmexGc3nN'
title      : "JSF中action 和 actionListener的区别"
date       : 2011-10-21 15:46:50 +0800
comments   : true
categories : programming
author     : Sir0xb
tags       : [jsf, action, actionListener]
---

| 项目 | 校验 | 参数 | 事件 | 页面跳转 |
| --- | --- | --- | --- | --- |
| action | ok | 不传入当前控件 | 当铵钮被单击时产生事件.提交表单 | 返回跳转的页面导向，根据配置文件跳转 |
| actionListener |  ok |  传入当前控件 |  当铵钮被单击时产生事件.提交表单 |  无返回值，返回本页面 |
| ValueChangeListener |  ok |  传入当前控件,无返回值 |  不提交表单(需指定其onchange/onclick=“submit"才自动提交表单 |  返回 action, 动态生成跳转 |

<!--more-->

<br/>

#### 绑定ActionListener:

``` java
HtmlCommandButton bt = new HtmlCommandButton();
bt.setId(ID);
Class[] c = {ActionEvent.class};
MethodBinding ListenerBinding = FacesContext.getCurrentInstance().getApplication().createMethodBinding("#{pendingBean.SetHidden}", c);
bt.setActionListener(ListenerBinding);
```

#### 绑定Action:

``` java
HtmlCommandButton bt = new HtmlCommandButton();
bt.setId(ID);
ExpressionFactory expFactory = FacesContext.getCurrentInstance().getApplication().getExpressionFactory();
ELContext elContext = FacesContext.getCurrentInstance().getELContext();
MethodExpression expression = expFactory.createMethodexpression_r(elContext, "#{pendingBean.formList}", String.class, new Class[]{});
bt.setActionexpression_r(expression);
```

当需要进行跳转并需要得到组件时，可采用绑定ActionListener再绑定Action的方式。
在处理ActionListener时，将组件信息写入Hidden域里。
在处理Action时，从Hidden域里提取出组件信息即可。

***
