import React from 'react'

import { Menu, Button, Modal } from '../..'
import './menu.stories.scss'

const { Item, ItemGroup, SubMenu } = Menu

export default {
  title: 'Feedback/Menu',
  component: Menu,
  subcomponents: { Item, ItemGroup, SubMenu }
}

export const ProgressStoryBook = () => {
  const [index, setIndex] = React.useState('submit-test')
  return (
    <div className="menu-demo">
      <div className="test-one">
        <Menu activeIndex={index} onSelect={setIndex}>
          <Menu.Item
            index="test"
            onClick={() => Modal.confirm('onClick事件', '点击了 test')}
          >
            test
          </Menu.Item>
          <Menu.Item index="about">about</Menu.Item>
          <Menu.Item disabled index="prod">
            prod
          </Menu.Item>
          <Menu.SubMenu
            title="submit"
            index="submit"
            onClick={() => Modal.confirm('onClick事件', '点击了子标题')}
          >
            <Menu.Item index="submit-test">test1</Menu.Item>
            <Menu.Item index="submit-about">about2</Menu.Item>
            <Menu.Item disabled index="submit-prod">
              prod3
            </Menu.Item>
            <Menu.Item index="submit-test1">test1</Menu.Item>
            <Menu.Item index="submit-about2">about2</Menu.Item>
            <Menu.Item disabled index="submit-prod3">
              prod3
            </Menu.Item>
            <Menu.SubMenu title="submit-submit" index="submit-submit">
              <Menu.Item index="submit-submit-test1">test1</Menu.Item>
              <Menu.Item index="submit-submit-about2">about2</Menu.Item>
              <Menu.Item disabled index="submit-submit-prod3">
                prod3
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.SubMenu title="submit-submit4" index="submit-submit4">
            <Menu.Item index="submit-submit-test14">test1</Menu.Item>
            <Menu.Item index="submit-submit-about24">about2</Menu.Item>
            <Menu.Item disabled index="submit-submit-prod34">
              prod4
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <br />
        <br />
        <Button onClick={() => setIndex('submit-submit-test14')}>
          {' '}
          设置默认值{' '}
        </Button>
      </div>
    </div>
  )
}

ProgressStoryBook.storyName = 'Menu Horizontal'

// export const ProgressStoryBook1 = () => {
//   return (
//     <div className="menu-demo">
//       <div className="test-two">
//         <Menu mode="vertical">
//           <Menu.Item icon={<IconEdit />} selectAfter index="test">
//             test
//           </Menu.Item>
//           <Menu.Item icon={<IconAdd />} selectAfter index="about">
//             about
//           </Menu.Item>
//           <Menu.Item disabled icon={<IconEdit />} selectAfter index="prod">
//             prod
//           </Menu.Item>
//           <Menu.SubMenu title="submit" index="submit">
//             <Menu.Item icon={<IconEdit />} selectAfter index="test1">
//               test1
//             </Menu.Item>
//             <Menu.Item icon={<IconBell />} selectAfter index="about2">
//               about2
//             </Menu.Item>
//             <Menu.Item disabled icon={<IconEdit />} selectAfter index="prod3">
//               prod3
//             </Menu.Item>
//           </Menu.SubMenu>
//           {null}
//         </Menu>
//       </div>
//     </div>
//   )
// }

// ProgressStoryBook1.storyName = 'Menu Vertical'
