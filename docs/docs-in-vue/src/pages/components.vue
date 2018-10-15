<template>
    <section id="components" class="padded-content">
        <div class="row">
            <div class="portion">
                <div class="border-thick margin-bottom-tiny"></div>
                <h2 class="text-hue margin-bottom-fixed">Components</h2>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <p>FICTOAN has a few pre-defined components that you use right out of the box, all ready to go.</p>
            </div>
    
            <div class="portion half">
                <p>And like every other element here, all can be styled with just simple variables.</p>
            </div>
        </div>











                <!--  CARD  ============================================================================================ -->
        <div id="card" class="row margin-top-medium margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h3>Card</h3>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>A card is a simple UI element that is best used to display disparate chunks of information. Their styling is done by simply adding classes. Cards always take the full-width of the parent.</p>

                <p>They also have an extremely mild grey border around them, use <code>.no-border</code> class if you don’t want that.</p>
            </div>
        </div>
        
        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;div class="ff-card">
    ...
&lt;/div></code></pre>
            </div>

            <div class="portion half">
                <div class="ff-card padding-medium">
                    <p>Some content</p>
                </div>
            </div>
        </div>
        
        
        <div id="card-bg" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Background</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;div class="ff-card">&lt;/div>

&lt;div class="ff-card bg-teal-70">&lt;/div>

&lt;div class="ff-card bg-slate-40">&lt;/div></code></pre>
            </div>

            <div class="portion half">
                <div class="ff-card padding-medium margin-bottom-fixed"><p>Some content</p></div>
                <div class="ff-card padding-medium bg-teal-70 margin-bottom-fixed"><p>Some content</p></div>
                <div class="ff-card padding-medium bg-slate-40"><p>Some content</p></div>
            </div>
        </div>
        
        
        <div id="card-shape" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Shape</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;div class="ff-card bg-amber-70">
    ...
&lt;/div>

&lt;div class="ff-card shape-rounded bg-amber-70">
    ...
&lt;/div>

&lt;div class="ff-card shape-curved bg-violet-70">
    ...
&lt;/div></code></pre>
            </div>

            <div class="portion half">
                <div class="ff-card padding-medium bg-pink-70 margin-bottom-fixed"><p>Some content</p></div>
                <div class="ff-card padding-medium shape-rounded bg-amber-60 margin-bottom-fixed"><p>Some content</p></div>
                <div class="ff-card padding-medium shape-curved bg-violet-50 margin-bottom-fixed"><p>Some content</p></div>
            </div>
        </div>

        
        <div id="card-shadow" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Shadow</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;div class="ff-card shape-rounded bg-white no-shadow">&lt;/div>

&lt;div class="ff-card shape-rounded bg-white shadow-mild">&lt;/div>

&lt;div class="ff-card shape-rounded bg-white shadow-hard">&lt;/div>

&lt;div class="ff-card shape-rounded bg-white shadow-soft">&lt;/div></code></pre>
            </div>

            <div class="portion one-third">
                <div class="ff-card padding-medium shape-rounded bg-slate-10 no-shadow margin-bottom-tiny"></div>
                <div class="ff-card padding-medium shape-rounded bg-slate-10 shadow-mild margin-bottom-tiny"></div>
                <div class="ff-card padding-medium shape-rounded bg-slate-10 shadow-hard margin-bottom-tiny"></div>
                <div class="ff-card padding-medium shape-rounded bg-slate-10 shadow-soft margin-bottom-tiny"></div>
            </div>
        </div>



        <div id="card-padding" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Padding</h6>
            </div>
        </div>


        <div class="row">
            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">//  No padding class
&lt;div class="ff-card shape-rounded bg-white shadow-hard">
    ...
&lt;/div></code></pre>
            </div>
            
            <div class="portion one-third one-third-on-tab-pt half-on-mobile">
                <div class="ff-card shape-rounded bg-white shadow-hard">
                    <p>Some random text to demonstrate padding within a card element.</p>
                </div>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">//  Tiny padding
