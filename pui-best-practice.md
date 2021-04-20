### PUI使用开发技巧



#### 使用 Form，而非一个个独立的表单控件

对于一个数据结构如果要对多个数据捆绑，需要定义多对value + onValueChange

```react
<Input value={...} onValueChange={...} />
<Input value={...} onValueChange={...} />
<CheckBoxGroup value={...} onValueChange={...} />
```

✅ 更好的写法，Form会自动根据表单的每个表单的控件name值捆绑数据

```react
<Form data={...} onDataChange={} >
	<Input name="..." />
	<Input name="..." />
	<CheckBoxGroup name="..." />
</Form>
```



#### Options 使用简写

`<CheckBoxGroup>` `<RadioGroup>` `<Select>` 可以直接通过String的简写形式传参

对象写法

```react
<Select options={['狗','猫','狮子','老虎','鲸鱼']} disabled />
<Select options={[{text:'狗',value:'dog'},{text:'猫',value:'cat'}]} disabled />
```

✅ 更好的写法

```react
<Select options="狗,猫,狮子,老虎,鲸鱼" disabled />
<Select options="狗:dog,猫:cat,狮子:lion,老虎,鲸鱼" disabled />
```





#### 善用 marginLeft/marginRight/width 属性

✅ 控件贴在一起怎么办？不用写css文件，直接使用css属性，

```react
<Form width="300px">
...
</Form>

<Button marginRight="12px">按钮1</Button>
<Button>按钮2</Button>

<Input marginRight="12px" width="140px"/>
<Input />
```



#### 使用onValueChange替代onChange

PUI的所有表单控件都支持onValueChange，使用onValueChange可以直接获取改变值，不用再从evt.target.value中获取值。

```react
<Select onChange={(evt)=>{console.log(evt.target.value)}}
```

✅ 更好的写法

```react
<Select onChange={(val)=>{console.log(val)}}
```





#### 使用alterValues改写`<Switch />`的开关值

后端的API不一定使用true/false定义，因为数据库的存储缘故，有可能接口定义成了使用0/1，`<Switch>` 可以使用alterValues属性修改开关对应值，而不需要你再更改对象数值。

✅ 更好的写法

```react
<Switch
  label={{ text: '修改值为 0/1', position: 'left', width: '120px' }}
  alterValues="ZeroAndOne"
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



