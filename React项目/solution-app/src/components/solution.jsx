import React, { Component } from 'react';


class Solution extends Component {
    state = {  
        solutions : [
            {key: 0, number: 1111, title: "5", views: 1222},
            {key: 1, number: 1112, title: "6", views: 1223},
            {key: 2, number: 1113, title: "7", views: 1224},
            {key: 3, number: 1114, title: "8", views: 1225},
            {key: 4, number: 1115, title: "9", views: 1226},
            {key: 5, number: 1116, title: "a", views: 1227},
            {key: 6, number: 1117, title: "b", views: 1228},
            {key: 7, number: 1118, title: "c", views: 1229},
        ]
    };

    handleDelete = (s) => {
        const solutions = this.state.solutions.filter(solution => solution !== s);
        this.setState(
            {solutions}
        );
    }

    render() { 
        if (this.state.solutions.length === 0) {
            return <p>没有题解啦!</p>
        }

        return (
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>标题</th>
                        <th>阅读</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map(solution => (
                        <tr key={solution.key}>
                            <td>{solution.number}</td>
                            <td>{solution.title}</td>
                            <td>{solution.views}</td>
                            <td><button onClick={() => this.handleDelete(solution)} calssName="btn btn-danger"></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Solution;