&lt;div class="ff-card padding-tiny shape-rounded bg-white shadow-hard">
    ...
&lt;/div></code></pre>
            </div>
            
            <div class="portion one-third one-third-on-tab-pt half-on-mobile">
                <div class="ff-card padding-tiny shape-rounded bg-white shadow-hard">
                    <p>Some random text to demonstrate padding within a card element.</p>
                </div>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">//  Small padding
&lt;div class="ff-card padding-small shape-rounded bg-white shadow-hard">
    ...
&lt;/div></code></pre>
            </div>
            
            <div class="portion one-third one-third-on-tab-pt half-on-mobile">
                <div class="ff-card padding-small shape-rounded bg-white shadow-hard">
                    <p>Some random text to demonstrate padding within a card element.</p>
                </div>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">//  Medium padding
&lt;div class="ff-card padding-medium shape-rounded bg-white shadow-hard">
    ...
&lt;/div></code></pre>
            </div>

            <div class="portion one-third one-third-on-tab-pt half-on-mobile">
                <div class="ff-card padding-medium shape-rounded bg-white shadow-hard">
                    <p>Some random text to demonstrate padding within a card element.</p>
                </div>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">//  Large padding
&lt;div class="ff-card padding-large shape-rounded bg-white shadow-hard">
    ...
&lt;/div></code></pre>
            </div>
            
            <div class="portion one-third one-third-on-tab-pt half-on-mobile">
                <div class="ff-card padding-large shape-rounded bg-white shadow-hard">
                    <p>Some random text to demonstrate padding within a card element.</p>
                </div>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">//  Huge padding
&lt;div class="ff-card padding-huge shape-rounded bg-white shadow-hard">
    ...
&lt;/div></code></pre>
            </div>

            <div class="portion one-third one-third-on-tab-pt half-on-mobile">
                <div class="ff-card padding-huge shape-rounded bg-white shadow-hard">
                    <p>Some random text to demonstrate padding within a card element.</p>
                </div>
            </div>
        </div>


















        <!--  MODAL  ==========================================================================================  -->
        <div id="modal" class="row margin-top-small margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h3>Modal</h3>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <p>The modal is a simple pop-up box that you can display with a JS function. It&rsquo;s included in this modal as an example, but please modify it in your projects.</p>
            </div>

            <div class="portion half">
                <a data-modal="modal-01" class="js-open-modal ff-button size-small shape-rounded bg-hue text-white shadow-hard">Show me the modal!</a>

                <div id="modal-01" class="ff-modal-wrapper">
                    <div class="ff-modal-overlay">
                        <div class="ff-modal-content">
                            <div class="ff-card padding-medium shape-rounded bg-white shadow-soft">
                                <a class="close-modal js-close-modal"><span class="text-large">&times;</span></a>
                                <h5>Modal heading</h5>
                                <p>Modal content, add a basic paragraph here. Or don&rsquo;t.</p>

                                <img class="margin-top-tiny margin-bottom-tiny" src="https://media.giphy.com/media/gVE7nURcnD9bW/giphy.gif">

                                <a class="ff-button size-small shape-rounded bg-hue text-white shadow-hard pull-right">Button, yo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="modal-structure" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Structure</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion whole no-padding-bottom">
                <p>The modal is made of three divs&mdash;</p>

                <p>A parent <code>.ff-modal-wrapper</code> that contains the modal element. This is what you need to add an <code>.active</code> class to display the modal.</p>

                <p>A <code>.ff-modal-overlay</code>, which forms the background of the modal window. You can change its colour and opacity via variables.</p>

                <p class="no-margin-bottom">And finally, a <code>.ff-modal-content</code> div, that contains the actual content in the pop-up. In the example, it holds a simple <code>.ff-card</code> element with a few items inside. There&rsquo;s also a <code>.close-modal</code> div, with a cross icon that closes the modal on click.</p>
            </div>

            <div class="portion whole">
                <pre><code class="language-markup">&lt;a data-modal="modal-01" class="js-open-modal">Show me the modal!&lt;/a>

