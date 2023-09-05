<script>
	import TodoForm from '../lib/components/TodoForm.svelte';
	import Todo from '../lib/components/Todo.svelte';
	import { todos } from '../lib/stores/todoStore';
</script>

<main>
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">my todos</h1>
	<TodoForm />
	{#each $todos as todo}
		<Todo {todo} />
	{/each}
</main>
