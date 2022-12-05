<div
                class="actualClearText mx-2 pb-2 flex items-center justify-center w-[20vw] text-[2rem] tracking-tight"
                on:click={filterProjectButton}
            >
                Charts
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="actualClearText mx-2 pb-2 flex items-center justify-center w-[20vw] text-[2rem] tracking-tight"
                on:click={filterProjectButton}
            >
                Maps
            </div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- bg-[#ffde7d] rounded-3xl text-white mx-2 pb-2 flex items-center justify-center w-[20vw] text-[2rem] tracking-tight" -->
            <div
                class="actualClearText mx-2 pb-2 flex items-center justify-center w-[20vw] text-[2rem] tracking-tight"
                on:click={filterProjectButton}
                style = "color: white; opacity: 0.85"
                use:annotate={{
                
                    color: "#33BFB1",
                    type: "highlight",
                    animationDuration: 1000,
                    padding: 10,
                }}
            >
                Creative Coding
            </div>