&lt;div id="modal-01" class="ff-modal-wrapper">
&lt;div class="ff-modal-overlay">
    &lt;div class="ff-modal-content">
        &lt;a class="close-modal js-close-modal">&lt;span class="text-large">&times;&lt;/span>&lt;/a>
        // Modal content
    &lt;/div>
&lt;/div>
&lt;/div></code></pre>
            </div>
        </div>



        <div id="modal-display" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Show and hide</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion whole no-padding-bottom">
                <p>This is handled by JS, included as a sample script here. I highly recommend you use your own methods for production.</p>

                <p>The link or button used for triggering the modal needs a <code>data-modal</code> attribute with a value that matches the unique <code>id</code> of the modal you wish to display. Make sure it also has a <code>.js-open-modal</code> class as well. Clicking it will add an <code>active</code> class to the <code>.modal-wrapper</code>, making it visible.</p>

                <p>To close a modal, there&rsquo;s a <code>a</code> tag with two necessary <code>.close-modal</code> and <code>.js-close-modal</code> classes. Clicking on it removes the <code>active</code> class from the wrapper div, making it invisible again.</p>
            </div>

            <div class="portion whole">
                <pre><code class="language-markup">&lt;a data-modal="modal-01" class="js-open-modal">Show me the modal!&lt;/a>

