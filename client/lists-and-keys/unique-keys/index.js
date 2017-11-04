import React from 'react';
import ReactDOM from 'react-dom';

function Post(props) {
    return (
        <div id={props.id}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

function Blog(props) {
    const sideBar = (
        <ul>
            {props.posts.map((post) => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) => 
        <Post 
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content} />
    );

    return (
        <div>
            {sideBar}
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
    <Blog posts={posts}/>,
    document.getElementById('root')
);