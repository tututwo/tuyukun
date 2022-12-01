<script>


    export let individualProject;
</script>


    <div class="front border-18 border-black" />

    <div class="back">
        <div class="message">
            <p>Dude!</p>
            <p>Having a great time in the desert!</p>
            <p>
                Saw my first camel today, but its not the same without you here.
            </p>
            <p>Talk soon,</p>
            <p>D x</p>
        </div>
        <div class="address">
            <p>Eight Arms Head Office</p>
            <p>London</p>
            <p>E3 2PX</p>
            <p><a href="https://eightarms.co.uk">eightarms.co.uk</a></p>
        </div>
        <div class="photo-by">
            Photo by the incredible <a
                href="http://www.fluidr.com/photos/8181572@N05/interesting"
                >Dave Carr</a
            >
        </div>
        <!-- <div class="stamp">
            <div class="inner">S</div>
        </div> -->
    </div>


<style lang="scss">
    $stamp: #eb8046;

    .front,
    .back {
        box-shadow: 0 0 20px 0 #999;
        width: 600px;
        height: 400px;
        overflow: hidden;
        width: 580px;
        height: 380px;
        overflow: hidden;
        border: 10px solid #fff;
        position: absolute;
        top: 0;
        left: 0;
    }

    .front {
        -webkit-transform: rotateX(0deg) rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;

        -moz-transform: rotateX(0deg) rotateY(0deg);
        -moz-transform-style: preserve-3d;
        -moz-backface-visibility: hidden;

        /* -- transition is the magic sauce for animation -- */
        -o-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        background-image: url("/projects/svelte_teacherSalary.png");
    }

    :global(.postcard:hover .front) {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);

        -moz-box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    }
    .back {
        -webkit-transform: rotateY(-180deg);
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;

        -moz-transform: rotateY(-180deg);
        -moz-transform-style: preserve-3d;
        -moz-backface-visibility: hidden;

        /* -- transition is the magic sauce for animation -- */
        -o-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    :global(.postcard:hover .back) {
        z-index: 1000;

        -webkit-transform: rotateX(0deg) rotateY(0deg);
        -moz-transform: rotateX(0deg) rotateY(0deg);
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    .message,
    .address {
        font-family: "Swanky and Moo Moo", cursive;
    }

    .message {
        float: left;
        width: 300px;
        box-sizing: border-box;
        padding: 4em 2em 2em;
    }

    .message:after {
        content: "";
        position: absolute;
        width: 1px;
        height: 300px;
        background: #eaeaea;
        top: 30px;
        left: 300px;
    }

    .address {
        float: left;
        width: 250px;
        box-sizing: border-box;
        padding: 7em 2em 2em;

        p {
            margin: 0.5em 0 0;
        }
    }

    .photo-by {
        position: absolute;
        right: 10px;
        bottom: 10px;
        color: #777;
        font-size: 0.4em;
    }

    // .stamp {
    //     width: 50px;
    //     height: 60px;
    //     position: absolute;
    //     top: 10px;
    //     right: 10px;
    //     background: $stamp;
    //     padding: 5px;
    //     border: 2px dotted #fff;
    //     .inner {
    //         border: 4px solid rgba(255, 255, 255, 0.3);
    //         position: absolute;
    //         top: 5px;
    //         bottom: 5px;
    //         left: 5px;
    //         right: 5px;
    //         color: #fff;
    //         font-family: roboto, serif;
    //         font-weight: 100;
    //         font-size: 2em;
    //         padding-top: 4px;
    //         text-align: center;
    //     }
    // }
</style>