&lt;div id="modal-01" class="ff-modal-wrapper">
// The rest of the modal
&lt;/div></code></pre>
            </div>
        </div>




        <div id="modal-variables" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Variables</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <table class="ff-table shape-rounded bordered-all padding-tiny">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Default value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><code>$modalOverlayBG</code></td>
                            <td><code>rgba($colorHue, 0.64)</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>













        <!--  TABS  ================================================================================================ -->
        <div id="tabs" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h3>Tabs</h3>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>Tabs in FICTOAN are CSS-only, and uses the input-radio hack to show and hide content within the tabs.</p>
            </div>
        </div>
            
        <div class="row">
            <div class="portion whole">
                <div class="ff-tabs-wrapper">
                    <input id="ff-tab-1" type="radio" name="ff-tabset-1" checked />
                    <label class="ff-tab-label" for="ff-tab-1">Tab One</label>
                    <div class="ff-tab-content">
                        <p class="text-large">Tab 01 content</p>
                    </div>
        
                    <input id="ff-tab-2" type="radio" name="ff-tabset-1" />
                    <label class="ff-tab-label" for="ff-tab-2">Tab Two</label>
                    <div class="ff-tab-content">
                        <p class="text-large">Tab 02 content</p>
                    </div>
        
                    <input id="ff-tab-3" type="radio" name="ff-tabset-1" />
                    <label class="ff-tab-label" for="ff-tab-3">Tab Three</label>
                    <div class="ff-tab-content">
                        <p class="text-large">Tab 03 content</p>
                    </div>
        
                    <input id="ff-tab-4" type="radio" name="ff-tabset-1" />
                    <label class="ff-tab-label" for="ff-tab-4">Tab Four</label>
                    <div class="ff-tab-content">
                        <img style="width: 400px" src="https://vignette.wikia.nocookie.net/uncyclopedia/images/3/31/Spinquisition.jpg">
                    </div>
        
                    <input id="ff-tab-5" type="radio" name="ff-tabset-1" />
                    <label class="ff-tab-label" for="ff-tab-5">Tab Five</label>
                    <div class="ff-tab-content">
                        <p class="text-large">Tab 05 content</p>
                    </div>
                </div>
            </div>
        </div>

        <!--  STRUCTURE  =========================  -->
        <div id="tabs-structure" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Structure</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion whole">
                <pre class="margin-top-fixed"><code class="language-markup">    &lt;div class="ff-tabs-wrapper">
        &lt;input id="ff-tab-1" type="radio" name="ff-tabset-1" checked />
        &lt;label class="ff-tab-label" for="ff-tab-1">Tab One&lt;/label>
        &lt;div class="ff-tab-content">
            &lt;p>Tab 01 content&lt;/p>
        &lt;/div>

        &lt;input id="ff-tab-2" type="radio" name="ff-tabset-1" />
        &lt;label class="ff-tab-label" for="ff-tab-2">Tab Two&lt;/label>
        &lt;div class="ff-tab-content">
            &lt;p>Tab 02 content&lt;/p>
        &lt;/div>

        &lt;input id="ff-tab-3" type="radio" name="ff-tabset-1" />
        &lt;label class="ff-tab-label" for="ff-tab-3">Tab Three&lt;/label>
        &lt;div class="ff-tab-content">
            &lt;p>Tab 03 content&lt;/p>
        &lt;/div>

        &lt;input id="ff-tab-4" type="radio" name="ff-tabset-1" />
        &lt;label class="ff-tab-label" for="ff-tab-4">Tab Four&lt;/label>
        &lt;div class="ff-tab-content">
            &lt;p>Tab 04 content&lt;/p>
        &lt;/div>

        &lt;input id="ff-tab-5" type="radio" name="ff-tabset-1" />
        &lt;label class="ff-tab-label" for="ff-tab-5">Tab Five&lt;/label>
        &lt;div class="ff-tab-content">
            &lt;p>Tab 05 content&lt;/p>
        &lt;/div>
    &lt;/div></code></pre>
            </div>

            <div class="portion whole">
                <p>The entire tabs section goes into a <code>.ff-tabs-wrapper</code> parent div. Each tab component is made up
                    by three elements&mdash; The radio button which works as a toggle, a label to display the name of the tab,
                    and finally, the content of the tab.</p>
            
                <p>The radio buttons have an unique ID of <code>#ff-tab-&lt;number></code> and a <code>ff-tabs</code> <code>name</code>
                    attribute. Its sibling <code>label</code> has an ID of <code>#ff-tab-label-&lt;number></code> and a <code>for</code>
                    attribute that matches the radio input. </p>
            
                <p>Then comes along a <code>.ff-tabs-content</code>, which nicely wraps all the content of the tab together. In
                    this way, you can add as many tabs as you need. You can even nest them within each other, as long as you
                    keep the <code>name</code> attribute unique to each group.</p>
            
                <p>Add the <code>checked</code> value to the tab you wanted activated by default.</p>
            </div>
        </div>

        <!--  STYLING  ===========================  -->
        <div id="tabs-variables" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Variables</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <table class="ff-table shape-rounded bordered-all padding-tiny">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Default value</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td><code>$activeTabLabelBG</code></td>
                            <td><code>$colorWhite</code></td>
                        </tr>
                        <tr>
                            <td><code>$activeTabLabelTextColor</code></td>
                            <td><code>$colorShade</code></td>
                        </tr>
                        <tr>
                            <td><code>$inactiveTabLabelBG</code></td>
                            <td><code>$colorSlate-20</code></td>
                        </tr>
                        <tr>
                            <td><code>$inactiveTabLabelHoverBG</code></td>
                            <td><code>$colorSlate-10</code></td>
                        </tr>
                        <tr>
                            <td><code>$inactiveTabLabelTextColor</code></td>
                            <td><code>$colorSlate-70</code></td>
                        </tr>
                        <tr>
                            <td><code>$tabsBorderColor</code></td>
                            <td><code>$colorSlate-30</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>




















        <!--  TABLE  ==========================================================================================  -->
        <div id="table" class="row margin-top-medium margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h3>Table</h3>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>FICTOAN also lets you style the ever-useful <code>table</code> tag with simple classes that you add to the appropriate element.</p>
            </div>
        </div>
        
        <div id="table-default" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Default table</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table">
    &lt;thead>
        &lt;tr>
            &lt;th>Column 01&lt;/th>
            &lt;th>Column 02&lt;/th>
        &lt;/tr>
    &lt;/thead>

    &lt;tbody>
        &lt;tr>
            &lt;td>Row-item 1&lt;/td>
            &lt;td>Row-item 2&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td>Row-item 3&lt;/td>
            &lt;td>Row-item 4&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td>Row-item 5&lt;/td>
            &lt;td>Row-item 6&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td>Row-item 7&lt;/td>
            &lt;td>Row-item 8&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td>Row-item 9&lt;/td>
            &lt;td>Row-item 10&lt;/td>
        &lt;/tr>
    &lt;/tbody>
