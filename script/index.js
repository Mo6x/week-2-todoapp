// window.addEventListener is to load entire pages
window.addEventListener('load', () => {

  // Get all the form, added to the pages with Id names 
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");
   
   // Add a function to submit the form, and prevent from submitting
      form.addEventListener("submit", (e) => {
       e.preventDefault();
     
       // create a new task element to input value
      const task = input.value;
      if(!task){
        alert("Please fill ou the task");
        return;
      };
          
      // create a new DOM element and insert it in the Dom
      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");
      task_content_el.innerText = task;
      
      // Append the child element
      task_el.appendChild(task_content_el);
      list_el.appendChild(task_el);
})



})








