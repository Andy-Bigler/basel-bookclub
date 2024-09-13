<script lang="ts">
	import type { RecordModel } from 'pocketbase';

	export let data: { test: RecordModel[] };
</script>

<h1 class="text-2xl">Basel Bookclub</h1>

<pre class="prose">{JSON.stringify(data.test, null, 4)}</pre>