&lt;/table></code></pre>
            </div>
            <div class="portion half">
                <table class="ff-table">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        <div id="table-padding" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Padding</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>Still too congested. Add a <code>.padding-tiny</code> class to the table. There are five padding sizes you can add&mdash; <code>-tiny</code>, <code>-small</code>, <code>-medium</code>, <code>-large</code> and <code>-huge</code>.</p>
            </div>

            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table padding-tiny">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion half"><table class="ff-table padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>









        <div id="table-border" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Borders</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>Add a <code>.bordered-rows</code> or a <code>.bordered-columns</code> class to the table. Want both? Use <code>.bordered-all</code>. You can change the colour of the border via the <code>$tableBorderColor</code> variable.</p>
            </div>
        </div>
        
        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table bordered-rows">
    ...
&lt;/table>

&lt;table class="ff-table bordered-columns">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion one-fourth">
                <table class="ff-table bordered-rows padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="portion one-fourth">
                <table class="ff-table bordered-columns padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table bordered-all">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion half">
                <table class="ff-table bordered-all padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        

        
        <div id="table-colours" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Colours</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table bordered-all striped padding-tiny">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion one-third">
                <table class="ff-table bordered striped padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>Alternatively, you can set individual row and text colours by adding classes. Hideous, but works. Go nuts!. Make sure you remove the <code>.striped</code> class if you want to colour individually.</p>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table bordered padding-tiny">
    &lt;thead class="bg-accent text-white">
        &lt;tr>
            &lt;th>Column 01&lt;/th>
            &lt;th>Column 02&lt;/th>
        &lt;/tr>
    &lt;/thead>

    &lt;tbody>
        &lt;tr class="bg-blue-60 text-crimson-80">
            &lt;td>Row-item 1&lt;/td>
            &lt;td>Row-item 2&lt;/td>
        &lt;/tr>
        &lt;tr class="bg-pistachio-90 text-brown">
            &lt;td>Row-item 3&lt;/td>
            &lt;td class="text-accent">Row-item 4&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td class="bg-crimson text-black">Row-item 5&lt;/td>
            &lt;td class="bg-sky-70 text-indigo">Row-item 6&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td class="bg-grey-70 text-cyan">&lt;strong>Row-item 7&lt;/strong>&lt;/td>
            &lt;td class="bg-slate text-hue">&lt;strong>Row-item 8&lt;/strong>&lt;/td>
        &lt;/tr>
        &lt;tr>
            &lt;td class="bg-brown-80 text-teal-40">Row-item 9&lt;/td>
            &lt;td class="bg-pink text-amber-90">Row-item 10&lt;/td>
        &lt;/tr>
    &lt;/tbody>
