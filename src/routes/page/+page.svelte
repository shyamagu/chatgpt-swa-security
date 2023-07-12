<script>
	import { Button } from 'flowbite-svelte';

    let message = 'Default message';

    async function callAPI(){
        try {
            const res = await fetch('/api/message');
            const data = await res.json();
            message = data.message;
            
        } catch (error) {
            if(error instanceof Error){
                message = error.message;
            }else{
                message = "Unkonwn error";
            }
        }
    }

</script>

<div class="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
    <h2 class="text-4xl mb-3 text-black font-mono">今日の標語</h2>
    <Button color="primary" class="text-1xl text-white m-3 font-mono" on:click={callAPI}>作成する</Button>
    <p class="text-2xl text-black">{message}</p>
</div>