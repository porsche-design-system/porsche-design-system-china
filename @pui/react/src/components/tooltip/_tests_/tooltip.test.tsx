import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';


import { Tooltip } from '../tooltip';

describe('Tooltip', () => {
  it('should render the children and content', () => {
    const { getByText } = render(
      <Tooltip content='Hello, world!'>Hover me!</Tooltip>
    );
    expect(getByText('Hover me!')).toBeInTheDocument();
  });
  describe('onHover', () => {

    it('should show tooltip content on mouse enter', async () => {
      const { getByText, queryByText } = render(
        <Tooltip content='test' trigger='hover'>
          <button>Target</button>
        </Tooltip>
      );
      const target = getByText('Target');

      await waitFor(() => {
        userEvent.hover(target);
        expect(queryByText('test')).toBeInTheDocument();
        userEvent.unhover(target);
      });

    });

    it('should hide tooltip content on mouse leave', async () => {
      const { getByText, queryByText } = render(
        <Tooltip content='test' trigger='hover'>
          <button>Target</button>
        </Tooltip>
      );
      const target = getByText('Target');

      await waitFor(() => {
        userEvent.hover(target);
        userEvent.unhover(target);
        expect(queryByText('test')).not.toBeInTheDocument();
      });


    });

    it('should call onVisibleChange callback correctly', async () => {
      const onVisibleChange = jest.fn();
      const { getByText } = render(
        <Tooltip content='test' trigger='hover' onVisibleChange={onVisibleChange}>
          <button>Target</button>
        </Tooltip>
      );

      const target = getByText('Target');
      await waitFor(() => {
        userEvent.hover(target);
        expect(onVisibleChange).toBeCalled();
        userEvent.unhover(target);
      });
    });

  });

  describe('onClick', () => {
    it('should show tooltip content on mouse click', async () => {
      const { getByText, queryByText } = render(
        <Tooltip content='test' trigger='click'>
          <button>Target</button>
        </Tooltip>
      );
      const target = getByText('Target');

      await waitFor(() => {
        userEvent.click(target);
        expect(queryByText('test')).toBeInTheDocument();
        userEvent.click(target);
      });
    });

    it('should hide tooltip content on mouse click', async () => {
      const { getByText, queryByText } = render(
        <Tooltip content='test' trigger='click'>
          <button>Target</button>
        </Tooltip>
      );
      const target = getByText('Target');

      await waitFor(() => {
        userEvent.click(target);
        userEvent.click(target);
        expect(queryByText('test')).not.toBeInTheDocument();
      });
    });

    it('should call onVisibleChange correctly', async () => {

      const onVisibleChange = jest.fn();
      const { getByText } = render(
        <Tooltip content='test' trigger='click' onVisibleChange={onVisibleChange}>
          <button>Target</button>
        </Tooltip>
      );

      const target = getByText('Target');
      await waitFor(() => {
        userEvent.click(target);
        expect(onVisibleChange).toBeCalled();
        userEvent.click(target);
      });
    });
  });

  describe('getPopupContainer', () => {
    it('should mount the tooltip component in father element', async () => {

      const { getByText } = render(
        <>
          <div data-testid='father' className='father'>father</div>

          <div>
            <Tooltip content='test' trigger='click' getPopupContainer={() => document.querySelector('.father')}>
              <button>Target</button>
            </Tooltip>
          </div>

        </>);

      const target = getByText('Target');

      await waitFor(() => {
        userEvent.click(target);
        const father = getByText('father');
        expect(father.childElementCount).toBe(1);
      });
    });
  });

  describe('placement', () => {
    it('should render the tooltip on desired position', () => {
      const { getByText } = render(
        <div id="container" style={{width:"1000px", height:"1000px" }}>
          <Tooltip content='test' trigger='click' placement='bottomCenter'>
            <button>Target</button>
          </Tooltip>
        </div>
      );

      const target = getByText('Target');
      waitFor(()=>{
        userEvent.click(target)
        const result = getByText('test')

        expect(result.offsetTop).toBeGreaterThan(target.offsetTop);
        userEvent.click(target)
      })

    });
  });
});