&lt;/table></code></pre>
            </div>
            
            <div class="portion one-third">
                <table class="ff-table bordered padding-tiny">
                    <thead class="bg-accent text-white">
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr class="bg-blue-60 text-crimson-80">
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr class="bg-pistachio-90 text-brown">
                            <td>Row-item 3</td>
                            <td class="text-accent">Row-item 4</td>
                        </tr>
                        <tr>
                            <td class="bg-crimson text-black">Row-item 5</td>
                            <td class="bg-sky-70 text-indigo">Row-item 6</td>
                        </tr>
                        <tr>
                            <td class="bg-grey-70 text-cyan"><strong>Row-item 7</strong></td>
                            <td class="bg-slate text-hue"><strong>Row-item 8</strong></td>
                        </tr>
                        <tr>
                            <td class="bg-brown-80 text-teal-40">Row-item 9</td>
                            <td class="bg-pink text-amber-90">Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>





        <div id="table-hovering" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Hovering</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>You can also change the background colour and text colour of a row on hover, by adding a <code>.hoverable</code> class. You can also change the <code>$tableHoverableBG</code> and <code>$tableHoverableTextColor</code> variables.</p>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table striped hoverable padding-tiny">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion one-third">
                <table class="ff-table striped hoverable padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        
        
        
        
        
        
        <div id="table-width" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Table width</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion whole">
                <p>By default, tables take up as little space as possible. But add the <code>.full-width</code> class, and bam, it stretches to the width of the parent.</p>
            </div>

            <div class="portion whole">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table full-width striped hoverable padding-tiny">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion whole">
                <table class="ff-table striped hoverable full-width padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
            
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        
        
        
        
        
        
        <div id="table-text" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Text sizing</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion whole">
                <p>Text size is inherited from the body, but you can change it with the text sizing classes. You can use the usual five sizing suffixes.</p>
            </div>
        </div>
        
        <div class="row">
            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table text-tiny striped hoverable padding-tiny">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion one-third">
                <table class="ff-table text-tiny striped hoverable padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;table class="ff-table text-large striped hoverable padding-tiny">
    ...
&lt;/table></code></pre>
            </div>

            <div class="portion one-third">
                <table class="ff-table text-large striped hoverable padding-tiny">
                    <thead>
                        <tr>
                            <th>Column 01</th>
                            <th>Column 02</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td>Row-item 1</td>
                            <td>Row-item 2</td>
                        </tr>
                        <tr>
                            <td>Row-item 3</td>
                            <td>Row-item 4</td>
                        </tr>
                        <tr>
                            <td>Row-item 5</td>
                            <td>Row-item 6</td>
                        </tr>
                        <tr>
                            <td>Row-item 7</td>
                            <td>Row-item 8</td>
                        </tr>
                        <tr>
                            <td>Row-item 9</td>
                            <td>Row-item 10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        
        
        
        
        
        <!--  VARIABLES  =========================  -->
        <div id="table-variables" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Variables</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion half">
                <table class="ff-table shape-rounded bordered-all padding-tiny">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Default value</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td><code>$tableBG</code></td>
                            <td><code>$colorWhite</code></td>
                        </tr>
                        <tr>
                            <td><code>$tableTextColor</code></td>
                            <td><code>$colorShade</code></td>
                        </tr>
                        <tr>
                            <td><code>$tableBorderColor</code></td>
                            <td><code>$colorSlate-40</code></td>
                        </tr>
                        <tr>
                            <td><code>$tableStripedHeaderBG</code></td>
                            <td><code>$colorHue</code></td>
                        </tr>
                        <tr>
                            <td><code>$tableStripedCellBG</code></td>
                            <td><code>$colorSlate-20</code></td>
                        </tr>
                        <tr>
                            <td><code>$tableHoverableBG</code></td>
                            <td><code>$colorAmber-20</code></td>
                        </tr>
                        <tr>
                            <td><code>$tableHoverableTextColor</code></td>
                            <td><code>$colorShade</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
            <div class="portion half"></div>
        </div>

















        <!--  SIDEBAR  ========================================================================================= -->
        <div id="sidebar" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-thin margin-bottom-tiny"></div>
                <h3>Sidebar</h3>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <p>The sidebar is a slightly more complex component, like the one you&rsquo;re on the left. It is a fixed-width div with collapsible, nested folders and sub-links.</p>
            </div>

            <div class="portion half">
                <p>Below is the markup for the sidebar setup. The sidebar is 240px when expanded, and 48px when collapsed.</p>
            </div>
        </div>

        <div class="row bg-tint">
            <div class="portion whole">
                <p><strong>body.page-with-sidebar</strong></p>
            </div>

            <div class="portion one-sixth bg-hue" style="height:80px">
                <p><strong>div.ff-sidebar-container</strong></p>
            </div>

            <div class="portion five-sixths bg-analogue" style="height:80px">
                <p><strong>div.ff-content-container</strong></p>
            </div>
        </div>

        <div class="row">
            <div class="portion half">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;body class="page-with-sidebar">
    &lt;div class="ff-sidebar-container">
        &lt;div class="ff-sidebar">
            //  Links and link groups
        &lt;/div>
    &lt;/div>

    &lt;div class="ff-content-container">
        //  All your content
    &lt;/div>
