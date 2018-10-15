<template>
    <section id="layout">
        <div class="row padded-content">
            <div class="portion">
                <div class="border-thick margin-bottom-tiny"></div>
                <h2 class="text-hue margin-bottom-fixed"><strong>Layout</strong></h2>
            </div>
        </div>

        <!--  Padded content  ===============================  -->
        <div id="grid-setup" class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <h4>Grid setup</h4>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion half no-margin-bottom">
                <p>FICTOAN uses a 16&ndash;column grid system. Setting up your grid columns is really simple&mdash; add a
                    <code>.row</code> container with as many <code>.portion</code> child divs as you need.</p>
            </div>
    
            <div class="portion half no-margin-bottom">
                <p>Keep adding as many <code>.portion</code> divs you need, they’ll occupy equal space on the row. Two will
                    occupy 50%,
                    three– 33%, four– 25%, and so on.</p>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Equal width columns</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <pre><code class="language-html">
        &lt;!--  Create five equal width portions -->
        &lt;div class="row">
            &lt;div class="portion">&lt;/div>
    
            &lt;div class="portion">&lt;/div>
    
            &lt;div class="portion">&lt;/div>
    
            &lt;div class="portion">&lt;/div>
    
            &lt;div class="portion">&lt;/div>
        &lt;/div>
            </code></pre>
            </div>
        </div>
    
        <div class="row bg-slate-10 margin-bottom-tiny">
            <div class="portion whole">
                <p><strong>.row</strong></p>
            </div>
    
            <div class="portion bg-sky-70">
                <p><strong>.portion</strong></p>
            </div>
    
            <div class="portion bg-sky-50">
                <p><strong>.portion</strong></p>
            </div>
    
            <div class="portion bg-sky-70">
                <p><strong>.portion</strong></p>
            </div>
    
            <div class="portion bg-sky-50">
                <p><strong>.portion</strong></p>
            </div>
    
            <div class="portion bg-sky-70">
                <p><strong>.portion</strong></p>
            </div>
        </div>
    
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Un-equal width columns</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion half">
                <p>Now, if you want more control over the column widths, you can use simple fractions as class names— from
                    <code>.whole</code>, <code>.half</code>, <code>.one-third</code> and so on, all the way to <code>.one-sixteenth</code>.</p>
            </div>
    
            <div class="portion half">
                <p>Keep in mind, in a row, the total widths must add up to 100%.</p>
            </div>
    
            <div class="portion whole">
                <pre><code class="language-html">
        &lt;!--  Create five portions with specific widths -->
        &lt;div class="row">
            &lt;div class="portion one-ninth">&lt;/div>
    
            &lt;div class="portion three-fourteenths">&lt;/div>
    
            &lt;div class="portion two-tenths">&lt;/div>
    
            &lt;div class="portion four-thirteenths">&lt;/div>
    
            &lt;div class="portion two-twelfths">&lt;/div>
        &lt;/div>
            </code></pre>
            </div>
        </div>
    
    
        <div class="row bg-slate-10">
            <div class="portion whole">
                <p><strong>.row</strong></p>
            </div>
    
            <div class="portion one-ninth bg-sky-70">
                <p><strong>.portion.one-ninth</strong></p>
            </div>
    
            <div class="portion three-fourteenths bg-sky-50">
                <p><strong>.portion.three-fourteenths</strong></p>
            </div>
    
            <div class="portion two-tenths bg-sky-70">
                <p><strong>.portion.two-tenths</strong></p>
            </div>
    
            <div class="portion four-thirteenths bg-sky-50">
                <p><strong>.portion.four-thirteenths</strong></p>
            </div>
    
            <div class="portion two-twelfths bg-sky-70">
                <p><strong>.portion.two-twelfths</strong></p>
            </div>
        </div>
    
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Mixed specified and unspecified width columns</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom">
                <p>You can mix both too, if you’d so like. Give specific widths to some portions, and the rest of the row
                    will be equally distributed among the remaining portions.</p>
            </div>
    
            <div class="portion whole">
                <pre><code class="language-html">
        &lt;!--  Mix of specific widths and unspecified widths  -->
        &lt;div class="row">
            &lt;div class="portion one-fifth">&lt;/div>
    
            &lt;div class="portion">&lt;/div>
    
            &lt;div class="portion">&lt;/div>
        &lt;/div>
                        </code></pre>
            </div>
        </div>
    
        <div class="row bg-slate-10">
            <div class="portion whole">
                <p><strong>.row</strong></p>
            </div>
    
            <div class="portion one-fifth bg-sky-70">
                <p><strong>.portion.one-fifth</strong></p>
            </div>
    
            <div class="portion bg-sky-50">
                <p><strong>.portion</strong></p>
            </div>
    
            <div class="portion bg-sky-70">
                <p><strong>.portion</strong></p>
            </div>
        </div>
    
    
    
    
        <!--  Responsive helpers  ==========================  -->
        <div id="responsive-helpers" class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-thin margin-top-tiny margin-bottom-tiny"></div>
                <h4>Responsive helpers</h4>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <h6>Change width across devices</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion half">
                <p>Use special classes to change the way a particular portion behaves in each of these devices. Simply
                    specify what width you want it to have in each of these breakpoints. Use any width class suffixed with
                    the appropriate device.</p>
            </div>
    
            <div class="portion half">
                <p>Then, if you want to turn off the responsive behaviour, and have the divs maintain their layout across
                    all or even specific devices, there are classes for that, too. Just add <code>.retain-layout-on-</code>
                    along with the device and orientation.</p>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion one-fourth">
                <h6>Mobile</h6>
                <p>Less than 600px</p>
                <code>-mobile</code>
            </div>
    
            <div class="portion one-fourth">
                <h6>Tab portrait</h6>
                <p>601px – 900px</p>
                <code>-tab-pt</code>
            </div>
    
            <div class="portion one-fourth">
                <h6>Tab landscape</h6>
                <p>901px – 1200px</p>
                <code>-tab-ls</code>
            </div>
    
            <div class="portion one-fourth">
                <h6>Tab portrait</h6>
                <p>1200px and up</p>
                <code>-desktop</code>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <pre><code class="language-html">    &lt;!--  Specific portion width across devices  -->
        &lt;div class="row">
            &lt;div class="portion  one-sixth  one-fourth-on-tab-ls  one-third-on-tab-pt  half-on-mobile">&lt;/div>
        &lt;/div>
    
    
        &lt;!-- Turn off responsive behaviour, applied on row parent -->
        &lt;div class="row  retain-layout-on-tab-ls  retain-layout-on-tab-pt  retain-layout-on-mobile">
            &lt;div class="portion">&lt;/div>
        &lt;/div>
    
        &lt;!-- Shorthand for the above behaviour -->
        &lt;div class="row retain-layout-always">
            &lt;div class="portion">&lt;/div>
        &lt;/div></code></pre>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Visibility across devices</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <p>Show or hide elements at a particular screen width with these classes.</p>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <pre><code class="language-html">&lt;!--  Visible on tablets and desktops  -->
    &lt;div class="hide-on-mobile">&lt;/div>
    
    &lt;!--  Visible on mobiles and desktops  -->
    &lt;div class="hide-on-tab-pt hide-on-tab-ls">&lt;/div>
    
    &lt;!--  Visible on tablets and mobiles  -->
    &lt;div class="hide-on-desktop">&lt;/div>
    
    &lt;!--  Visible on mobiles and desktops  -->
    &lt;div class="hide-on-tab-pt hide-on-tab-ls">&lt;/div></code></pre>
            </div>
        </div>
    
    
    
    
    
        <!--  Gutter sizing  ===============================  -->
        <div id="gutter-sizing" class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-thin margin-top-tiny margin-bottom-tiny"></div>
                <h4>Gutter sizing</h4>
            </div>
        </div>

        <div class="row padded-content">
            <div class="portion whole">
                <p>The <code>.portion</code> divs come with a bit of padding on their left and right, which essentially act
                    as the gutters in the grid layout. You can increase or decrease this padding to change the gutter
                    accordingly.</p>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Large gutters</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <pre><code class="language-html">    &lt;div class="row large-gutters">
            &lt;!--  Your portion divs  -->
        &lt;/div></code></pre>
            </div>
        </div>
    
        <div class="row large-gutters bg-slate-10">
            <div class="portion whole margin-bottom-fixed">
                <p><strong>.row.large-gutters</strong></p>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-30">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-analogue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
        </div>
    
    
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Default behaviour</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <pre><code class="language-html">    &lt;div class="row">
            &lt;!--  Your portion divs  -->
        &lt;/div></code></pre>
            </div>
        </div>
    
        <div class="row bg-slate-10">
            <div class="portion whole margin-bottom-fixed">
                <p><strong>.row (default behaviour)</strong></p>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-30">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-analogue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
        </div>
    
    
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Small gutters</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <pre><code class="language-html">    &lt;div class="row small-gutters">
            &lt;!--  Your portion divs  -->
        &lt;/div></code></pre>
            </div>
        </div>
    
        <div class="row small-gutters bg-slate-10">
            <div class="portion whole margin-bottom-fixed">
                <p><strong>.row.small-gutters</strong></p>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-30">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-analogue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
        </div>
    
    
        <div class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>No gutters</h6>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion whole">
                <pre><code class="language-html">    &lt;div class="row no-gutters">
            &lt;!--  Your portion divs  -->
        &lt;/div></code></pre>
            </div>
        </div>
    
        <div class="row no-gutters bg-slate-10">
            <div class="portion whole margin-bottom-fixed">
                <p><strong>.row.no-gutters</strong></p>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-30">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-analogue">
                    <div class="bg-sky-70 padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
    
            <div class="portion one-third bg-slate-20">
                <p class="padding-bottom-tiny"><strong>.portion.one-third</strong></p>
                <div class="full-width bg-hue">
                    <div class="bg-sky padding-bottom-tiny">
                        <p class="padding-all-tiny">Your content</p>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    
    
        <!--  Padded content  ===============================  -->
        <div id="padded-content" class="row padded-content">
            <div class="portion whole no-margin-bottom no-padding-bottom">
                <div class="border-thin margin-top-tiny margin-bottom-tiny"></div>
                <h4>Padded content</h4>
            </div>
        </div>
    
        <div class="row padded-content">
            <div class="portion half">
                <p>Content by default is full-width, but you can add a <code>.padded-content</code> class to the <code>body</code>
                    to provide a bit of equal padding to the left and right.</p>
            </div>
    
            <div class="portion half">
                <p>You can add the <code>.padded-content</code> to any parent div to centre the content, not just for <code>body.</code></p>
            </div>
        </div>
    
        <div class="row bg-slate-10 margin-bottom-tiny">
            <div class="portion whole">
                <p><strong>body</strong></p>
            </div>
    
            <div class="portion whole bg-sky-70">
                <p><strong>Your content</strong></p>
            </div>
        </div>
    
        <div class="row bg-slate-10 padded-content">
            <div class="portion whole">
                <p><strong>body.padded-content</strong></p>
            </div>
    
            <div class="portion whole bg-sky-70">
                <p><strong>Your content</strong></p>
            </div>
        </div>
    
    </section>
</template>

<script>
    export default {
        name: 'layout',

        components: {
        }
    }
</script>