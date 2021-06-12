export class Todo {
    static fromJson({id,tarea, completado, fecha}){
        const tempTodo = new Todo(tarea);

        tempTodo.completado = completado;
        tempTodo.fecha = fecha;
        tempTodo.id = id;
        return tempTodo;
    }
    constructor(tarea){
        this.tarea = tarea;

        this.id = new Date().getTime();
        this.fecha = new Date();
        this.completado = false;
    }

    imprimirInfo(){
        console.log(`${this.id} , ${this.tarea}`);
    }
}