&lt;/div></code></pre>
            </div>

            <div class="portion half">
                <p>The layout is pretty simple&mdash;</p>
                <p>Add a <code>.page-with-sidebar</code> class to the <code>body</code></p>
                <p>Within this add a <code>.ff-sidebar-container</code> and a <code>.ff-content-container</code> as siblings. Then, add a <code>.ff-sidebar</code> within <code>.ff-sidebar-container</code>.</p>
            </div>
        </div>

        <!--  STRUCTURE  =========================  -->
        <div id="sidebar-structure" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Structure</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion whole">
                <p>Use simple anchor tags to list them as links on the sidebar. For folders, FICTOAN uses the HTML5 <code>details</code> and <code>summary</code> elements, as they offer the open and collapse functionality by default instead of the usual CSS checkbox hack or extra javascript.</p>

                <p>A <code>details</code> tag with a <code>summary</code> immediate child creates a simple folder that opens and closes on click.</p>

                <p>For a nested folder, just add another <code>details</code> tag within the previous <code>details</code> tag, as a sibling to the <code>summary</code> element. You can keep doing this infinitely, but take care not to get in too deep, you might get stuck in limbo forever.</p>

                <p>For icons, preferably use SVGs, which you can then colour with CSS variables. Both line and filled icons work. Put them inside a <code>span</code>, square icons work best.</p>
            </div>

            <div class="portion whole">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;div class="ff-sidebar-container">
    &lt;a id="sidebar-logo" class="sidebar-toggle">
        &lt;img id="logo-big" src="..." />
        &lt;img id="logo-small" src="..." />
    &lt;/a>

    &lt;div class="sidebar-links">
        &lt;!--  Single links  =============  -->
        &lt;a class="sidebar-link" href="#">
            &lt;span>
                &lt;svg>&lt;/svg>
            &lt;/span>
            &lt;label>Label text&lt;/label>
        &lt;/a>



        &lt;!--  Folder  ===================  -->
        &lt;details>
            &lt;summary>
                &lt;a class="sidebar-link" href="#">...&lt;/a>
            &lt;/summary>
            &lt;a class="sidebar-link" href="#">...&lt;/a>
            &lt;a class="sidebar-link" href="#">...&lt;/a>
        &lt;/details>



        &lt;!--  Nested folder  ============  -->
        &lt;details>
            &lt;summary>
                &lt;a class="sidebar-link" href="#">...&lt;/a>
            &lt;/summary>
            &lt;a class="sidebar-link" href="#">...&lt;/a>
            &lt;a class="sidebar-link" href="#">...&lt;/a>
            &lt;details>
                &lt;summary>
                    &lt;a class="sidebar-link" href="#">...&lt;/a>
                &lt;/summary>
                &lt;a class="sidebar-link" href="#">...&lt;/a>
                &lt;a class="sidebar-link" href="#">...&lt;/a>
            &lt;/details>
        &lt;/details>
    &lt;/div>
&lt;/div></code></pre>
            </div>
        </div>


        <!--  OPEN AND COLLAPSE  =================  -->
        <div id="sidebar-toggle" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Open and collapse</h6>
            </div>
        </div>

        <div class="row"><div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-js">//  Toggle sidebar
var wrapper = document.querySelector(".page-with-sidebar");
var toggler = document.querySelectorAll(".sidebar-toggle");

