<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    on:click|stopPropagation={(e) => {
        clicked = !clicked;
    }}
    class:active={clicked}
    class="option"
    style="--optionBackground:url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg);"
>
    <div class="shadow" />
    <div class="label">
        <div class="icon">
            <i class="fas fa-walking" />
        </div>
        <div class="info">
            <div class="main">Blonkisoaz</div>
            <div class="sub">Omuke trughte a otufta</div>
        </div>
    </div>
</div>
