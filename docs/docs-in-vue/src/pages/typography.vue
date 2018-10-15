<template>
    <section id="typography" class="padded-content">
        <div class="row">
            <div class="portion">
                <div class="border-thick margin-bottom-tiny"></div>
                <h2 class="text-hue margin-bottom-fixed">Typography</h2>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <p>To keep things free, the FICTOAN uses fonts from Google Fonts, handpicked beauties that you can quickly
                    use in your projects.</p>
            </div>
    
            <div class="portion half">
                <p>There are three typefaces, each for one category&mdash; one sans-serif for body, one serif for fancy
                    occasions, and one geometric monospace for displaying code.</p>
            </div>
        </div>
    
        <div class="row margin-bottom-fixed">
            <div class="portion one-third">
                <pre><code class="language-markup">//  Sans-serif
    &lt;p class="font-sans">&lt;/p></code></pre>
            </div>
    
            <div class="portion one-third">
                <pre><code class="language-markup">//  Serif
    &lt;p class="font-serif">&lt;/p></code></pre>
            </div>
    
            <div class="portion one-third">
                <pre><code class="language-markup">//  Monospace
    &lt;p class="font-mono">&lt;/p></code></pre>
            </div>
        </div>
    
        <div class="row">
            <div class="portion one-third">
                <h4 class="font-sans" style="font-family: Work Sans">Work Sans</h4>
                <p class="font-sans" style="font-family: Work Sans">Work Sans is the typeface of choice for body, chosen for its excellent legibility and
                    subdued style. You just can’t go wrong with this one.</p>
            </div>
    
            <div class="portion one-third">
                <h4 class="font-serif">Eczar</h4>
                <p class="font-serif" style="font-size: 1.12em">Eczar is the selected serif, for its understated elegance and subtle class. Its sober
                    characters are great for body text as well.</p>
            </div>

            <div class="portion one-third">
                <h4 class="font-space-mono">Space Mono</h4>
                <p class="font-space-mono">This little beaut handles the monospace department, and with quite a bit of
                    panache too, don&rsquo;t you think?</p>
            </div>
        </div>




        <!--  TYPE SCALING  ======================================================================================== -->
        <div id="type-scaling" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Type scaling</h4>
            </div>
        </div>
    
        <div class="row margin-bottom-fixed">
            <div class="portion whole">
                <p>There are two main values you can over-ride in the <code>_ff-theme.scss</code> file to change type size.
                    The <code>$baseFontSize</code> is set at <code>1em</code>. Change this to affect your body font size.
                    The <code>$scaleFactor</code> is set at <code>1.24</code>, a variation of minor-third scale, change
                    this to affect the heading sizes proportionally.</p>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">h1</code>
                <h1>I&rsquo;m just your type.</h1>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">h2</code>
                <h2>I&rsquo;m just your type.</h2>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">h3</code>
                <h3>I&rsquo;m just your type.</h3>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">h4</code>
                <h4>I&rsquo;m just your type.</h4>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">h5</code>
                <h5>I&rsquo;m just your type.</h5>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">h6</code>
                <h6>I&rsquo;m just your type.</h6>
            </div>
    
    
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">text-tiny</code>
                <p class="text-tiny">I&rsquo;m just your type.</p>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">text-small</code>
                <p class="text-small">I&rsquo;m just your type.</p>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">text-normal</code>
                <p class="text-normal">I&rsquo;m just your type.</p>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">text-large</code>
                <p class="text-large">I&rsquo;m just your type.</p>
            </div>
    
            <div class="portion whole horizontal vertically-center-items">
                <code class="margin-right-tiny">text-huge</code>
                <p class="text-huge">I&rsquo;m just your type.</p>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>Use the text-sizing classes to style your spans within sentences, instead of using headings.</p>
            </div>
        </div>
    
    
    
        <!--  TYPE HELPERS  ======================================================================================== -->
        <div id="type-helpers" class="row">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Type helpers</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">
        // Centre-align text
        &lt;p class="text-center">&lt;/p>
        &lt;p class="text-centre">&lt;/p>
        
        //  Left and right align text
        &lt;h3 class="text-left">&lt;/h3>
        &lt;h1 class="text-right">&lt;/h1>
        
        //  Remove line height completely
        &lt;p class="no-line-height">&lt;/p>
                </code></pre>
            </div>
    
            <div class="portion half">
                <p>As you can see, classes are pretty straight-forward and intuitive. Just slap these onto any text-element
                    and they&rsquo;ll work.</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name : 'typography',

        components : {
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Work+Sans');
    @import url('https://fonts.googleapis.com/css?family=Eczar');
    @import url('https://fonts.googleapis.com/css?family=Space+Mono');
</style>