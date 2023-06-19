import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { parseBreadcrumbFromRoutes, realPath, Breadcrumb } from '../breadcrumb'

describe('realPath', () => {
  test('should prepend a slash to path if it does not start with a slash', () => {
    const path = 'example/path'
    const result = realPath(path)
    expect(result).toBe('/example/path')
  })

  test('should not modify path if it already starts with a slash', () => {
    const path = '/example/path'
    const result = realPath(path)
    expect(result).toBe('/example/path')
  })

  test('should return "/" for an empty path', () => {
    const path = ''
    const result = realPath(path)
    expect(result).toBe('/')
  })

  test('should return "////" for a path with only slashes', () => {
    const path = '////'
    const result = realPath(path)
    expect(result).toBe('////')
  })
})

describe('parseBreadcrumbFromRoutes', () => {
  const breadcrumbResource = [
    {
      path: '/',
      title: 'Home',
      children: [
        {
          path: 'about',
          title: 'About',
          children: []
        },
        {
          path: 'contact',
          title: 'Contact',
          children: [
            {
              path: 'us',
              title: 'US',
              children: []
            },
            {
              path: 'canada',
              title: 'Canada',
              children: []
            }
          ]
        }
      ]
    }
  ]

  test('should return the breadcrumb for a matching pathname', () => {
    const pathname = '/contact/us'
    const expectedBreadcrumb = [
      { path: '/', text: 'Home' },
      { path: '/contact', text: 'Contact' },
      { path: '/contact/us', text: 'US' }
    ]
    const result = parseBreadcrumbFromRoutes(breadcrumbResource, pathname)
    expect(result).toEqual(expectedBreadcrumb)
  })

  test('should return an empty array if no matching pathname is found', () => {
    const pathname = '/unknown'
    const result = parseBreadcrumbFromRoutes(breadcrumbResource, pathname)
    expect(result).toEqual([])
  })

  test('should return the breadcrumb for the root path', () => {
    const pathname = '/'
    const expectedBreadcrumb = [{ path: '/', text: 'Home' }]
    const result = parseBreadcrumbFromRoutes(breadcrumbResource, pathname)
    expect(result).toEqual(expectedBreadcrumb)
  })

  test('should handle nested routes with the same path name correctly', () => {
    const nestedBreadcrumbResource = [
      {
        path: '/',
        title: 'Home',
        children: [
          {
            path: 'about',
            title: 'About',
            children: [
              {
                path: 'overview',
                title: 'Overview',
                children: []
              }
            ]
          },
          {
            path: 'about',
            title: 'Another About',
            children: []
          }
        ]
      }
    ]

    const pathname = '/about/overview'
    const expectedBreadcrumb = [
      { path: '/', text: 'Home' },
      { path: '/about', text: 'About' },
      { path: '/about/overview', text: 'Overview' }
    ]
    const result = parseBreadcrumbFromRoutes(nestedBreadcrumbResource, pathname)
    expect(result).toEqual(expectedBreadcrumb)
  })

  test('should handle an empty breadcrumbResource array', () => {
    const pathname = '/contact'
    const result = parseBreadcrumbFromRoutes([], pathname)
    expect(result).toEqual([])
  })

  test('should handle an empty pathname', () => {
    const pathname = ''
    const result = parseBreadcrumbFromRoutes(breadcrumbResource, pathname)
    expect(result).toEqual([])
  })

  test('should handle root path with empty children array', () => {
    const breadcrumbResource = [
      {
        path: '/',
        title: 'Home',
        children: []
      }
    ]

    const pathname = '/'
    const expectedBreadcrumb = [{ path: '/', text: 'Home' }]
    const result = parseBreadcrumbFromRoutes(breadcrumbResource, pathname)
    expect(result).toEqual(expectedBreadcrumb)
  })

  test('should handle nested routes with empty children arrays', () => {
    const breadcrumbResource = [
      {
        path: '/',
        title: 'Home',
        children: [
          {
            path: 'about',
            title: 'About',
            children: []
          },
          {
            path: 'contact',
            title: 'Contact',
            children: []
          }
        ]
      }
    ]

    const pathname = '/about'
    const expectedBreadcrumb = [
      { path: '/', text: 'Home' },
      { path: '/about', text: 'About' }
    ]
    const result = parseBreadcrumbFromRoutes(breadcrumbResource, pathname)
    expect(result).toEqual(expectedBreadcrumb)
  })
})
describe('Breadcrumb', () => {
  test('renders Breadcrumb component with items', () => {
    const items = [
      { text: 'Home', path: '/' },
      { text: 'About', path: '/about' },
      { text: 'Contact', path: '/contact' }
    ]
    const { getByText } = render(<Breadcrumb items={items} />)
    const breadcrumbItem = getByText('Home')
    expect(breadcrumbItem).toBeInTheDocument()
  })

  test('invokes onClick callback when an item is clicked', () => {
    const items = [
      { text: 'Home', path: '/' },
      { text: 'About', path: '/about' },
      { text: 'Contact', path: '/contact' }
    ]

    const onClickMock = jest.fn()
    const { getByText } = render(
      <Breadcrumb items={items} onClick={onClickMock} />
    )

    fireEvent.click(getByText('About'))
    expect(onClickMock).toHaveBeenCalledTimes(1)
    expect(onClickMock).toHaveBeenCalledWith(items[1])
  })

  test('parses breadcrumb from routes correctly', () => {
    const routes = [
      {
        path: '/',
        title: 'Home',
        children: [
          { path: 'about', title: 'About' },
          { path: 'contact', title: 'Contact' }
        ]
      }
    ]

    const breadcrumb = parseBreadcrumbFromRoutes(routes, '/about')
    expect(breadcrumb).toHaveLength(2)
    expect(breadcrumb[0].text).toBe('Home')
    expect(breadcrumb[1].text).toBe('About')
  })
})
