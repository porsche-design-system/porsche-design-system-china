### PUI 开发最佳实践

#### 使用 Form，而非一个个独立的表单控件

对于一个数据结构如果要对多个数据捆绑，需要定义多对 value + onValueChange

```react
<Input value={...} onValueChange={...} />
<Input value={...} onValueChange={...} />
<CheckBoxGroup value={...} onValueChange={...} />
```

✅ 更好的写法，`<Form>`会自动根据表单的每个表单的控件 name 值捆绑数据

```react
<Form data={...} onDataChange={} >
	<Input name="..." />
	<Input name="..." />
	<CheckBoxGroup name="..." />
</Form>
```

#### Options 使用简写

`<CheckBoxGroup>` `<RadioGroup>` `<Select>` 可以直接通过 String 的简写形式传参

对象传参写法

```react
<Select options={['狗','猫','狮子','老虎','鲸鱼']}  />
<Select options={[{text:'狗',value:'dog'},{text:'猫',value:'cat'}]}  />
```

✅ 更好的写法

```react
<Select options="狗,猫,狮子,老虎,鲸鱼"  />
<Select options="狗:dog,猫:cat,狮子:lion,老虎,鲸鱼"  />
```

#### 善用 marginLeft/marginRight/width 属性

✅ 控件贴在一起怎么办？不用写 css 文件，直接使用 css 属性，

```react
<Form width="300px">
...
</Form>

<Button marginRight="12px">按钮1</Button>
<Button>按钮2</Button>

<Input marginRight="12px" width="140px"/>
<Input />
```

#### 使用 onValueChange 替代 onChange

PUI 的所有表单控件都支持 onValueChange，使用 onValueChange 可以直接获取改变值，不用再从 evt.target.value 中获取值。

```react
<Select onChange={(evt)=>{console.log(evt.target.value)}}
```

✅ 更好的写法

```react
<Select onChange={(val)=>{console.log(val)}}
```

#### 使用 alterValues 改写`<Switch />`的开关值

后端的 API 不一定使用 true/false 定义，因为数据库的存储缘故，有可能接口定义成了使用 0/1，`<Switch>` 可以使用 alterValues 属性修改开关对应值，而不需要你再更改对象数值。

✅ 更好的写法

```react
<Switch
  label={{ text: '修改值为 0/1', position: 'left', width: '120px' }}
  alterValues="ZeroOrOne"
  onValueChange={val => {
    console.log(val);
  }}
/>

<Switch
  label={{ text: '修改值为 male/female', position: 'left', width: '120px' }}
  alterValues={['Male', 'Female']}
  onValueChange={val => {
    console.log(val);
  }}
/>
```

#### 使用 Modal.alert() / Modal.confirm()做快速弹出框

Modal 可以写在代码里，但是如果只是弹出一个简单的消息框或者确认框可以使用方法弹出

✅ 更容易的写法

```react
<Button onClick={()=>{Modal.alert("这是一条消息")}}>弹出消息</Button>
<Button onClick={()=>{Modal.confirm("这是一条确认消息"),()=>{ console.log('确认回掉') }}}>
  弹出消息
</Button>

```
