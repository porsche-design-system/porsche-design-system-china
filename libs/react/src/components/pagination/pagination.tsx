import React, { useState, useEffect, useMemo, CSSProperties } from 'react'
import classNames from 'classnames'
import { IconArrowHeadLeft, IconArrowHeadRight } from '@pui/icons'
import { componentClassNames } from '../../shared/class-util'

import './pagination.scss'
import { Select } from '../select/select'

export interface PaginationProps {
  /** 类名 */
  className?: string

  /** 样式 */
  style?: CSSProperties

  /** 当前页码 */
  current?: number

  /** 默认当前页码 */
  defaultCurrent?: number

  /** 每页条数 */
  pageSize?: number

  /** 指定每页可以显示多少条 */
  pageSizeOptions?: number[]

  /** 数据总数 */
  total: number

  /** 是否显示为简单分页 */
  simple?: boolean

  /** 用于显示数据总量 */
  showTotal?: (total: number) => string

  /** 对齐方式 */
  align?: 'left' | 'center' | 'right'

  /** 页码 改变的回调，参数是改变后的页码及每页条数 */
  onCurrentChange?: (page: number) => void

  /** pageSize 变化的回调 */
  onPageSizeChange?: (pageSize: number) => void
}

const prefixCls = 'pui-pagination'
const ellipsis = '...'

const Pagination = ({
  className,
  current,
  defaultCurrent = 1,
  pageSize = 1,
  pageSizeOptions = [10, 20, 50, 100],
  onCurrentChange,
  onPageSizeChange,
  style,
  total,
  simple = true,
  showTotal = (total: number) => `共 ${total} 条数据`,
  align = 'left'
}: PaginationProps) => {
  const initialCurrent = current || defaultCurrent
  const [currentPage, setCurrentPage] = useState(initialCurrent)
  const maxPage = useMemo(() => Math.ceil(total / pageSize), [pageSize, total])
  const calculatePageList = (page: number) => {
    let list = []
    if (maxPage > 7) {
      if (maxPage - page <= 3) {
        list = [
          1,
          ellipsis,
          maxPage - 4,
          maxPage - 3,
          maxPage - 2,
          maxPage - 1,
          maxPage
        ].map((item, index) => ({
          page: item,
          active: item === page,
          key: index
        }))
      } else if (page - 1 <= 3) {
        list = [1, 2, 3, 4, 5, ellipsis, maxPage].map((item, index) => ({
          page: item,
          active: item === page,
          key: index
        }))
      } else {
        list = [1, ellipsis, page - 1, page, page + 1, ellipsis, maxPage].map(
          (item, index) => ({
            page: item,
            active: item === page,
            key: index
          })
        )
      }
    } else {
      for (let i = 1; i <= maxPage; i++) {
        list.push({
          page: i,
          active: i === page,
          key: i
        })
      }
    }
    return list
  }
  const initialList = useMemo(() => calculatePageList(initialCurrent), [])
  const [list, setList] = useState(initialList)
  // 更新分页数据
  const updatePageData = (page: number) => {
    if (page > maxPage) {
      page = maxPage
    }
    const list = calculatePageList(page)
    setList(list)
    if (page !== currentPage) {
      setCurrentPage(page)
    }
  }
  useEffect(() => {
    if (current) {
      updatePageData(current)
    } else {
      updatePageData(currentPage)
    }
  }, [current, pageSize, total])
  // 页面change回调
  const handlePageChange = (page: number | string) => () => {
    if (page === ellipsis || page === currentPage) {
      return
    }
    if (!current) {
      updatePageData(page as number)
    }
    onCurrentChange && onCurrentChange(page as number)
  }
  // 前一页
  const prevPage = () => {
    if (currentPage === 1) return
    const prevPage = currentPage - 1
    if (!current) {
      updatePageData(prevPage)
    }
    onCurrentChange && onCurrentChange(prevPage)
  }
  // 下一页
  const nextPage = () => {
    if (currentPage === maxPage) return
    const nextPage = currentPage + 1
    if (!current) {
      updatePageData(nextPage)
    }
    onCurrentChange && onCurrentChange(nextPage)
  }

  const positionMapping = {
    left: 'start',
    center: 'center',
    right: 'end'
  }

  if(!simple && !onPageSizeChange){
    console.warn('请为你的分页组件设置onPageSizeChange属性，否则无法改变每页条数')
  }

  return (
    <ul
      className={componentClassNames('pui-pagination', {}, className)}
      style={{ justifyContent: positionMapping[align], ...style }}
    >
      {!simple && (
        <li className={`${prefixCls}-more-info`}>
          <div className={`${prefixCls}-total-text`}>{showTotal(total)}，</div>
          <div className={`${prefixCls}-size-change`}>
            <span className={`${prefixCls}-size-change-text-start`}>
              每页显示
            </span>
            <Select
              options={pageSizeOptions}
              value={pageSize}
              onValueChange={onPageSizeChange}
            />
            <span className={`${prefixCls}-size-change-text-end`}>条</span>
          </div>
        </li>
      )}
      <li
        className={classNames(
          `${prefixCls}-item`,
          'pui-pagination-arrow-left',
          {
            'pui-pagination-disabled': currentPage === 1
          }
        )}
        onClick={prevPage}
      >
        <IconArrowHeadLeft />
      </li>
      {list.map(item => {
        return (
          <li
            className={classNames(`${prefixCls}-item`, {
              [`${prefixCls}-item-active`]: item.active,
              [`${prefixCls}-item-ellipsis`]: item.page === ellipsis
            })}
            key={item.key}
            onClick={handlePageChange(item.page)}
          >
            {item.page}
          </li>
        )
      })}
      <li
        className={classNames(
          `${prefixCls}-item`,
          'pui-pagination-arrow-right',
          {
            'pui-pagination-disabled': currentPage === maxPage
          }
        )}
        onClick={nextPage}
      >
        <IconArrowHeadRight />
      </li>
    </ul>
  )
}

export { Pagination }
