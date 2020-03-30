import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function Reddit() {
  //create a piece of state to hold an array of Reddit posts
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);

      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
``      <h1>/r/reactjs</h1>
      <ul>
        {/* map funtion loops over the posts and returns an <li> for each item in the array */}
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.url}>
              {post.title} - score:{post.score}
            </a>
          </li>
        ))}
        <br />
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));

/*
what map is doing above

<ul>
  {[
    <li key={1}>Post one</li>
    <li key={2}>Post two</li>
    <li key={3}>Post three</li>
  ]}
</ul>

*/
