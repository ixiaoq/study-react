import React, { Component } from 'react'


class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'CommentList'
    }
  }
  componentDidMount () {
    this.setState({
      data: 'CommentList00000'
    })
  }
  render () {
    return (
      <div>
        { this.props.data || this.state.data }
      </div>
    )
  }
}

class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 'BlogPost'
    }
  }
  componentDidMount () {
    this.setState({
      data: 'BlogPost0000'
    })
  }
  render () {
    // console.log('BlogPost', this.props.data, this.state.data)
    return (
      <div>
        { this.props.data || this.state.data }
      </div>
    )
  }
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  () => 'CommentListWithSubscription'
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  () => 'BlogPostWithSubscription'
);

function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData()
      };
    }

    // componentDidMount() {
    //   // ...负责订阅相关的操作...、
    //   this.setState({
    //     data: '负责订阅相关的操作'
    //   })
    // }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}



export default class HOCComponent extends Component {
  render() {
    return (
      <div>
        <h3>高阶组件</h3>
        <CommentListWithSubscription />
        <BlogPostWithSubscription />
      </div>
    )
  }
}