for (var i = 0; i &lt; toggler.length; i++) {
    toggler[i].addEventListener('click', function() {
        wrapper.classList.toggle("collapsed");
    });
};</code></pre>
            </div>

            <div class="portion one-third">
                <p>The sidebar opens and closes when you click the <code>.sidebar-toggle</code> div.</p>

                <p>The sidebar is 240px wide when open, and 48px when collapsed. When collapsed, you can still click on the icons to navigate to the corresponding div.</p>
            </div>
        </div>




        <div id="sidebar-logos" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Adding a logo</h6>
            </div>
        </div>

        <div class="row">
            <div class="portion two-thirds">
                <pre class="margin-top-fixed"><code class="language-markup">&lt;div class="ff-sidebar-container">
    &lt;div class="ff-sidebar">
        &lt;a id="sidebar-logo" class="sidebar-toggle">
            &lt;img id="logo-big" src="path/to/image" />
            &lt;img id="logo-small" src="path/to/image" />
        &lt;/a>
        ...
        //  Folders and links
    &lt;/div>
&lt;/div></code></pre>
            </div>

            <div class="portion one-third">
                <p>Add an <code>a</code> tag with an <code>sidebar-logo</code> id. Within this add two iamges, one with <code>#logo-big</code> and <code>logo-small</code>. The former is displayed when the sidebar is expanded, and the latter when it is collapsed. Ideal sizes for the bigger image is 240&times;80, and smaller, any square size will do.</p>
            </div>
        </div>


        <div id="sidebar-variables" class="row margin-bottom-fixed">
            <div class="portion whole">
                <div class="border-gray margin-bottom-tiny"></div>
                <h6>Variables</h6>
            </div>
        </div>
        
        <div class="row">
            <div class="portion half">
                <table class="ff-table shape-rounded bordered-all padding-tiny">
                    <thead>
                        <tr>
                            <th>Variable</th>
                            <th>Default value</th>
                        </tr>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td><code>$sideBarBG</code></td>
                            <td><code>$colorHue</code></td>
                        </tr>

                        <tr>
                            <td><code>$sideBarLogoBG</code></td>
                            <td><code>$colorSlate-10</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkBG</code></td>
                            <td><code>$colorSlate-10</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkBGOnHover</code></td>
                            <td><code>$colorSlate-20</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkIconStrokeColor</code></td>
                            <td><code>$colorShade</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkIconStrokeColorOnHover</code></td>
                            <td><code>$colorShade</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkIconFillColor</code></td>
                            <td><code>$colorShade</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkIconFillColorOnHover</code></td>
                            <td><code>$colorHue</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sidebarTextColor</code></td>
                            <td><code>$colorShade</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sidebarSmallTextColor</code></td>
                            <td><code>$colorSlate-60</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sidebarTextColorOnHover</code></td>
                            <td><code>$colorHue</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkChevronBG</code></td>
                            <td><code>$colorSlate-20</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkChevronColor</code></td>
                            <td><code>$colorSlate-40</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkChevronBGOnHover</code></td>
                            <td><code>$colorHue</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarLinkChevronColorOnHover</code></td>
                            <td><code>$colorWhite</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarCollapsedLabelBG</code></td>
                            <td><code>$colorHue</code></td>
                        </tr>
                        
                        <tr>
                            <td><code>$sideBarCollapsedLabelTextColor</code></td>
                            <td><code>$colorWhite</code></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name : 'components',

        components : {
        },

        mounted () {
            //  MODAL  ========================================
            var openModal = document.getElementsByClassName("js-open-modal");
            var closeModal = document.querySelectorAll(".js-close-modal");

            var closestByClass = function (el, claz) {
                while (!el.classList.contains(claz)) {
                    el = el.parentNode;
                    if (!el) {
                        return null;
                    }
                }
                return el;
            };

            for (var i = 0; i < openModal.length; i++) {
                var thisBtn = openModal[i];
                thisBtn.addEventListener("click", function () {
                    var modal = document.getElementById(this.dataset.modal);
                    modal.classList.add("active");
                }, false)
            }

            closeModal.forEach(function (elem) {
                elem.addEventListener('click', function (e) {
                    var el = closestByClass(e.target, "ff-modal-wrapper");
                    if (el) {
                        el.classList.remove("active");
                    }
                });
            });
        }
    }
</script>

<style scoped>
    
</style>