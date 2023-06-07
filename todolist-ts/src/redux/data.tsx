import {v1} from "uuid";

let list1 = v1();
let list2 = v1();
let list3 = v1();

export const dataLists = [
    {id: list1, title: 'Learning'},
    {id: list2, title: 'Grocery list'},
    {id: list3, title: 'Daily action plan'}
]

export const dataTasks = [
    { id: list1, title: 'Learning', items:
            [{id: v1(), title: 'HTML&CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: true},
                {id: v1(), title: 'ReactJS', isDone: true},
                {id: v1(), title: 'React Native', isDone: false},
                {id: v1(), title: 'Redux', isDone: true},
                {id: v1(), title: 'GraphQL', isDone: false},
                {id: v1(), title: 'TypeScript', isDone: false}]
    },

    { id: list2, title: 'Grocery list', items:
            [{id: v1(), title: 'Milk', isDone: false},
                {id: v1(), title: 'Fruits', isDone: true},
                {id: v1(), title: 'Vegetables', isDone: true},
                {id: v1(), title: 'Eggs', isDone: false},
                {id: v1(), title: 'Juice', isDone: false},
                {id: v1(), title: 'Fish', isDone: true},]
    },

    { id: list3, title: 'Daily action plan', items:
            [{id: v1(), title: 'Pay bills', isDone: true},
                {id: v1(), title: 'Grocery shopping', isDone: false},
                {id: v1(), title: 'Exercise', isDone: false},
                {id: v1(), title: 'Work on a project', isDone: true},
                {id: v1(), title: 'Clean the house', isDone: true},
                {id: v1(), title: 'Call a friend or family member', isDone: true},
                {id: v1(), title: 'Plan upcoming events', isDone: false},
                {id: v1(), title: 'Read a book', isDone: false},
                {id: v1(), title: 'Buy a gift for a friend', isDone: true},
                {id: v1(), title: 'Write a thank-you note', isDone: false},
                {id: v1(), title: 'Learn a new language', isDone: true}]
    }
]
