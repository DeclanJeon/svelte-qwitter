<script>
    import Error from '$lib/Error.svelte'
    import { createPost, getUser } from '$lib/services'

    let postContent = ''

    let createPostPromise = Promise.resolve({})
    function handleCreatePost() {
        createPostPromise = createPost({user: getUser().email, content: postContent})
    }
</script>


<form class="form-control" on:submit|preventDefault={handleCreatePost}>
    <label for="post" class="label">
      <span class="label-text text-xl">What would you like to qwit?</span>
    </label> 
    <textarea bind:value={postContent} id="post" class="textarea h-24 textarea-bordered" required></textarea>

    {#await createPostPromise}
        <button disabled type="button" class="btn">Qwit that Shwit!</button> 

    {:then {data, error}}
        <button class="btn">Qwit taht Shwit!</button> 
    {#if data}
        <strong class="text-green-600">Successfully create post!</strong>
    {/if}
        <Error {error} />
    {/await}
  </form>
  