<script>
	import { addTodo } from '../stores/todoStore.js';

	let /** @type {string} */ todo = '';

	const handleSubmit = () => {
		if (todo.length === 0) {
			return;
		}
		addTodo(todo);
		todo = '';
	};
</script>

<form class="my-6">
	<div class="flex flex-col text-sm mb-2">
		<label for="todo" class="font-bold mb-2 text-gray-800">todo</label>
		<input
			type="text"
			id="todo"
			placeholder="type things you need to do"
			bind:value={todo}
			class="appearance-none shadow-sm border border-gray-200 focus:border-gray-400 focus:outline-none p-2 rounded-lg"
		/>
	</div>
	<button
		type="submit"
		on:click|preventDefault={handleSubmit}
		class="w-full py-2 rounded text-center text-white bg-indigo-500 hover:bg-indigo-600"
		>submit</button
	>
</form>
