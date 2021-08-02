/* eslint-disable react/no-unknown-property */
/* eslint-disable  react/no-danger */
import React from 'react'

import './doc.scss'

const BestPractice = () => (
  <div className="custom-doc">
    <div
      dangerouslySetInnerHTML={{
        __html: `<h1>PUI开发最佳实践</h1>
<p>&nbsp;</p>
<h4 >使用 Form，而非一个个独立的表单控件</h4>
<p>对于一个数据结构如果要对多个数据捆绑，需要定义多对value + onValueChange</p>
<pre><code class='language-react' lang='react'>&lt;Input value={...} onValueChange={...} /&gt;
&lt;Input value={...} onValueChange={...} /&gt;
&lt;CheckBoxGroup value={...} onValueChange={...} /&gt;
</code></pre>
<p>✅ 更好的写法，<code>&lt;Form&gt;</code>会自动根据表单的每个表单的控件name值捆绑数据</p>
<pre><code class='language-react' lang='react'>&lt;Form data={...} onDataChange={} &gt;
	&lt;Input name=&quot;...&quot; /&gt;
	&lt;Input name=&quot;...&quot; /&gt;
	&lt;CheckBoxGroup name=&quot;...&quot; /&gt;
&lt;/Form&gt;
</code></pre>
<p>&nbsp;</p>
<h4 >Options 使用简写</h4>
<p><code>&lt;CheckBoxGroup&gt;</code> <code>&lt;RadioGroup&gt;</code> <code>&lt;Select&gt;</code> 可以直接通过String的简写形式传参</p>
<p>对象写法</p>
<pre><code class='language-react' lang='react'>&lt;Select options={[&#39;狗&#39;,&#39;猫&#39;,&#39;狮子&#39;,&#39;老虎&#39;,&#39;鲸鱼&#39;]}  /&gt;
&lt;Select options={[{text:&#39;狗&#39;,value:&#39;dog&#39;},{text:&#39;猫&#39;,value:&#39;cat&#39;}]}  /&gt;
</code></pre>
<p>✅ 更好的写法</p>
<pre><code class='language-react' lang='react'>&lt;Select options=&quot;狗,猫,狮子,老虎,鲸鱼&quot;  /&gt;
&lt;Select options=&quot;狗:dog,猫:cat,狮子:lion,老虎,鲸鱼&quot;  /&gt;
</code></pre>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h4 >善用 marginLeft/marginRight/width 属性</h4>
<p>✅ 控件贴在一起怎么办？不用写css文件，直接使用css属性，</p>
<pre><code class='language-react' lang='react'>&lt;Form width=&quot;300px&quot;&gt;
...
&lt;/Form&gt;

&lt;Button marginRight=&quot;12px&quot;&gt;按钮1&lt;/Button&gt;
&lt;Button&gt;按钮2&lt;/Button&gt;

&lt;Input marginRight=&quot;12px&quot; width=&quot;140px&quot;/&gt;
&lt;Input /&gt;
</code></pre>
<p>&nbsp;</p>
<h4 >使用onValueChange替代onChange</h4>
<p>PUI的所有表单控件都支持onValueChange，使用onValueChange可以直接获取改变值，不用再从evt.target.value中获取值。</p>
<pre><code class='language-react' lang='react'>&lt;Select onChange={(evt)=&gt;{console.log(evt.target.value)}}
</code></pre>
<p>✅ 更好的写法</p>
<pre><code class='language-react' lang='react'>&lt;Select onChange={(val)=&gt;{console.log(val)}}
</code></pre>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h4 >使用alterValues改写<code>&lt;Switch /&gt;</code>的开关值</h4>
<p>后端的API不一定使用true/false定义，因为数据库的存储缘故，有可能接口定义成了使用0/1，<code>&lt;Switch&gt;</code> 可以使用alterValues属性修改开关对应值，而不需要你再更改对象数值。</p>
<p>✅ 更好的写法</p>
<pre><code class='language-react' lang='react'>&lt;Switch
  label={{ text: &#39;修改值为 0/1&#39;, position: &#39;left&#39;, width: &#39;120px&#39; }}
  alterValues=&quot;ZeroOrOne&quot;
  onValueChange={val =&gt; {
    console.log(val);
  }}
/&gt;

&lt;Switch
  label={{ text: &#39;修改值为 male/female&#39;, position: &#39;left&#39;, width: &#39;120px&#39; }}
  alterValues={[&#39;Male&#39;, &#39;Female&#39;]}
  onValueChange={val =&gt; {
    console.log(val);
  }}
/&gt;
</code></pre>
<p>&nbsp;</p>
<h4 >使用Modal.alert() / Modal.confirm()做快速弹出框</h4>
<p>Modal可以写在代码里，但是如果只是弹出一个简单的消息框或者确认框可以使用方法弹出</p>
<p>✅ 更容易的写法</p>
<pre><code class='language-react' lang='react'>&lt;Button onClick={()=&gt;{Modal.alert(&quot;这是一条消息&quot;)}}&gt;弹出消息&lt;/Button&gt;
&lt;Button onClick={()=&gt;{Modal.confirm(&quot;这是一条确认消息&quot;),()=&gt;{ console.log(&#39;确认回掉&#39;) }}}&gt;
  弹出消息
&lt;/Button&gt;

</code></pre>
<p>&nbsp;</p>
<p>&nbsp;</p>
`
      }}
    />
  </div>
)

export default {
  title: 'Coding/Best Practice',
  parameters: {
    docs: {
      page: BestPractice
    }
  }
}

export const BestPracticeStoryBook = () => {
  return <div>-</div>
}

BestPracticeStoryBook.storyName = 'BestPractice'
