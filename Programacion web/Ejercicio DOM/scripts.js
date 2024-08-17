// Se adiciona un "Event Listener" para cuando se cargue todo el contenido de la página
document.addEventListener("DOMContentLoaded", () => {   

    const tasksList = document.getElementById("tasksList");
    
    let selectedTask = null;

    document.getElementById("addTask").addEventListener("click", () => 
        {
        const textoTarea = prompt("Ingrese el nombre de la tarea:");
        if (textoTarea) 
            {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea; 
            tasksList.appendChild(nuevaTarea);
            //Se le adiciona el headler de seleccion a la nueva tarea
            selectedTaskHandler(nuevaTarea);
        }
    });

    // Referencia al elemento seleccionado de la tarea

    document.getElementById("deleteTask").addEventListener("click", () =>  {
        if (selectedTask) 
     {
        const nuevoTexto = prompt("modificar la tarea", selectedTask.textContent);
        if(nuevoTexto)
        {
            selectedTask.textContent = nuevoTexto;
        }

        } else {
            alert("No ha seleccionado ninguna tarea para modificar");
        }
    });

    document.getElementById("addtTask").addEventListener("click", () => 
        {
        if (selectedTask) 
        {
            tasksList.removeChild(selectedTask);
            selectedTask= null;
        }
    
 else {
            alert("Seleccione una tarea para eliminar");
        }
    });

     function selectedTaskHandler (task)
    {
            task.addEventListener("click", () => {});
                selectedTask = task;
        

    }


});
