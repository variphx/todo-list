<script>
	import { deleteTodo, toggleTodoCompleted } from '../stores/todoStore.js';

	export let /** @type {any} */ todo;
</script>

<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4">
	<input
		type="checkbox"
		id="completed"
		checked={todo.completed}
		on:change={() => toggleTodoCompleted(todo.id)}
		class="mr-2 h-5 w-5"
	/>
	<span class={`flex-1 text-gray-800 ${todo.completed ? 'line-through' : ''}`}>
		{todo.content}
	</span>
	<button
		type="button"
		class="text-sm py-1 px-2 rounded bg-red-500 text-white focus:outline-none focus:shadow-outline"
		on:click={() => deleteTodo(todo.id)}>delete</button
	>
</li>
