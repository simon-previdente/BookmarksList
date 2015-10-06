var React = require('react');

var Bookmark = React.createClass({
  render: function() {
    return (
      <div>
        <p class="title">{this.props.bookmark.title}</p>
        <p class="link">
          <a href={this.props.bookmark.link} target="_blank">
            {this.props.bookmark.link}
          </a>
        </p>
      </div>
    );
  }

});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>My bookmarks listn</h1>
        <Bookmark bookmark={this.props.bookmarks[0]}></Bookmark>
        <Bookmark bookmark={this.props.bookmarks[1]}></Bookmark>
      </div>
    )
  }
});

var bookmarks = {
  rows: [
    {title: 'title 01', link: 'http://bookmark.com/'},
    {title: 'title 01', link: 'http://bookmark.com/'} ]
};

React.render(<App bookmarks={bookmarks.rows}></App>, document.getElementById('app'));
