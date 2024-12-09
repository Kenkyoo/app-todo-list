import $ from "jquery";
import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;
import './output.css'
// Default SortableJS
import Sortable from 'sortablejs';

document.addEventListener("DOMContentLoaded", () => {
    showLocalStorage();
});

function li (task) {
    return $(
            `<li
                class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                <div class="d-flex align-items-center">
                  <input class="form-check-input me-2" type="checkbox" value="${task}" aria-label="..." />
                  <span>${task}</span>
                </div>
                <a class="remove" href="#!" data-mdb-tooltip-init title="Remove item">
                  <i class="fas fa-times text-primary"></i>
                </a>
            </li>`);
}
    $('#addButton').click(function () {
        const task = $('#input').val()
        tasks.push(task);
        savedLocalStorage();
        li(task).appendTo('#list');        
        $('#input').val(null);
    });


    $(document).on('click', '.remove', function () {
        $(this).parent().remove();
        savedLocalStorage();
    });

let tasks = [];

function savedLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
 }
 
 function showLocalStorage() {
     tasks = JSON.parse(localStorage.getItem('tasks')) || [];
     tasks.forEach(task => {
        li(task).appendTo('#list');
     });
 }

var el = document.getElementById('list');
var sortable = Sortable.create(el);