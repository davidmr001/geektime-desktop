import React, { Component } from 'react';
import { connect } from 'react-redux';

class Article extends Component {

  render() {

    const { article } = this.props;

    if (article === null) {
      return null;
    }

    return (
      <div>
        <h1>{article.article_title}</h1>
        {/* eslint-disable-next-line */}
        <div dangerouslySetInnerHTML={{__html: article.article_content}} />
      </div>
    )
  }
};

const mapState = state => ({
  article: state.article.article,
});

export default connect(mapState, null)(Article);
