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
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => console.log(resp.data));
    }

    handleAdd(){
        const description = (this.state.description);
        axios.post(URL, {description})
            .then(resp => console.log('Funcionou'));
    }

    handleChange(e){
        this.setState({...this.state, description:e.target.value});
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}/>
                <TodoList/>
            </div>
        );
    }
}
