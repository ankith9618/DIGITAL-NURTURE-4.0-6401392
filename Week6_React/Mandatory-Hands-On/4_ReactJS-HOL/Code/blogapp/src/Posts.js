import React from "react";
import Post from "./Post";
import './Posts.css';
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false,
        };
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                const postList = data.map(
                    (item) => new Post(item.id, item.title, item.body)
                );
                this.setState({ posts: postList });
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                this.setState({ hasError: true });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred while rendering the posts.");
        console.error("Caught error:", error, info);
        this.setState({ hasError: true });
    }

    render() {
        const { posts, hasError } = this.state;

        if (hasError) {
            return <h2>Something went wrong. Please try again later.</h2>;
        }

        return (
            <div className="post">
                <h1>Blog Posts</h1>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
