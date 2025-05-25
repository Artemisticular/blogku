<script lang="ts">
    import { videoConfig } from "../../config";
    import { Icon } from "astro-icon/components";

    let accessCode = "";
    let error = "";
    let isAuthenticated = false;

    function handleSubmit() {
        if (accessCode === videoConfig.accessCode) {
            isAuthenticated = true;
            error = "";
            // Simpan status autentikasi di localStorage
            localStorage.setItem("videoAccess", "true");
        } else {
            error = "Kode akses tidak valid";
        }
    }

    // Cek status autentikasi saat komponen dimuat
    if (typeof window !== "undefined") {
        isAuthenticated = localStorage.getItem("videoAccess") === "true";
    }
</script>

{#if !isAuthenticated}
    <div class="card-base p-6">
        <h2 class="text-xl font-bold mb-4">Akses Video</h2>
        <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div>
                <label for="accessCode" class="block text-sm font-medium mb-2">Kode Akses</label>
                <input
                    type="password"
                    id="accessCode"
                    bind:value={accessCode}
                    class="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                    placeholder="Masukkan kode akses"
                    required
                />
            </div>
            {#if error}
                <p class="text-red-500 text-sm">{error}</p>
            {/if}
            <button
                type="submit"
                class="w-full btn-regular rounded-lg h-10 font-bold"
            >
                Masuk
            </button>
        </form>
    </div>
{:else}
    <slot />
{/if} 