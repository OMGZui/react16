/*
 * @Author: 小粽子 
 * @Date: 2017-12-19 09:37:42 
 * @Last Modified by: 小粽子
 * @Last Modified time: 2017-12-19 11:00:17
 */
import React, { Component } from 'react';
import Remarkable from 'remarkable';
import { Row, Col } from 'antd';
import 'bootstrap';
import 'jquery';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={8}>
            <h3>TODO</h3>
            <TodoList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} value={this.state.text} />
              <button className="btn btn-primary">
                Add #{this.state.items.length + 1}
              </button>
            </form>
          </Col>
          <Col span={8}>
            <MarkdownEditor />
          </Col>
          <Col span={8}>
            <Ele />
          </Col>
        </Row>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    );
  }
}

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Type some *markdown* here!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

class Ele extends Component {
  render() {
    function formatName(user) {
      return user.firstName + ' ' + user.lastName;
    }

    const user = {
      firstName: '盛',
      lastName: '俊'
    };

    const element = <h1>Hello, {formatName(user)}!</h1>;
    return <div>{element}</div>;
  }
}

export default Content;
