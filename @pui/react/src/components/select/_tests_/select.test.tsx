import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


import { Select } from '../select';


describe('Select', () => {
  it('renders a default value', () => {
    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const { getByText } = render(
      <Select options={options} defaultValue='option2' />
    );

    expect(getByText('Option 2')).toBeInTheDocument();
  });

  it('renders options and selects a value', () => {
    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByText, getByRole } = render(
      <Select options={options} onValueChange={onValueChange} />
    );

    waitFor(() => {
      userEvent.click(getByRole('button'));
      userEvent.click(getByText('Option 2'));
      expect(onValueChange).toHaveBeenCalledWith('option2', options[1]);
    });


  });

  it('handles disabled state', () => {
    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByRole, getByText } = render(
      <Select options={options} onValueChange={onValueChange} disabled />
    );

    expect(getByRole('button')).toBeDisabled();

    waitFor(() => {
      userEvent.click(getByRole('button'));
      expect(getByText('Option 1')).not.toBeInTheDocument();
      expect(getByText('Option 2')).not.toBeInTheDocument();
      expect(getByText('Option 3')).not.toBeInTheDocument();

    });
  });

  it('renders the placeholder by default', () => {
    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const { getByText, getByRole, queryByText } = render(
      <Select options={options} placeholder='select placeholder' />
    );

    expect(getByText('select placeholder')).toBeInTheDocument();
    waitFor(() => {
      userEvent.click(getByRole('button'));
      userEvent.click(getByText('Option 2'));

      expect(queryByText('select placeholder')).not.toBeInTheDocument();

    });

  });

  it('filters options by text input', () => {
    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByRole, getByText, queryByText } = render(
      <Select options={options} onValueChange={onValueChange} filterInput filterInputPlaceholder={'test filter'} />
    );

    waitFor(() => {
      userEvent.click(getByRole('button'));
      expect(getByText('test filter')).toBeInTheDocument();

      userEvent.type(getByRole('textbox'), '2');
      expect(getByText('Option 2')).toBeInTheDocument();
      expect(queryByText('Option 1')).not.toBeInTheDocument();
      expect(queryByText('Option 3')).not.toBeInTheDocument();

    });
  });

  it('shows the error msg', () => {

    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByText } = render(
      <Select options={options} onValueChange={onValueChange} error={{ show: true, message: '未选择' }} />
    );


    expect(getByText('未选择')).toBeInTheDocument();


  });


  it('controls by another event', () => {
    let openDiv = false;
    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByText, queryByText } = render(
      <>
        <div onClick={() => openDiv = true}>click</div>
        <Select options={options} onValueChange={onValueChange} open={openDiv} />
      </>
    );

    ['Option1', 'Option2', 'Option3'].forEach(text => expect(queryByText(text)).not.toBeInTheDocument());

    waitFor(() => {
      userEvent.click(getByText('click'));
      ['Option1', 'Option2', 'Option3'].forEach(text => expect(getByText(text)).toBeInTheDocument());

    });

  });

  it('renders the label', () => {

    const options = [
      { text: 'Option 1', value: 'option1' },
      { text: 'Option 2', value: 'option2' },
      { text: 'Option 3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByText } = render(
      <Select options={options} onValueChange={onValueChange} label='这是标签' />
    );

    expect(getByText('这是标签')).toBeInTheDocument();

  });

  it('renders the bottom element when list is open ', () => {
    const options = [
      { text: 'Option 1', value: 'option1' }
    ];
    const onValueChange = jest.fn();
    const element = <div>这是底线</div>;
    const { getByText, getByRole } = render(
      <Select options={options} onValueChange={onValueChange} bottomElement={element} />
    );

    waitFor(() => {
      userEvent.click(getByRole('button'));

      expect(getByText('这是底线')).toBeInTheDocument();
    });

  });

  it('renders option list by display config, separator is - ', () => {
    const options = [
      { text: '选项1', value: 'option1' },
      { text: '选项2', value: 'option2' },
      { text: '选项3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByText, getByRole } = render(
      <Select options={options} onValueChange={onValueChange} defaultOpen={true} display={['value', 'text']}
              separator='-' />
    );

    waitFor(() => {
      userEvent.click(getByRole('button'));

      ['option1-选项1', 'option2-选项2', 'option3-选项3'].forEach(text => expect(getByText(text)).toBeInTheDocument());
    });


  });

  it('shows different value when select', () => {
    const options = [
      { text: '选项1', value: 'option1' },
      { text: '选项2', value: 'option2' },
      { text: '选项3', value: 'option3' }
    ];
    const onValueChange = jest.fn();
    const { getByText, getByRole } = render(
      <Select options={options} onValueChange={onValueChange} defaultOpen={true} display={['text', 'value']} />
    );

    waitFor(() => {
      userEvent.click(getByRole('button'));

      ['选项1', '选项2', '选项3'].forEach(text => expect(getByText(text)).toBeInTheDocument());

      userEvent.click(getByText('选项2'));
      expect(getByText('选项2:option2')).toBeInTheDocument();
    });


  });

})
;
