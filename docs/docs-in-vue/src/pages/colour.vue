<template>
    <section id="colour" class="padded-content">
        <div class="row">
            <div class="portion">
                <div class="border-thick margin-bottom-tiny"></div>
                <h2 class="text-hue margin-bottom-fixed">Colour</h2>
            </div>
        </div>
    
        <!--  FICTOAN colour scheme  /////////////////////////////////  -->
        <div id="colour-scheme" class="row margin-bottom-fixed">
            <div class="portion whole no-margin-bottom">
                <h4>FICTOAN colour scheme</h4>
            </div>
        </div>
    
        <div class="row no-gutters">
            <div class="portion half one-third-on-tab-ls half-on-tab-pt">
                <div class="ff-card padding-medium bg-hue no-border"></div>
                <p>PRIMARY HUE</p>
                <code class="margin-top-fixed">$colorHue</code>
                <code class="text-small">$colorBlue-80</code>
            </div>

            <div class="portion half one-third-on-tab-ls half-on-tab-pt">
                <div class="ff-card padding-medium bg-tint no-border"></div>
                <p>Tint of hue</p>
                <code class="margin-top-fixed">$colorTint</code>
                <code class="text-small">lighten($colorBlue-80, 44%)</code>
            </div>

            <div class="portion half one-third-on-tab-ls half-on-tab-pt">
                <div class="ff-card padding-medium bg-shade no-border"></div>
                <p>Shade of hue</p>
                <code class="margin-top-fixed">$colorShade</code>
                <code class="text-small">darken($colorBlue-80, 40%)</code>
            </div>

            <div class="portion half one-third-on-tab-ls half-on-tab-pt">
                <div class="ff-card padding-medium bg-analogue no-border"></div>
                <p>Analogue of hue</p>
                <code class="margin-top-fixed">$colorAnalogue</code>
                <code class="text-small">complement($colorBlue-80)</code>
            </div>

            <div class="portion half one-third-on-tab-ls half-on-tab-pt">
                <div class="ff-card padding-medium bg-accent no-border"></div>
                <p>Accent</p>
                <code class="margin-top-fixed">$colorAccent</code>
                <code class="text-small">adjust-hue($colorBlue-80, &minus;32deg)</code>
            </div>
        </div>
    
        <div class="row">
            <div class="portion whole">
                <p>FICTOAN uses the HSL colour format, and you should too. You can read more about why, <a target="_blank"
                        href="https://stackoverflow.com/questions/26059228/css-hsl-or-rgba-colors/43795837#43795837">here</a>.
                    Now, the idea behind this scheme is simple&mdash; first decide on the primary colour for the project.
                    Here, the choice is a light blue. This is called the &lsquo;primary hue&rsquo;. Every other colour
                    works off of this base colour.</p>
    
                <p><strong>Tint</strong> is the primary hue mixed with a lot of white. Mostly used for backgrounds, simple
                    highlights etc.</p>
    
                <p><strong>Analogue</strong> is a colour that sits adjacent to the primary hue on the colour wheel. This
                    can be lighter or darker depending on the primary hue. Since our primary hue is already a light blue,
                    let’s go with a darker version.</p>
    
                <p><strong>Shade</strong> is the primary hue mixed with a lot of black. Mostly used for body text colour.</p>
    
                <p><strong>Accent</strong> is a colour that complements the primary hue. On the colour wheel, it should
                    ideally be on the other end, basically 180&deg; from the primary hue.</p>
            </div>
        </div>
    
    
    
    
    
        <!--  COLOUR LIST  ===================================================================================== -->
        <div id="colour-list" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h4>Colour list</h4>
            </div>
        </div>
    
        <div class="row">
            <div class="portion half">
                <pre><code class="language-markup">&lt;div class="bg-indigo-90">&lt;/div>
    &lt;p class="text-pistachio-40">&lt;/p>
    &lt;svg class="fill-teal">&lt;/svg>
    
    &lt;h3 class="text-shade">&lt;/h3>
    &lt;div class="bg-analogue">&lt;/div></code></pre>
            </div>

            <div class="portion half">
                <p>Here&rsquo;s a list of colours that you can use. Each of these can be used as a background, text or fill
                    class suffix. Use <code>bg-</code>, <code>text-</code> or <code>fill-</code> as a prefix in your class
                    name, followed by any of the colours listed below.</p>
                <p>You can use these prefixes with the main colour scheme too. Just add the appropriate colour term as a
                    suffix.</p>
            </div>
        </div>
    
    
        <!--  Red  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red"></div>
                <p class="text-small text-grey">red</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-90"></div>
                <p class="text-small text-grey">red-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-80"></div>
                <p class="text-small text-grey">red-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-70"></div>
                <p class="text-small text-grey">red-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-60"></div>
                <p class="text-small text-grey">red-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-50"></div>
                <p class="text-small text-grey">red-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-40"></div>
                <p class="text-small text-grey">red-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-30"></div>
                <p class="text-small text-grey">red-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-20"></div>
                <p class="text-small text-grey">red-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-red-10"></div>
                <p class="text-small text-grey">red-10</p>
            </div>
        </div>
    
    
        <!--  Orange  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange"></div>
                <p class="text-small text-grey">orange</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-90"></div>
                <p class="text-small text-grey">orange-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-80"></div>
                <p class="text-small text-grey">orange-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-70"></div>
                <p class="text-small text-grey">orange-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-60"></div>
                <p class="text-small text-grey">orange-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-50"></div>
                <p class="text-small text-grey">orange-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-40"></div>
                <p class="text-small text-grey">orange-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-30"></div>
                <p class="text-small text-grey">orange-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-20"></div>
                <p class="text-small text-grey">orange-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-orange-10"></div>
                <p class="text-small text-grey">orange-10</p>
            </div>
        </div>
    
    
        <!--  Amber  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber"></div>
                <p class="text-small text-grey">amber</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-90"></div>
                <p class="text-small text-grey">amber-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-80"></div>
                <p class="text-small text-grey">amber-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-70"></div>
                <p class="text-small text-grey">amber-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-60"></div>
                <p class="text-small text-grey">amber-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-50"></div>
                <p class="text-small text-grey">amber-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-40"></div>
                <p class="text-small text-grey">amber-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-30"></div>
                <p class="text-small text-grey">amber-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-20"></div>
                <p class="text-small text-grey">amber-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-amber-10"></div>
                <p class="text-small text-grey">amber-10</p>
            </div>
        </div>
    
    
        <!--  Yellow  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow"></div>
                <p class="text-small text-grey">yellow</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-90"></div>
                <p class="text-small text-grey">yellow-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-80"></div>
                <p class="text-small text-grey">yellow-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-70"></div>
                <p class="text-small text-grey">yellow-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-60"></div>
                <p class="text-small text-grey">yellow-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-50"></div>
                <p class="text-small text-grey">yellow-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-40"></div>
                <p class="text-small text-grey">yellow-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-30"></div>
                <p class="text-small text-grey">yellow-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-20"></div>
                <p class="text-small text-grey">yellow-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-yellow-10"></div>
                <p class="text-small text-grey">yellow-10</p>
            </div>
        </div>
    
    
        <!--  Pistachio  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio"></div>
                <p class="text-small text-grey">pistachio</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-90"></div>
                <p class="text-small text-grey">pistachio-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-80"></div>
                <p class="text-small text-grey">pistachio-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-70"></div>
                <p class="text-small text-grey">pistachio-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-60"></div>
                <p class="text-small text-grey">pistachio-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-50"></div>
                <p class="text-small text-grey">pistachio-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-40"></div>
                <p class="text-small text-grey">pistachio-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-30"></div>
                <p class="text-small text-grey">pistachio-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-20"></div>
                <p class="text-small text-grey">pistachio-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pistachio-10"></div>
                <p class="text-small text-grey">pistachio-10</p>
            </div>
        </div>
    
    
        <!--  Green  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green"></div>
                <p class="text-small text-grey">green</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-90"></div>
                <p class="text-small text-grey">green-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-80"></div>
                <p class="text-small text-grey">green-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-70"></div>
                <p class="text-small text-grey">green-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-60"></div>
                <p class="text-small text-grey">green-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-50"></div>
                <p class="text-small text-grey">green-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-40"></div>
                <p class="text-small text-grey">green-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-30"></div>
                <p class="text-small text-grey">green-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-20"></div>
                <p class="text-small text-grey">green-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-green-10"></div>
                <p class="text-small text-grey">green-10</p>
            </div>
        </div>
    
    
        <!--  Teal  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal"></div>
                <p class="text-small text-grey">teal</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-90"></div>
                <p class="text-small text-grey">teal-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-80"></div>
                <p class="text-small text-grey">teal-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-70"></div>
                <p class="text-small text-grey">teal-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-60"></div>
                <p class="text-small text-grey">teal-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-50"></div>
                <p class="text-small text-grey">teal-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-40"></div>
                <p class="text-small text-grey">teal-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-30"></div>
                <p class="text-small text-grey">teal-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-20"></div>
                <p class="text-small text-grey">teal-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-teal-10"></div>
                <p class="text-small text-grey">teal-10</p>
            </div>
        </div>
    
    
        <!--  Cyan  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan"></div>
                <p class="text-small text-grey">cyan</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-90"></div>
                <p class="text-small text-grey">cyan-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-80"></div>
                <p class="text-small text-grey">cyan-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-70"></div>
                <p class="text-small text-grey">cyan-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-60"></div>
                <p class="text-small text-grey">cyan-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-50"></div>
                <p class="text-small text-grey">cyan-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-40"></div>
                <p class="text-small text-grey">cyan-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-30"></div>
                <p class="text-small text-grey">cyan-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-20"></div>
                <p class="text-small text-grey">cyan-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-cyan-10"></div>
                <p class="text-small text-grey">cyan-10</p>
            </div>
        </div>
    
    
        <!--  Sky  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky"></div>
                <p class="text-small text-grey">sky</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-90"></div>
                <p class="text-small text-grey">sky-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-80"></div>
                <p class="text-small text-grey">sky-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-70"></div>
                <p class="text-small text-grey">sky-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-60"></div>
                <p class="text-small text-grey">sky-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-50"></div>
                <p class="text-small text-grey">sky-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-40"></div>
                <p class="text-small text-grey">sky-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-30"></div>
                <p class="text-small text-grey">sky-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-20"></div>
                <p class="text-small text-grey">sky-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-sky-10"></div>
                <p class="text-small text-grey">sky-10</p>
            </div>
        </div>
    
    
        <!--  Blue  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue"></div>
                <p class="text-small text-grey">blue</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-90"></div>
                <p class="text-small text-grey">blue-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-80"></div>
                <p class="text-small text-grey">blue-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-70"></div>
                <p class="text-small text-grey">blue-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-60"></div>
                <p class="text-small text-grey">blue-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-50"></div>
                <p class="text-small text-grey">blue-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-40"></div>
                <p class="text-small text-grey">blue-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-30"></div>
                <p class="text-small text-grey">blue-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-20"></div>
                <p class="text-small text-grey">blue-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-blue-10"></div>
                <p class="text-small text-grey">blue-10</p>
            </div>
        </div>
    
    
        <!--  Indigo  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo"></div>
                <p class="text-small text-grey">indigo</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-90"></div>
                <p class="text-small text-grey">indigo-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-80"></div>
                <p class="text-small text-grey">indigo-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-70"></div>
                <p class="text-small text-grey">indigo-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-60"></div>
                <p class="text-small text-grey">indigo-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-50"></div>
                <p class="text-small text-grey">indigo-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-40"></div>
                <p class="text-small text-grey">indigo-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-30"></div>
                <p class="text-small text-grey">indigo-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-20"></div>
                <p class="text-small text-grey">indigo-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-indigo-10"></div>
                <p class="text-small text-grey">indigo-10</p>
            </div>
        </div>
    
    
        <!--  Violet  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet"></div>
                <p class="text-small text-grey">violet</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-90"></div>
                <p class="text-small text-grey">violet-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-80"></div>
                <p class="text-small text-grey">violet-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-70"></div>
                <p class="text-small text-grey">violet-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-60"></div>
                <p class="text-small text-grey">violet-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-50"></div>
                <p class="text-small text-grey">violet-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-40"></div>
                <p class="text-small text-grey">violet-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-30"></div>
                <p class="text-small text-grey">violet-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-20"></div>
                <p class="text-small text-grey">violet-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-violet-10"></div>
                <p class="text-small text-grey">violet-10</p>
            </div>
        </div>
    
    
        <!--  Purple  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple"></div>
                <p class="text-small text-grey">purple</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-90"></div>
                <p class="text-small text-grey">purple-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-80"></div>
                <p class="text-small text-grey">purple-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-70"></div>
                <p class="text-small text-grey">purple-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-60"></div>
                <p class="text-small text-grey">purple-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-50"></div>
                <p class="text-small text-grey">purple-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-40"></div>
                <p class="text-small text-grey">purple-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-30"></div>
                <p class="text-small text-grey">purple-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-20"></div>
                <p class="text-small text-grey">purple-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-purple-10"></div>
                <p class="text-small text-grey">purple-10</p>
            </div>
        </div>
    
    
        <!--  Pink  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink"></div>
                <p class="text-small text-grey">pink</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-90"></div>
                <p class="text-small text-grey">pink-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-80"></div>
                <p class="text-small text-grey">pink-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-70"></div>
                <p class="text-small text-grey">pink-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-60"></div>
                <p class="text-small text-grey">pink-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-50"></div>
                <p class="text-small text-grey">pink-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-40"></div>
                <p class="text-small text-grey">pink-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-30"></div>
                <p class="text-small text-grey">pink-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-20"></div>
                <p class="text-small text-grey">pink-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-pink-10"></div>
                <p class="text-small text-grey">pink-10</p>
            </div>
        </div>
    
    
        <!--  Crimson  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson"></div>
                <p class="text-small text-grey">crimson</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-90"></div>
                <p class="text-small text-grey">crimson-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-80"></div>
                <p class="text-small text-grey">crimson-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-70"></div>
                <p class="text-small text-grey">crimson-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-60"></div>
                <p class="text-small text-grey">crimson-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-50"></div>
                <p class="text-small text-grey">crimson-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-40"></div>
                <p class="text-small text-grey">crimson-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-30"></div>
                <p class="text-small text-grey">crimson-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-20"></div>
                <p class="text-small text-grey">crimson-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-crimson-10"></div>
                <p class="text-small text-grey">crimson-10</p>
            </div>
        </div>
    
    
        <!--  Brown  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown"></div>
                <p class="text-small text-grey">brown</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-90"></div>
                <p class="text-small text-grey">brown-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-80"></div>
                <p class="text-small text-grey">brown-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-70"></div>
                <p class="text-small text-grey">brown-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-60"></div>
                <p class="text-small text-grey">brown-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-50"></div>
                <p class="text-small text-grey">brown-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-40"></div>
                <p class="text-small text-grey">brown-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-30"></div>
                <p class="text-small text-grey">brown-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-20"></div>
                <p class="text-small text-grey">brown-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-brown-10"></div>
                <p class="text-small text-grey">brown-10</p>
            </div>
        </div>
    
    
        <!--  Slate  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate"></div>
                <p class="text-small text-grey">slate</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-90"></div>
                <p class="text-small text-grey">slate-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-80"></div>
                <p class="text-small text-grey">slate-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-70"></div>
                <p class="text-small text-grey">slate-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-60"></div>
                <p class="text-small text-grey">slate-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-50"></div>
                <p class="text-small text-grey">slate-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-40"></div>
                <p class="text-small text-grey">slate-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-30"></div>
                <p class="text-small text-grey">slate-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-20"></div>
                <p class="text-small text-grey">slate-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-slate-10"></div>
                <p class="text-small text-grey">slate-10</p>
            </div>
        </div>
    
    
        <!--  Grey  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey"></div>
                <p class="text-small text-grey">grey</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-90"></div>
                <p class="text-small text-grey">grey-90</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-80"></div>
                <p class="text-small text-grey">grey-80</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-70"></div>
                <p class="text-small text-grey">grey-70</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-60"></div>
                <p class="text-small text-grey">grey-60</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-50"></div>
                <p class="text-small text-grey">grey-50</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-40"></div>
                <p class="text-small text-grey">grey-40</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-30"></div>
                <p class="text-small text-grey">grey-30</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-20"></div>
                <p class="text-small text-grey">grey-20</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-grey-10"></div>
                <p class="text-small text-grey">grey-10</p>
            </div>
        </div>
    
    
        <!--  Neutrals  -->
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small no-border bg-black"></div>
                <p class="text-small text-grey">black</p>
            </div>
    
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div class="ff-card padding-small bg-white border-grey-10"></div>
                <p class="text-small text-grey">white</p>
            </div>
        </div>
    
        <div class="row no-gutters margin-bottom-fixed">
            <div class="portion one-tenth one-eighth-on-tab-ls one-fifth-on-tab-pt one-fifth-on-mobile">
                <div id="transparent-card" class="ff-card padding-small no-border bg-transparent border-grey-10"></div>
                <p class="text-small text-grey">transparent</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'colour',

        components: {
        }
    }
</script>