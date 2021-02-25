import React, {Component} from 'react';
import PageHeader from '../template/pageheader';
import TodoForm from './todoform';
import TodoList from './todolist';

export default class Todo extends Component{
    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <TodoForm/>
                <TodoList/>
            </div>
        );
    }
}
