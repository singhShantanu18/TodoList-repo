const todoList = [];
            let i;

            function addTodo(){
                // Extract name of the task from the input element.
                nameInputElement = document.querySelector('.js-todo-input');
                name = nameInputElement.value

                //Extract the date from the date-input and store in a variable.
                dateInputElement = document.querySelector('.js-date-input')
                date = dateInputElement.value

                // push the name and date as an object to the array.
                todoList.push({name:name,
                                duedate:date});
            
                // Clear the input element after pushing the task in the Array.
                nameInputElement.value='';
                
                displayTodo();
            }
            
            function displayTodo(){
                let todo_html_list='' ;

                //pick one object at a time and write an html for it and add the html to a variable.
                // on clicking the delete button it removes the object of the same index from the array
                // and displays the arrays again.
                for(i=0; i<todoList.length; i++){
                    todoObject = todoList[i];
                    name = todoObject.name;
                    duedate = todoObject.duedate;
                    html_for_each_todo = `<div>${name}</div>
                                          <div>${duedate}</div>
                                           <button onclick="
                                            todoList.splice(${i},1)
                                            displayTodo()
                                            " class="delete-button">Delete</button>`
                    todo_html_list += html_for_each_todo
                }
                
                // eventually display the variable of html code on the web page.
                displayElement = document.querySelector('.js-display-todo');
                displayElement.innerHTML = todo_html_list
            }