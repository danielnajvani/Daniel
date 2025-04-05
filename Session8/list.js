function add() {
    // Get the list element
    const list = document.getElementById("list");

    // Create a new list item
    const li = document.createElement("li");

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a text input for the task
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter task here";

    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        list.removeChild(li); // Remove the list item when the button is clicked
    };

    // Append the checkbox, input, and remove button to the list item
    li.appendChild(checkbox);
    li.appendChild(input);
    li.appendChild(removeButton);

    // Append the list item to the list
    list.appendChild(li);
}

function check(){

}

function remove(){

}