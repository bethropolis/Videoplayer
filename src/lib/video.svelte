<script>
    import Artplayer from "artplayer";
    import { onMount } from "svelte";

    onMount(() => {
        var art = new Artplayer({
            container: "#artplayer-app",
            url: "http://localhost/Vidia/proxy.php?video=Anime/7%20deadly%20sins/s1/The%20Seven%20Deadly%20Sins%20Episode%201%20English%20Dubbed%20Watch%20cartoon.mp4",
        });
    });
</script>

<main>
    <div id="artplayer-app"></div>
</main>

<style>
    main {
        width: 100vw;
        height: 100%;
    }

    #artplayer-app {
        width: 50%;
        height: 250px;
        max-width: 512px;
    }
</style>
