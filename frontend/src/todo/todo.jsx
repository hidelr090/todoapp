import React, {Component} from 'react';
import PageHeader from '../template/pageheader';
import TodoForm from './todoform';
import TodoList from './todolist';

import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{

    constructor(props){
        super(props);
        this.state = {description: '', list: []};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list:resp.data}));
    }

    handleAdd(){
        const description = (this.state.description);
        axios.post(URL, {description})
            .then(resp => this.refresh());
    }

    handleChange(e){
        this.setState({...this.state, description:e.target.value});
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh());
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}/>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        );
    }
}
